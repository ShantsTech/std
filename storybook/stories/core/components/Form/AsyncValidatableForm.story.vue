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
  <std-text tag="h5">Sync/Async Validations</std-text>

  <std-divider />

  <std-form ref="form" @submitValid="onSubmit" @submitInvalid="onInvalid">
    <std-form-row>
      <std-input-group class="orangehrm-bottom-space">
        <std-input-field
          label="Github Username (real async validation)"
          v-model="name"
          :rules="rules.name"
        />
      </std-input-group>
    </std-form-row>

    <std-form-row>
      <std-input-group class="orangehrm-bottom-space">
        <std-input-field
          label="Email (simulated slow async validation)"
          v-model="email"
          :rules="rules.email"
        />
      </std-input-group>
    </std-form-row>

    <std-form-row>
      <std-input-group class="orangehrm-bottom-space">
        <std-input-field
          label="Number (sync validation)"
          v-model="number"
          :rules="rules.number"
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
import promiseDebounce from '@sthrm/std/utils/promiseDebounce';

const checkGithub = function(value) {
  return new Promise(resolve => {
    if (value.trim()) {
      fetch(`https://api.github.com/search/users?q=${value}`)
        .then(response => response.json())
        .then(json => {
          const {total_count} = json;
          return total_count === 0
            ? resolve(true)
            : resolve('Existing Github User');
        });
    } else {
      resolve(true);
    }
  });
};

const delayedFunc = function(value) {
  return new Promise(resolve => {
    if (value === 'test@test.com') {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    } else {
      setTimeout(() => {
        resolve('Invalid email!');
      }, 5000);
    }
  });
};

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
      email: '',
      number: '',
      rules: {
        name: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 6) || 'Should be less than 6 characters',
          promiseDebounce(checkGithub, 500),
        ],
        email: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 15) || 'Should be less than 15 characters',
          promiseDebounce(delayedFunc, 500),
        ],
        number: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 10) || 'Should be less than 10 characters',
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
    onSubmit(e) {
      console.log('form valid', e);
    },
    onInvalid(e) {
      console.log('form invalid', e);
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
