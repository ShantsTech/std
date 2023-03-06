<!--
/*
 * This file is part of Stants Tech LLC
 *
 * Copyright (C) 2020 Stants Tech LLC
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see  http://www.gnu.org/licenses
 */
-->

<template>
  <div :class="classes">
    <textarea
      rows="1"
      ref="textArea"
      class="std-buzz-post-input"
      :disabled="disabled"
      :value="modelValue"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      v-bind="$attrs"
    />
    <div class="std-buzz-post-slot">
      <slot></slot>
    </div>
  </div>
  <std-text v-if="hasError" tag="span" class="std-input-field-error-message">
    {{ message }}
  </std-text>
</template>

<script lang="ts">
import {
  ref,
  toRef,
  nextTick,
  PropType,
  computed,
  onMounted,
  defineComponent,
} from 'vue';
import {Rule} from '../../../composables/types';
import useField from '../../../composables/useField';
import Text from '@sthrm/std/core/components/Text/Text.vue';

interface TextAreaInputEvent extends InputEvent {
  target: HTMLTextAreaElement;
}

export default defineComponent({
  name: 'std-buzz-post-input',
  inheritAttrs: false,
  components: {
    'std-text': Text,
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array as PropType<Rule[]>,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const focused = ref(false);
    const textArea = ref<HTMLTextAreaElement>();
    const disabled = toRef(props, 'disabled');
    const modelValue = toRef(props, 'modelValue');

    const initialValue = modelValue.value;

    const onReset = async () => {
      context.emit('update:modelValue', initialValue);
      await nextTick();
    };

    const {hasError, message} = useField({
      fieldLabel: '',
      rules: props.rules,
      modelValue,
      onReset,
      disabled,
    });

    const classes = computed(() => ({
      'std-buzz-post': true,
      'std-buzz-post--focus': focused.value,
      'std-buzz-post--error': hasError.value,
      'std-buzz-post--active': !focused.value,
      'std-buzz-post--disabled': disabled.value,
      'std-buzz-post--composing': modelValue.value,
    }));

    const onFocus = () => {
      focused.value = true;
    };

    const onBlur = () => {
      focused.value = false;
    };

    const calculateTextAreaHeight = () => {
      if (!textArea.value) return;

      // Refactored styles to directly apply since
      // scrollHeight is not calculated properly with
      // explicit heights. first set element height to auto
      // then calculate scrollheight and set element height
      textArea.value.removeAttribute('style');
      textArea.value.style.height = 'auto';

      if (!textArea.value.value) {
        textArea.value.style.height = '30px';
        textArea.value.style.overflow = 'hidden';
        textArea.value.style.whiteSpace = 'nowrap';
        textArea.value.style.textOverflow = 'ellipsis';
      } else if (textArea.value.scrollHeight < 400) {
        textArea.value.style.height = textArea.value.scrollHeight + 'px';
        textArea.value.style.overflowY = 'hidden';
      } else {
        textArea.value.style.height = '400px';
        textArea.value.style.overflowY = 'scroll';
      }
    };

    const onInput = ($e: TextAreaInputEvent) => {
      calculateTextAreaHeight();
      context.emit('update:modelValue', $e.target.value);
    };

    onMounted(async () => {
      await nextTick();
      calculateTextAreaHeight();
    });

    return {
      onBlur,
      classes,
      message,
      onFocus,
      onInput,
      hasError,
      textArea,
    };
  },
});
</script>

<style src="./buzz-post-input.scss" lang="scss" scoped></style>
