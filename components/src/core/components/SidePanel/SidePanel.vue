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
  <aside class="std-sidepanel" :class="classes">
    <nav class="std-navbar-nav" role="navigation" aria-label="Sidepanel">
      <div class="std-sidepanel-header">
        <std-branding
          :toggle="toggle"
          :logo-src="brandLogoSrc"
          :banner-src="brandBannerSrc"
          :url="homeUrl"
        />
        <std-icon
          name="x"
          class="std-sidepanel-header-close"
          @click="$emit('collapse')"
        />
      </div>
      <div class="std-sidepanel-body">
        <std-main-menu
          @collapse="$emit('collapse')"
          :toggle="toggle"
          :menu-items="menuItems"
        />
      </div>
    </nav>
  </aside>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Branding from './Branding.vue';
import MainMenu from './MainMenu.vue';
import MenuItem from './types';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-side-panel',

  emits: ['collapse'],

  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    brandLogoSrc: {
      type: String,
      default: '',
    },
    brandBannerSrc: {
      type: String,
      default: '',
    },
    homeUrl: {
      type: String,
      default: '/',
    },
    menuItems: {
      type: Object as PropType<MenuItem[]>,
      default: [],
    },
  },

  components: {
    'std-branding': Branding,
    'std-main-menu': MainMenu,
    'std-icon': Icon,
  },

  computed: {
    classes(): object {
      return {
        toggled: this.toggle,
      };
    },
  },
});
</script>

<style src="./sidepanel.scss" lang="scss" scoped></style>
