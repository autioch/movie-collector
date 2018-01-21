const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* Paths */
const projectPath = join(__dirname, '..');
const sourcePath = join(projectPath, 'src');
const distPath = join(projectPath, 'dist');
const assetsPath = 'assets';
const dataPath = 'data';

module.exports = {
  watch: true,
  target: 'electron',
  devtool: 'source-map',
  entry: join(sourcePath, 'index'),
  output: {
    path: distPath,
    filename: join(assetsPath, `[name].js`)
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react'],
        plugins: [ ['import', {
          libraryName: 'antd',
          style: 'css'
        }] ]
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      query: {
        name: join(assetsPath, '[name].[ext]')
      }
    }, {
      test: /\.(json)$/,
      loader: 'file-loader',
      query: {
        name: join(dataPath, '[name].[ext]')
      }
    }]
  },
  stats: {
    children: false,
    hash: false,
    version: false,
    colors: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: join(assetsPath, `[name].css`),
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: join(sourcePath, 'index.html'),
      filename: 'index.html',
      allChunks: true
    }),
    new CleanWebpackPlugin([distPath], {
      root: projectPath,
      verbose: false,
      dry: false,
      exclude: ['data']
    })
  ]
};
