import '@/comm.css'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

import Loading from '@/components/loading/plugin'
import Toast from '@/components/toast/plugin'
import Confirm from '@/components/confirm/plugin'

Vue.use(Loading)
Vue.use(Toast)
Vue.use(Confirm)
const loading = Vue.loading

// Vue.prototype.bus = new Vue({
//   data: {}
// })

router.beforeEach((to, from, next) => {
  loading.show()
  document.title = to.meta.title || ''
  next()
})
router.afterEach(() => {
  loading.hide()
})

let vm = new Vue({
  router,
  // 根实例用可实现替换绑定的元素
  template: '<app ref="app"/>',
  components: {
    App
  }
})

export default function (el) {
  vm.$mount(el)
  return vm.$refs.app
}
