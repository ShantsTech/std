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
  <li class="std-tree-node" :class="nodeClasses">
    <div
      :ref="cuid"
      v-if="showRoot"
      :class="nodeClasses"
      class="std-tree-node-wrapper"
    >
      <span v-if="hasChildren" class="std-tree-node-toggle">
        <std-icon-button
          @click="onClickNode"
          :name="isOpen ? 'chevron-up' : 'chevron-down'"
          role="none"
        />
      </span>
      <div class="std-tree-node-content">
        <slot name="content" :node-data="currentNode"></slot>
        <template v-if="!$slots['content']">
          {{ data.name }}
        </template>
      </div>
    </div>
    <div class="std-tree-node-liner" :style="lineStyles"></div>
    <transition
      :name="animation"
      v-if="hasChildren"
      @after-leave="onAnimationComplete"
    >
      <ul class="std-tree-node-child" v-if="isOpen">
        <std-tree-node
          v-for="(child, index) in data.children"
          :key="child.cuid"
          :data="child"
          :animation="animation"
          :isLast="index + 1 === data.children.length"
        >
          <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </std-tree-node>
      </ul>
    </transition>
  </li>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import IconButton from '@sthrm/std/core/components/Button/Icon.vue';
import {TNode} from './types';
import {nanoid} from 'nanoid';

export default defineComponent({
  name: 'std-tree-node',
  props: {
    data: {
      type: Object as PropType<TNode>,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
    showRoot: {
      type: Boolean,
      default: true,
    },
    animation: {
      type: String,
      default: 'transition-fade-down',
    },
    isLast: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    'std-icon-button': IconButton,
  },
  setup(props) {
    const isOpen = ref(props.open);
    const isCollapsed = ref(!props.open);
    const height = ref(0);
    return {
      isOpen,
      isCollapsed,
      height,
    };
  },
  computed: {
    hasChildren(): boolean {
      return this.data.children && this.data.children.length;
    },
    nodeClasses(): object {
      return {
        '--parent': this.hasChildren,
        '--open': !this.isCollapsed && this.hasChildren,
        '--last': this.isLast,
      };
    },
    currentNode(): TNode {
      const {name, children, ...rest} = this.data;
      return {name, children, ...rest};
    },
    cuid(): string {
      return nanoid(8);
    },
    nodes(): TNode {
      return {...this.data, cuid: this.cuid};
    },
    lineStyles(): object {
      return {
        height: this.isLast ? this.height / 2 + 'px' : '100%',
      };
    },
  },
  methods: {
    onClickNode() {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen;
        this.isCollapsed = false;
      }
    },
    onAnimationComplete() {
      this.isCollapsed = true;
    },
    calculateNodeHeight() {
      const node = this.$refs[this.cuid] as HTMLInputElement;
      this.height = node ? node.clientHeight : 0;
    },
  },
  mounted() {
    this.calculateNodeHeight();
  },
});
</script>

<style src="./tree-view.scss" lang="scss" scoped></style>
