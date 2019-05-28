/* eslint comma-dangle: "off" */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getCommConf = require('./webpack.base')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
process.env.NODE_ENV = 'production'
module.exports = function (options) {
  if (options.indexTemplate === undefined) {
    options.indexTemplate = function () {
      return new HtmlWebpackPlugin({
        filename: './index.html',
        template: './src/index.html',
        // chunks: ['main'], // 指定引入的js包，只有main情况可忽略
        // inlineSource: /main\.js/,
        // inlineSource: /styles\.bundle\.js/,
        // inlineSource: /(styles\.bundle\.js|main\.js)/,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          // 内嵌 css js 压缩, 结合 HtmlWebpackInlineSourcePlugin 可能会压缩2次，非必要还是不要设了
          // minifyCSS: true,
          // minifyJS: true

          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        }
      })
    }
  }
  let conf = {
    mode: 'production',
    devtool: options.sourceMap ? 'source-map' : 'none',
    plugins: [
      // 使用模块路径作为模块id。(路径转为 hash)
      new webpack.HashedModuleIdsPlugin({
        // hashDigestLength: 7 // 默认 4
      }),
      // 使用模块路径作为模块id。(真实路径，测试用)
      // new webpack.NamedModulesPlugin(),
      // 将抽离的 css、js 包含进 html 文件
      // new HtmlWebpackInlineSourcePlugin(),
    ],
    optimization: {
      minimizer: [
        // js 压缩
        // https://webpack.docschina.org/plugins/terser-webpack-plugin/
        // https://github.com/terser-js/terser#minify-options
        new TerserPlugin({
          terserOptions: {
            output: {
              // 设置仅仅只有 ascii 十六进制写法被转义
              // 否则所有 Unicode 十六进制写法将被转义，比如换行的 \u0085 被编码成真正的换行，部分环境报错
              // 但所有的非ascii的原意字符都将被转换成十六进制
              ascii_only: true
            }
          },
        }),
      ],
    },
  }

  return merge(
    getCommConf(options),
    conf
  )
}
