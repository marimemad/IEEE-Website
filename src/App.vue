<template>
  <div id="app">
    <!-- For social media icons as they usually follow copyright laws -->
    <app-navigation/>
    <transition
      name="fade"
      mode="out-in">
      <router-view style="z-index:0"></router-view>
    </transition>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
export default {
  components: { 
    AppNavigation
   },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
