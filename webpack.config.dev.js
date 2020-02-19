const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    filename: 'tij.js',
    path: path.resolve(__dirname, 'dist')
  },
};
