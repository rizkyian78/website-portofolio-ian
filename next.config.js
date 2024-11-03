/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less')
const withSVG = require('./webpack-extends/svgr')

const withTM = require('next-transpile-modules')(['@babel/runtime', 'rc-util']); // Add other packages if necessary


const lessConfig = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  javascriptEnabled: true,
  webpack(config) {
    return config
  },
})

const svgConfig = withSVG(lessConfig)

module.exports = withTM({
  ...svgConfig,
});
