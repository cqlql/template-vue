import Vue from 'vue'
import Router from 'vue-router'
import devNav from './dev.nav'

let routes = []

Vue.use(Router)

function importAll (r) {
  r.keys().forEach(key => {
    routes.push({
      path: key.match(/^\.\/[^/]+(\/[^/]+.*)[/.-]demo.vue/)[1],
      component: r(key).default
    })
  })
}
// 编译所有 demo
// importAll(require.context('@/', true, /^\.\/(components|modules)\/.*[/.-]demo\.vue$/))

// 编译指定 demo
importAll(require.context('@/', true, /^\.\/(components|modules)\/(toast|confirm|debug-msg|zoom-touch).*[/.-]demo\.vue$/))

devNav(routes)

export default new Router({
  routes: routes
})
