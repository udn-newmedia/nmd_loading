"use strict";
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "nmd-loading.min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'nmd-loading.css'
    }),
    new CleanWebpackPlugin({ dry: true, protectWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
}