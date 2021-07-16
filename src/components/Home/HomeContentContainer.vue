<template>
  <section  class="cards-section"> 
   <b-container fluid class="cards-container" mx="0">
      <b-row class="justify-content-center pb-0 pt-4">
        <h2>Our Activities</h2>
      </b-row>
      <b-row data-aos="flip-left" data-aos-delay="0" data-aos-duration="800" data-aos-easing="ease-in-quart" class="pb-2">
        <hr>
      </b-row>
      <b-row>
        <div data-aos="fade-down">
          <home-activities/>
        </div>
      </b-row>
      <b-row class="justify-content-center pt-5">
        <h2>Our Chapters</h2>
      </b-row>
      <b-row data-aos="flip-left" data-aos-delay="0" data-aos-duration="800" data-aos-easing="ease-in-quart" class="pb-3">
        <hr>
      </b-row>
      <b-row>
        <b-col md="6" class="px-0 px-md-3">
          <div data-aos="fade-right" data-aos-delay="700">
          <HomeRASCard/>
          </div>
        </b-col>
        <b-col md="6" class="px-0 px-md-3">
          <div data-aos="fade-left" data-aos-delay="700">
          <HomeCSCard/>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center pt-5">
        <h3>OUR PARTNERS</h3>
      </b-row>
      <b-row data-aos="flip-left" data-aos-delay="0" data-aos-duration="800" data-aos-easing="ease-in-quart" class="pb-3">
        <hr>
      </b-row>
      <b-row class="justify-content-center">
        <div data-aos-delay="700" data-aos="zoom-in-up" data-aos-once="true" >
          <home-partners-section/>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script>
/* import IEEEBreif from './HomeCards/IEEEBreif.vue' */
/* import HomeMembershipCard from './HomeCards/MembershipCard.vue' */
/* import HomeVisionCard from './HomeCards/VisionCard.vue' */
/* import HomeProjectsCard from './HomeCards/PorjectsCard.vue' */
/* import HomeEventsCard from './HomeCards/EventsCard.vue'
import HomeWorkshopsCard from './HomeCards/WorkshopsCard.vue' */
import HomeCSCard from './HomeCards/CSCard.vue'
import HomeRASCard from './HomeCards/RASCard.vue'
import HomePartnersSection from './PartnersSection.vue'
import HomeActivities from './HomeActivities.vue'

export default {
  name: 'HomeContentContainer',
  components: { 
/*     HomeMembershipCard, */
/*     HomeVisionCard, */
/*     HomeProjectsCard,
    HomeEventsCard,
    HomeWorkshopsCard, */
    HomePartnersSection,
    HomeActivities,
    HomeRASCard,
    HomeCSCard,
/*     IEEEBreif, */
  },
  props: {
    visionData: String,
  }
}
</script>

<style scoped>
section {
/*   background: linear-gradient(rgba(0, 0, 80, 0.4), rgba(0, 0, 80, 0.4)), url("../../assets/bg-pattern.png");
  background-repeat: repeat; */
  background-color: whitesmoke;
  color: #002855;
  padding: 0;
  margin: 0;
  padding-bottom: 5em;
}

h2 {
  margin: 0;
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
  border-radius: 16px;
/*   background-color: #7d84e7; */
  background-color: #002855; 
}

@media (min-width: 1000px) {
  .card-shadow {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
}
</style>