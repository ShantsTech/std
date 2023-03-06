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
import Toast from '@sthrm/std/core/components/Toast/Toast.vue';

describe('Toast > Toast.vue', () => {
  it('should renders STD Toast', () => {
    const wrapper = mount(Toast, {
      props: {title: 'Test Toast', show: true},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Toast success', () => {
    const wrapper = mount(Toast, {
      props: {title: 'Test Toast', show: true, type: 'success'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Toast warn', () => {
    const wrapper = mount(Toast, {
      props: {title: 'Test Toast', show: true, type: 'warn'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Toast error', () => {
    const wrapper = mount(Toast, {
      props: {title: 'Test Toast', show: true, type: 'error'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Toast info', () => {
    const wrapper = mount(Toast, {
      props: {title: 'Test Toast', show: true, type: 'info'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
