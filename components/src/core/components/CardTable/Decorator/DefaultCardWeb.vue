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
  <std-card-tbody>
    <div
      :class="classes"
      v-for="(item, index) in items"
      :key="item"
      @click="onClick(item)($event)"
    >
      <std-card-tr :clickable="tableProps.clickable">
        <std-card-cell
          class="std-padding-cell"
          :headers="defaultSlot"
          :items="item"
          :index="index"
        ></std-card-cell>
      </std-card-tr>
    </div>
  </std-card-tbody>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {decoratorMixin} from './decorator-mixin';
import TableBody from '@ohrm/std/core/components/CardTable/Table/TableBody.vue';
import TableRow from '@ohrm/std/core/components/CardTable/Table/TableRow.vue';
import DefaultCellContainer from '@ohrm/std/core/components/CardTable/Cell/DefaultCellContainer.vue';
import {CardHeaders} from '../types';
import emitter from '../../../../utils/emitter';

export default defineComponent({
  name: 'std-table-default-card-web',

  mixins: [decoratorMixin],

  components: {
    'std-card-tbody': TableBody,
    'std-card-tr': TableRow,
    'std-card-cell': DefaultCellContainer,
  },

  computed: {
    classes(): object {
      return {
        'std-table-card': true,
      };
    },
    defaultSlot(): Array<CardHeaders> {
      if (this.tableProps.selectable) {
        return [
          {
            name: 'selector',
            cellType: 'std-table-cell-checkbox',
            class: this.tableProps.selector?.class,
            style: this.tableProps.selector?.style,
          },
          ...this.tableProps.headers,
        ];
      }
      return this.tableProps.headers;
    },
    items(): Array<object> {
      return this.tableProps.items.map((item, index) => {
        return this.tableProps.selectable
          ? {selector: index, ...item}
          : {...item};
      });
    },
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick(item: any) {
      return (e: Event) => {
        emitter.emit(`${this.tableProps.tableId}-datatable:clickRow`, {
          item,
          native: e,
        });
      };
    },
  },
});
</script>

<style src="./card.scss" lang="scss" scoped></style>
