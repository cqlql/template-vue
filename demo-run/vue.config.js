const path = require('path')
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.libraryExport = 'default'
      // config.output.libraryTarget = 'window'
      console.log(1)
      // console.log(config.output)
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      config.resolve.alias['@'] = path.resolve(__dirname, '../', 'src')
      // config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      // config.resolve.modules.push('E:\\github\\template-vue\\node_modules')
      // config.resolve.modules[1] = 'E:\\github\\template-vue\\node_modules'
      console.log(config)
      console.log(config.resolve)
    }
  }
}
