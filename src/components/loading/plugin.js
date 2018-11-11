import LoadingComponent from './index.vue'

export default {
  install: function (Vue) {
    const Loading = Vue.extend(LoadingComponent)
    const loading = new Loading().$mount() // 得到组件实例
    document.body.appendChild(loading.$el)
    Vue.loading = Vue.prototype.$loading = loading
  }
}
