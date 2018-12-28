const webpackConfig = require('./build/webpack.dev')(__dirname)

// proxy 文档：https://github.com/chimurai/http-proxy-middleware
webpackConfig.devServer.proxy = [{
  context: ["/mock"],
  target: "http://192.168.1.222:3003",
  pathRewrite: {
    '^/mock': ''
  },

  followRedirects: true, // 允许服务端重定向

  // 注意以下的自定义无法在浏览器端看到，因为是通过nodejs去请求的，而不是浏览器。所以只能在服务端看到
  // 1 会重写 host。以 target 重写
  changeOrigin: true,
  // 2 也可以自定义 host
  // hostRewrite: 'parent.shendupeiban.com',
  // 3 也可以通过下面这种方式设置 host
  // 定制请求 headers
  // onProxyReq: function(proxyReq, req, res){
  //   proxyReq.setHeader('Host',`192.168.1.222:3002`)
  //   proxyReq.setHeader('Cookie', `
  //     .ASPXAUTH=47DB; domain=192.168.1.194; expires=Wed, 08-Nov-2017 06:28:56 GMT; path=/; HttpOnly
  //   `.trim());
  // },

  // 定制响应 headers
  // onProxyRes: function(proxyRes, req, res){
  //   proxyRes.headers['Access-Control-Allow-Origin'] = '*'
  // }
  // 直接修改 headers
  // headers: {
  //   Cookie: 'ASP.NET_SessionId=nwlyo2azpq3zhimw4vgz0fqo; .ASPXAUTH=',
  //   Host: '192.168.1.110:8787',
  //   Origin: 'http://192.168.1.110:8787',
  //   'Upgrade-Insecure-Requests': 1,
  //   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
  // }
}]

module.exports = require('./build/friendly-error')(webpackConfig)
