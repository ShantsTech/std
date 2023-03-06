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
import Dialog from '@sthrm/std/core/components/Dialog/Dialog.vue';

describe('Dialog > Dialog.vue', () => {
  it('should renders STD Dialog > Dialog', () => {
    const wrapper = mount(Dialog, {
      props: {},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Dialog > Dialog show', () => {
    const wrapper = mount(Dialog, {
      props: {show: true},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Dialog > Dialog no shadow', () => {
    const wrapper = mount(Dialog, {
      props: {show: true, shadow: false},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Dialog > Dialog witout close', () => {
    const wrapper = mount(Dialog, {
      props: {show: true, withClose: false},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Dialog > Dialog persistent', () => {
    const wrapper = mount(Dialog, {
      props: {show: true, persistent: true},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD Dialog > Dialog dialogContainer-div', () => {
    const wrapper = mount(Dialog, {
      props: {show: true, dialogContainer: 'div'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
