<template>
  <div id="app">
    <app-navigation :navbarCollapse='navbarCollapse'/>
    <router-view style="z-index:0"/>
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
#app {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
