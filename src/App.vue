<template>
  <div id="app">
    <Navbar/>
    <HelloWorld/>
    <Expertise/> 
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered has-text-weight-light">
          <h5 class="subtitle is-marginless" style="font-family: monospace;">
            "I will always choose a lazy person to do a difficult job.
Because, he will find an easy way to do it."
          </h5>
          <p >
           Bill Gates
          </p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import Expertise from "./components/Expertise";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Expertise,
    HelloWorld,

  }
};
</script>

<style >
#app {
  background-color: #363636;
}
* {
  font-family: "Open Sans", sans-serif;
}

h5 {
  font-family: "Oswald", sans-serif;
}

/* TODO: tablet breakpoint -1px to 768px for iPad styles */
</style>
