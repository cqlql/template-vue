module.exports = {
  baseUrl: '',
  css: {
    extract: false
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.libraryExport = 'default'
      config.output.libraryTarget = 'window'
      config.output.library = 'pages'
    } else {
      // 为开发环境修改配置...
      // console.log(config.resolve)
    }
  }

}
