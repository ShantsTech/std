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
  <div class="std-toast-icon-container">
    <div :class="iconWrapClasses">
      <std-icon :name="iconName" class="std-toast-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {toastMixin} from './toast-mixin';
import {ToastType, ICON_MAP} from './types';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-toast-icon',

  mixins: [toastMixin],

  components: {
    'std-icon': Icon,
  },

  computed: {
    iconWrapClasses(): object {
      return {
        'std-toast-icon-wrap': true,
        [`std-toast-icon-wrap--${this.type}`]: true,
      };
    },
    iconName(): string {
      return ICON_MAP[this.type as ToastType];
    },
  },
});
</script>

<style src="./icon.scss" lang="scss" scoped></style>
