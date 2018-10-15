
<script>
export default {
  render () {
    return (
      <div class="h2">
          hello world2
      </div>
    )
  },
  created () {
    import('./dynamic-imports').then(d => {
      console.log('dynamic-imports 测试成功', d)
    })
  }
}
</script>

<style scoped>

.h2 {
  color: blue;
}

</style>
