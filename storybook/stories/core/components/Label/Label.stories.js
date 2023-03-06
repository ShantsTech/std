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

import Label from '@sthrm/std/core/components/Label/Label';

export default {
  title: 'Example/Label',
  component: Label,
};

const Template = args => ({
  setup() {
    return {args};
  },
  components: {'std-label': Label},
  template: '<std-label v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const Colored = Template.bind({});
Colored.args = {
  label: 'Label',
  style: {color: 'red'},
};
