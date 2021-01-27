<template>
  <div data-aos-delay="500" data-aos-once="true" data-aos="fade-in">
    <img class="card-img-top card-img" src="@/assets/white_visibility.svg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Our Vision</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeMembershipCard"
}
</script>

<style scoped>
  .card-img-top {
    max-height: 200px;
  }
  
  .card-body {
    background-color: white;
    text-align: center;
  }
</style>