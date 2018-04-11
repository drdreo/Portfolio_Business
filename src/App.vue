<template>
  <div id="app" class="container is-fluid">
    <img width="25%" src="./assets/logo.png">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
