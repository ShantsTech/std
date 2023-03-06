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
  <std-dropdown-menu @dropdown:closed="onClose" class="std-topbar-body-nav-tab">
    <span class="std-topbar-body-nav-tab-item">
      {{ t('general.more', 'More') }}
      <std-icon name="three-dots-vertical" :with-container="false" />
    </span>
    <template v-slot:content>
      <div v-for="(menuItem, index) in menuItems" :key="`nav-level2-${index}`">
        <li @click="onClickMenu($event, menuItem, index)">
          <a href="#" class="std-topbar-body-nav-tab-link --more">
            {{ menuItem.name }}
            <std-icon
              v-show="menuItem.children.length > 0"
              :name="index === expandedIndex ? 'chevron-up' : 'chevron-down'"
              :with-container="false"
            />
          </a>
        </li>
        <ul
          v-if="expandedIndex === index"
          class="std-topbar-body-nav-tab-accordian"
        >
          <li
            v-for="(subMenuItem, index) in menuItem.children"
            :key="`nav-level3-${index}`"
            @click="onClickMenu($event, subMenuItem, -1)"
          >
            <a href="#">
              {{ subMenuItem.name }}
            </a>
          </li>
        </ul>
      </div>
    </template>
  </std-dropdown-menu>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import {TopMenuItem} from './types';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';
import DropdownMenu from '@ohrm/std/core/components/DropdownMenu/DropdownMenu.vue';
import usei18n from '../../../composables/usei18n';

export default defineComponent({
  name: 'std-navigation-more',
  props: {
    menuItems: {
      type: Object as PropType<TopMenuItem[]>,
    },
  },
  components: {
    'std-icon': Icon,
    'std-dropdown-menu': DropdownMenu,
  },
  setup() {
    const expandedIndex = ref(-1);
    const onClickMenu = (
      $event: MouseEvent,
      item: TopMenuItem,
      index: number,
    ) => {
      if (!item.children || item.children.length === 0) {
        window.location.replace(item.url);
      } else {
        $event.preventDefault();
        $event.stopPropagation();
        expandedIndex.value = expandedIndex.value === index ? -1 : index;
      }
    };

    const onClose = () => {
      expandedIndex.value = -1;
    };

    return {
      onClose,
      onClickMenu,
      expandedIndex,
      ...usei18n(),
    };
  },
});
</script>

<style src="./navigation-link.scss" lang="scss"></style>
