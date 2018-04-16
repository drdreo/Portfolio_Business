<template>
<nav class="navbar is-dark container">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://andreas-hahn.at">
      <img src="https://andreas-hahn.at/Images/logo.png" alt="Andreas K. Hahn Portfolio Page">
    </a>
    <div id="navbarBurger" class="navbar-burger burger" v-on:click="toggleNavbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarLinks" class="navbar-menu" >
   
    <div class="navbar-end">
      <a class="navbar-item" data-scroll-to="partners" @click="scrollTo">
        Partners
      </a>
      <a class="navbar-item" data-scroll-to="expertise" @click="scrollTo">
        Expertise
      </a>
      <a class="navbar-item" data-scroll-to="contact" @click="scrollTo">
        Contact
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleNavbar: function() {
      document.getElementById("navbarLinks").classList.toggle("is-active");
      document.getElementById("navbarBurger").classList.toggle("is-active");
    },
    scrollTo: function(e) {
      let scrollTo = e.target.dataset.scrollTo;
      let element = document.getElementById(scrollTo);

      if (element) {
        this.toggleNavbar();
        
        element.scrollIntoView(true); //TODO make a better scrollTo animation
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
