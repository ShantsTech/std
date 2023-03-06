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
  <transition :name="computedTransition" appear>
    <std-overlay role="dialog" centered :show="true" @click="onClickOverlay">
      <!--
    :aria-labelledby="'dialogTitle_' + id"
    :aria-describedby="'dialogDesc_' + id"
    -->
      <component :is="dialogContainer">
        <std-sheet
          :class="classes"
          :gutters="false"
          v-bind="$attrs"
          role="document"
          @click="onClickSheet"
        >
          <std-dialog-close-button
            v-if="withClose"
            class="std-dialog-close-button-position"
            @click="onClose"
          />
          <slot></slot>
        </std-sheet>
      </component>
    </std-overlay>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Overlay from '@sthrm/std/core/components/Dialog/Overlay.vue';
import CloseButton from '@sthrm/std/core/components/Dialog/CloseButton.vue';
import Sheet from '@sthrm/std/core/components/Sheet/Sheet.vue';

// Containers
import DefaultContainer from '@sthrm/std/core/components/Dialog/Container/Default.vue';

export default defineComponent({
  name: 'std-dialog',
  inheritAttrs: false,

  components: {
    'std-overlay': Overlay,
    'std-dialog-close-button': CloseButton,
    'std-sheet': Sheet,

    // Containers
    'std-dialog-container-default': DefaultContainer,
  },

  emits: ['update:show'],

  props: {
    shadow: {
      type: Boolean,
      default: true,
    },
    withClose: {
      type: Boolean,
      default: true,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    dialogContainer: {
      type: String,
      default: 'std-dialog-container-default',
    },
    withTransition: {
      type: Boolean,
      default: true,
    },
    gutters: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes(): object {
      return {
        'std-dialog-sheet': true,
        'std-dialog-sheet--shadow': this.shadow,
        'std-dialog-sheet--gutters': this.gutters,
      };
    },
    computedTransition(): string {
      return this.withTransition ? 'fade' : '';
    },
  },

  methods: {
    onClose() {
      this.$emit('update:show', false);
    },
    onClickOverlay() {
      if (!this.persistent) {
        this.$emit('update:show', false);
      }
    },
    onClickSheet(e: Event) {
      e.stopPropagation();
    },
  },
});
</script>

<style src="./dialog.scss" lang="scss" scoped></style>
