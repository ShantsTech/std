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
  <std-icon-button name="trash" @click="onClick" withContainer />

  <std-dialog v-if="show" @update:show="onCancel" :style="{maxWidth: '450px'}">
    <div class="orangehrm-modal-header">
      <std-text type="card-title">Are you sure?</std-text>
    </div>
    <div class="orangehrm-text-center-align">
      <std-text type="card-body">
        The selected item will be permanently deleted. Are you sure you want to
        continue?
      </std-text>
    </div>
    <div class="orangehrm-modal-footer">
      <std-button
        label="No, Cancel"
        displayType="text"
        class="orangehrm-button-margin"
        @click="onCancel"
      />
      <std-button
        label="Yes, Delete"
        iconName="trash"
        displayType="label-danger"
        class="orangehrm-button-margin"
        @click="onDelete"
      />
    </div>
  </std-dialog>
</template>

<script>
import Dialog from '@sthrm/std/core/components/Dialog/Dialog';
import IconButton from '@sthrm/std/core/components/Button/Icon';
import Button from '@sthrm/std/core/components/Button/Button';
import Text from '@sthrm/std/core/components/Text/Text';

export default {
  components: {
    'std-dialog': Dialog,
    'std-icon-button': IconButton,
    'std-text': Text,
    'std-button': Button,
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
    onCancel() {
      this.show = false;
    },
    onDelete() {
      this.show = false;
    },
  },
};
</script>

<style>
.orangehrm-modal-header {
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: center;
}
.orangehrm-modal-footer {
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
}
.orangehrm-button-margin {
  margin: 0.25rem;
}
.orangehrm-text-center-align {
  text-align: center;
}
</style>
