import '@/comm.css'
// import '@/comm.css?module'

// import '@/modules/corejs/em-auto'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

// import click from '@/modules/corejs/dom/click.vue'
// import axios from '@/modules/ajax-mid'
import loading from '@/components/loading/plugin'
import toast from '@/components/toast/plugin'
import confirm from '@/components/confirm/plugin'
// import '@/modules/zoom-touch/picture-zoom-popup-init' // 放大看图初始

Vue.use(loading)
Vue.use(toast)
Vue.use(confirm)
// Vue.use(click)
// Vue.prototype.$axios = axios
const $loading = Vue.loading

Vue.prototype.bus = new Vue({
  data: {}
})

router.beforeEach((to, from, next) => {
  $loading.show()
  document.title = to.meta.title || ''
  next()
})
router.afterEach(() => {
  $loading.hide()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 根实例用可实现替换绑定的元素
  template: '<app/>',
  components: {
    App
  }
})

// router.push({name: 'ConferenceCreate'})
// import('@/modules/popup/debug-msg').then(({default: debug}) => {
//   debug(navigator.userAgent)
// })
