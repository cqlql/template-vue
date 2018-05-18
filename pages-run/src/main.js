import Vue from 'vue'
import Demo from '@/demo.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 根实例用可实现替换绑定的元素
  template: '<Demo/>',
  components: {
    Demo
  }
})
