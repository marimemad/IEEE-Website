<template>
<div class="card card-shadow" data-aos-once="true" data-aos="fade-down">
  <img class="card-img-top card-img" style="fill:white;" :src="imgLink" :alt="imgAlt">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{text}}</p>
      <a :href="buttonLink" class="btn btn-primary">{{buttonText}}</a>
    </div>
</div>
</template>

<script>
export default {
  name: "CardWithButton",
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
      default: "Some quick example text"
    },
    imgLink: {
      type: String,
    },
    imgAlt: {
      type: String,
      default: "card image",
    },
    buttonText: {
      type: String,
      default: "Learn More",
    },
    buttonLink: {
      type: String,
      default: "#",
    },
  }
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