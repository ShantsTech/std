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
  <std-table>
    <colgroup>
      <col style="width:20%" />
      <col style="width:50%" />
    </colgroup>
    <std-thead>
      <std-tr>
        <std-th>Col 1</std-th>
        <std-th>Col 2</std-th>
      </std-tr>
    </std-thead>

    <std-tbody>
      <std-tr v-for="item in items" @click="onClick(item)($event)">
        <std-td>{{ item.col1 }}</std-td>
        <std-td>{{ item.col2 }}</std-td>
        <std-td>
          <std-icon-button name="trash" @click.stop="onBtnClick" />
        </std-td>
      </std-tr>
    </std-tbody>

    <std-tfoot> </std-tfoot>
  </std-table>
</template>

<script>
import Table from '@ohrm/std/core/components/Table/Table';
import TableHeader from '@ohrm/std/core/components/Table/TableHeader';
import TableBody from '@ohrm/std/core/components/Table/TableBody';
import TableFooter from '@ohrm/std/core/components/Table/TableFooter';
import TableRow from '@ohrm/std/core/components/Table/TableRow';
import TableHeaderCell from '@ohrm/std/core/components/Table/TableHeaderCell';
import TableDataCell from '@ohrm/std/core/components/Table/TableDataCell';
import IconButton from '@ohrm/std/core/components/Button/Icon';

export default {
  data() {
    return {
      items: [
        {col1: 'Data 1', col2: 'Data 2'},
        {col1: 'Data 2', col2: 'Data 2'},
        {col1: 'Data 3', col2: 'Data 2'},
      ],
    };
  },

  components: {
    'std-table': Table,
    'std-thead': TableHeader,
    'std-tbody': TableBody,
    'std-tfoot': TableFooter,
    'std-tr': TableRow,
    'std-th': TableHeaderCell,
    'std-td': TableDataCell,
    'std-icon-button': IconButton,
  },

  methods: {
    onClick(item) {
      console.log(item);
      return e => {
        console.log(e);
      };
    },
    onBtnClick(e) {},
  },
};
</script>
