const getCommConf = require('../../build/webpack.comm')
const getDevConf = require('../../build/webpack.dev')
const merge = require('webpack-merge')

module.exports = require('../../build/friendly-error')(merge(
  getCommConf({
    dirname: __dirname
    // splitCss: true,
  }),
  getDevConf(
    __dirname
  )
))
