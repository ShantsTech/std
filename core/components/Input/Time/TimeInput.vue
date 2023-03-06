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
  <div v-click-outside="onFocusOut" class="std-time-wrapper">
    <div class="std-time-input">
      <std-input
        ref="stdInput"
        :hasError="hasError"
        :disabled="disabled"
        :readonly="readonly"
        :value="timeDisplay"
        :placeholder="placeholder"
        @change="onTimeInput"
        @click="toggleDropdown"
      />
      <std-icon :class="timeIconClasses" name="clock" @click="toggleDropdown" />
    </div>
    <std-time-picker
      v-if="open"
      :step="step"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    ></std-time-picker>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';
import Input from '@sthrm/std/core/components/Input/Input.vue';
import clickOutsideDirective from '../../../../directives/click-outside';
import TimePicker from '@sthrm/std/core/components/Input/Time/TimePicker.vue';
import {parseDate, formatDate} from '../../../../utils/date';

export default defineComponent({
  name: 'std-time-input',

  components: {
    'std-icon': Icon,
    'std-input': Input,
    'std-time-picker': TimePicker,
  },

  emits: [
    'update:modelValue',
    'timeselect:opened',
    'timeselect:closed',
    'blur',
  ],

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    step: {
      type: Number,
      default: 1,
    },
  },

  directives: {
    'click-outside': clickOutsideDirective,
  },

  data() {
    return {
      open: false,
    };
  },

  methods: {
    onFocusOut() {
      this.open && this.closeDropdown();
    },
    onTimeInput($event: Event) {
      const input = ($event.target as HTMLInputElement).value;
      const value = formatDate(parseDate(input, 'hh:mm a'), 'HH:mm');
      this.$emit('update:modelValue', value);
    },
    toggleDropdown() {
      if (!this.disabled) {
        if (!this.open) {
          this.$refs.stdInput.$el.focus();
          this.openDropdown();
        } else {
          this.closeDropdown();
        }
      }
    },
    openDropdown() {
      this.open = true;
      this.$emit('timeselect:opened');
    },
    closeDropdown() {
      this.open = false;
      this.$emit('timeselect:closed');
    },
  },

  computed: {
    timeIconClasses(): object {
      return {
        'std-time-input--clock': true,
        '--disabled': this.disabled,
        '--readonly': this.readonly,
      };
    },
    timeDisplay(): string {
      return formatDate(parseDate(this.modelValue, 'HH:mm'), 'hh:mm a');
    },
  },
});
</script>

<style src="./time-input.scss" lang="scss" scoped></style>
