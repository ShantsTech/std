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
  <std-card-thead v-if="showHeader">
    <std-card-tr :clickable="false">
      <std-card-th
        v-if="tableProps.selectable"
        class="std-padding-cell std-table-th"
        :class="tableProps.selector.class"
        :style="tableProps.selector.style"
      >
        <std-checkbox-input
          :checkIcon="checkIcon"
          v-model="selectedAll"
          @change="onChangeSelectAll"
        />
      </std-card-th>

      <std-card-th
        class="std-padding-cell std-table-th"
        v-for="header in tableProps.headers"
        :key="header"
        :style="header.style"
        :class="header.class"
        :order="tableProps.order[header.sortField]"
        @order="onColumnOrderChanged($event, header)"
      >
        {{ header.title }}
      </std-card-th>
    </std-card-tr>
  </std-card-thead>
</template>

<script lang="ts">
import {defineComponent, reactive, watch, toRefs, inject, computed} from 'vue';
import emitter from '../../../../utils/emitter';
import TableHeader from '@ohrm/std/core/components/CardTable/Table/TableHeader.vue';
import TableRow from '@ohrm/std/core/components/CardTable/Table/TableRow.vue';
import TableHeaderCell from '@ohrm/std/core/components/CardTable/Table/TableHeaderCell.vue';
import CheckboxInput from '@ohrm/std/core/components/Input/CheckboxInput.vue';
import {DEVICE_LG, DEVICE_XL} from '../../../../composables/useResponsive';
import {CardHeader, Order} from '../types';

interface State {
  checkIcon: string;
  checkedItems: number[];
  selectedAll: boolean;
}

export default defineComponent({
  name: 'std-table-header-default',

  components: {
    'std-card-thead': TableHeader,
    'std-card-tr': TableRow,
    'std-card-th': TableHeaderCell,
    'std-checkbox-input': CheckboxInput,
  },

  setup() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const tableProps: any = inject('tableProps');
    const screenState: any = inject('screenState');
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const state: State = reactive({
      checkIcon: 'check',
      checkedItems: [...tableProps.selected],
      selectedAll:
        tableProps.selected.length > 0 &&
        tableProps.selected.length === tableProps.items.length,
    });

    emitter.on(`${tableProps.tableId}-datatable:rowSelected`, value => {
      const itemIndex = state.checkedItems.findIndex(item => item === value);
      if (itemIndex === -1) {
        state.checkedItems.push(value);
      }
    });

    emitter.on(`${tableProps.tableId}-datatable:rowUnselected`, value => {
      const itemIndex = state.checkedItems.findIndex(item => item === value);
      if (itemIndex > -1) {
        state.checkedItems.splice(itemIndex, 1);
      }
    });

    watch(
      () => state.checkedItems,
      newVal => {
        emitter.emit(`${tableProps.tableId}-datatable:updateSelected`, newVal);
        if (tableProps.items.length > 0 && newVal.length > 0) {
          state.selectedAll = true;
          if (newVal.length === tableProps.items.length) {
            state.checkIcon = 'check';
          } else {
            state.checkIcon = 'dash';
          }
        } else {
          state.selectedAll = false;
        }
      },
      {deep: true},
    );

    const showHeader = computed(() => {
      return (
        screenState.screenType === DEVICE_LG ||
        screenState.screenType === DEVICE_XL
      );
    });

    return {
      ...toRefs(state),
      tableProps,
      screenState,
      showHeader,
    };
  },

  methods: {
    onChangeSelectAll() {
      if (this.selectedAll) {
        emitter.emit(
          `${this.tableProps.tableId}-datatable:selectAll`,
          this.tableProps.items,
        );
      } else {
        emitter.emit(`${this.tableProps.tableId}-datatable:unselectAll`, []);
      }
    },
    onColumnOrderChanged(order: Order, column: CardHeader) {
      const orderFields = {};
      for (const key in this.tableProps.order) {
        orderFields[key] = 'DEFAULT';
      }
      emitter.emit(`${this.tableProps.tableId}-datatable:updateOrder`, {
        ...orderFields,
        [column.sortField]: order,
      });
    },
  },
});
</script>

<style src="./default-header.scss" lang="scss" scoped></style>
