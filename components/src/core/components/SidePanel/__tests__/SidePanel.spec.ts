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

import {mount, shallowMount} from '@vue/test-utils';
import SidePanel from '@sthrm/std/core/components/SidePanel/SidePanel.vue';
import MainMenu from '@sthrm/std/core/components/SidePanel/MainMenu.vue';
import MainMenuItem from '@sthrm/std/core/components/SidePanel/MainMenuItem.vue';

describe('SidePanel.vue', () => {
  it('renders STD Side Panel', () => {
    const wrapper = shallowMount(SidePanel);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render STD Side Panel with menu items', async () => {
    const menuItems = [
      {
        name: 'Dashboard',
        url: '#',
        icon: 'dashboard',
        active: false,
      },
      {
        name: 'PIM',
        url: '#',
        icon: 'pim',
        active: true,
      },
      {
        name: 'Time',
        url: '#',
        icon: 'time',
        active: false,
      },
    ];
    const wrapper = mount(SidePanel, {
      props: {menuItems},
    });
    const menuElems = wrapper.findAllComponents(MainMenuItem);
    expect(menuElems.length).toBe(3);
    expect(menuElems[0].findAll('a')[1].classes()).toContain('active');
  });

  it('should emit STD Side Panel collapse event', () => {
    const menuItems = [
      {
        name: 'Dashboard',
        url: '#',
        icon: 'dashboard',
        active: false,
      },
    ];
    const wrapper = mount(SidePanel, {
      props: {menuItems},
    });
    wrapper
      .findComponent(MainMenu)
      .find('.std-main-menu-button')
      .trigger('click');
    expect(wrapper.emitted('collapse')).toBeTruthy();
  });
});
