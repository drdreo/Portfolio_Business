<template>
  <div id="app">
    <Navbar/>

    <Clients/>
    <Expertise/> 
    <Quote/>
    <Contact/>
    
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import Clients from "./components/Clients";
import Expertise from "./components/Expertise";
import Quote from "./components/Quote";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Clients,
    Expertise,
    Quote,
    Contact
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
