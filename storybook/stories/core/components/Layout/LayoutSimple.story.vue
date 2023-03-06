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
  <std-layout
    :user="user"
    context-title="Personal Information Manager"
    :sidepanel-menu-items="sidepanelMenuItems"
    :topbar-menu-items="topbarMenuItems"
    :brand-logo-src="brandLogoSrc"
    :brand-banner-src="brandBannerSrc"
    :breadcrumb="breadcrumb"
  >
    <p class="context-default">
      slot for context
    </p>
    <template v-slot:user-actions>
      <li role="none">
        <a href="#" role="menuitem" class="std-userdropdown-link">
          Logout
        </a>
      </li>
    </template>
    <template v-slot:footer>
      <p class="context-footer">
        slot for footer
      </p>
      <br />
    </template>
  </std-layout>
</template>

<script>
import {topMenuItems, sidePanelItems, breadcrumb} from './mockdata';
import Layout from '@sthrm/std/core/components/Layout/Layout';

export default {
  name: 'Layout',
  components: {
    'std-layout': Layout,
  },
  data() {
    return {
      brandLogoSrc: require('@sthrm/std/assets/images/logo.png'),
      brandBannerSrc: require('@sthrm/std/assets/images/orangehrm-logo.png'),
      user: {
        firstName: 'Jeff',
        lastName: 'Winger',
        profImgSrc: '',
      },
      sidepanelMenuItems: sidePanelItems,
      topbarMenuItems: topMenuItems,
      breadcrumb: breadcrumb,
    };
  },
};
</script>

<style scoped>
.context-default {
  background-color: rgba(255, 0, 0, 0.37);
  text-align: center;
  padding: 25% 0;
}
.context-footer {
  background-color: rgb(160 210 249);
  text-align: center;
  margin: 0 3rem;
}
</style>
