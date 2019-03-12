// https://storybook.js.org/configurations/typescript-config/#setting-up-typescript-to-work-with-storybook

const path = require('path')
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
