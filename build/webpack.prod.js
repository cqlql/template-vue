const webpack = require('webpack')

module.exports = function ({
  env = d => d,
}) {
  process.env.NODE_ENV = 'production'

  let conf = {
    mode: 'production',
    plugins: [
      // 环境变量
      env(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ),
      // 使用模块路径作为模块id。(路径为 hash)
      new webpack.HashedModuleIdsPlugin({
        // hashDigestLength: 7 // 默认 4
      }),
      // 使用模块路径作为模块id。(物理路径，测试用) // 目前 develoment 模式默认
      // new webpack.NamedModulesPlugin(),
    ]
  }

  return conf
}
