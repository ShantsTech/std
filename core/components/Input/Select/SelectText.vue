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
  <div :class="classes" :style="style" @mousedown.prevent="onToggle">
    <div
      class="std-select-text-input"
      :tabindex="tabIndex"
      @focus="onFocus"
      @blur="onBlur"
      v-bind="$attrs"
      ref="stdInput"
    >
      {{ value }}
    </div>
    <div class="std-select-text--after">
      <slot name="afterInput"></slot>
      <std-icon
        v-if="!disabled"
        :name="dropdownIcon"
        :class="dropdownIconClasses"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-select-text',
  inheritAttrs: false,

  components: {
    'std-icon': Icon,
  },

  props: {
    value: {
      type: String,
    },
    style: {
      type: Object,
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
  },

  data() {
    return {
      focused: false,
    };
  },

  computed: {
    classes(): object {
      return {
        'std-select-text': true,
        'std-select-text--active': !this.focused,
        'std-select-text--focus': this.focused,
        'std-select-text--error': this.hasError,
        'std-select-text--disabled': this.disabled,
        'std-select-text--readonly': this.readonly,
      };
    },
    dropdownIcon(): string {
      return this.focused ? 'caret-up-fill' : 'caret-down-fill';
    },
    dropdownIconClasses(): object {
      return {
        'std-select-text--arrow': true,
        '--disabled': this.disabled,
        '--readonly': this.readonly,
      };
    },
    tabIndex(): number {
      return this.disabled || this.readonly ? -1 : 0;
    },
  },

  methods: {
    onFocus($e: Event) {
      if (this.disabled || this.readonly) {
        $e.stopImmediatePropagation();
        return;
      }
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
    onToggle() {
      if (!this.focused) {
        this.$refs.stdInput.focus();
      } else {
        this.$refs.stdInput.blur();
      }
    },
  },
});
</script>

<style src="./select-input.scss" lang="scss" scoped></style>
