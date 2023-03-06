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
  <std-dropdown-menu @click="noOp" class="std-table-dropdown">
    <std-icon-button name="three-dots-vertical" />
    <template v-slot:content>
      <li
        v-for="option in options"
        :key="option.context"
        @click="onClick($event, option.context)"
        class="std-table-dropdown-item"
      >
        <std-text tag="p">{{ option.label }}</std-text>
      </li>
    </template>
  </std-dropdown-menu>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import IconButton from '@ohrm/std/core/components/Button/Icon.vue';
import DropdownMenu from '@ohrm/std/core/components/DropdownMenu/DropdownMenu.vue';
import Text from '@ohrm/std/core/components/Text/Text.vue';
import {ActionCellEvent, DropdownOption} from './types';

export default defineComponent({
  name: 'std-table-dropdown',
  props: {
    options: {
      type: Array as PropType<DropdownOption[]>,
      default: () => [],
    },
  },
  components: {
    'std-icon-button': IconButton,
    'std-dropdown-menu': DropdownMenu,
    'std-text': Text,
  },
  methods: {
    noOp(e: MouseEvent) {
      // stop event bubbling and prevent emiting event until selected
      e.stopImmediatePropagation();
    },
    onClick(e: MouseEvent, context: string) {
      const event: ActionCellEvent = e;
      event.context = context;
      this.$emit('click', event);
    },
  },
});
</script>

<style src="./dropdown.scss" lang="scss" scoped></style>
