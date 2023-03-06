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
  <!-- Search -->
  <div class="std-main-menu --fixed">
    <div class="std-main-menu-search">
      <std-icon
        name="search"
        type="svg"
        width="22"
        height="22"
        class="std-menu-icon"
      ></std-icon>
      <std-input
        v-model="searchTerm"
        :placeholder="t('general.search', 'Search')"
        :class="{toggled: toggle}"
      />
      <std-icon-button
        @click="onClickCollapse"
        :name="toggle ? 'chevron-right' : 'chevron-left'"
        class="std-main-menu-button"
        role="none"
      />
    </div>
    <hr class="std-main-menu-divider" />
  </div>
  <!-- Search -->

  <!-- Nav Items  -->
  <ul class="std-main-menu">
    <std-main-menu-item
      v-for="(menuItem, index) in filteredMenuItems"
      :key="`std-main-menu-${index}`"
      :url="menuItem.url"
      :active="menuItem.active"
      :collapsed="toggle"
      :name="menuItem.name"
      :icon="menuItem.icon"
    ></std-main-menu-item>
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import MenuItem from './types';
import MainMenuItem from './MainMenuItem.vue';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';
import Input from '@ohrm/std/core/components/Input/Input.vue';
import IconButton from '@ohrm/std/core/components/Button/Icon.vue';
import usei18n from '../../../composables/usei18n';

export default defineComponent({
  name: 'std-main-menu',

  emits: ['collapse'],

  setup() {
    return {
      ...usei18n(),
    };
  },

  data() {
    return {
      searchTerm: '',
    };
  },

  props: {
    url: {
      type: String,
      default: '/',
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Object as PropType<MenuItem[]>,
    },
  },

  components: {
    'std-icon': Icon,
    'std-input': Input,
    'std-icon-button': IconButton,
    'std-main-menu-item': MainMenuItem,
  },

  methods: {
    onClickCollapse() {
      this.$emit('collapse');
      // trigger resize event for body resize event listners
      // timeout delay is added for sidebar animation 0.3s
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 350);
    },
  },

  computed: {
    classes(): object {
      return {
        toggled: this.toggle,
      };
    },
    filteredMenuItems(): MenuItem[] {
      const filter = new RegExp(this.searchTerm, 'i');
      return this.menuItems.filter(item => item.name.match(filter));
    },
  },
});
</script>

<style src="./main-menu.scss" lang="scss" scoped></style>
