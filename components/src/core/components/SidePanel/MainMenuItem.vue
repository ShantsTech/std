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
  <li class="std-main-menu-item-wrapper">
    <a :class="menuClasses" :href="url">
      <std-icon
        :name="icon"
        type="svg"
        width="22"
        height="22"
        class="std-main-menu-item--icon"
      ></std-icon>
      <std-text tag="span" class="std-main-menu-item--name">
        {{ name }}
      </std-text>
    </a>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Text from '@ohrm/std/core/components/Text/Text.vue';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-main-menu-item',

  props: {
    url: {
      type: String,
      default: '#',
    },
    active: {
      type: Boolean,
      default: false,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'home',
    },
  },

  components: {
    'std-text': Text,
    'std-icon': Icon,
  },

  computed: {
    menuClasses(): object {
      return {
        'std-main-menu-item': true,
        active: this.active,
        toggle: this.collapsed,
      };
    },
  },
});
</script>

<style src="./main-menu.scss" lang="scss" scoped></style>
