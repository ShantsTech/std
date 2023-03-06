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

import {h} from 'vue';
import {mount, shallowMount} from '@vue/test-utils';
import TabPanel from '@ohrm/std/core/components/Tab/TabPanel.vue';

describe('TabPanel.vue', () => {
  it('renders STD Tab Panel', () => {
    const wrapper = shallowMount(TabPanel, {
      props: {
        name: 'test',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render STD Tab Panel with content', async () => {
    const wrapper = mount(TabPanel, {
      props: {
        name: 'test',
      },
      slots: {
        default: () => h('div', 'Main Content'),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit STD Tab activate event', () => {
    const wrapper = shallowMount(TabPanel, {
      props: {
        name: 'test',
      },
    });
    expect(wrapper.emitted('activate')).toBeTruthy();
  });

  it('should emit STD Tab deactivate event', () => {
    const wrapper = shallowMount(TabPanel, {
      props: {
        name: 'test',
      },
    });
    wrapper.unmount();
    expect(wrapper.emitted('deactivate')).toBeTruthy();
  });
});
