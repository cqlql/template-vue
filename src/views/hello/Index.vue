<template>
  <div class="c1">
    <div class="logo"></div>
    <div :class="$style.mTest">hello word, {{helloState.d}}</div>
    <button @click="onChangeOtherState">改变额外的状态</button>
    <button @click="asyncReadFile">测试 async 语法</button>
  </div>
</template>

<script>
// 如果 使用 vue css 拆分，那么会与 style 的 css 拆分到一起
// import './index.css'
// 异步 css，其实就是异步 js，如果拆分 css，会多出一个空 js 异步包
// import('./index.css')

import helloState from './hello-state'

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    // 此处会立即执行(同步执行)
    // 强调：此处会在当前 new Promise 实例后立即执行

    setTimeout(() => {
      resolve(fileName)
    }, 100)
  })
}

export default {
  created () {
    this.helloState = helloState
  },
  methods: {
    onChangeOtherState () {
      helloState.d = helloState.d === 'bar' ? 'foo' : 'bar'
    },
    async asyncReadFile () {
      // 此处会立马同步执行

      // await 返回的是 Promise 的 resolve 执行后传入的值
      var f1 = await readFile('/etc/fstab')
      // 此处等待 await 异步执行完后才会执行

      var f2 = await readFile('/etc/shells')
      // 此处等待 await 异步执行完后才会执行

      console.log(f1.toString())
      console.log(f2.toString())
    }
  }
}
</script>

<style module>
.mTest {
  color: rgb(46, 146, 0);
}
</style>

<style scoped>
.logo {
  /* background: url('@/assets-comm/logo.png') */
}
.c1 {
  color: blue;
}
</style>
