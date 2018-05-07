<template>
  <div>
    <transition
      :name="transitionName"
      :enter-active-class="transitionName&&'slide-active'"
      :leave-active-class="transitionName&&'slide-active'">
      <router-view :bus="bus"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['bus'],
    data () {
      return {
        transitionName: ''
      }
    },
    watch: {
      '$route' (to, from) {
        if (from.name) {
          let toPath = to.path
          let fromPath = from.path
          toPath = toPath.trim().replace(/\/$/, '').replace(/\/+/, '/')
          fromPath = fromPath.trim().replace(/\/$/, '').replace(/\/+/, '/')
          let toDepth = toPath.split('/').length
          let fromDepth = fromPath.split('/').length
          if (toDepth === fromDepth) {
            toDepth = to.meta.zIndex
            fromDepth = from.meta.zIndex
          }
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
      }
    }
  }
</script>

<style scoped>
  .slide-active{
    transition: 0.3s cubic-bezier(.55,0,.1,1);
    transition-property:opacity,transform;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
  }

</style>
