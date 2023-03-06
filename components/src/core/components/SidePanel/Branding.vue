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
  <a class="std-brand" :class="classes" :href="url">
    <div v-show="toggle" class="std-brand-logo">
      <img alt="client brand logo" :src="logoSrc" />
    </div>
    <div class="std-brand-banner" :class="classes">
      <img alt="client brand banner" :src="bannerSrc" />
    </div>
  </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'std-branding',

  props: {
    url: {
      type: String,
      default: '/',
    },
    logoSrc: {
      type: String,
      default: '',
    },
    bannerSrc: {
      type: String,
      default: '',
    },
    toggle: {
      type: Boolean,
      default: false,
    },
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

<style src="./branding.scss" lang="scss" scoped></style>
