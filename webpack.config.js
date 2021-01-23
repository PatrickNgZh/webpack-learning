/*
    loader 1.download  2.use
    plugin 1.download  2.import  3.use
 */
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
}
