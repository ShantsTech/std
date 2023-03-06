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
import Button from '@ohrm/std/core/components/Button/Button.vue';
import {
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
  TYPE_MAIN,
  TYPE_SECONDARY,
  TYPE_INFO,
  TYPE_DANGER,
  TYPE_WARN,
  TYPE_SUCCESS,
  TYPE_GHOST,
  TYPE_GHOST_INFO,
  TYPE_GHOST_DANGER,
  TYPE_GHOST_WARN,
  TYPE_GHOST_SUCCESS,
  TYPE_LABEL,
  TYPE_LABEL_INFO,
  TYPE_LABEL_DANGER,
  TYPE_LABEL_WARN,
  TYPE_LABEL_SUCCESS,
  TYPE_TEXT,
  TYPE_TOOL,
} from '../types';

describe('Button.vue', () => {
  it('renders STD button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label},
    });
    expect(wrapper.text()).toMatch(label);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD small button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, size: SIZE_SMALL},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD large button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, size: SIZE_LARGE},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD medium button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, size: SIZE_MEDIUM},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD main button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_MAIN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD secondary button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_SECONDARY},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD solid info button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_INFO},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD solid danger button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_DANGER},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD solid warn button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_WARN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD solid success button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_SUCCESS},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD ghost button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_GHOST},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD ghost-info button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_GHOST_INFO},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD ghost-danger button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_GHOST_DANGER},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD ghost-warn button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_GHOST_WARN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD ghost-success button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_GHOST_SUCCESS},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD label button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_LABEL},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD label-info button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_LABEL_INFO},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD label-danger button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_LABEL_DANGER},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD label-warn button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_LABEL_WARN},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD label-success button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_LABEL_SUCCESS},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD text button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_TEXT},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD tool button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, displayType: TYPE_TOOL},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD iconName button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, iconName: 'arrow-left'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD iconRightName button', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, iconRightName: 'arrow-right'},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should renders STD button with custom color', () => {
    const label = 'Button';
    const wrapper = mount(Button, {
      props: {label, style: {backgroundColor: 'palegreen'}},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
