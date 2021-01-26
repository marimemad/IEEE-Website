<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cs-committee">CS</router-link> |
      <router-link to="/ras-committee">RAS</router-link> |
      <router-link to="/activities">Activities</router-link> |

    </div>
    <router-view/>
  </div>
</template>

<style>
    html, body {
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>
