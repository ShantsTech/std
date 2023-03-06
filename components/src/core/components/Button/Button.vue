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
  <button type="button" :class="classes" :style="style">
    <slot name="icon">
      <std-icon v-if="iconName" :name="iconName" class="std-button-icon" />
    </slot>
    {{ label }}
    <slot name="iconRight">
      <std-icon
        v-if="iconRightName"
        :name="iconRightName"
        class="std-button-icon"
      />
    </slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  ButtonSize,
  ButtonType,
  SIZES,
  SIZE_MEDIUM,
  TYPES,
  TYPE_MAIN,
} from './types';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-button',

  components: {
    'std-icon': Icon,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    displayType: {
      type: String,
      default: TYPE_MAIN,
      validator: function(value: ButtonType) {
        return TYPES.indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: SIZE_MEDIUM,
      validator: function(value: ButtonSize) {
        return SIZES.indexOf(value) !== -1;
      },
    },
    style: {
      type: Object,
    },
    iconName: {
      type: String,
    },
    iconRightName: {
      type: String,
    },
  },

  computed: {
    classes(): object {
      return {
        'std-button': true,
        [`std-button--${this.size}`]: true,
        [`std-button--${this.displayType}`]: true,
      };
    },
  },
});
</script>

<style src="./button.scss" lang="scss" scoped></style>
