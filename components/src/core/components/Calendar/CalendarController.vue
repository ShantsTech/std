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
  <div class="std-calendar-header">
    <std-icon name="chevron-left" @click="gotoPreviousMonth"></std-icon>
    <ul class="std-calendar-selector">
      <std-calendar-dropdown
        :options="months"
        :selected="currentMonth"
        @select="onSelectMonth"
        class="std-calendar-selector-month"
      >
        <div class="std-calendar-selector-month-selected">
          <std-text tag="p">{{ months[modelValue.month] }}</std-text>
          <std-icon name="caret-down-fill" :with-container="false" />
        </div>
      </std-calendar-dropdown>
      <std-calendar-dropdown
        :options="years"
        :selected="currentYear"
        @select="onSelectYear"
        class="std-calendar-selector-year"
      >
        <div class="std-calendar-selector-year-selected">
          <std-text tag="p">{{ modelValue.year }}</std-text>
          <std-icon name="caret-down-fill" :with-container="false" />
        </div>
      </std-calendar-dropdown>
    </ul>
    <std-icon name="chevron-right" @click="gotoNextMonth"></std-icon>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Text from '@ohrm/std/core/components/Text/Text.vue';
import Icon from '@ohrm/std/core/components/Button/Icon.vue';
import CalendarDropdown from '@ohrm/std/core/components/Calendar/CalendarDropdown.vue';

export default defineComponent({
  name: 'std-calendar-controller',
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    years: {
      type: Array,
      required: true,
    },
    months: {
      type: Array,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  components: {
    'std-text': Text,
    'std-icon': Icon,
    'std-calendar-dropdown': CalendarDropdown,
  },
  methods: {
    calculateMonth(value: number) {
      const {month, year} = this.modelValue;
      if (month + value > 11 || month + value < 0) {
        return {
          month: month + value > 11 ? 0 : 11,
          year: year + value,
        };
      } else {
        return {
          month: month + value,
          year,
        };
      }
    },
    gotoPreviousMonth() {
      const {month, year} = this.calculateMonth(-1);
      this.$emit('update:modelValue', {
        month,
        year,
      });
    },
    gotoNextMonth() {
      const {month, year} = this.calculateMonth(1);
      this.$emit('update:modelValue', {
        month,
        year,
      });
    },
    onSelectYear(year: number) {
      this.$emit('update:modelValue', {
        month: this.modelValue.month,
        year: this.years[year],
      });
    },
    onSelectMonth(month: number) {
      this.$emit('update:modelValue', {
        month,
        year: this.modelValue.year,
      });
    },
  },
  computed: {
    currentMonth(): number {
      const {month} = this.modelValue;
      return month;
    },
    currentYear(): number {
      const {year} = this.modelValue;
      return this.years.findIndex(v => v === year);
    },
  },
});
</script>
