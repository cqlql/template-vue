import Vue from 'vue'
import Router from 'vue-router'
import getPageName from '@/modules/get-page-name'

// 批量导入路由
let routes = []
function importAll (r) {
  r.keys().forEach(key => {
    routes = routes.concat(r(key).default)
  })
}

// 指定只打包具体 router
if (process.env.NODE_ENV === 'production') {
  // 正式环境
  importAll(require.context('./router', false, /(reportwork)\.js$/))
} else {
  // 开发环境
  // importAll(require.context('./', true, /^\.\/nav-dev.js$|^\.\/router\/.+?\.js$/))
  importAll(require.context('./router', false, /\.js$/))
  // importAll(require.context('./', true, /^\.\/nav-dev.js$/))
}

routes = routes.concat([
  {
    path: '/404',
    name: '404',
    meta: { title: '404', zIndex: 99 },
    component: {
      template: `<div style="height:200px;font-size:30px;display:flex;align-items:center;justify-content: center;">404：没有这个页面(⊙﹏⊙)</div>`
    }
  },
  {
    path: '*',
    meta: {title: ''},
    redirect: to => {
      const pageName = getPageName()
      if (pageName) {
        return '/' + pageName
      } else {
        return '/404'
      }
    }
  }
])

Vue.use(Router)

export default new Router({
  routes: routes
})
