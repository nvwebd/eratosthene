const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfigReact = new HtmlWebpackPlugin({
  template: './src/react/Index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ENV = process.env.NODE_ENV;

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/react/Index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loader: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfigReact
  ]
}

if (ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
