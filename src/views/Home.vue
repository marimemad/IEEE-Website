<template>
  <div class="home">
    <home-hero/>
    <home-content-container/>
    <home-footer/>
  </div>
</template>

<script>

import HomeHero from '@/components/Home/HomeHero'
import HomeContentContainer from '@/components/Home/HomeContentContainer'
import HomeFooter from '@/components/HomeFooter'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeContentContainer,
    HomeFooter,
  },
}
</script>
