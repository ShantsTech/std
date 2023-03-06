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
  <std-table>
    <colgroup>
      <col v-if="selectable" :style="{width: selector.width}" />
      <col
        v-for="header in headers"
        :style="{width: header.width}"
        :key="header"
      />
    </colgroup>
    <std-thead>
      <std-tr>
        <std-th v-if="selectable" class="std-padding-cell std-table-th">
          <input
            type="checkbox"
            v-model="selectedAll"
            @change="onChangeSelectAll"
          />
        </std-th>
        <std-th
          class="std-padding-cell std-table-th"
          v-for="header in headers"
          :key="header"
        >
          {{ header.title }}
        </std-th>
      </std-tr>
    </std-thead>

    <std-tbody :with-strip="withStrip">
      <std-tr
        v-for="(item, index) in items"
        :key="item"
        :clickable="clickable"
        @click="onClick(item)($event)"
      >
        <std-td v-if="selectable" class="std-padding-cell">
          <input
            type="checkbox"
            :value="index"
            v-model="checkedItems"
            @click="onClickCheckbox(item, $event)"
          />
        </std-td>
        <std-td
          class="std-padding-cell"
          v-for="header in headers"
          :key="header"
        >
          {{ item[header.name] }}
        </std-td>
      </std-tr>
    </std-tbody>

    <std-tfoot> </std-tfoot>
  </std-table>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Table from '@sthrm/std/core/components/Table/Table.vue';
import TableHeader from '@sthrm/std/core/components/Table/TableHeader.vue';
import TableBody from '@sthrm/std/core/components/Table/TableBody.vue';
import TableFooter from '@sthrm/std/core/components/Table/TableFooter.vue';
import TableRow from '@sthrm/std/core/components/Table/TableRow.vue';
import TableHeaderCell from '@sthrm/std/core/components/Table/TableHeaderCell.vue';
import TableDataCell from '@sthrm/std/core/components/Table/TableDataCell.vue';

export default defineComponent({
  name: 'std-clasic-table',

  data() {
    return {
      checkedItems: this.selected as number[],
      selectedAll: (this.selected.length === this.items.length) as boolean,
    };
  },

  watch: {
    checkedItems(state) {
      this.selectedAll = state.length === this.items.length;
      this.$emit('update:selected', state);
    },
  },

  props: {
    selector: {
      type: Object,
      default() {
        return {width: '30px'};
      },
    },
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    withStrip: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: ['click', 'clickCheckbox', 'update:selected', 'update:selectAll'],

  components: {
    'std-table': Table,
    'std-thead': TableHeader,
    'std-tbody': TableBody,
    'std-tfoot': TableFooter,
    'std-tr': TableRow,
    'std-th': TableHeaderCell,
    'std-td': TableDataCell,
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick(item: any) {
      return (e: Event) => {
        this.$emit('click', {item, native: e});
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClickCheckbox(item: any, e: Event) {
      e.stopPropagation();
      this.$emit('clickCheckbox', {item, native: e});
    },
    onChangeSelectAll() {
      this.checkedItems = this.selectedAll
        ? [...Array(this.items.length).keys()]
        : [];
      this.$emit('update:selectAll', this.selectedAll);
    },
  },
});
</script>

<style src="./classic-table.scss" lang="scss" scoped></style>
