<template>
<div class="card card-shadow" data-aos-once="true" data-aos="fade-down">
  <img class="card-img-top card-img" src="@/assets/white_workshops.svg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Workshops</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</template>

<script>
export default {
  name: "HomeWorkshopsCard"
}
</script>

<style scoped>
  .card-img-top {
    max-height: 200px;
  }
  .card {
    background-color: transparent;
  }
  
  .card-body {
    background-color: white;
  }
</style>