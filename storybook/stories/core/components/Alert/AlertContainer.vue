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
  <div>
    <std-alert
      :show="true"
      type="success"
      message="Are you sure you want to continue?"
    >
      <std-button
        size="medium"
        displayType="ghost-success"
        label="No, Cancel"
      />
      <std-button size="medium" displayType="success" label="Yes, Delete" />
    </std-alert>

    <std-alert
      :show="true"
      type="warn"
      message="Are you sure you want to continue?"
    >
      <std-button size="medium" displayType="ghost-warn" label="No, Cancel" />
      <std-button size="medium" displayType="warn" label="Yes, Delete" />
    </std-alert>

    <std-alert
      :show="true"
      type="error"
      message="Are you sure you want to continue?"
    >
      <std-button size="medium" displayType="ghost-danger" label="No, Cancel" />
      <std-button size="medium" displayType="danger" label="Yes, Delete" />
    </std-alert>

    <std-alert
      :show="true"
      type="info"
      message="Are you sure you want to continue?"
    >
      <std-button size="medium" displayType="ghost-info" label="No, Cancel" />
      <std-button size="medium" displayType="info" label="Yes, Delete" />
    </std-alert>
  </div>
</template>

<script>
import Alert from '@ohrm/std/core/components/Alert/Alert';
import Button from '@ohrm/std/core/components/Button/Button';

export default {
  name: 'alert-container-example',
  components: {
    'std-alert': Alert,
    'std-button': Button,
  },
};
</script>
