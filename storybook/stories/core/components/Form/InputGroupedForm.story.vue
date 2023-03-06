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
  <std-text tag="h5">Grouped Input Example</std-text>

  <std-divider />
  <std-form @submitValid="getFormValues" ref="form">
    <std-form-row>
      <std-input-group
        label="Full Name"
        class="orangehrm-bottom-space"
        :classes="{wrapper: '--grouped-field'}"
      >
        <std-input-field
          class="orangehrm-firstname"
          v-model="firstname"
          placeholder="First name"
          :rules="rules.firstname"
        />
        <std-input-field
          class="orangehrm-middlename"
          v-model="middlename"
          placeholder="Middle name"
          :rules="rules.middlename"
        />
        <std-input-field
          class="orangehrm-lastname"
          v-model="lastname"
          placeholder="Last name"
          :rules="rules.lastname"
        />
      </std-input-group>
    </std-form-row>

    <std-divider />

    <std-form-actions>
      <std-button displayType="ghost" label="Cancel" />
      <std-button
        class="orangehrm-left-space"
        displayType="secondary"
        label="Add"
        type="submit"
      />
    </std-form-actions>
  </std-form>
</template>

<script>
import Form from '@sthrm/std/core/components/Form/Form';
import FormRow from '@sthrm/std/core/components/Form/FormRow';
import InputGroup from '@sthrm/std/core/components/InputField/InputGroup';
import FormActions from '@sthrm/std/core/components/Form/FormActions';
import InputField from '@sthrm/std/core/components/InputField/InputField';
import Divider from '@sthrm/std/core/components/Divider/Divider';
import Button from '@sthrm/std/core/components/Button/Button';
import Text from '@sthrm/std/core/components/Text/Text';

export default {
  name: 'InputGroupForm',

  data() {
    return {
      firstname: '',
      lastname: '',
      middlename: '',
      rules: {
        firstname: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 50) || 'Should be less than 50 characters',
        ],
        middlename: [],
        lastname: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 50) || 'Should be less than 50 characters',
        ],
      },
    };
  },

  components: {
    'std-form': Form,
    'std-form-row': FormRow,
    'std-input-group': InputGroup,
    'std-form-actions': FormActions,
    'std-input-field': InputField,
    'std-divider': Divider,
    'std-button': Button,
    'std-text': Text,
  },

  methods: {
    getFormValues() {
      console.log('form submit');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../../components/src/styles/index.scss';

.orangehrm-left-space {
  margin-left: 10px;
}

.orangehrm-bottom-space {
  margin-bottom: 10px;
}

@include std-respond-to('md') {
  ::v-deep(.--grouped-field) {
    display: flex;
  }

  ::v-deep(.orangehrm-firstname) {
    border-bottom-right-radius: unset;
    border-top-right-radius: unset;
  }

  ::v-deep(.orangehrm-lastname) {
    border-bottom-left-radius: unset;
    border-top-left-radius: unset;
  }

  ::v-deep(.orangehrm-middlename) {
    border-radius: unset;
  }
}
</style>
