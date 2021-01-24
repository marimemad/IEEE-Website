<template>
  <div id="app">
    <app-navigation/>
  </div>
</template>

<script>
import appNavigation from './components/AppNavigation.vue'

export default {
  name: 'App',
  components: {
    appNavigation
  }
}
</script>

<style>
#app {
}
</style>
