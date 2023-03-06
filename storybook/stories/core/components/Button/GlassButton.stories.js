import GlassButton from '@ohrm/std/core/components/Button/GlassButton';
import {
  GLASS_ICON_TYPES,
  TYPE_GLASS_VIDEO,
} from '@ohrm/std/core/components/Button/types';

export default {
  title: 'Example/Button/GlassButton',
  component: GlassButton,
  argTypes: {
    icon: {
      control: {type: 'select', options: GLASS_ICON_TYPES},
      defaultValue: TYPE_GLASS_VIDEO,
    },
    style: {control: {type: 'object'}},
    disabled: {control: {type: 'boolean'}},
  },
};

const Template = args => ({
  setup() {
    return {args};
  },
  components: {'std-glass-button': GlassButton},
  template: '<std-glass-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Share Video',
};
