<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="8">
          <div class="contact-us">
            <h3>CONTACT US</h3>
            <div class="contact-info">
              email: cs@ieee-zsb.org
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="follow-us">
            <h3>FOLLOW US</h3>
            <div class="follow-links">
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "HomeFooter",
}
</script>

<style scoped>
footer {
  min-height: 180px;
  background-color: #1a1a2e;
  padding: 2em;
  color: white;
}
</style>