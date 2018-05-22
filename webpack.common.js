'use strict';

require('dotenv').config();
const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = module.exports = {}; 

webpackConfig.entry = `${__dirname}/src/main.js`; // one entry point for application
webpackConfig.output = {// tells where to output of application
  filename: '[name].[hash].js', // name = main.js, hash is for CDN
  path: `${__dirname}/build`, 
  publicPath: process.env.CDN_URL, // this is for CDN, defaults to '/'
};

webpackConfig.plugins = [
  new HTMLWebpackPlugin({// this makes index.html file, title is only an option
    title: 'Your message title of HTML file',
  }),
];

webpackConfig.module = {}; // modules object and adding all the rules below to transpile
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader', // object transpiling
      options: {
        presets: ['env', 'stage-0', 'react'], // babel transpiles it into js file
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];
