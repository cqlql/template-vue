//

// 批量导入路由
let routes = []
function importAll (r) {
  r.keys().forEach(key => {
    routes = routes.concat(r(key).default)
  })
}

importAll(require.context('', false, /^(?!\.\/nav-dev).+\.js$/))

export default [
  {
    path: '/',
    component: {
      render (h) {
        const h2Style = { padding: '20px 6px 0', 'font-size': '16px' }
        const pStyle = { padding: '4px 10px' }
        const aStyle = { color: 'blue', 'text-decoration': 'underline' }
        const a2Style = { color: 'aaa', 'text-decoration': 'underline' }

        const links = []
        routes.forEach(route => {
          links.push(<p style={pStyle}><router-link to={route.path} style={aStyle}>{route.meta.title}</router-link></p>)
        })

        return (
          <div>
            <h2 style={h2Style}>页面</h2>
            {links}
            <h2 style={h2Style}>接口 test</h2>
            <p style={pStyle}><a style={a2Style} onClick={this.getUserInfo} href="javascript:void(0)">getUserInfoTest</a></p>
          </div>
        )
      },
      methods: {
        getUserInfo () {
          console.log(123)
          // import('@/js/get-user-info').then(({default: getUserInfo}) => {
          //   return getUserInfo()
          // }).then(d => {
          //   console.log(d)
          // })
        }
      }
    }
  }
]
