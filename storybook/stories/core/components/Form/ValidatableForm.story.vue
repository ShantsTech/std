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
          type="dropdown"
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

    <std-form-row>
      <std-input-field
        type="checkbox"
        label="Check this"
        option-label="I agree"
        v-model="consent"
        :rules="rules.consent"
        true-value="yes"
        false-value="no"
      />
      <std-input-field
        type="switch"
        label="Switch this"
        option-label="Notify me"
        v-model="notify"
        :rules="rules.notify"
      />
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

  <p>Form state {{ form && form.isProcessing ? 'busy' : 'idle' }}</p>
  <p>Form is {{ form && form.isFromInvalid ? 'invalid' : 'valid' }}</p>
  <p>Errorbag {{ form && form.errorbag }}</p>
</template>

<script>
import {ref} from 'vue';
import Form from '@ohrm/std/core/components/Form/Form';
import FormRow from '@ohrm/std/core/components/Form/FormRow';
import InputGroup from '@ohrm/std/core/components/InputField/InputGroup';
import FormActions from '@ohrm/std/core/components/Form/FormActions';
import InputField from '@ohrm/std/core/components/InputField/InputField';
import Divider from '@ohrm/std/core/components/Divider/Divider';
import Button from '@ohrm/std/core/components/Button/Button';
import Text from '@ohrm/std/core/components/Text/Text';

export default {
  name: 'ValidatableFrom',

  setup() {
    const form = ref(null);

    return {
      form,
    };
  },

  data() {
    return {
      name: '',
      id: '',
      role: [{id: 2, label: 'Admin'}],
      consent: '',
      notify: '',
      rules: {
        name: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 50) || 'Should be less than 50 characters',
        ],
        id: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length >= 10) || 'Should more than 10 characters',
        ],
        role: [v => (v && v.length > 0) || 'Required'],
        consent: [
          v => (v && v.length > 0) || 'Required',
          v => v === 'yes' || 'You should agree',
        ],
        notify: [v => v || 'Please turn notify on'],
      },
      isValid: true,
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
.orangehrm-left-space {
  margin-left: 10px;
}

.orangehrm-bottom-space {
  margin-bottom: 10px;
}
</style>
