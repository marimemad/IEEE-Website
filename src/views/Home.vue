<template>
  <div class="home">
    <home-hero/>
    <cards-container/>
  </div>
</template>

<script>

import HomeHero from '@/components/HomeHero'
import CardsContainer from '@/components/CardsContainer'

export default {
  name: 'Home',
  components: {
    HomeHero,
    CardsContainer,
  }
}
</script>