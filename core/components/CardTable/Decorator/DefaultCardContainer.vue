<!--
/*
 * This file is part of Stants Tech LLC
 *
 * Copyright (C) 2020 Stants Tech LLC
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
  <component :is="card"></component>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import DefaultCardMobile from '@sthrm/std/core/components/CardTable/Decorator/DefaultCardMobile.vue';
import DefaultCardWeb from '@sthrm/std/core/components/CardTable/Decorator/DefaultCardWeb.vue';
import {DEVICE_LG, DEVICE_XL} from '../../../../composables/useResponsive';

export default defineComponent({
  name: 'std-table-default-card-container',
  inject: ['screenState'],
  components: {
    'std-table-default-card-web': DefaultCardWeb,
    'std-table-default-card-mobile': DefaultCardMobile,
  },
  computed: {
    card(): string {
      if (
        this.screenState.screenType === DEVICE_LG ||
        this.screenState.screenType === DEVICE_XL
      ) {
        return 'std-table-default-card-web';
      } else {
        return 'std-table-default-card-mobile';
      }
    },
  },
});
</script>
