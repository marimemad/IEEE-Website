<template>
  <div id="app">
    <app-navigation :navbarCollapse='navbarCollapse'/>
    <router-view/>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
export default {
  data() {
    return {
      navbarCollapse: "xl"
    }
  },
  components: { 
    AppNavigation
   },
}
</script>

<style>
body {
  height: 100%;
  width: 100%;
}
</style>
