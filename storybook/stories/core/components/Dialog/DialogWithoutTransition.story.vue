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
  <p>
    <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <std-icon-button name="trash" @click="onClick" withContainer />

  <std-dialog
    v-if="show"
    @update:show="onClose"
    :withTransition="false"
    :style="{maxWidth: '800px'}"
  >
    <p>
      <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>
  </std-dialog>
</template>

<script>
import Dialog from '@sthrm/std/core/components/Dialog/Dialog';
import IconButton from '@sthrm/std/core/components/Button/Icon';

export default {
  components: {
    'std-dialog': Dialog,
    'std-icon-button': IconButton,
  },

  data() {
    return {
      show: true,
    };
  },

  methods: {
    onClick() {
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
  },
};
</script>
