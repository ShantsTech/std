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
  <div
    :class="classes"
    :tabindex="tabIndex"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
    @keydown.esc.prevent="onClose"
    @keydown.enter.prevent="onEnter"
    v-click-outside="onClose"
  >
    <div class="std-color-input-preview" :style="previewStyles"></div>
    <transition name="transition-fade-down">
      <std-color-picker
        v-if="open"
        :modelValue="modelValue"
        :class="dropdownClasses"
        @click.stop
        @update:modelValue="$emit('update:modelValue', $event)"
      ></std-color-picker>
    </transition>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs} from 'vue';
import {Position, COLOR_DROPDOWN_POSITIONS, LEFT, RIGHT} from '../types';
import clickOutsideDirective from '../../../../directives/click-outside';
import ColorPicker from '@sthrm/std/core/components/Input/Color/ColorPicker.vue';

export default defineComponent({
  name: 'std-color-input',
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    dropdownPosition: {
      type: String,
      default: RIGHT,
      validator: (value: Position) =>
        COLOR_DROPDOWN_POSITIONS.indexOf(value) !== -1,
    },
  },

  emits: ['update:modelValue'],

  directives: {
    'click-outside': clickOutsideDirective,
  },

  components: {
    'std-color-picker': ColorPicker,
  },

  setup(props) {
    const state = reactive({
      open: false,
      focused: false,
    });
    const previewStyles = computed(() => ({
      backgroundColor: props.modelValue ?? '#000',
      opacity: props.disabled || props.readonly ? 0.5 : 1,
      cursor: props.disabled || props.readonly ? 'unset' : 'pointer',
    }));

    const classes = computed(() => ({
      'std-color-input': true,
      'std-color-input--active': !state.focused,
      'std-color-input--focus': state.focused || state.open,
      'std-color-input--error': props.hasError,
      'std-color-input--disabled': props.disabled,
      'std-color-input--readonly': props.readonly,
    }));

    const dropdownClasses = computed(() => ({
      '--positon-right': props.dropdownPosition === RIGHT,
      '--positon-left': props.dropdownPosition === LEFT,
    }));

    const tabIndex = computed(() => {
      return props.disabled || props.readonly ? -1 : 0;
    });

    const onFocus = ($e: Event) => {
      if (props.disabled || props.readonly) {
        $e.stopImmediatePropagation();
        return;
      }
      state.focused = true;
    };

    const onBlur = () => {
      state.focused = false;
    };

    const onClose = () => {
      state.open = false;
    };

    const togglePicker = ($e: Event) => {
      if (props.disabled || props.readonly) {
        $e.stopImmediatePropagation();
        return;
      }
      state.open = !state.open;
    };

    return {
      tabIndex,
      classes,
      previewStyles,
      dropdownClasses,
      onBlur,
      onFocus,
      onClose,
      onClick: togglePicker,
      onEnter: togglePicker,
      ...toRefs(state),
    };
  },
});
</script>

<style src="./color-input.scss" lang="scss" scoped></style>
