<template>
  <div class="hero-image">
    <div class="hero-text">
      <div class="display-3">IEEE EXPERIENCE</div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde explicabo eligendi aliquid. Nihil eaque aliquam dolore incidunt corporis eum vitae.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHero'
}
</script>

<style scoped>
.hero-image {
/*   background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url('../assets/blurred-hero-bg-opt.jpg'); */
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/blurred-hero-bg-opt.jpg');
/*   background: url('../assets/blurred-hero-bg-opt.jpg'); */
  background-size: cover;
  width: 100%;
  height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
/*   display: inline-flex;
  flex-direction: column;
  justify-content: center;
  */
  text-align: center;
  color: white;
  text-shadow: 3px;
  padding: 3em;
  padding-bottom: 8em;
}
</style>