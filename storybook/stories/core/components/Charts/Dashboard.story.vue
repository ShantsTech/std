<!--
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
-->

<template>
  <div class="orangehrm-dashboard">
    <std-grid :cols="3">
      <std-grid-item>
        <std-sheet :gutters="false" class="orangehrm-dashboard-widget">
          <std-text type="card-title">Employee Distribution</std-text>
          <std-divider />
          <div class="orangehrm-dashboard-widget-body">
            <std-pie-chart :data="dataset"></std-pie-chart>
          </div>
        </std-sheet>
      </std-grid-item>
      <std-grid-item>
        <std-sheet :gutters="false" class="orangehrm-dashboard-widget">
          <std-text type="card-title">
            Employee Distribution (Custom)
          </std-text>
          <std-divider />
          <div class="orangehrm-dashboard-widget-body">
            <std-pie-chart
              :data="dataset"
              :aspect-ratio="false"
              :custom-legend="true"
              :custom-tooltip="true"
              wrapper-classes="emp-distrib-chart"
            ></std-pie-chart>
          </div>
        </std-sheet>
      </std-grid-item>
      <std-grid-item>
        <std-sheet :gutters="false" class="orangehrm-dashboard-widget">
          <std-text type="card-title">
            Time at work
          </std-text>
          <std-divider />
          <div class="orangehrm-dashboard-widget-body">
            <std-bar-chart
              :data="timeData"
              :grid="false"
              :yAxsis="false"
              :aspect-ratio="false"
            ></std-bar-chart>
          </div>
        </std-sheet>
      </std-grid-item>
    </std-grid>
  </div>
</template>

<script>
import Text from '@ohrm/std/core/components/Text/Text';
import Grid from '@ohrm/std/core/components/Grid/Grid';
import Sheet from '@ohrm/std/core/components/Sheet/Sheet';
import GridItem from '@ohrm/std/core/components/Grid/GridItem';
import Divider from '@ohrm/std/core/components/Divider/Divider';
import PieChart from '@ohrm/std/core/components/Chart/PieChart';
import BarChart from '@ohrm/std/core/components/Chart/BarChart';
import {CHART_COLORS} from '@ohrm/std/core/components/Chart/types';

export default {
  components: {
    'std-text': Text,
    'std-grid': Grid,
    'std-sheet': Sheet,
    'std-divider': Divider,
    'std-grid-item': GridItem,
    'std-pie-chart': PieChart,
    'std-bar-chart': BarChart,
  },
  data() {
    return {
      dataset: [
        {
          value: 25,
          label: 'Engineering',
          color: CHART_COLORS.COLOR_FANDANGO_PINK,
        },
        {
          value: 55,
          label: 'Marketing',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 30,
          label: 'Human Resources',
          color: CHART_COLORS.COLOR_PACIFIC_BLUE,
        },
        {
          value: 8,
          label: 'Management',
          color: CHART_COLORS.COLOR_MOUNTAIN_MEADOW,
        },
        {
          value: 60,
          label: 'Accounting',
          color: CHART_COLORS.COLOR_BLEU_DE_FRANCE,
        },
        {
          value: 30,
          label: 'Sales',
          color: CHART_COLORS.COLOR_YELLOW_GREEN,
        },
        {
          value: 40,
          label: 'Book Keeping',
          color: CHART_COLORS.COLOR_MEDIUM_ORCHID,
        },
        {
          value: 100,
          label:
            'Lorem ipsumcdolor sit amet consectetur adipisicing elit maiores voluptatum fuga neque iusto voluptas porro',
          color: CHART_COLORS.COLOR_CHROME_YELLOW,
        },
        {
          value: 7,
          label: 'Legal',
          color: CHART_COLORS.COLOR_MAJORELLE_BLUE,
        },
        {
          value: 150,
          label: 'Other',
          color: CHART_COLORS.COLOR_TART_ORANGE,
        },
      ],
      timeData: [
        {
          value: 4,
          label: 'Sun',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 3.5,
          label: 'Mon',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 0,
          label: 'Tue',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 6.25,
          label: 'Wed',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 8,
          label: 'Thu',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 1.33,
          label: 'Fri',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
        {
          value: 5,
          label: 'Sat',
          color: CHART_COLORS.COLOR_HEAT_WAVE,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.orangehrm-dashboard {
  &-widget {
    padding: 0.75rem;
    margin-bottom: 1rem;
    &-body {
      height: 340px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
      }
      &::-webkit-scrollbar-track {
        background: #f6f5fb;
      }
      &::-webkit-scrollbar-thumb {
        background: #cfd3de;
        border-radius: 1.2rem;
      }
      .emp-distrib-chart {
        height: 330px;
        width: auto;
      }
    }
  }
}
</style>
