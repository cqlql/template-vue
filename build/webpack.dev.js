/* eslint comma-dangle: "off" */
/* dev 用。因为使用的是默认的 devServer */
const path = require('path')
const webpack = require('webpack')
const getIPAdress = require('./get-ip-adress')
const getCommConf = require('./webpack.base')
const merge = require('webpack-merge')

// dirname 项目所在目录
module.exports = function (options) {
  let conf = {
    mode: 'development',
    // 拆分后需使用 'source-map' css 才能正确定向。需使用 devtool: 'source-map'
    devtool: options.splitCss ? 'source-map' : 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    watch: true,
    output: {
      pathinfo: true, // 模块标注路径信息
      filename: 'js/[name].js?_=[hash:7]',
      chunkFilename: 'js/[name].bundle.js?_=[hash:7]',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // 启用 hot
    ],
    devServer: {
      clientLogLevel: 'warning', // 去掉没必要的控制台输出。比如 hot 情况 --progress 浏览器控制台不再显示进度输出
      contentBase: path.resolve(...(options.dirname ? [options.dirname] : [__dirname, '../']), 'dist'),
      compress: true,
      // historyApiFallback: true, // HTML5 History 模式情况开启
      host: getIPAdress(),
      // port: 3002,
      // openPage: 'http://192.168.1.222',
      inline: true,
      hot: true,
      hotOnly: false,
      // 这是webpack本身出于安全考虑，因为不检查主机的应用程序容易受到DNS重新绑定攻击。但是，在我们的开发环境下，可以禁用掉disableHostCheck这一配置项。
      disableHostCheck: true, // ie 报 Invalid Host/Origin header 问题
    }
  }

  return merge(
    getCommConf(options),
    conf
  )
}
