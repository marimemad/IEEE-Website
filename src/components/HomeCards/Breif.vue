<template>
  <div class="card-container">
    <div data-aos-once="true" data-aos="flip-down" class="overflow-hidden card">
      <b-row no-gutters>
        <b-col md="6" class="img-holder">
            <b-card-img class="round-0" src="https://ieee-zsb.org/images/Sliders/Final1300800.jpg" style="border:none;" alt="Image"></b-card-img>
        </b-col>
        <b-col class="text-card" md="6">
          <b-card-body title="About IEEE">
            <b-card-text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptates omnis beatae sapiente. Doloribus laborum at dolores recusandae! Distinctio minima beatae nobis nemo magnam laboriosam, eius a ipsam tenetur pariatur?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptates omnis beatae sapiente. Doloribus laborum at dolores recusandae! Distinctio minima beatae nobis nemo magnam laboriosam, eius a ipsam tenetur pariatur?
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </div>
<!--     <hr> -->
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.card-container {
  padding-top: 5em;
}
.card {
  margin-left: auto;
  margin-right: auto;
/*   max-width: 1200px; */
  border-color: #ffffff;
  background-color: transparent;
  border: none;
  border-radius: 0 !important;
  align-content: center;
  justify-content: center;
  color: white;
  font-size: 1em;
}
.text-card {
  align-self: center;
  color: white;
}
.img-holder {
  display: flex;
  align-items: center;
}

/* hr { 
  display: block; 
  width: 50%;
  border-width: 5px;
  background-color: #7d84e7;
  margin-top: 5em;
} */

@media (max-width: 960px) {
/*   hr {
    margin-top: 3em;
  } */
  .card-container {
    margin: 0;
    padding: 0;
    min-width: 100%;
    padding-bottom: 2em;
  }
  .card {
    border-style: none;
    border-radius: 0 !important;
    margin: 0;
    padding: 0;
  }
}
</style>