/*
 * This file is part of Stants Tech LLC
 *
 * Copyright (C) 2020 Stants Tech LLC
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

import {VNodeProps} from 'vue';

export interface ActionsCellConfig<T> {
  [key: string]: Action<T>;
}

export type ActionsCellConfigOnClickFunction<T> = (
  rowItem: T,
  e: Event,
) => void;

export interface Action<T> {
  onClick?: ActionsCellConfigOnClickFunction<T>;
  component?: string;
  props?: VNodeProps;
}

export interface RowItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  isSelectable?: boolean;
  isDisabled?: boolean;
}

export interface ActionCellEvent extends MouseEvent {
  context?: string;
}

export type DropdownOption = {
  label: string;
  context: string;
};
