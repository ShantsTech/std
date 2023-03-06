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

import {mount} from '@vue/test-utils';
import Icon from '@sthrm/std/core/components/Icon/Icon.vue';
import SelectInput from '@sthrm/std/core/components/Input/Select/SelectInput.vue';
import SelectText from '@sthrm/std/core/components/Input/Select/SelectText.vue';
import SelectOption from '@sthrm/std/core/components/Input/Select/SelectOption.vue';
import SelectDropdown from '@sthrm/std/core/components/Input/Select/SelectDropdown.vue';

const options = [
  {
    id: 1,
    label: 'HR Admin',
  },
  {
    id: 2,
    label: 'ESS User',
  },
  {
    id: 3,
    label: 'Supervisor',
  },
];

describe('SelectInput.vue', () => {
  it('renders STD Select Input', () => {
    const wrapper = mount(SelectInput, {
      props: {options},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should load options to Select', async () => {
    const wrapper = mount(SelectInput, {
      props: {options},
    });
    wrapper.findComponent(SelectText).trigger('mousedown');
    await wrapper.vm.$nextTick();
    const nodes = wrapper.findAllComponents(SelectOption);
    expect(nodes.length).toBe(4);
  });
  it('should select one option', async () => {
    const wrapper = mount(SelectInput, {
      props: {options},
    });
    wrapper.findComponent(SelectText).trigger('mousedown');
    await wrapper.vm.$nextTick();
    const nodes = wrapper.findAllComponents(SelectOption);
    await nodes[1].trigger('mousedown');
    expect(wrapper.emitted('update:modelValue')).toEqual([
      [
        {
          id: 1,
          label: 'HR Admin',
          _selected: false,
        },
      ],
    ]);
  });
  it('should select none if placeholder selected', async () => {
    const wrapper = mount(SelectInput, {
      props: {options},
    });
    wrapper.findComponent(SelectText).trigger('mousedown');
    await wrapper.vm.$nextTick();
    const nodes = wrapper.findAllComponents(SelectOption);
    await nodes[0].trigger('mousedown');
    expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
  });
  it('should not select already selected option', async () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        modelValue: {
          id: 1,
          label: 'HR Admin',
        },
      },
    });
    wrapper.findComponent(SelectText).trigger('mousedown');
    await wrapper.vm.$nextTick();
    const nodes = wrapper.findAllComponents(SelectOption);
    await nodes[1].trigger('mousedown');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
  it('should toggle dropdown on click icon', async () => {
    const wrapper = mount(SelectInput, {
      props: {options},
    });
    wrapper.findComponent(Icon).trigger('mousedown');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(SelectDropdown).exists()).toBeTruthy();
    wrapper.findComponent(Icon).trigger('mousedown');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(SelectDropdown).exists()).toBeFalsy();
  });
});
