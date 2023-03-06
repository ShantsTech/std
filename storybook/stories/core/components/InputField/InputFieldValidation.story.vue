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
    <std-form-row>
      <std-input-field
        required
        label="Label"
        :rules="rules.input"
        v-model="input"
      />
      <std-input-field
        label="Label without validation"
        v-model="input"
        placeholder="Placeholder"
      />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="file"
        label="File Label"
        :rules="rules.file"
        v-model="file"
      />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="file"
        label="File Label with button"
        buttonLabel="Browse"
        :rules="rules.file"
      />
    </std-form-row>

    <std-form-row>
      <std-input-field
        type="textarea"
        label="Textarea Label"
        :placeholder="placeholder"
        :rules="rules.textarea"
        v-model="textarea"
      />
    </std-form-row>
  </std-form>
</template>

<script>
import Form from '@ohrm/std/core/components/Form/Form';
import FormRow from '@ohrm/std/core/components/Form/FormRow';
import Input from '@ohrm/std/core/components/Input/Input';
import Label from '@ohrm/std/core/components/Label/Label';
import InputField from '@ohrm/std/core/components/InputField/InputField';

export default {
  data() {
    return {
      input: '',
      file: null,
      textarea: '',
      rules: {
        input: [
          v => (!!v && v.trim() !== '') || 'Required',
          v => (v && v.length <= 5) || 'Should be less than 5 characters',
        ],
        file: [
          v =>
            v === null ||
            (v && v.size && v.size <= 1024 * 1024) ||
            'Attachment size exceeded',
        ],
        textarea: [
          v => {
            const complexValidation = v && v.length <= 5;
            return (
              complexValidation ||
              v === '' ||
              'Should be less than 5 characters'
            );
          },
        ],
      },
      placeholder: 'Placeholder',
    };
  },

  components: {
    'std-form': Form,
    'std-form-row': FormRow,
    'std-input': Input,
    'std-label': Label,
    'std-input-field': InputField,
  },
};
</script>
