<template>
  <section class="section box">

    <div class="columns">  

      <div class="column">
        <h3 class="title is-3">I enhance businesses like yours.</h3>
        <p>The tech world is evolving at warp speed. Whether it's an app, website or platform, we build it with the newest technologies. If you're going to invest, why not in the best?</p>
      </div>
     
      <div class="column is-7">
        <div class="columns is-multiline">

          <div class="column is-6-tablet">
            <div class="is-horizontal-center is-flex">
              <figure class="image is-4by3">
                <img src="http://via.placeholder.com/200x200"/>
              </figure>
            </div>
            <h5 class="subtitle is-5">Webdesign & UI</h5>
            <p class="has-text-weight-light">Users evaluate a design in 50 milliseconds. You need people to take your brand seriously. I will help you make those first few milliseconds count.</p>
          </div>    

          <div class="column is-6-tablet">
            <div class="is-horizontal-center is-flex">
              <figure class="image is-4by3">
                <img src="http://via.placeholder.com/200x200"/>
              </figure>
            </div>
            <h5 class="subtitle is-5">Web development</h5>
            <p class="has-text-weight-light">Bringing your idea to life with the MEAN stack. Expertise in Node.js and Angular+. Creating sustainable code base for easy future maintainance</p>
          </div>

          <div class="column is-12-mobile">
            <h5 class="subtitle is-5">Digital Strategy</h5>
            <p class="has-text-weight-light">I’ll work with you to understand your business and make sure everything we do aligns with your goals.</p>
          </div> 
        </div>
      </div>

    </div>
   
  </section>
</template>

<script>
export default {
  name: "Expertise",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.is-horizontal-center {
  justify-content: center;
  padding-bottom: 12px;
}
.column .image {
  width: 100%;
  height: 100%;
}
</style>
