import '@/comm.css'
// import '@/comm2.css?module'
// import '@/modules/css-base/transition.css'

// import '@/modules/corejs/em-auto'
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import goPage from '@/modules/go-page'

// import('@/comm2.css')

// import click from '@/modules/corejs/dom/click.vue'
// import msgSimple from '@/modules/popup/msg-simple'
// import axios from '@/modules/ajax-mid'
// import preloaderFull from '@/modules/preloader-full/preloader-full'
// import '@/modules/zoom-touch/picture-zoom-popup-init' // 放大看图初始

// console.log(comm)

Vue.prototype.bus = new Vue({
  data: {}
})
// Vue.prototype.$preloaderFull = preloaderFull
// Vue.prototype.$axios = axios

// Vue.prototype.$simpleMsg = msgSimple
// Vue.use(click)

router.beforeEach((to, from, next) => {
  // preloaderFull.show()
  document.title = to.meta.title || ''
  next()
})
router.afterEach(() => {
  // preloaderFull.close()
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

goPage(router)
