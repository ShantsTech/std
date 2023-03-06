<!--
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
-->

<script lang="ts">
import {defineComponent, h, KeepAlive, onMounted, Transition} from 'vue';

export default defineComponent({
  name: 'std-tab-container',
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    showTabs: {
      type: Boolean,
      default: true,
    },
    animation: {
      type: Boolean,
      default: true,
    },
    keepAlive: {
      type: Boolean,
      default: false,
    },
    cacheAge: {
      type: Number,
      default: 10,
    },
  },
  emits: ['update:modelValue', 'clickTab'],
  setup(props, context) {
    let content = [];

    onMounted(() => {
      if (location.hash) {
        const hash = location.hash.replace(/^#/, '');
        const selectedTab = content.find(
          tab => hash === tab.props.name.replace(/\s+/g, '-').toLowerCase(),
        );
        if (selectedTab) {
          context.emit('update:modelValue', selectedTab.props.name);
        }
      }
    });

    return () => {
      content = context.slots.default?.();

      const generatePanels = (isKeepAlive: boolean) => {
        const activeTab = content.find((tab, index) => {
          if (!props.modelValue && index === 0) return true;
          return tab.props.name === props.modelValue;
        });
        return isKeepAlive
          ? h(KeepAlive, {age: props.cacheAge}, activeTab)
          : activeTab;
      };

      return h('div', {class: 'std-tab'}, [
        ...(props.showTabs
          ? [
              h(
                'div',
                {class: 'std-tab-bar'},
                content.map((tab, index) =>
                  h(
                    'a',
                    {
                      class: {
                        'std-tab-segment': true,
                        'std-tab-segment--active':
                          props.modelValue === tab.props.name ||
                          (props.modelValue === null && index === 0),
                        'std-tab-segment--disabled': tab.props?.disabled,
                      },
                      href: `#${tab.props.name
                        .replace(/\s+/g, '-')
                        .toLowerCase()}`,
                      onClick: ($e: MouseEvent) => {
                        if (tab.props?.disabled) {
                          $e.preventDefault();
                        } else {
                          context.emit('clickTab', $e, tab.props.name);
                          context.emit('update:modelValue', tab.props.name);
                        }
                      },
                    },
                    tab.props.name || index,
                  ),
                ),
              ),
            ]
          : []),
        ...(props.animation
          ? [
              h(
                Transition,
                {
                  name: 'transition-slide-right',
                },
                {
                  default: () => generatePanels(props.keepAlive),
                },
              ),
            ]
          : [generatePanels(props.keepAlive)]),
      ]);
    };
  },
});
</script>

<style src="./tab-container.scss" lang="scss" scoped></style>
