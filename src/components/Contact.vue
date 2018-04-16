<template>
 <section id="contact" class="hero is-light">
      <div class="hero-body">
        <div class="container has-text-centered">
         <h3 class="title punch-title is-2 is-spaced">
            Got some Work?
         </h3>
         <p class="subtitle is-6">
          If you got a project waiting around the corner, feel free to contact me.
          <br class="is-hidden-mobile"/> We can then arrange a meeting or a call.
         </p>
         <button class="button is-primary is-rounded is-outlined">Contact me</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Contact",
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
