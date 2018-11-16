<template>
  <div>
    <transition :name="slideName" :enter-active-class="'enter '+activeClass" :leave-active-class="activeClass">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import VTransition from '@/components/v-transition'
export default {
  data () {
    return {
      slideName: ''
    }
  },
  computed: {
    activeClass () {
      return this.slideName && 'slide-active'
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
        this.slideName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  },
  components: {
    VTransition
  }
}
</script>

<style scoped>
.slide-active {
  transition: 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition-property: opacity, transform;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
}
.enter {
  position: fixed;
}
.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
}
.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}
</style>
