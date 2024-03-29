'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    warnings: false,
    clientLogLevel: 'none'
  }
}).listen(3000, (err) => {
  if (err) {
    return console(err)
  }
  console.log('Listening on http://localhost:3000')
})
