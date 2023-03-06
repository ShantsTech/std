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

import {unref} from 'vue';
import {getConfig, Config} from '../services/store';

export default function usei18n() {
  const translate = (key: string, fallback = '') => {
    const resolvedLanguage = unref(getConfig('language')) as Config<
      string,
      string
    >;
    return resolvedLanguage[key] ? resolvedLanguage[key] : fallback;
  };

  return {
    t: translate,
  };
}
