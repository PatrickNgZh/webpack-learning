/*
    loader 1.download  2.use
    plugin 1.download  2.import  3.use
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
    }],
  },
  plugins: [
    // install html-webpack-plugin@next
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  // dev server build in memory
  devServer: {
    // due to html-webpack-plugin, contentBase is invalid
    // contentBase: resolve(__dirname, 'dist'),
    // send .html.zip for saving on bandwidth and download time
    compress: true,
    // default port
    port: 8080,
    open: true
  },
  // link packed code to original code
  // recommend development mode to use eval-cheap-module-source-map
  devtool: 'eval-cheap-module-source-map'
}
