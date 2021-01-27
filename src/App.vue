<template>
  <div id="app">
    <!-- For social media icons as they usually follow copyright laws -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <app-navigation :darkMode="darkMode"/>
    <router-view :darkMode="darkMode" style="z-index:0"/>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
export default {
  data() {
    return {
      darkMode: false
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
