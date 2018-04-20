<template>
 <section class="hero is-dark quote-bg" v-bind:style="{ backgroundImage: bgImageUrl }">
      <div class="hero-body">
        <div class="container has-text-centered has-text-weight-light">
          <h5 class="subtitle is-marginless" style="font-family: monospace;">
            {{ quote }}
          </h5>
          <p class="quote-author">
           {{ author }}
          </p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Quote",
  data() {
    return {
      quote:
        '"I will always choose a lazy person to do a difficult job. Because, he will find an easy way to do it."',
      author: "Bill Gates",
      bgImageUrl:
        "url(https://imaginarydesign.co.uk/assets/images/polygonal-bg.jpg)"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote-bg {
  background: no-repeat center center;
}
.quote-author {
  letter-spacing: 0.05rem;
}
</style>
