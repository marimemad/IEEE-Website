<template>
<!-- This container extend from Hero to Footer (Footer excluded) -->
  <section class="cards-section"> 
 <!-- Use cards-section to change background, I used section element cause it looks more elegent not matching background img--> 
   <b-container fluid class="cards-container" mx="0">

        <!-- ABOUT IEEE -->
<!--       <section> -->
        <b-row>
          <IEEEBreif/>
        </b-row>
<!--       </section> -->

      <b-row class="py-5">
        <hr>
      </b-row>

      <!-- ?? -->
<!--       <section>      -->
        <b-row class="justify-content-center pb-5">
          <h3>??</h3>
        </b-row>
        <b-row>
          <b-col md="6" class="px-0 px-md-3">
            <home-vision-card/>
          </b-col>
          <b-col md="6" class="px-0 px-md-3">
            <home-membership-card/>
          </b-col>
        </b-row>
<!--       </section> -->

      <b-row class="py-5">
        <hr>
      </b-row>

        <!-- Our Work Section -->
<!--       <section> -->
        <b-row class="justify-content-center pb-5">
          <h3>OUR WORK</h3>
        </b-row>
        <b-row>
          <b-col md="4" class="px-0 px-md-3">
            <home-events-card/>
          </b-col>
          <b-col md="4" class="px-0 px-md-3">
            <home-workshops-card/>
          </b-col>
          <b-col md="4" class="px-0 px-md-3">
            <home-projects-card/>
          </b-col>
        </b-row>
<!--       </section> -->

      <b-row class="py-5">
        <hr>
      </b-row>

        <!-- Partners Section -->
<!--       <section>      -->
        <b-row class="justify-content-center pb-5">
          <h3>OUR PARTNERS</h3>
        </b-row>
        <b-row class="justify-content-center">
          <home-partners-section/>
        </b-row>
<!--       </section> -->

    </b-container>
  </section>
</template>

<script>
import IEEEBreif from './HomeCards/IEEEBreif.vue'
import HomeMembershipCard from './HomeCards/MembershipCard.vue'
import HomeVisionCard from './HomeCards/VisionCard.vue'
import HomeProjectsCard from './HomeCards/PorjectsCard.vue'
import HomeEventsCard from './HomeCards/EventsCard.vue'
import HomeWorkshopsCard from './HomeCards/WorkshopsCard.vue'
import HomePartnersSection from './PartnersSection.vue'

export default {
  name: 'HomeContentContainer',
  components: { 
    HomeMembershipCard,
    HomeVisionCard,
    HomeProjectsCard,
    HomeEventsCard,
    HomeWorkshopsCard,
    HomePartnersSection,
    IEEEBreif,
  },
  props: {
    visionData: String,
  }
}
</script>

<style scoped>
section {
  background: linear-gradient(rgba(0, 0, 80, 0.4), rgba(0, 0, 80, 0.4)), url("../../assets/bg-pattern.png");
  background-repeat: repeat;
  padding: 0;
  margin: 0;
  padding-bottom: 5em;
}

.cards-container {
  margin: auto;
  margin-top: 0;
  max-width: 1200px;
}

hr { 
  display: block; 
  width: 50%;
  border-width: 5px;
  background-color: #7d84e7;
}

h3 {
  color: white;
}

@media (min-width: 1000px) {
  .card-shadow {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
}
</style>