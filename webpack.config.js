const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
   entry: './src/js/index.js',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
clean: true
   },
   
   module: {
      rules: [{
        test: /\.(scss)$/,
        use: [
          // вставить CSS на страницу
          MiniCssExtractPlugin.loader
        , {
          // переводит CSS в модули CommonJS
          loader: 'css-loader'
        }, {
          // компилирует Sass в CSS
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }]
      }]
   },
   plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
      new HTMLWebpackPlugin({
        template: "./src/index.html",
      }),
   ]
};