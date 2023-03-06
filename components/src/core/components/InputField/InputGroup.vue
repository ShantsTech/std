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
  <div :class="rootClasses">
    <slot name="label">
      <div class="std-input-group__label-wrapper">
        <std-icon
          v-if="labelIcon"
          :name="labelIcon"
          class="std-input-group__label-icon"
        />
        <std-label v-if="label" :label="label" :class="labelClasses" />
      </div>
    </slot>
    <div :class="wrapperClasses">
      <slot></slot>
    </div>
    <slot name="message">
      <std-text v-if="message" :class="messageClasses" tag="span">
        {{ message }}
      </std-text>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Label from '@ohrm/std/core/components/Label/Label.vue';
import Text from '@ohrm/std/core/components/Text/Text.vue';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-input-group',

  components: {
    'std-label': Label,
    'std-text': Text,
    'std-icon': Icon,
  },

  props: {
    label: {
      type: String,
    },
    labelIcon: {
      type: String,
    },
    message: {
      type: String,
    },
    classes: {
      type: Object,
      default: () => {
        return {
          label: {},
          message: {},
          wrapper: {},
        };
      },
    },
  },

  computed: {
    rootClasses(): object {
      return {
        'std-input-group': true,
      };
    },
    labelClasses(): object {
      return {
        ...this.classes.label,
      };
    },
    messageClasses(): object {
      return {
        ...this.classes.message,
        'std-input-group__message': true,
      };
    },
    wrapperClasses(): object {
      const {wrapper} = this.classes;
      return wrapper ? wrapper : {};
    },
  },
});
</script>

<style src="./input-group.scss" lang="scss" scoped></style>
