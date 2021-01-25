<template>
  <b-container fluid class="cards-container">
    <b-row class="row-container">
      <b-col md="6" style="padding:0; margin: 0; max-width: 100%">
        <div class="card" data-aos-delay="500" data-aos-once="true" data-aos="flip-left">
          <img class="card-img-top" src="../assets/visibility.svg" style="background-color:white; max-height:200px" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Our Vision</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </b-col>
      <b-col md="6" style="padding:0; margin:0; max-width: 100%">
        <div class="card" data-aos-delay="500" data-aos-once="true" data-aos="flip-right">
          <img class="card-img-top" src="../assets/membership.svg" style="background-color:white; max-height:200px" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Membership Benfits</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'MembershipVision',
}
</script>

<style scoped>
.card {
  margin: auto;
  background-color: lightgray;
  border-color: white;
  width: 26rem;
}

.cards-container {
  padding-top: 1em;
}
@media (max-width:1024px) {
  .card {
    border-style: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .cards-container {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .row-container {
    margin: 0;
  }
}
</style>