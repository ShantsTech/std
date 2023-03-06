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
  <div class="std-autocomplete-chips-area">
    <std-chip
      v-for="(option, index) in selected"
      :key="`${index}-selected-${option.id}`"
      :label="option.label"
      class="std-autocomplete-chips-selected"
    >
      <std-icon
        name="x"
        @click="onClick(option)"
        :class="{
          '--clear': true,
          '--disabled': disabled,
          '--readonly': readonly,
        }"
      />
    </std-chip>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Option} from '../types';
import Chip from '@sthrm/std/core/components/Chip/Chip.vue';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';

export default defineComponent({
  name: 'std-autocomplete-chips',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    'std-chip': Chip,
    'std-icon': Icon,
  },

  emits: ['chipRemoved'],

  methods: {
    onClick(option: Option) {
      if (this.disabled || this.readonly) return;
      this.$emit('chipRemoved', option);
    },
  },
});
</script>

<style src="./autocomplete-input.scss" lang="scss" scoped></style>
