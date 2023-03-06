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
  <std-text tag="h5">Custom Fields Form</std-text>

  <std-divider />

  <std-form @submitValid="getFormValues" ref="form">
    <std-form-row>
      <div
        class="orangehrm-row-item"
        v-for="(customField, index) in customFields"
        :key="index"
      >
        <std-input-field
          :label="`Custom Field [${index + 1}]`"
          v-model="customFields[index].name"
          :rules="rules.name"
        />
        <std-icon-button
          @click="addField"
          name="plus"
          v-if="index == customFields.length - 1"
          style="height: 30px;margin-left: 15px;"
        />
      </div>
    </std-form-row>

    <std-divider />

    <std-form-actions>
      <std-button type="button" displayType="ghost" label="Cancel" />
      <std-button
        class="orangehrm-left-space"
        displayType="secondary"
        label="Save"
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
import IconButton from '@sthrm/std/core/components/Button/Icon';
import Text from '@sthrm/std/core/components/Text/Text';

export default {
  name: 'DynamicValidatableFrom',

  setup() {
    const form = ref(null);

    return {
      form,
    };
  },

  data() {
    return {
      customFields: [{name: ''}, {name: ''}],
      rules: {
        name: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 50) || 'Should be less than 50 characters',
        ],
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
    'std-icon-button': IconButton,
    'std-text': Text,
  },

  methods: {
    addField() {
      this.customFields.push({name: ''});
    },
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

.orangehrm-row-item {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  .std-input-group {
    width: 80% !important;
  }
}
</style>
