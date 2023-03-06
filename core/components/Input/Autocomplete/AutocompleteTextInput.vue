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
  <div :class="classes" :style="style">
    <div class="std-autocomplete-text-input--before">
      <slot name="beforeInput"></slot>
    </div>
    <input
      @focus="onFocus"
      @blur="onBlur"
      v-bind="$attrs"
      :disabled="disabled"
      :readonly="readonly"
    />
    <div class="std-autocomplete-text-input--after">
      <slot name="afterInput"></slot>
      <std-icon
        v-if="clear"
        class="std-autocomplete-text-input--clear"
        name="x"
        @click="onClear"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-autocomplete-text-input',
  inheritAttrs: false,

  emits: ['clear'],

  components: {
    'std-icon': Icon,
  },

  props: {
    style: {
      type: Object,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Boolean,
      default: true,
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
        'std-autocomplete-text-input': true,
        'std-autocomplete-text-input--active': !this.focused,
        'std-autocomplete-text-input--focus': this.focused,
        'std-autocomplete-text-input--error': this.hasError,
        'std-autocomplete-text-input--disabled': this.disabled,
        'std-autocomplete-text-input--readonly': this.readonly,
      };
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
    onClear() {
      this.$emit('clear');
    },
  },
});
</script>

<style src="./autocomplete-input.scss" lang="scss" scoped></style>
