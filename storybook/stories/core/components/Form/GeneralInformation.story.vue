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
  <std-form>
    <std-grid :cols="4">
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Oraganization Name" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Number of Employees" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Registation Number" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Tax Id" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Phone" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Fax" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Email" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item> </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Address Street 1" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item> </std-grid-item>
      <std-grid-item>
        <std-form-row>
          <std-input-field label="Address Street 2" />
        </std-form-row>
      </std-grid-item>
      <std-grid-item> </std-grid-item>
    </std-grid>
  </std-form>
</template>

<script>
import Form from '@sthrm/std/core/components/Form/Form';
import FormRow from '@sthrm/std/core/components/Form/FormRow';
import InputField from '@sthrm/std/core/components/InputField/InputField';
import Grid from '@sthrm/std/core/components/Grid/Grid';
import GridItem from '@sthrm/std/core/components/Grid/GridItem';

export default {
  name: 'GeneralInformation',
  components: {
    'std-form': Form,
    'std-form-row': FormRow,
    'std-input-field': InputField,
    'std-grid': Grid,
    'std-grid-item': GridItem,
  },
};
</script>
