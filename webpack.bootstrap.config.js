const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ENV = process.env.NODE_ENV;

module.exports = [
  {
    entry: {
      main: path.resolve(__dirname, 'src/js/browser.js')
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader'}
          ]
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader'],
            publicPath: path.resolve(__dirname, '/dist')
          })
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
      }),
      new HtmlWebpackPlugin({
        title: 'Eratosthene - PixelPoint',
        template: path.resolve(__dirname, 'src/html/index.ejs')
      }),
      new ExtractTextPlugin({
       filename: 'style.css'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
];
