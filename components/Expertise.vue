<template>
  <section id="expertise" class="section is-white hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="title punch-title is-3">
              I enhance businesses <br class="is-hidden-mobile">like
              yours.
            </h3>

            <p>
              The web world is evolving at warp speed. Whether it's an app, website or platform,
              i build it with you in mind.
              <br>
              You might not have the human resources right now, but still need the product asap.
              Or you want to skip the initial overhead and further develop it by yourself.
              <br>
              I got you <span class="has-text-primary has-text-weight-bold">covered!</span>
            </p>
          </div>

          <div class="column is-7">
            <div class="columns is-multiline">
              <div class="column is-6-tablet">
                <div class="is-horizontal-center is-flex">
                  <figure class="is-4by3">
                    <img src="~assets/webdesign.png" alt="">
                  </figure>
                </div>
                <h5 class="subtitle is-5">
                  Webdesign & UI
                </h5>
                <p class="has-text-weight-light">
                  Frontend can sometimes feel like someone grabbed a handful of pieces from five
                  different puzzles and
                  said to make it look like the picture on all of the boxes.
                </p>
                <p>I'd love to put it all together for you.</p>
              </div>

              <div class="column is-6-tablet">
                <div class="is-horizontal-center is-flex">
                  <figure class="is-4by3">
                    <img src="~assets/webdev.png" alt="">
                  </figure>
                </div>
                <h5 class="subtitle is-5">
                  Web Development
                </h5>
                <p class="has-text-weight-light">
                  Bringing your project to life with the most appropriate
                  technology.
                  Preferably the MEAN stack. Creating sustainable code for easier maintainance.
                </p>
              </div>

              <div class="column is-12-tablet is-12-mobile">
                <h5 class="subtitle is-5">
                  Digital Consulting
                </h5>
                <p class="has-text-weight-light">
                  Together we form your ideas into realizable projects,
                  ready for implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Expertise'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .is-horizontal-center {
        justify-content: center;
        padding-bottom: 12px;
    }
</style>
