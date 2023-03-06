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
  <std-tab-container v-model="selector" @clickTab="onClickTab">
    <std-tab-panel key="login" name="Login">
      <std-form class="orangehrm-form">
        <std-text tag="h5">Login</std-text>
        <std-divider />
        <std-form-row>
          <std-input-field
            label="Username"
            v-model="username"
            placeholder="Type your username"
          />
        </std-form-row>
        <std-form-row>
          <std-input-field
            label="Password"
            type="password"
            v-model="password"
            placeholder="Type your password"
          />
        </std-form-row>

        <div class="orangehrm-form-footer">
          <std-button displayType="secondary" label="Login" />
          <std-button
            displayType="ghost"
            label="Register"
            @click="onClickRegister"
          />
        </div>
      </std-form>
    </std-tab-panel>
    <std-tab-panel key="register" name="Register">
      <std-form class="orangehrm-form">
        <std-text tag="h5">Register</std-text>
        <std-divider />
        <std-form-row>
          <std-input-field
            label="E-mail"
            v-model="email"
            placeholder="Type your E-mail"
          />
        </std-form-row>
        <std-form-row>
          <std-input-field
            label="Username"
            v-model="username"
            placeholder="Type your username"
          />
        </std-form-row>
        <std-form-row>
          <std-input-field
            label="Password"
            type="password"
            v-model="password"
            placeholder="Type your password"
          />
        </std-form-row>
        <std-form-row>
          <std-input-field
            label="Confirm Password"
            type="password"
            v-model="confirm"
            placeholder="Type your password again"
          />
        </std-form-row>

        <div class="orangehrm-form-footer">
          <std-button displayType="secondary" label="Register" />
          <std-button displayType="ghost" label="Login" @click="onClickLogin" />
        </div>
      </std-form>
    </std-tab-panel>
  </std-tab-container>
</template>

<script>
import Form from '@ohrm/std/core/components/Form/Form';
import Text from '@ohrm/std/core/components/Text/Text';
import FormRow from '@ohrm/std/core/components/Form/FormRow';
import Button from '@ohrm/std/core/components/Button/Button';
import TabPanel from '@ohrm/std/core/components/Tab/TabPanel';
import Divider from '@ohrm/std/core/components/Divider/Divider';
import FormActions from '@ohrm/std/core/components/Form/FormActions';
import TabContainer from '@ohrm/std/core/components/Tab/TabContainer';
import InputField from '@ohrm/std/core/components/InputField/InputField';

export default {
  components: {
    'std-text': Text,
    'std-form': Form,
    'std-button': Button,
    'std-form-row': FormRow,
    'std-divider': Divider,
    'std-tab-panel': TabPanel,
    'std-input-field': InputField,
    'std-form-actions': FormActions,
    'std-tab-container': TabContainer,
  },

  data() {
    return {
      selector: null,
      email: null,
      confirm: null,
      username: null,
      password: null,
    };
  },

  methods: {
    onClickLogin() {
      this.selector = 'Login';
    },
    onClickRegister() {
      this.selector = 'Register';
    },
    onClickTab($e) {
      $e.preventDefault();
    },
  },
};
</script>

<style scoped>
.orangehrm-form {
  width: 400px;
  margin: 0 auto;
}
.orangehrm-form-footer {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}
</style>
