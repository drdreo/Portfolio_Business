<template>
  <section id="landing" class="is-dark hero is-fullheight">
    <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-flex is-12-mobile has-content-centered">
                <figure class="image" width="200">
                <img src="../assets/logo.svg"/>
                </figure>
            </div>

            <div id="landing-text" class="column is-flex is-hidden has-content-centered">
              <h1 class="title is-1 punch-title"><span class="punch-title has-text-primary">Web</span> Developer, <br>we develop<span class="has-text-primary">.</span></h1>
            </div>

           </div>
         </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    showLandingText: function() {
      setTimeout(() => {
        const landingText = document.getElementById("landing-text");
        landingText.classList.remove("is-hidden");
      }, 5000);
    }
  },
  mounted: function() {
    console.log(" mounted");
    this.showLandingText();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.has-content-centered {
  justify-content: center;
  align-items: center;
}

.has-vertically-centered {
  align-items: center;
}
</style>
