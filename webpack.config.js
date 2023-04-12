const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //central point to make dependency graph
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js', //output filename
    path: path.resolve(__dirname, 'dist'), //output location
  },
};
