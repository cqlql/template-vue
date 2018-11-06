<template>
  <div>
    <ul>
      <li>
        <button @click="open('home')">home</button>
      </li>
      <li>
        <button @click="open('about')">about</button>
      </li>
    </ul>

    <div class="right">
      <div ref="box"></div>
    </div>

  </div>
</template>

<script>
import Pages from '@/main.js'

export default {
  name: 'demo',
  mounted () {
    let vm = this
    Pages(this.$refs.box, function (pages) {
      vm.pages = pages
    })
  },
  methods: {
    open (name) {
      this.pages.open(name)
    }
  }
}
</script>

<style scoped>
.right {
  position: absolute;
  top: 0;
  right: 0;
  left: 300px;
  border: 1px solid #ddd;
}
</style>
