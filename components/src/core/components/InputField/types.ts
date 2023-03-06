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

export const COMPONENT_INPUT = 'std-input';
export const COMPONENT_FILE_INPUT = 'std-file-input';
export const COMPONENT_TEXTAREA = 'std-textarea';
export const COMPONENT_DROPDOWN_INPUT = 'std-dropdown-input';
export const COMPONENT_PASSWORD_INPUT = 'std-password-input';
export const COMPONENT_CHECKBOX_INPUT = 'std-checkbox-input';
export const COMPONENT_SWITCH_INPUT = 'std-switch-input';
export const COMPONENT_RADIO_INPUT = 'std-radio-input';
export const COMPONENT_DATE_INPUT = 'std-date-input';
export const COMPONENT_AUTOCOMPLETE_INPUT = 'std-autocomplete-input';
export const COMPONENT_SELECT_INPUT = 'std-select-input';
export const COMPONENT_MULTISELECT_INPUT = 'std-multiselect-input';
export const COMPONENT_TIME_INPUT = 'std-time-input';
export const COMPONENT_COLOR_INPUT = 'std-color-input';

export const TYPE_INPUT = 'input';
export const TYPE_FILE_INPUT = 'file';
export const TYPE_TEXTAREA = 'textarea';
export const TYPE_DROPDOWN = 'dropdown';
export const TYPE_PASSWORD = 'password';
export const TYPE_CHECKBOX = 'checkbox';
export const TYPE_SWITCH = 'switch';
export const TYPE_RADIO = 'radio';
export const TYPE_DATE = 'date';
export const TYPE_AUTOCOMPLETE = 'autocomplete';
export const TYPE_SELECT = 'select';
export const TYPE_MULTISELECT = 'multiselect';
export const TYPE_TIME = 'time';
export const TYPE_COLOR = 'color';

export const TYPES = [
  TYPE_INPUT,
  TYPE_FILE_INPUT,
  TYPE_TEXTAREA,
  TYPE_DROPDOWN,
  TYPE_PASSWORD,
  TYPE_CHECKBOX,
  TYPE_SWITCH,
  TYPE_RADIO,
  TYPE_DATE,
  TYPE_AUTOCOMPLETE,
  TYPE_SELECT,
  TYPE_MULTISELECT,
  TYPE_TIME,
  TYPE_COLOR,
];

export const TYPE_MAP: TypeMap = {
  [TYPE_INPUT]: COMPONENT_INPUT,
  [TYPE_FILE_INPUT]: COMPONENT_FILE_INPUT,
  [TYPE_TEXTAREA]: COMPONENT_TEXTAREA,
  [TYPE_DROPDOWN]: COMPONENT_DROPDOWN_INPUT,
  [TYPE_PASSWORD]: COMPONENT_PASSWORD_INPUT,
  [TYPE_CHECKBOX]: COMPONENT_CHECKBOX_INPUT,
  [TYPE_SWITCH]: COMPONENT_SWITCH_INPUT,
  [TYPE_RADIO]: COMPONENT_RADIO_INPUT,
  [TYPE_DATE]: COMPONENT_DATE_INPUT,
  [TYPE_AUTOCOMPLETE]: COMPONENT_AUTOCOMPLETE_INPUT,
  [TYPE_SELECT]: COMPONENT_SELECT_INPUT,
  [TYPE_MULTISELECT]: COMPONENT_MULTISELECT_INPUT,
  [TYPE_TIME]: COMPONENT_TIME_INPUT,
  [TYPE_COLOR]: COMPONENT_COLOR_INPUT,
};

export type Types =
  | typeof TYPE_INPUT
  | typeof TYPE_FILE_INPUT
  | typeof TYPE_TEXTAREA
  | typeof TYPE_DROPDOWN
  | typeof TYPE_PASSWORD
  | typeof TYPE_CHECKBOX
  | typeof TYPE_SWITCH
  | typeof TYPE_RADIO
  | typeof TYPE_DATE
  | typeof TYPE_AUTOCOMPLETE
  | typeof TYPE_SELECT
  | typeof TYPE_MULTISELECT
  | typeof TYPE_TIME
  | typeof TYPE_COLOR;

export type Components =
  | typeof COMPONENT_INPUT
  | typeof COMPONENT_FILE_INPUT
  | typeof COMPONENT_TEXTAREA
  | typeof COMPONENT_DROPDOWN_INPUT
  | typeof COMPONENT_PASSWORD_INPUT
  | typeof COMPONENT_CHECKBOX_INPUT
  | typeof COMPONENT_SWITCH_INPUT
  | typeof COMPONENT_RADIO_INPUT
  | typeof COMPONENT_DATE_INPUT
  | typeof COMPONENT_AUTOCOMPLETE_INPUT
  | typeof COMPONENT_SELECT_INPUT
  | typeof COMPONENT_MULTISELECT_INPUT
  | typeof COMPONENT_TIME_INPUT
  | typeof COMPONENT_COLOR_INPUT;

export interface TypeMap {
  [key: string]: Components;
}
