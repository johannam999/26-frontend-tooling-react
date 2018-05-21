// only development environment
// test removing some the see what changes
'use strict';

const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const {HotModuleReplacementPlugin} = require('webpack');
const webpackDevConfig = {};

webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map'; // the slower the process is the better /more information I get => devtool docs

webpackDevConfig.devServer = {
  contentBase: '/build',
  open: true,// open new tab on browser
  hot:  true, // if changes to file it refreshes it automatically
  historyApiFallback: true,// this is if we have more routes to give illusion of single api to track history of browsing
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module = {};
webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [ //we need the right order of following
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);
