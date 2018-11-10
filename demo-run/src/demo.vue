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
      <div ref="box" id="box"></div>
    </div>

  </div>
</template>

<script>
import pages from '@/main.js'

export default {
  name: 'demo',
  mounted () {
    // window.pages = pages
    pages.bind(this.$refs.box)
  },
  methods: {
    open (name) {
      pages.open(name)
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
