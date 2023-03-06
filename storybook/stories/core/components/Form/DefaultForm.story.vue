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
      <std-input-group label="Label">
        <std-input value="Initial Value" />
      </std-input-group>
      <std-input-group label="Label">
        <std-input value="Initial Value" />
      </std-input-group>
    </std-form-row>

    <std-form-row>
      <std-input-group label="Input Label">
        <std-input value="Initial Value" />
      </std-input-group>
    </std-form-row>
  </std-form>
</template>

<script>
import Form from '@ohrm/std/core/components/Form/Form';
import FormRow from '@ohrm/std/core/components/Form/FormRow';
import InputGroup from '@ohrm/std/core/components/InputField/InputGroup';
import Input from '@ohrm/std/core/components/Input/Input';
import Label from '@ohrm/std/core/components/Label/Label';

export default {
  name: 'DefaultForm',
  components: {
    'std-form': Form,
    'std-form-row': FormRow,
    'std-input-group': InputGroup,
    'std-input': Input,
    'std-label': Label,
  },
};
</script>
