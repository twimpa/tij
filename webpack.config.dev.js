const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    filename: 'tij.mjs',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
  contentBase: './',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: 'javascript/esm',
        exclude: /node_modules/
      }
    ]
  }
};
