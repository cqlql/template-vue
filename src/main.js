import '@/comm.css'
// import '@/comm.css?module' // 支持直接 module 导入

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

if (process.env.NODE_ENV !== 'production') { // 开发环境
  // 调试的简易方案。用来调试一些没有控制台调试的手机
  // require('@/components/debug-msg/w.js')
}

Vue.use(Loading)
Vue.use(Toast)
Vue.use(Confirm)
// Vue.use(click)
const loading = Vue.prototype.loading

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
