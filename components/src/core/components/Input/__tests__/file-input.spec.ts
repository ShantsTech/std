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
import FileInput from '@sthrm/std/core/components/Input/FileInput.vue';

describe('FileInput.vue', () => {
  it('renders STD FileInput', () => {
    const wrapper = mount(FileInput, {
      props: {},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD FileInput with custom color', () => {
    const wrapper = mount(FileInput, {
      props: {style: {backgroundColor: 'aliceblue'}},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD FileInput with error', () => {
    const wrapper = mount(FileInput, {
      props: {hasError: true},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD FileInput with browse button', () => {
    const wrapper = mount(FileInput, {
      props: {buttonLabel: 'Browse'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
