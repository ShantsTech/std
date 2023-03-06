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
  <div v-if="show" :class="classes" aria-live="assertive" @click="onClickToast">
    <div class="std-toast-start">
      <slot name="icon">
        <std-toast-icon :type="type" />
      </slot>
      <slot>
        <div :class="contentClasses">
          <std-text type="toast-title" class="std-toast-content-text">
            {{ title }}
          </std-text>
          <std-text type="toast-message" class="std-toast-content-text">
            {{ message }}
          </std-text>
        </div>
      </slot>
    </div>
    <slot name="close">
      <std-toast-close-button :type="type" @click="onClickClose" />
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {toastMixin} from './toast-mixin';
import Text from '@sthrm/std/core/components/Text/Text.vue';
import ToastCloseButton from '@sthrm/std/core/components/Toast/CloseButton.vue';
import ToastIcon from '@sthrm/std/core/components/Toast/Icon.vue';

export default defineComponent({
  name: 'std-toast',

  mixins: [toastMixin],

  components: {
    'std-text': Text,
    'std-toast-close-button': ToastCloseButton,
    'std-toast-icon': ToastIcon,
  },

  emits: ['update:show'],

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes(): object {
      return {
        'std-toast': true,
        [`std-toast--${this.type}`]: true,
        ['std-toast--persistent']: this.persistent,
      };
    },
    contentClasses(): object {
      return {
        'std-toast-content': true,
        [`std-toast-content--${this.type}`]: true,
      };
    },
  },

  methods: {
    onClickToast() {
      if (!this.persistent) {
        this.$emit('update:show', false);
      }
    },
    onClickClose(e: Event) {
      e.stopPropagation();
      this.$emit('update:show', false);
    },
  },
});
</script>

<style src="./toast.scss" lang="scss" scoped></style>
