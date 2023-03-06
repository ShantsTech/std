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

import SwitchInput from '@sthrm/std/core/components/Input/SwitchInput';
import {RIGHT, LABEL_POSITIONS} from '@sthrm/std/core/components/Input/types';

export default {
  title: 'Example/SwitchInput',
  component: SwitchInput,
  argTypes: {
    style: {control: {type: 'object'}},
    hasError: {control: {type: 'boolean'}},
    labelPosition: {
      control: {type: 'select', options: LABEL_POSITIONS},
      defaultValue: RIGHT,
    },
  },
};

const Template = args => ({
  setup() {
    return {args};
  },
  components: {'std-switch-input': SwitchInput},
  template: '<std-switch-input v-bind="args" />',
});

const VmodelSample = args => ({
  data() {
    return {
      selected: ['3'],
    };
  },
  components: {'std-switch-input': SwitchInput},
  template: `<div>
    <std-switch-input v-model="selected" id="switch1" value="1" optionLabel="Option 1" />
    <br/>
    <std-switch-input v-model="selected" id="switch2" value="2" optionLabel="Option 2" />
    <br/>
    <std-switch-input disabled v-model="selected" id="switch3" value="3" optionLabel="Option 2 (disabled)" />
    <br/>
    <span>{{selected}}</span>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {
  optionLabel: 'Switch this!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  optionLabel: 'Cant switch this on!',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  optionLabel: 'Error!',
  hasError: true,
};

export const Vmodel = VmodelSample.bind({});
