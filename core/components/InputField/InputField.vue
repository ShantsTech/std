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
  <std-input-group
    :label="label"
    :labelIcon="labelIcon"
    :message="message"
    class="std-input-field-bottom-space"
    :classes="classes"
  >
    <component
      :is="component"
      v-bind="$attrs"
      :disabled="disabled"
      :hasError="hasError"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </component>
  </std-input-group>
</template>

<script lang="ts">
import {toRef, PropType, nextTick, defineComponent} from 'vue';
import InputGroup from '@sthrm/std/core/components/InputField/InputGroup.vue';
import Input from '@sthrm/std/core/components/Input/Input.vue';
import FileInput from '@sthrm/std/core/components/Input/FileInput.vue';
import Textarea from '@sthrm/std/core/components/Textarea/Textarea.vue';
import DropdownInput from '@sthrm/std/core/components/Input/DropdownInput.vue';
import PasswordInput from '@sthrm/std/core/components/Input/PasswordInput.vue';
import CheckboxInput from '@sthrm/std/core/components/Input/CheckboxInput.vue';
import SwitchInput from '@sthrm/std/core/components/Input/SwitchInput.vue';
import RadioInput from '@sthrm/std/core/components/Input/RadioInput.vue';
import DateInput from '@sthrm/std/core/components/Input/DateInput.vue';
import AutocompleteInput from '@sthrm/std/core/components/Input/Autocomplete/AutocompleteInput.vue';
import SelectInput from '@sthrm/std/core/components/Input/Select/SelectInput.vue';
import MultiSelectInput from '@sthrm/std/core/components/Input/MultiSelect/MultiSelectInput.vue';
import TimeInput from '@sthrm/std/core/components/Input/Time/TimeInput.vue';
import ColorInput from '@sthrm/std/core/components/Input/Color/ColorInput.vue';
import {Types, Components, TYPES, TYPE_INPUT, TYPE_MAP} from './types';
import useField from '../../../composables/useField';

export default defineComponent({
  name: 'std-input-field',
  inheritAttrs: false,

  components: {
    'std-input-group': InputGroup,
    'std-input': Input,
    'std-file-input': FileInput,
    'std-textarea': Textarea,
    'std-dropdown-input': DropdownInput,
    'std-password-input': PasswordInput,
    'std-checkbox-input': CheckboxInput,
    'std-switch-input': SwitchInput,
    'std-radio-input': RadioInput,
    'std-date-input': DateInput,
    'std-autocomplete-input': AutocompleteInput,
    'std-select-input': SelectInput,
    'std-multiselect-input': MultiSelectInput,
    'std-time-input': TimeInput,
    'std-color-input': ColorInput,
  },

  emits: ['update:modelValue'],

  props: {
    modelValue: {},
    label: {
      type: String,
    },
    labelIcon: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: TYPE_INPUT,
      validator: (value: Types) => {
        return TYPES.indexOf(value) !== -1;
      },
    },
    errors: {
      type: String,
      default: TYPE_INPUT,
      validator: (value: Types) => {
        return TYPES.indexOf(value) !== -1;
      },
    },
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Array as PropType<any>,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    const disabled = toRef(props, 'disabled');
    const modelValue = toRef(props, 'modelValue');
    const initialValue = modelValue.value;

    const onReset = async () => {
      context.emit('update:modelValue', initialValue);
      await nextTick();
    };

    const {hasError, message} = useField({
      fieldLabel: props.label ? props.label : '',
      rules: props.rules,
      modelValue,
      onReset,
      disabled,
    });

    return {
      message,
      hasError,
    };
  },

  computed: {
    classes(): object {
      return {
        label: {
          'std-input-field-required': this.required,
        },
        message: {
          'std-input-field-error-message': this.hasError,
        },
      };
    },
    component(): Components {
      return TYPE_MAP[this.type as Types];
    },
  },
});
</script>

<style src="./input-field.scss" lang="scss"></style>
