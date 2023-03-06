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
  <header class="std-topbar">
    <div :class="headerClasses">
      <!-- Context Header -->
      <div class="std-topbar-header-title">
        <std-icon
          name="list"
          class="std-topbar-header-hamburger"
          @click="$emit('collapse')"
        />
        <span class="std-topbar-header-breadcrumb">
          <std-text tag="h6" class="std-topbar-header-breadcrumb-module">
            {{ breadcrumb.moduleName }}
          </std-text>
          <std-text
            v-if="breadcrumb.level"
            tag="h6"
            class="std-topbar-header-breadcrumb-level"
          >
            {{ breadcrumb.level }}
          </std-text>
        </span>
      </div>
      <!-- User Menu Area -->
      <div class="std-topbar-header-userarea">
        <ul>
          <std-user-dropdown :user="user">
            <slot></slot>
          </std-user-dropdown>
        </ul>
      </div>
    </div>
    <div :class="bodyClasses">
      <std-navigation :menu-items="menuItems"></std-navigation>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {TopMenuItem, User, Breadcrumb} from './types';
import Text from '@sthrm/std/core/components/Text/Text.vue';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';
import Navigation from '@sthrm/std/core/components/Topbar/Navigation.vue';
import UserDropdown from '@sthrm/std/core/components/Topbar/UserDropdown.vue';

export default defineComponent({
  name: 'std-top-bar',

  emits: ['collapse'],

  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Object as PropType<TopMenuItem[]>,
    },
    user: {
      type: Object as PropType<User>,
    },
    breadcrumb: {
      type: Object as PropType<Breadcrumb>,
    },
  },

  components: {
    'std-text': Text,
    'std-icon': Icon,
    'std-navigation': Navigation,
    'std-user-dropdown': UserDropdown,
  },

  computed: {
    headerClasses(): object {
      return {
        'std-topbar-header': true,
        toggled: this.toggle,
      };
    },
    bodyClasses(): object {
      return {
        'std-topbar-body': true,
        toggled: this.toggle,
      };
    },
  },
});
</script>

<style src="./topbar.scss" lang="scss" scoped></style>
