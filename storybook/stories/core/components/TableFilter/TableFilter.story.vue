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
  <div class="container">
    <std-table-filter filter-title="System Users">
      <template v-slot:toggleOptions>
        <std-icon-button name="funnel" />
        <std-icon-button name="pie-chart-fill" />
        <std-icon-button name="pencil-fill" />
      </template>
      <template v-slot:exportOptions>
        <std-button
          size="small"
          display-type="tool"
          label="PDF"
          icon-name="file-earmark-text"
        />
        <std-button
          size="small"
          display-type="tool"
          label="CSV"
          icon-name="file-earmark-spreadsheet"
        />
      </template>
      <std-form @submitValid="filterItems">
        <std-form-row>
          <std-grid :cols="4">
            <std-grid-item>
              <std-input-field label="Username" v-model="filters.username" />
            </std-grid-item>
            <std-grid-item>
              <std-input-field
                type="select"
                label="User Role"
                v-model="filters.role"
                :clear="false"
                :options="[
                  {id: 1, label: 'All'},
                  {id: 2, label: 'Admin'},
                  {id: 3, label: 'ESS'},
                ]"
              />
            </std-grid-item>
            <std-grid-item>
              <std-input-field
                type="autocomplete"
                label="Employee Name"
                v-model="filters.empName"
                :createOptions="loadEmployees"
              />
            </std-grid-item>
            <std-grid-item>
              <std-input-field
                type="select"
                label="Status"
                v-model="filters.status"
                :options="[
                  {id: 1, label: 'All'},
                  {id: 2, label: 'Enabled'},
                  {id: 3, label: 'Disabled'},
                ]"
              />
            </std-grid-item>
          </std-grid>
        </std-form-row>

        <std-divider />

        <std-form-actions>
          <std-button displayType="secondary" label="Search" type="submit" />
          <std-button
            class="orangehrm-left-space"
            displayType="ghost"
            label="Reset"
          />
        </std-form-actions>
      </std-form>
    </std-table-filter>
    <div class="orangehrm-table-container">
      <std-card-table
        :headers="headers"
        :items="items"
        :selectable="true"
        v-model:selected="checkedItems"
        rowDecorator="std-table-decorator-card"
      />
    </div>
  </div>
</template>

<script>
import TableFilter from '@sthrm/std/core/components/TableFilter/TableFilter';
import Grid from '@sthrm/std/core/components/Grid/Grid';
import GridItem from '@sthrm/std/core/components/Grid/GridItem';
import Form from '@sthrm/std/core/components/Form/Form';
import FormRow from '@sthrm/std/core/components/Form/FormRow';
import FormActions from '@sthrm/std/core/components/Form/FormActions';
import InputField from '@sthrm/std/core/components/InputField/InputField';
import InputGroup from '@sthrm/std/core/components/InputField/InputGroup';
import IconButton from '@sthrm/std/core/components/Button/Icon';
import Button from '@sthrm/std/core/components/Button/Button';
import Divider from '@sthrm/std/core/components/Divider/Divider';
import CardTable from '@sthrm/std/core/components/CardTable/CardTable';

export default {
  data() {
    return {
      filters: {
        username: '',
        role: [1],
        empName: [],
        status: [2],
      },
      headers: [
        {name: 'col1', title: 'Username', style: {flex: 1}},
        {name: 'col2', title: 'User Role', style: {flex: 1}},
        {name: 'col3', title: 'Employee Name', style: {flex: 1}},
        {name: 'col4', title: 'Status', style: {flex: 1}},
      ],
      checkedItems: [],
      items: [
        {col1: 'jack', col2: 'Admin', col3: 'James Fox', col4: 'Enabled'},
        {col1: 'vader', col2: 'Admin', col3: 'Darth Vader', col4: 'Enabled'},
      ],
    };
  },

  components: {
    'std-table-filter': TableFilter,
    'std-grid': Grid,
    'std-grid-item': GridItem,
    'std-form': Form,
    'std-form-row': FormRow,
    'std-form-actions': FormActions,
    'std-input-group': InputGroup,
    'std-input-field': InputField,
    'std-button': Button,
    'std-icon-button': IconButton,
    'std-divider': Divider,
    'std-card-table': CardTable,
  },

  methods: {
    filterItems() {
      console.log(this.filters);
    },
    async loadEmployees() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              label: 'James Fox',
            },
            {
              id: 2,
              label: 'Darth Vader',
            },
            {
              id: 3,
              label: 'J Jhona Jamerson Jr.',
            },
          ]);
        }, 5000);
      });
    },
    onBtnClick(e) {},
  },
};
</script>

<style scoped>
.container {
  background-color: #f6f5fb;
  padding: 1rem;
}
.orangehrm-left-space {
  margin-left: 10px;
}
.orangehrm-table-container {
  background-color: #fff;
  border-radius: 1.2rem;
  padding: 0.5rem;
  margin-top: 1rem;
}
</style>
