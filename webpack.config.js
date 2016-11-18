var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    javascript: './src/index.js',
    html: './public/index.html'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/public'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
