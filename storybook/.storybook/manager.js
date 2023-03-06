import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';
import {version} from '../../package.json';

const orangehrmTheme = create({
  base: 'light',
  brandTitle: `STD Storybook - ${version}`,
  brandUrl: 'https://www.shants-tech.com',
  brandImage:
    'https://www.shants-tech.com/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg',
});

addons.setConfig({
  theme: orangehrmTheme,
});
