<template>
  <div id="activities">
    <!-- TODO Add navbar component -->
    <div id="activity-landing">
      <div id="activity-heading">
        <h1>Explore what we do</h1>
      </div>
    </div>
    <b-container id="activity-cards">
      <b-row v-for="index in Math.ceil(database.length / 3) + 1" :key="index">
        <b-col sm="12" md="4" v-for="id in 3" :key="id">
          <Activity
            class="activity"
            v-if="getTranslatedId(id, index) < database.length"
            :title="database[getTranslatedId(id, index)].title"
            :description="database[getTranslatedId(id, index)].description"
            :date="database[getTranslatedId(id, index)].date"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Activity from "../components/activities/Activity";
import json from "../../database/database.json";

export default {
  name: "Activities",
  components: {
    Activity,
  },
  data() {
    var activities = json.activities;
    for (var i = 0; i < activities.length; i++) {
      activities[i].id = i;
    }
    return {
      database: activities,
    };
  },
  methods: {
    getTranslatedId(id, index) {
      return id - 1 + (index - 1) * 3;
    },
  },
};
</script>

<style scoped>
#activities {
  background-color: #eee;
}

#activity-landing {
  height: 100vh;
  background-image: url("../assets/activities/background.jpg");
  background-size: cover;
}

#activity-heading {
  color: #fff;
  top: 50%;
  position: absolute;
  width: 100%;
}

#activity-heading h1 {
  margin: 0;
  text-align: center;
}

#activity-cards {
  padding: 50px 0;
  height: 100vh;
}

.activity {
  margin: 15px 0;
}
</style>