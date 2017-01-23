const path = require('path');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'common/js/'),
    filename: 'bundle.js',
    publicPath: 'common/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
