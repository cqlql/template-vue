<template>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    open (name) {
      this.$router.push({ name })
    }
  }
}
</script>
