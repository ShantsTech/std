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
    <std-text tag="h5">Add Job Category</std-text>

    <std-divider />

    <std-form @submitValid="getFormValues" ref="form">
      <std-form-row>
        <std-input-group class="orangehrm-bottom-space">
          <std-input-field
            label="Job Category Name"
            v-model="name"
            :rules="rules.name"
          />
          <std-input-field
            label="Job Category Id"
            v-model="id"
            :rules="rules.id"
          />
          <std-input-field
            type="select"
            label="Job Role"
            v-model="role"
            :rules="rules.role"
            :options="[
              {id: 1, label: 'All'},
              {id: 2, label: 'Admin'},
              {id: 3, label: 'ESS'},
            ]"
          />
        </std-input-group>
      </std-form-row>

      <std-divider />

      <std-form-actions>
        <std-button displayType="ghost" label="Reset" type="reset" />
        <std-button
          class="orangehrm-left-space"
          displayType="secondary"
          label="Add"
          type="submit"
        />
      </std-form-actions>
    </std-form>

    <p>Form state {{ form && form.isProcessing ? 'busy' : 'idle' }}</p>
    <p>Form is {{ form && form.isFromInvalid ? 'invalid' : 'valid' }}</p>
    <p>Errorbag {{ form && form.errorbag }}</p>
  </div>
</template>

<script>
import {ref} from 'vue';
import Form from '@sthrm/std/core/components/Form/Form';
import FormRow from '@sthrm/std/core/components/Form/FormRow';
import InputGroup from '@sthrm/std/core/components/InputField/InputGroup';
import FormActions from '@sthrm/std/core/components/Form/FormActions';
import InputField from '@sthrm/std/core/components/InputField/InputField';
import Divider from '@sthrm/std/core/components/Divider/Divider';
import Button from '@sthrm/std/core/components/Button/Button';
import Text from '@sthrm/std/core/components/Text/Text';

export default {
  name: 'ResetForm',

  setup() {
    const form = ref(null);

    return {
      form,
    };
  },

  data() {
    return {
      name: '',
      id: '1234567890',
      role: {id: 2, label: 'Admin'},
      rules: {
        name: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 50) || 'Should be less than 50 characters',
        ],
        id: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length >= 10) || 'Should more than 10 characters',
        ],
        role: [v => (v && v !== null) || 'Required'],
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
.orangehrm-container {
  padding: 1.5rem;
  background-color: #fff;
}

.orangehrm-left-space {
  margin-left: 10px;
}

.orangehrm-bottom-space {
  margin-bottom: 10px;
}
</style>
