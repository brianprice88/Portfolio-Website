var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       },
    },
    {
        test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
        loader: 'url-loader',
        test: /\.(png|jpg|gif)$/i,
      },
      {
        loader: 'file-loader',
        test: /\.(png|jpe?g|gif)$/i,
        options: {
          esModule: false,
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};