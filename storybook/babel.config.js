module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['../'],
        extensions: ['.ts', '.tsx', '.vue', '.js', '.json'],
        alias: {
          '@ohrm/std': '../components/src',

          // storybook releated
          stories: './stories',
        },
      },
    ],
  ],
};
