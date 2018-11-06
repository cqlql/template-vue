import scriptLoad from './modules/corejs/dom/script-load'

// import '@/comm.css'
// import Vue from 'vue'
// import router from './router'
import App from './App.vue'
// import axios from './modules/ajax-mid/axios-vue'
import Loading from '@/components/loading/plugin'
import getRouter from './router'
// import Toast from '@/components/toast/plugin'
// import Confirm from '@/components/confirm/plugin'

function load (urls, success, error) {
  function excu () {
    let url = urls.shift()
    if (url) {
      scriptLoad({
        src: url,
        success: excu,
        error
      })
    } else {
      success()
    }
  }
  excu()
}

let once = function () {
  Vue.use(Loading)
  // Vue.use(Toast)
  // Vue.use(Confirm)

  // Vue.use(axios)
  const loading = Vue.loading

  const router = getRouter()

  router.beforeEach((to, from, next) => {
    console.log(to)
    loading.show()
    document.title = to.meta.title || ''
    next()
  })
  router.afterEach(() => {
    loading.hide()
  })
  const vm = new Vue({
    router,
    render: h => h(App)
  })
  once = function () { return vm }
  return vm
}

export default function (el, cb) {
  function success () {
    let vm = once()
    vm.$mount(el)
    cb(vm.$children[0])
  }

  load([
    'http://p2y63v1s4.bkt.clouddn.com/vue/2.5.13/vue.min.js',
    'http://p2y63v1s4.bkt.clouddn.com/vue-router/3.0.1/vue-router.min.js'
  ], function () {
    if (window.Promise) {
      success()
    } else {
      scriptLoad({
        src: 'http://p2y63v1s4.bkt.clouddn.com/babel/6.26.0/polyfill.min.js',
        success
      })
    }
  })
}
