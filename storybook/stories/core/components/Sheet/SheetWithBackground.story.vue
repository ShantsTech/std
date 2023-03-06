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
  <std-sheet type="pastel-white" :rounded="false">
    <std-sheet v-bind="$attrs">
      <std-text type="card-title">Card Title</std-text>
      <div :style="{width: '100px', height: '100px'}"></div>
    </std-sheet>
  </std-sheet>
</template>

<script>
import Sheet from '@sthrm/std/core/components/Sheet/Sheet';
import Text from '@sthrm/std/core/components/Text/Text';

export default {
  components: {
    'std-sheet': Sheet,
    'std-text': Text,
  },
  inheritAttrs: false,
};
</script>
