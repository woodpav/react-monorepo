const path = require('path');

module.exports = {
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
    express: "require(\"express\")"
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
};
