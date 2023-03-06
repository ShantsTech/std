<!--
/*
 * This file is part of Stants Tech LLC
 *
 * Copyright (C) 2020 Stants Tech LLC
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
  <ul class="std-tree-view">
    <std-tree-node v-bind="$attrs">
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </std-tree-node>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TreeNode from '@sthrm/std/core/components/TreeView/TreeNode.vue';

export default defineComponent({
  name: 'std-tree-view',
  inheritAttrs: false,
  components: {
    'std-tree-node': TreeNode,
  },
});
</script>

<style src="./tree-view.scss" lang="scss" scoped></style>
