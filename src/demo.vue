<template>
  <div>
  <button @click="open('HelloIndex')">打开页面：hello</button>
  <button @click="open('HelloIndex2')">打开页面：hello2</button>

  <div ref="box"></div>
  </div>
</template>

<script>
import Pages from './main.js'

export default {
  mounted () {
    this.pages = Pages(this.$refs.box)
  },
  methods: {
    open (name) {
      this.pages.open(name)
    }
  }
}
</script>

