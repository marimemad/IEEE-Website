<template>
  <div class="card-container">
    <b-card no-body data-aos-once="true" data-aos="flip-down" class="overflow-hidden card">
      <b-row no-gutters>
        <b-col class="breif-text-card" md="6">
          <div class="img-holder">
            </div>
          <b-card-img class="round-0" src="https://ieee-zsb.org/images/Sliders/Final1300800.jpg" style="background-color:white" alt="Image" bottom></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="About IEEE">
            <b-card-text style="text-align:left;">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptates omnis beatae sapiente. Doloribus laborum at dolores recusandae! Distinctio minima beatae nobis nemo magnam laboriosam, eius a ipsam tenetur pariatur?
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Breif',
  data () {
    return {
      show: false,
    }
  }
}
</script>

<style scoped>
.card-container {
  padding-top: 1em;
}
.card {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  border-color: #ffffff;
  background-color: #cfcfcf;
  align-content: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .card-container {
    margin: 0;
    padding: 0;
    min-width: 100%;
  }
  .card {
    border-style: none;
    border-radius: 0 !important;
    margin: 0;
    padding: 0;
  }
}
</style>