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
  <std-text tag="h5">Add Job Title</std-text>

  <std-divider />

  <std-form>
    <std-form-row>
      <std-input-field label="Job Title" v-model="jobTitle.title" />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="textarea"
        label="Job Description"
        placeholder="Type description here"
        v-model="jobTitle.description"
      />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="file"
        label="Job Specification"
        buttonLabel="Browse"
        v-model="jobTitle.specification"
      />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="textarea"
        label="Note"
        placeholder="Add note"
        v-model="jobTitle.note"
      />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="checkbox"
        value="1"
        label="Check this"
        option-label="I agree"
        v-model="jobTitle.consent"
        true-value="yes"
        false-value="no"
      />
    </std-form-row>
  </std-form>

  <std-divider />

  <std-form-actions>
    <std-button displayType="ghost" label="Cancel" />
    <std-button
      class="orangehrm-left-space"
      displayType="secondary"
      label="Add"
      @click="onSave"
    />
  </std-form-actions>
</template>

<script>
import Form from '@sthrm/std/core/components/Form/Form';
import FormRow from '@sthrm/std/core/components/Form/FormRow';
import InputGroup from '@sthrm/std/core/components/InputField/InputGroup.vue';
import FormActions from '@sthrm/std/core/components/Form/FormActions';
import InputField from '@sthrm/std/core/components/InputField/InputField';
import Divider from '@sthrm/std/core/components/Divider/Divider';
import Button from '@sthrm/std/core/components/Button/Button';
import Text from '@sthrm/std/core/components/Text/Text';

const initialJobTitle = {
  title: '',
  description: '',
  specification: null,
  note: '',
  consent: '',
};

export default {
  name: 'DefaultForm',

  data() {
    return {
      jobTitle: {...initialJobTitle},
    };
  },

  components: {
    'std-form': Form,
    'std-form-row': FormRow,
    'std-input-field': InputField,
    'std-form-actions': FormActions,
    'std-divider': Divider,
    'std-button': Button,
    'std-text': Text,
  },

  methods: {
    onSave() {},
  },
};
</script>

<style lang="scss" scoped>
.orangehrm-left-space {
  margin-left: 10px;
}
</style>
