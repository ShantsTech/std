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
  <div class="std-date-wrapper">
    <div class="std-date-input">
      <std-input
        :hasError="hasError"
        :disabled="disabled"
        :readonly="readonly"
        @blur="onBlur"
        @update:modelValue="onDateTyped"
        @click="toggleDropdown"
        :value="displayDate"
        :placeholder="placeholder"
        ref="stdInput"
      />
      <std-icon
        :class="dateIconClasses"
        name="calendar"
        @click="toggleDropdown"
      />
    </div>
    <transition name="transition-fade-down">
      <div v-if="open" class="std-date-input-calendar">
        <std-calendar
          v-bind="$attrs"
          @update:modelValue="onDateSelected"
          @mousedown.prevent
          v-model="dateSelected"
          :locale="locale"
        >
          <div class="std-date-input-links">
            <div @click="onClickToday" class="std-date-input-link --today">
              {{ t('general.today', 'Today') }}
            </div>
            <div @click="onClickClear" class="std-date-input-link --clear">
              {{ t('general.clear', 'Clear') }}
            </div>
            <div @click="closeDropdown" class="std-date-input-link --close">
              {{ t('general.close', 'Close') }}
            </div>
          </div>
        </std-calendar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {enGB} from 'date-fns/locale';
import usei18n from '../../../composables/usei18n';
import {formatDate, parseDate, freshDate} from '../../../utils/date';
import {defineComponent, reactive, toRefs, PropType} from 'vue';
import Icon from '@ohrm/std/core/components/Icon/Icon.vue';
import Input from '@ohrm/std/core/components/Input/Input.vue';
import Calendar from '@ohrm/std/core/components/Calendar/Calendar.vue';

export default defineComponent({
  name: 'std-date-input',
  inheritAttrs: false,

  components: {
    'std-icon': Icon,
    'std-input': Input,
    'std-calendar': Calendar,
  },

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
    ioformat: {
      type: String,
      default: 'yyyy-MM-dd',
    },
    displayFormat: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    locale: {
      type: Object as PropType<Locale>,
      default: enGB,
    },
  },

  setup() {
    const state = reactive({
      open: false,
      dateTyped: null,
    });

    return {
      ...usei18n(),
      ...toRefs(state),
    };
  },

  methods: {
    onBlur(e: Event) {
      e.stopImmediatePropagation();
      if (this.dateTyped !== null) {
        this.dateSelected = parseDate(this.dateTyped, this.dateFormat, {
          locale: this.locale,
        });
      }
      this.$emit('blur');
      this.closeDropdown();
    },
    onDateTyped(value: string) {
      this.dateTyped = value;
    },
    onDateSelected() {
      this.dateTyped = null;
      this.closeDropdown();
    },
    toggleDropdown() {
      if (!this.disabled && !this.readonly) {
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
      this.$emit('dateselect:opened');
    },
    closeDropdown() {
      this.open = false;
      this.$emit('dateselect:closed');
    },
    onClickToday() {
      this.open = false;
      this.dateTyped = null;
      this.dateSelected = freshDate();
    },
    onClickClear() {
      this.open = false;
      this.dateTyped = null;
      this.dateSelected = null;
    },
  },

  computed: {
    dateSelected: {
      get() {
        return parseDate(this.modelValue, this.ioformat);
      },
      set(value) {
        if (!isNaN(value) && value instanceof Date) {
          this.$emit('update:modelValue', formatDate(value, this.ioformat));
        } else {
          this.$emit(
            'update:modelValue',
            this.dateTyped ? this.dateTyped : null,
          );
        }
      },
    },
    displayDate(): string {
      if (this.value) return this.value;
      return (
        formatDate(this.dateSelected, this.dateFormat, {locale: this.locale}) ||
        (this.modelValue === null ? this.modelValue : this.dateTyped)
      );
    },
    dateFormat(): string {
      return this.displayFormat && this.displayFormat.trim()
        ? this.displayFormat
        : this.ioformat;
    },
    dateIconClasses(): object {
      return {
        'std-date-input-icon': true,
        '--disabled': this.disabled,
        '--readonly': this.readonly,
      };
    },
  },
});
</script>

<style src="./date-input.scss" lang="scss" scoped></style>
