<template>
  <div class="cs">
    <b-alert show>Default Alert</b-alert>
    <about-us v-bind:data="data['about']" />
    
  </div>
</template>

<script>
import Database from '/database/database';
import AboutUs from '@/components/committees/AboutUs';

export default{

  

  components:{
    'about-us':AboutUs

  },
  data(){
    return{
      data: Database.committees.cs
    }
  }
}

</script>
