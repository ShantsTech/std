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
    <std-form-row class="orangehrm-bottom-space">
      <std-input-group label="Input Label" message="Validation message....">
        <std-input value="Initial Value" />
      </std-input-group>
    </std-form-row>

    <std-divider />

    <std-form-row class="orangehrm-bottom-space">
      <std-input-group label="Label">
        <template v-slot:label>
          <div>
            <b>Cu<em>stom</em></b> Label
          </div>
        </template>
        <template v-slot:default>
          <std-input value="Initial Value" />
        </template>
      </std-input-group>
    </std-form-row>

    <std-divider />

    <std-form-row class="orangehrm-bottom-space">
      <std-input-group label="Label">
        <template v-slot:default>
          <std-input value="Initial Value" />
        </template>
        <template v-slot:message>
          <div>Custom <b>Message</b></div>
        </template>
      </std-input-group>
    </std-form-row>

    <std-divider />

    <std-form-row class="orangehrm-bottom-space">
      <std-input-group
        label="Input Label"
        message="Validation message...."
        :classes="classes"
      >
        <std-input value="Initial Value" />
      </std-input-group>
    </std-form-row>
  </std-form>
</template>

<script>
import Form from '@sthrm/std/core/components/Form/Form';
import FormRow from '@sthrm/std/core/components/Form/FormRow';
import InputGroup from '@sthrm/std/core/components/InputField/InputGroup';
import Input from '@sthrm/std/core/components/Input/Input';
import Label from '@sthrm/std/core/components/Label/Label';
import Divider from '@sthrm/std/core/components/Divider/Divider';

export default {
  name: 'DefaultForm',
  components: {
    'std-form': Form,
    'std-form-row': FormRow,
    'std-input-group': InputGroup,
    'std-input': Input,
    'std-label': Label,
    'std-divider': Divider,
  },
  computed: {
    classes() {
      return {
        label: {
          'orangehrm-custom-label': true,
        },
        message: {
          'orangehrm-custom-message': true,
        },
      };
    },
  },
};
</script>

<style lang="scss">
.orangehrm-bottom-space {
  margin-bottom: 10px;
}

.orangehrm-custom-label {
  color: brown !important;
}

.orangehrm-custom-message {
  color: red !important;
}
</style>
