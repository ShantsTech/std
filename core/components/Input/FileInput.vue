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
  <input
    type="file"
    ref="input"
    v-bind="$attrs"
    :class="fileInputClasses"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
  />
  <div :class="classes" :style="style" @click="onClick">
    <slot></slot>
    <template v-if="!$slots.default">
      <div
        v-if="buttonLabel"
        :class="{'std-file-button': true, '--disabled': disabled}"
      >
        {{ buttonLabel }}
      </div>
      <div class="std-file-input-div">
        {{ inputValue ? inputValue : placeholderText }}
      </div>
      <std-icon
        v-if="buttonIcon"
        :class="{'std-file-input-icon': true, '--disabled': disabled}"
        :name="buttonIcon"
      />
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {OutputFile} from './types';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';
import usei18n from '../../../composables/usei18n';

export interface State {
  focused: boolean;
  inputValue: string;
}

export default defineComponent({
  name: 'std-file-input',
  inheritAttrs: false,

  props: {
    modelValue: {},
    style: {
      type: Object,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    buttonLabel: {
      type: String,
    },
    buttonIcon: {
      type: String,
      default: 'upload',
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    'std-icon': Icon,
  },

  setup() {
    return {
      ...usei18n(),
    };
  },

  data(): State {
    return {
      focused: false,
      inputValue: '',
    };
  },

  emits: ['click', 'focus', 'blur', 'input', 'update:modelValue'],

  watch: {
    modelValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue !== undefined && newValue !== null) {
          this.inputValue = newValue.name;
        } else {
          this.inputValue = '';
        }
      }
    },
  },

  computed: {
    classes(): object {
      return {
        'std-file-div': true,
        'std-file-div--active': !this.focused,
        'std-file-div--focus': this.focused,
        'std-file-div--error': this.hasError,
        'std-file-div--disabled': this.disabled,
        'std-file-div--readonly': this.readonly,
      };
    },
    fileInputClasses(): object {
      return {
        'std-file-input': true,
      };
    },
    placeholderText(): string {
      return (
        this.placeholder ?? this.t('general.no_file_chosen', 'No file chosen')
      );
    },
  },

  methods: {
    onClick(e: Event) {
      if (this.disabled || this.readonly) return;
      const inputRef = this.$refs.input as HTMLInputElement;
      inputRef.focus();
      inputRef.click();
      this.$emit('click', e);
    },
    onFocus(e: Event) {
      this.focused = true;
      this.$emit('focus', e);
    },
    onBlur(e: Event) {
      this.focused = false;
      this.$emit('blur', e);
    },
    onInput(e: Event) {
      e.preventDefault();
      const files = [...((e.target as HTMLInputElement).files || [])];
      const inputValue = files.map((file: File) => file.name).join(', ');

      if (files.length > 0) {
        // Not supporting with multiple (i.e. <input type="file" multiple>)
        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (
            typeof event.target?.result === 'string' ||
            event.target?.result instanceof String
          ) {
            const base64 = event.target?.result.split(',').pop();
            if (base64) {
              const outputFile: OutputFile = {
                name: files[0].name,
                type: files[0].type,
                size: files[0].size,
                base64,
              };
              this.inputValue = inputValue;
              this.$emit('update:modelValue', outputFile);
            }
          }
        };
        reader.readAsDataURL(files[0]);
      } else {
        this.inputValue = inputValue;
        this.$emit('update:modelValue', null);
      }

      this.$emit('input', e);
    },
  },
});
</script>

<style src="./file-input.scss" lang="scss" scoped></style>
