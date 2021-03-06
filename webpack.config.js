const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        libraryTarget: 'this',
        library: 'tidy',
        filename: 'bundle.js',
        path: path.resolve('./dist')
    },
    module: {
      rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
  }
}
