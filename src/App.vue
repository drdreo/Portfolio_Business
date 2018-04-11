<template>
  <div id="app" class="container is-widescreen">
    <img width="25%" src="https://commons.wikimedia.org/wiki/File:Vue.js_Logo.svg">
    <HelloWorld/>
    <Expertise/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Expertise from "./components/Expertise";

export default {
  name: "App",
  components: {
    HelloWorld,
    Expertise
  }
};
</script>

<style>
#app {

}

/* TODO: tablet breakpoint -1px to 768px for iPad styles */
</style>
