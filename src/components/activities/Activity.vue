<template>
  <div class="activity" :style="backgroundStyles(background)">
    <p class="activity-duration">Date: {{ date }}</p>
    <h3 class="activity-title">{{ title }}</h3>
    <p class="activity-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: {
    title: {
      type: String,
      default: "Activity",
    },
    description: {
      type: String,
      default: "This is an activity",
    },
    background: {
      type: String,
      default: "https://1.bp.blogspot.com/-bik6AotfT0M/X4R87hMVaqI/AAAAAAAAPws/JmmIww-SNscuR1MeW4_4wlrRT1SGXbNyQCLcBGAsYHQ/s0/AndroidStudio_logo.png",
    },
    date: {
      type: String,
      default: "TBA",
    },
  },
  methods: {
    backgroundStyles(background) {
      return {
        "background-image": `url(${background})`,
      };
    },
  },
};
</script>

<style scoped>
.activity {
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
}

.activity-duration {
  text-align: right;
}

.activity-title {
  text-align: center;
}
</style>