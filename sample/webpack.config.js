const path = require('path');

const {AureliaPlugin} = require('aurelia-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [srcDir, nodeModulesDir]
  },
  entry: {
    app: ['aurelia-bootstrapper']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: nodeModulesDir
      }
    ]
  },
  plugins: [
    new AureliaPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
