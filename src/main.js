import '@/comm.css'
// import '@/comm.css?module'

// import '@/modules/corejs/em-auto'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

// import click from '@/modules/corejs/dom/click.vue'
// import axios from '@/modules/ajax-mid'
import Loading from '@/components/loading/plugin'
import Toast from '@/components/toast/plugin'
import Confirm from '@/components/confirm/plugin'
// import '@/modules/zoom-touch/picture-zoom-popup-init' // 放大看图初始

Vue.use(Loading)
Vue.use(Toast)
Vue.use(Confirm)
// Vue.use(click)
// Vue.prototype.$axios = axios
const loading = Vue.loading

Vue.prototype.bus = new Vue({
  data: {}
})

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

// document.body.appendChild(vm.$mount().$el)
// let app = vm.$refs.app
// console.log(vm)

// export default {
//   mount (el) {
//     vm.$mount(el)
//   },
//   open: app.open
// }
export default function (el) {
  vm.$mount(el)
  return vm.$refs.app
}
