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
-->

<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>

    <transition name="std-toast-fade">
      <std-toast v-model:show="show" title="Success" />
    </transition>
  </div>
</template>

<script>
import Toast from '@sthrm/std/core/components/Toast/Toast.vue';

export default {
  components: {
    'std-toast': Toast,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.std-toast-fade {
  // https://v3.vuejs.org/guide/transitions-enterleave.html#transitioning-single-elements-components
  &-enter-active {
    transition: opacity 0.5s ease-out;
  }
  &-enter-from {
    opacity: 0;
  }

  &-leave-active {
    transition: opacity 1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-leave-to {
    opacity: 0 !important;
  }
}
</style>
