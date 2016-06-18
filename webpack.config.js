/* eslint no-console: 0 */
'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.argv.indexOf('-p') > -1;
const isWatch = process.argv.indexOf('--watch') > -1;

const webpackConfig = {
  entry: path.join(__dirname, 'viewer', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `index${isProduction ? '.min' : ''}.js`
  },
  resolve: {
    root: [
      path.join(__dirname)
    ],
    alias: {
      lodash: 'underscore'
    },
    extensions: ['.js', '.json', '.html', '.scss', '']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', ['css-loader', 'postcss-loader', 'sass-loader'])
    }]
  },
  plugins: [
    // new CleanWebpackPlugin(['cache/viewList/*'], {
    //   root: path.join(__dirname, '..'),
    //   verbose: false,
    //   dry: false
    // }),
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'viewer/index.html')
    })
  ],
  resolveLoader: {
    root: [
      path.join(__dirname, '..', 'node_modules')
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  stats: {
    children: false, // Avoid "child extract-text-webpack-plugin" spam,
    hash: false,
    version: false,
    colors: true,
    timings: false
  }
};

console.log('Input  ', webpackConfig.entry);
console.log('Output ', webpackConfig.output.path);
console.log('Modules', webpackConfig.resolve.root.join('   '));
console.log('Loaders', webpackConfig.resolveLoader.root.join('   '));

if (isWatch) {
  require('./server');
}

if (!isProduction) {
  webpackConfig.devtool = '#eval';
}

module.exports = webpackConfig;
