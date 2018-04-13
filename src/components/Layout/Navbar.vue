<template>
<nav class="navbar is-dark container">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://andreas-hahn.at">
      <img src="https://andreas-hahn.at/Images/logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
    </a>
    <div class="navbar-burger burger" v-on:click="toggleNavbar" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
   
    <div class="navbar-end">
      <a class="navbar-item" href="https://bulma.io/">
        Partners
      </a>
      <a class="navbar-item" href="https://bulma.io/">
        Expertise
      </a>
      <a class="navbar-item" href="https://bulma.io/">
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
    toggleNavbar: function(event) {
      // Get the target from the "data-target" attribute
      var target = event.target.dataset.target;
      var $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      event.target.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
