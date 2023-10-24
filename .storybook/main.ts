import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // staticDirs: ['../src/stories/assets'],
  docs: {
    autodocs: 'tag',
  },
  // async webpackFinal(config: any) {
  //   config.module.rules = [
  //     {
  //       oneOf: [
  //         {
  //           test: /\.(png|jpe?g|gif|webp|svg)$/,
  //           type: 'asset/inline'
  //         }
  //       ]
  //     }
  //   ]
  //   return config;
  // }
};
export default config;
