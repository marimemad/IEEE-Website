<template>
  <div class="cs">
    <about-us v-bind:data="data['about']" />
    <team v-bind:data="data['team']"/>
  </div>
</template>

<script>
import Database from '/database/database';
import AboutUs from '@/components/committees/AboutUs';
import Team from '@/components/committees/Team'

export default{

  

  components:{
    'about-us':AboutUs,
    'team':Team

  },
  data(){
    return{
      data: Database.committees.cs
    }
  }
}

</script>

<style scoped>


</style>