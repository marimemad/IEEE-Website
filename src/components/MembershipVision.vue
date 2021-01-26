<template>
  <b-container fluid class="cards-container">
    <b-row class="row-container">
      <b-col lg="6" class="card-col">
        <div class="card" data-aos-delay="500" data-aos-once="true" data-aos="flip-left">
          <img class="card-img-top card-img" src="../assets/white_visibility.svg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Our Vision</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </b-col>
      <b-col lg="6" class="card-col">
        <div class="card" data-aos-delay="500" data-aos-once="true" data-aos="flip-right">
          <img class="card-img-top card-img" src="../assets/white_membership.svg" alt="Card image cap">
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
  border-color: white;
  width: 26rem;
  background-color: transparent;
}

.cards-container {
  padding-top: 5em;
}

.card-col {
  background-color: transparent;
  padding:0; 
  margin: 0;
  max-width: 100%
}
.card-img {
  max-height: 200px;
  max-width: 200px;
  align-self: center;
  background-color: transparent;
}
.card-body {
  background-color: whitesmoke;
}
@media (max-width:992px) {
  .card {
    border: none;
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