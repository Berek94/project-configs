const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'build');

const config = {
  entry: './src/index.ts',
  output: {
    path: buildPath,
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    contentBase: buildPath
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;
