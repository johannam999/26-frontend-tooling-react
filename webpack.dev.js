'use strict';

const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const { HotModuleReplacementPlugin } = require('webpack'); // builtin webpack grabbing it from webpack, this is hot reloading, live-changes
// oldschool : const webapack=require('webpack').HotModuleReplacementPlugin
const webpackDevConfig = {};

webpackDevConfig.mode = 'development';// default to production so need to set up (build file would not be readable for safety if we had production env)
webpackDevConfig.devtool = 'inline-source-map'; 

webpackDevConfig.devServer = {// we do it when npm run watch
  contentBase: '/build',
  open: true, // open new tab on browser
  hot: true, // if changes to file it refreshes it automatically
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module = {};
webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [ // this order is important!!
      'style-loader', // compiles into the page, adds tag into html page
      'css-loader', // compiles into regular string
      'sass-loader', // looks at css file and compiles into readable css
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig); // serves npm run watch
