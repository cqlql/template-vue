/* eslint comma-dangle: "off" */
const webpack = require('webpack')
const getCommConf = require('./webpack.base')
const merge = require('webpack-merge')
process.env.NODE_ENV = 'production'
module.exports = function (options) {
  let conf = {
    mode: 'production',
    devtool: options.sourceMap ? 'source-map' : 'none',
    plugins: [
      // 使用模块路径作为模块id。(路径为 hash)
      new webpack.HashedModuleIdsPlugin({
        // hashDigestLength: 7 // 默认 4
      }),
      // 使用模块路径作为模块id。(物理路径，测试用) // 目前 develoment 模式默认
      // new webpack.NamedModulesPlugin(),
    ]
  }

  return merge(
    getCommConf(options),
    conf
  )
}
