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
  <div role="alert" class="std-time-picker">
    <div class="std-time-hour-input">
      <std-icon-button
        name="chevron-up"
        class="std-time-hour-input-up"
        role="none"
        @click="increment(1, 'hour')"
        :withContainer="false"
      />
      <std-input
        :value="hour"
        @change="onChange($event, 'hour')"
        class="std-time-hour-input-text"
      />
      <std-icon-button
        name="chevron-down"
        class="std-time-hour-input-down"
        role="none"
        @click="decrement(1, 'hour')"
        :withContainer="false"
      />
    </div>
    <div class="std-time-seperator">
      <span class="std-time-seperator-icon">:</span>
    </div>
    <div class="std-time-minute-input">
      <std-icon-button
        name="chevron-up"
        class="std-time-minute-input-up"
        role="none"
        @click="increment(step, 'minute')"
        :withContainer="false"
      />
      <std-input
        :value="minute"
        @change="onChange($event, 'minute')"
        class="std-time-minute-input-text"
      />
      <std-icon-button
        name="chevron-down"
        class="std-time-minute-input-down"
        role="none"
        @click="decrement(step, 'minute')"
        :withContainer="false"
      />
    </div>
    <div class="std-time-period-input">
      <div class="std-time-period-label">
        <input name="am" v-model="period" type="radio" value="AM" />
        <label for="am">AM</label>
      </div>
      <div class="std-time-period-label">
        <input name="pm" v-model="period" type="radio" value="PM" />
        <label for="pm">PM</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {parseDate, formatDate} from '../../../../utils/date';
import {defineComponent, reactive, toRefs, watchEffect} from 'vue';
import Input from '@ohrm/std/core/components/Input/Input.vue';
import IconButton from '@ohrm/std/core/components/Button/Icon.vue';

interface State {
  hour: string;
  minute: string;
  period: string;
}

export default defineComponent({
  name: 'std-time-picker',

  props: {
    modelValue: {
      type: String,
    },
    step: {
      type: Number,
    },
  },

  components: {
    'std-input': Input,
    'std-icon-button': IconButton,
  },

  emits: ['update:modelValue'],

  setup(props, context) {
    const state: State = reactive({
      hour: '01',
      minute: '00',
      period: 'AM',
    });

    const setValue = (input: number, type: string) => {
      if (!isNaN(input)) {
        if (type === 'hour') {
          if (input > 0 && input <= 12) {
            state.hour = input < 10 ? '0' + input : input.toString();
          }
        } else {
          if (input >= 0 && input < 60) {
            // If input val is not a multiply of step, get nearest value
            const minutes = (Math.round(input / props.step) * props.step) % 60;
            state.minute = minutes < 10 ? '0' + minutes : minutes.toString();
          }
        }
      }
    };

    const onChange = ($event: Event, type: string) => {
      const input = parseInt(($event.target as HTMLInputElement).value);
      setValue(input, type);
    };

    const increment = (step: number, type: string) => {
      const input = parseInt(state[type]);
      setValue(input + step, type);
    };

    const decrement = (step: number, type: string) => {
      const input = parseInt(state[type]);
      setValue(input - step, type);
    };

    watchEffect(() => {
      const time = parseDate(props.modelValue, 'HH:mm');
      if (time) {
        // getHours() return 0-23, return 12 if 0
        setValue(time.getHours() % 12 || 12, 'hour');
        setValue(time.getMinutes(), 'minute');
        state.period = formatDate(time, 'a');
      }
    });

    watchEffect(() => {
      const time = formatDate(
        parseDate(`${state.hour}:${state.minute} ${state.period}`, 'hh:mm a'),
        'HH:mm',
      );
      context.emit('update:modelValue', time);
    });

    return {
      ...toRefs(state),
      onChange,
      increment,
      decrement,
    };
  },
});
</script>

<style src="./time-input.scss" lang="scss" scoped></style>
