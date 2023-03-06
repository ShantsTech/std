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
  <li
    v-if="menuItem.children.length === 0"
    @click="onClickMenu($event, menuItem)"
  >
    <a class="std-topbar-body-nav-tab-item" href="#">
      {{ menuItem.name }}
    </a>
  </li>
  <std-dropdown-menu v-else>
    <span class="std-topbar-body-nav-tab-item">
      {{ menuItem.name }}
      <std-icon name="chevron-down" :with-container="false" />
    </span>
    <template v-slot:content>
      <li
        v-for="(subMenuItem, index) in menuItem.children"
        :key="`nav-level2-${index}`"
        @click="onClickMenu($event, subMenuItem)"
      >
        <a href="#" role="menuitem" class="std-topbar-body-nav-tab-link">
          {{ subMenuItem.name }}
        </a>
      </li>
    </template>
  </std-dropdown-menu>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {TopMenuItem} from './types';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';
import DropdownMenu from '@sthrm/std/core/components/DropdownMenu/DropdownMenu.vue';

export default defineComponent({
  name: 'std-navigation-link',
  props: {
    menuItem: {
      type: Object as PropType<TopMenuItem>,
    },
  },
  components: {
    'std-icon': Icon,
    'std-dropdown-menu': DropdownMenu,
  },
  setup() {
    const onClickMenu = ($event: MouseEvent, item: TopMenuItem) => {
      if (!item.children || item.children.length === 0) {
        window.location.replace(item.url);
      } else {
        $event.preventDefault();
        $event.stopPropagation();
      }
    };

    return {
      onClickMenu,
    };
  },
});
</script>

<style src="./navigation-link.scss" lang="scss"></style>
