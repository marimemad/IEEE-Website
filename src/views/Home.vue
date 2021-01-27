<template>
  <div class="home">
    <home-hero/>
    <cards-container/>
    <home-footer/>
  </div>
</template>

<script>

import HomeHero from '@/components/HomeHero'
import CardsContainer from '@/components/CardsContainer'
import HomeFooter from '@/components/HomeFooter'

export default {
  name: 'Home',
  components: {
    HomeHero,
    CardsContainer,
    HomeFooter,
  },
}
</script>