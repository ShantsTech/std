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
  <std-layout
    :user="user"
    context-title="Personal Information Manager"
    :sidepanel-menu-items="sidepanelMenuItems"
    :topbar-menu-items="topbarMenuItems"
    :brand-logo-src="brandLogoSrc"
    :brand-banner-src="brandBannerSrc"
    :breadcrumb="breadcrumb"
  >
    <div class="orangehrm-container">
      <std-table-filter filter-title="System Users">
        <std-form>
          <std-form-row>
            <std-grid :cols="4" class="orangehrm-filter-grid">
              <std-grid-item>
                <std-input-field label="Username" v-model="filters.username" />
              </std-grid-item>
              <std-grid-item>
                <std-input-field
                  type="dropdown"
                  label="User Role"
                  v-model="filters.role"
                  :options="[]"
                />
              </std-grid-item>
            </std-grid>
          </std-form-row>
          <std-divider />
          <std-form-actions>
            <std-button displayType="secondary" label="Search" type="submit" />
          </std-form-actions>
        </std-form>
      </std-table-filter>
      <br />
      <std-report-table
        :loading="isLoading"
        :headers="headers"
        :items="items"
        :column-count="6"
      >
        <template v-slot:pagination>
          <std-pagination :length="3" :max="10" />
        </template>
      </std-report-table>
    </div>
    <template v-slot:user-actions>
      <li role="none">
        <a href="#" role="menuitem" class="std-userdropdown-link">
          <std-icon name="box-arrow-right" :with-container="false" />Logout
        </a>
      </li>
    </template>
    <template v-slot:footer>
      <std-text tag="p" class="orangehrm-copyright">OrangeHRM 5.0</std-text>
      <std-text tag="p" class="orangehrm-copyright">
        &copy; 2005 - 2021
        <a href="http://www.shants-tech.com" target="_blank">OrangeHRM, Inc</a>.
        All rights reserved.
      </std-text>
      <br />
    </template>
  </std-layout>
</template>

<script>
import {topMenuItems, sidePanelItems, headers, breadcrumb} from './mockdata';
import Text from '@ohrm/std/core/components/Text/Text';
import Layout from '@ohrm/std/core/components/Layout/Layout';
import TableFilter from '@ohrm/std/core/components/TableFilter/TableFilter';
import Grid from '@ohrm/std/core/components/Grid/Grid';
import GridItem from '@ohrm/std/core/components/Grid/GridItem';
import Form from '@ohrm/std/core/components/Form/Form';
import FormRow from '@ohrm/std/core/components/Form/FormRow';
import FormActions from '@ohrm/std/core/components/Form/FormActions';
import InputField from '@ohrm/std/core/components/InputField/InputField';
import InputGroup from '@ohrm/std/core/components/InputField/InputGroup';
import IconButton from '@ohrm/std/core/components/Button/Icon';
import Button from '@ohrm/std/core/components/Button/Button';
import Divider from '@ohrm/std/core/components/Divider/Divider';
import ReportTable from '@ohrm/std/core/components/ReportTable/ReportTable';
import Pagination from '@ohrm/std/core/components/Pagination/Pagination';
import Icon from '@ohrm/std/core/components/Icon/Icon';

export default {
  name: 'Layout',
  components: {
    'std-text': Text,
    'std-layout': Layout,
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
    'std-report-table': ReportTable,
    'std-pagination': Pagination,
    'std-icon': Icon,
  },
  data() {
    return {
      brandLogoSrc: require('@ohrm/std/assets/images/logo.png'),
      brandBannerSrc: require('@ohrm/std/assets/images/orangehrm-logo.png'),
      user: {
        firstName: 'Jeff',
        lastName: 'Winger',
        profImgSrc: require('@ohrm/std/assets/images/logo.png'),
      },
      filters: {
        username: '',
        role: null,
      },
      isLoading: false,
      headers: headers,
      items: [],
      sidepanelMenuItems: sidePanelItems,
      topbarMenuItems: topMenuItems,
      breadcrumb: breadcrumb,
    };
  },

  beforeMount() {
    const types = [
      'AUS - Annual',
      'AUS - Casual',
      'AUS - Maternity',
      'LKA - Annual',
      'LKA - Casual',
      'LKA - Maternity',
    ];
    this.items = new Array(10).fill('').map((_, index) => {
      const rand = Math.random();
      return {
        type: types[Math.floor(rand * types.length)],
        entitlement: parseFloat(rand * 100).toFixed(2),
        pending: '0.00',
        scheduled: '2.00',
        taken: '0.00',
        balance: parseFloat(rand * 100 - 2).toFixed(2),
      };
    });
  },
};
</script>

<style scoped>
.orangehrm-container {
  background-color: #f6f5fb;
  border-radius: unset;
  padding: 0;
}
.orangehrm-filter-grid {
  width: 100%;
}
.orangehrm-copyright {
  font-size: 0.8rem;
  text-align: center;

  & a {
    color: #38455d;
  }
}
</style>
