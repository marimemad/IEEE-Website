<template>
  <div id="activities">
    <!-- TODO Add navbar component -->
    <div id="activity-landing">
      <div id="activity-heading">
        <h1>Explore what we do</h1>
      </div>
    </div>
    <div>
      <div
        class="row"
        v-for="index in Math.ceil(database.length / 3) + 1"
        :key="index"
      >
        <div class="col" v-for="id in 3" :key="id">
          <Activity
            v-if="getTranslatedId(id, index) < database.length"
            :title="database[getTranslatedId(id, index)].title"
            :description="database[getTranslatedId(id, index)].description"
            :date="database[getTranslatedId(id, index)].date"
          />
        </div>
      </div>
    </div>
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
</style>