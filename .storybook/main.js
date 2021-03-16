module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
   "@storybook/addon-actions",
   "@storybook/addon-links",
   "@storybook/preset-typescript"
  ],
   typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ?  !/node_modules/.test(prop.parent.fileName) : true),
 });
   
   config.resolve.extensions.push(".ts", ".tsx");
   return config;
  }
 };