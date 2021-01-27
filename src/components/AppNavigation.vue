<template>
  <section class="navigation">
    <b-navbar toggleable="xl" class="dark-nav" type="dark" >
      <b-navbar-brand to="/">IEEE ZSB <!-- ADD SVG LOGO --></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" type="dark" is-nav>
        <b-navbar-nav fixed>
          <b-nav-item class="hover-underline" to="/"><a>Home</a></b-nav-item>
          <b-nav-item class="hover-underline" to="/about"><a>About Us</a></b-nav-item>
          <b-nav-item class="hover-underline" to="/about">Events</b-nav-item>
          <b-nav-item class="hover-underline" to="/about">Activities</b-nav-item>
          <b-nav-item class="hover-underline" to="/about">Membership</b-nav-item>
          <b-nav-item class="hover-underline" to="/about">FAQ</b-nav-item>
          <b-nav-item class="hover-underline" to="/about">Committees</b-nav-item>
          <b-nav-item class="hover-underline" to="/about">Contact</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-bind:text="lang" right>
            <b-dropdown-item @click="changeSiteLangToEN" href="#">EN</b-dropdown-item>
            <b-dropdown-item @click="changeSiteLangToAR" href="#">AR</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      lang: "EN",
      navbarCollapse: "xl"
    }
  },
  props: {
/*     navbarCollapse */
  },
  methods: {
    changeSiteLangToAR() {
      this.lang = "AR";
    },
    changeSiteLangToEN() {
      this.lang = "EN";
    }
  }

}
</script>

<style scoped>
.navigation {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  box-shadow: 0 10px 10px -2px rgba(0,0,0,.4);
}
.dark-nav {
  background-color: #1a1a2e;
}

.white-text {
  color: white;
}

.hover-underline {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.hover-underline:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 45%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.hover-underline:hover:after { 
  width: 90%; 
  left: 5%;
}
</style>