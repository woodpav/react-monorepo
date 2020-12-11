/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [{
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  node: {
    __dirname: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  externals: {
    express: 'require("express")',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, '../../packages'),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: '../web/build', to: 'client' },
      ],
    }),
  ],
}];
