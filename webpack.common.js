'use strict';
require('dotenv').config();// this is webpack4 config
//these files won't be transpiled

const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = module.exports = {};

webpackConfig.entry =`${__dirname}/src/main.js`; // one entry point for application
webpackConfig.output = {// one result/ output of application
  filename: '[name].[hash].js',// name is as main.js, hash is for CDN
  path: `${__dirname}/build`, // we are transpiling
  publicPath: process.env.CDN_URL, //this is for CDN
};

webpackConfig.plugins = [
  new HTMLWebpackPlugin({
    title: 'Your message title of HTML file',
  }),
];

webpackConfig.module = {}; //what is needs to transpile, all the rules below
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader', //array
    ],
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader', //object transpiling
      options: {
        presets: ['env', 'stage-0', 'react'], // babel trinspiles it into js file
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true, // transpile only the ones with changes not all
      },
    },
  },
];
