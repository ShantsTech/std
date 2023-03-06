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
  <std-text tag="h5">Disable validation for readonly/disabled</std-text>

  <std-divider />

  <std-form ref="form" @submitValid="onSubmit">
    <std-form-row>
      <std-input-group class="orangehrm-bottom-space">
        <std-input-field label="Regular" v-model="name" :rules="rules.name" />
      </std-input-group>
    </std-form-row>

    <std-form-row>
      <std-input-group class="orangehrm-bottom-space">
        <std-input-field
          label="Disabled"
          v-model="name"
          :rules="rules.name"
          disabled
        />
      </std-input-group>
    </std-form-row>

    <std-form-row>
      <std-input-group class="orangehrm-bottom-space">
        <std-input-field
          label="Readonly"
          v-model="name"
          :rules="rules.name"
          readonly
        />
      </std-input-group>
    </std-form-row>

    <std-divider />

    <std-form-actions>
      <std-button displayType="secondary" label="Save" type="submit" />
    </std-form-actions>
  </std-form>

  <p>Form state {{ form && form.isProcessing ? 'busy' : 'idle' }}</p>
  <p>Form is {{ form && form.isFromInvalid ? 'invalid' : 'valid' }}</p>
  <p>Errorbag {{ form && form.errorbag }}</p>
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
  name: 'ValidatableFrom',

  setup() {
    const form = ref(null);

    return {
      form,
    };
  },

  data() {
    return {
      isValid: 'valid',
      name: '',
      rules: {
        name: [v => (!!v && v.trim() !== '') || 'Required'],
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
    onSubmit(e) {
      console.log('form valid', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.orangehrm-bottom-space {
  margin-bottom: 10px;
}
</style>
