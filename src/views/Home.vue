<template>
  <div class="home">
    <home-hero/>
    <breif/>
  </div>
</template>

<script>

import HomeHero from '@/components/HomeHero'
import Breif from '@/components/Breif'

export default {
  name: 'Home',
  components: {
    HomeHero,
    Breif,
  }
}
</script>