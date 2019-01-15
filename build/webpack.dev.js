/* eslint comma-dangle: "off" */
/* dev 用。因为使用的是默认的 devServer */
const path = require('path')
const webpack = require('webpack')
const getIPAdress = require('./get-ip-adress')

// dirname 项目所在目录
module.exports = function (dirname = path.resolve(__dirname, './')) {
  let conf = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    watch: true,
    output: {
      pathinfo: true,
      filename: 'js/[name].js?_=[hash:7]',
      chunkFilename: 'js/[name].bundle.js?_=[hash:7]',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // 启用 hot
    ],
    devServer: {
      clientLogLevel: 'warning', // 去掉没必要的控制台输出。比如 hot 情况 --progress 浏览器控制台不再显示进度输出
      contentBase: path.resolve(dirname, 'dist'),
      compress: true,
      host: getIPAdress(),
      // port: 3002,
      // openPage: 'http://192.168.1.222',
      inline: true,
      hot: true,
      hotOnly: false
    }
  }

  return conf
}
