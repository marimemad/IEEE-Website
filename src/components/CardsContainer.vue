<template>
  <div class="section">
    <div class="cards-container">
      <breif/>
      <membership-vision/>
    </div>
  </div>
</template>

<script>
import Breif from './Breif.vue'
import MembershipVision from './MembershipVision.vue'

export default {
  name: 'CardsContainer',
  components: { 
    Breif,
    MembershipVision,
  },
}
</script>

<style scoped>
.section {
  background: linear-gradient(rgba(0, 0, 80, 0.4), rgba(0, 0, 80, 0.4)), url("../assets/bg-pattern.png");
  background-repeat: repeat;
  padding: 0;
  margin: 0;
}

.cards-container {
  max-width: 1200px;
  margin: auto;
  margin-top: 0;
}

</style>