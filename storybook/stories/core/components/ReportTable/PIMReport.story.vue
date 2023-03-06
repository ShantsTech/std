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
  <div class="orangehrm-container">
    <std-report-table
      :loading="isLoading"
      :height="height"
      :headers="headers"
      :items="items"
    >
      <template v-slot:pagination>
        <std-pagination :length="3" :max="10" />
      </template>
    </std-report-table>
  </div>
</template>

<script>
import ReportTable from '@ohrm/std/core/components/ReportTable/ReportTable';
import CellAdapter from '@ohrm/std/core/components/ReportTable/CellAdapter';
import MultilineCell from '@ohrm/std/core/components/ReportTable/Cell/MultilineCell';
import Pagination from '@ohrm/std/core/components/Pagination/Pagination';
import {headers, data} from './mockdata';

export default {
  data() {
    return {
      height: 500,
      isLoading: false,
      headers: [],
      items: [],
    };
  },

  components: {
    'std-report-table': ReportTable,
    'std-pagination': Pagination,
  },

  beforeMount() {
    const setupColumn = column => {
      delete column['size'];
      const {type} = column.cellProperties ?? {};
      return {
        ...column,
        cellProperties: undefined,
        cellTemplate: type === 'list' ? CellAdapter(MultilineCell) : undefined,
      };
    };
    this.headers = headers.map(header => {
      if (header?.children && Array.isArray(header.children)) {
        header.children = header.children.map(child => setupColumn(child));
        return header;
      } else {
        return setupColumn(header);
      }
    });
    this.items = data.map(item => {
      let _rows = 0;
      for (const key in item) {
        const value = item[key];
        if (Array.isArray(value) && value.length > _rows) _rows = value.length;
      }
      return {...item, _rows};
    });
  },
};
</script>

<style lang="scss" scoped>
.orangehrm-container {
  background-color: #f6f5fb;
  border-radius: unset;
}
::v-deep(revogr-data .rgCell) {
  &:empty:before {
    content: '--';
  }
}
</style>
