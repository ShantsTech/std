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
  <!-- Notification dropdown -->
  <std-dropdown-menu class="std-notifdropdown">
    <span class="std-notifdropdown-tab">
      <std-icon
        class="std-notifdropdown-icon"
        name="bell-fill"
        :with-container="false"
      />
      <span class="std-notifdropdown-count">30</span>
    </span>
    <template v-slot:content>
      <!-- Notification items -->
      <span class="std-notifdropdown-head">
        Alerts Center
      </span>
      <hr class="std-notifdropdown-divider" />
      <slot></slot>
      <hr class="std-notifdropdown-divider" />
      <li role="none">
        <a href="#" role="menuitem" class="std-notifdropdown-link --center">
          Show All Notifications
        </a>
      </li>
    </template>
  </std-dropdown-menu>
  <!-- Notification dropdown -->
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';
import DropdownMenu from '@sthrm/std/core/components/DropdownMenu/DropdownMenu.vue';

export default defineComponent({
  name: 'std-notification-dropdown',
  components: {
    'std-icon': Icon,
    'std-dropdown-menu': DropdownMenu,
  },
});
</script>

<style src="./notification-dropdown.scss" lang="scss" scoped></style>
<style lang="scss">
.std-notifdropdown {
  & .std-dropdown-menu {
    right: 0;
    left: unset;
    top: 50px;
    min-width: 10rem;
  }
}
</style>
