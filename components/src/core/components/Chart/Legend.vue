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
  <ul class="std-chart-legend" @click.stop>
    <li v-for="(dataPoint, index) in data" :key="dataPoint">
      <template v-if="labelStyles[index]">
        <span class="std-chart-legend-key" :style="keyStyles[index]"></span>
        <std-text
          tag="span"
          :title="labels[index]"
          :style="labelStyles[index]"
          @click="onClickKey(index)"
        >
          {{ labels[index] }}
        </std-text>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import {DataPoint} from './types';
import {defineComponent, PropType} from 'vue';
import Text from '@sthrm/std/core/components/Text/Text.vue';

export default defineComponent({
  name: 'std-chart-legend',
  components: {
    'std-text': Text,
  },
  emits: ['click'],
  props: {
    data: {
      type: Array as PropType<DataPoint[]>,
      default: () => [],
    },
  },
  data() {
    return {
      toggledIndices: [],
    };
  },
  computed: {
    labels() {
      return this.data.map(({label, legend}: DataPoint) => {
        if (legend && legend.enable) {
          return legend.label;
        }
        return label;
      });
    },
    keyStyles() {
      return this.data.map(({color}: DataPoint) => ({
        backgroundColor: color,
      }));
    },
    labelStyles() {
      return this.data.map((_, index: number) => {
        return {
          textDecoration:
            this.toggledIndices.indexOf(index) > -1 ? 'line-through' : '',
        };
      });
    },
  },
  methods: {
    onClickKey(index: number) {
      const _index = this.toggledIndices.indexOf(index);
      if (_index > -1) {
        this.toggledIndices.splice(_index, 1);
      } else {
        this.toggledIndices.push(index);
      }
      this.$emit('click', index);
    },
  },
});
</script>

<style src="./legend.scss" lang="scss" scoped></style>
