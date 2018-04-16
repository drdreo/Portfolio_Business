<template>
 <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered has-text-weight-light">
          <h5 class="subtitle is-marginless" style="font-family: monospace;">
            {{ quote }}
          </h5>
          <p>
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
      author: "Bill Gates"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
