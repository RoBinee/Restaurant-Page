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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
