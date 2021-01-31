<template>
  <div class="my-card" data-aos-once="true" data-aos="fade-in">
    <b-icon-eye-fill class="img-top" />
      <div class="card-body">
        <h5 class="card-title">Our Vision</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "VisionCard",
}
</script>

<style scoped>
  .my-card {
    display: flex;
    flex-direction: column;
  }
  .img-top {
    max-height: 200px;
    height: 200px;
    fill: white;
    width: auto;
    align-self: center;
  }
  
  .card-body {
    background-color: white;
    text-align: center;
  }
  @media (min-width: 1024px) {
    .card-body {
      border-radius: 2px;
    }
  }
</style>