<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="asyncReadFile">测试 async 语法</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
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
