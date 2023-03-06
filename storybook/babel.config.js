module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['../'],
        extensions: ['.ts', '.tsx', '.vue', '.js', '.json'],
        alias: {
          '@sthrm/std': '../components/src',

          // storybook releated
          stories: './stories',
        },
      },
    ],
  ],
};
