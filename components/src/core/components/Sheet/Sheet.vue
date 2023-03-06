<!--
/*
 * This file is part of Shants Tech LLC
 *
 * Copyright (C) 2020 Shants Tech LLC
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
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {SheetType, TYPES, TYPE_WHITE} from './types';

export default defineComponent({
  name: 'std-sheet',

  props: {
    type: {
      type: String,
      default: TYPE_WHITE,
      validator: function(value: SheetType) {
        return TYPES.indexOf(value) !== -1;
      },
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    gutters: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes(): object {
      return {
        'std-sheet': true,
        'std-sheet--rounded': this.rounded,
        'std-sheet--gutters': this.gutters,
        [`std-sheet--${this.type}`]: true,
      };
    },
  },
});
</script>

<style src="./sheet.scss" lang="scss" scoped></style>
