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
  <div role="listbox" class="std-autocomplete-dropdown">
    <std-autocomplete-option v-if="loading">
      {{ t('general.searching', 'Searching...') }}
    </std-autocomplete-option>
    <std-autocomplete-option v-else-if="empty">
      {{ t('general.no_records_found', 'No records found') }}
    </std-autocomplete-option>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AutocompleteOption from '@sthrm/std/core/components/Input/Autocomplete/AutocompleteOption.vue';
import usei18n from '../../../../composables/usei18n';

export default defineComponent({
  name: 'std-autocomplete-dropdown',

  components: {
    'std-autocomplete-option': AutocompleteOption,
  },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {
      ...usei18n(),
    };
  },
});
</script>

<style src="./autocomplete-input.scss" lang="scss" scoped></style>
