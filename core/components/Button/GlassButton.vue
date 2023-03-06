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
  <button type="button" :class="btnClasses" :disabled="disabled">
    <span v-if="icon" :class="iconClasses"></span>
    <slot v-else name="icon"></slot>
    {{ label }}
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {GlassIconType, GLASS_ICON_TYPES} from './types';

export default defineComponent({
  name: 'std-glass-button',

  props: {
    label: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      validator: function(value: GlassIconType) {
        return GLASS_ICON_TYPES.indexOf(value) !== -1;
      },
    },
  },

  computed: {
    btnClasses(): object {
      return {
        'std-glass-button': true,
        [`std-glass-button--disabled`]: this.disabled,
      };
    },
    iconClasses(): object {
      return {
        'std-glass-button-icon': true,
        'std-glass-button-icon--disabled': this.disabled,
        [`std-glass-button-icon--${this.icon}`]: this.icon,
      };
    },
  },
});
</script>

<style src="./glass-button.scss" lang="scss" scoped></style>
