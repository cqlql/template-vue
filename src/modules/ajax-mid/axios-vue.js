import axios from './index'
export default {
  install (Vue) {
    Vue.prototype.$axios = axios
  }
}
