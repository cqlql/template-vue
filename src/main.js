import '@/comm.css'
// import '@/comm2.css?module'
// import '@/modules/css-base/transition.css'

// import '@/modules/corejs/em-auto'
import Vue from 'vue'
import App from './app.vue'

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

let vm = new Vue({
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
