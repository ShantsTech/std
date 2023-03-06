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
  <div class="std-layout">
    <div class="std-layout-navigation">
      <std-side-panel
        @collapse="onCollapse"
        :toggle="collapse"
        :menu-items="sidepanelMenuItems"
        :brand-logo-src="brandLogoSrc"
        :brand-banner-src="brandBannerSrc"
        :home-url="homeUrl"
      >
      </std-side-panel>
      <std-top-bar
        @collapse="onCollapse"
        :toggle="collapse"
        :menu-items="topbarMenuItems"
        :user="user"
        :breadcrumb="breadcrumb"
      >
        <slot name="user-actions"></slot>
      </std-top-bar>
    </div>
    <div :class="containerClasses">
      <std-overlay
        @click="onCollapse"
        class="std-layout-overlay"
        :show="collapse"
      ></std-overlay>
      <div class="std-layout-context">
        <slot></slot>
      </div>
      <div class="std-layout-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Topbar from '@ohrm/std/core/components/Topbar/Topbar.vue';
import SidePanel from '@ohrm/std/core/components/SidePanel/SidePanel.vue';
import overlay from '@ohrm/std/core/components/Dialog/Overlay.vue';
import MenuItem from '../SidePanel/types';
import {TopMenuItem, User, Breadcrumb} from '../Topbar/types';

export default defineComponent({
  name: 'std-layout',

  props: {
    user: {
      type: Object as PropType<User>,
    },
    sidepanelMenuItems: {
      type: Object as PropType<MenuItem[]>,
      required: true,
    },
    topbarMenuItems: {
      type: Object as PropType<TopMenuItem[]>,
      required: true,
    },
    brandLogoSrc: {
      type: String,
      required: true,
    },
    brandBannerSrc: {
      type: String,
      required: true,
    },
    homeUrl: {
      type: String,
      default: '/',
    },
    breadcrumb: {
      type: Object as PropType<Breadcrumb>,
      required: true,
    },
  },

  components: {
    'std-side-panel': SidePanel,
    'std-top-bar': Topbar,
    'std-overlay': overlay,
  },

  data() {
    return {
      collapse: false,
    };
  },

  methods: {
    onCollapse() {
      this.collapse = !this.collapse;
    },
  },

  computed: {
    containerClasses(): object {
      return {
        'std-layout-container': true,
        '--collapse': this.collapse,
      };
    },
  },
});
</script>

<style src="./layout.scss" lang="scss" scoped></style>
<style src="./layout-global.scss" lang="scss"></style>
