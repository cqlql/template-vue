import Vue from 'vue'
import demo from './demo.vue'
// const about = import(/* webpackChunkName: "about" */ '@/views/About.vue')
// console.log(about)
/* eslint-disable no-new */
new Vue({
  render: h => h(demo)
}).$mount('#app')
