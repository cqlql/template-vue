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

let createVm = function () {
  Vue.use(Loading)
  // Vue.use(Toast)
  const loading = Vue.loading

  const router = getRouter()

  router.beforeEach((to, from, next) => {
    loading.show()
    document.title = to.meta.title || ''
    next()
  })
  router.afterEach(() => {
    loading.hide()
  })
  return new Vue({
    router,
    render: h => h(App)
  })
}

let vm
let readyState = 0 // cdn 是否加载就绪
const pages = {
  open (name) {
    if (vm) {
      vm.$router.push({ name })
    } else {
      console.log('实例未初始')
    }
  },
  bind (el) {
    if (vm) {
      // 更换挂载的元素
      el.parentElement.replaceChild(vm.$el, el)
      return
    }
    if (readyState) {
      console.log('资源加载中')
      return
    }
    readyState = 1
    function success () {
      readyState = 2
      vm = createVm()
      vm.$mount(el)
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
}

export default pages
