<template>
    <div class="index-page">
        <Navbar/>

        <Landing/>
        <Clients/>
        <Expertise/>
        <Quote/>
        <Contact/>

        <Footer/>
    </div>
</template>

<script>
  import Navbar from '~/components/Layout/Navbar.vue'
  import Footer from '~/components/Layout/Footer.vue'
  import Clients from '~/components/Clients.vue'
  import Landing from '~/components/Landing.vue'
  import Expertise from '~/components/Expertise.vue'
  import Quote from '~/components/Quote.vue'
  import Contact from '~/components/Contact.vue'

  export default {
    components: {
      Navbar,
      Footer,
      Landing,
      Clients,
      Expertise,
      Quote,
      Contact
    }
  }
</script>

<style>

    .index-page {
        background-color: #363636;
    }
</style>
