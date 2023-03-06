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
  <div role="listbox" class="std-select-dropdown">
    <std-select-option v-if="empty">
      {{ placeholderText }}
    </std-select-option>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SelectOption from '@sthrm/std/core/components/Input/Select/SelectOption.vue';
import usei18n from '../../../../composables/usei18n';

export default defineComponent({
  name: 'std-select-dropdown',

  components: {
    'std-select-option': SelectOption,
  },

  props: {
    empty: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: null,
    },
  },

  setup() {
    return {
      ...usei18n(),
    };
  },

  computed: {
    placeholderText(): string {
      return (
        this.emptyText ?? this.t('general.no_records_found', 'No records found')
      );
    },
  },
});
</script>

<style src="./select-input.scss" lang="scss" scoped></style>
