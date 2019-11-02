<template>
    <nav class="navbar is-dark container">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://andreas-hahn.at">
                <img src="~assets/logo.svg" alt="Andreas K. Hahn Logo">
            </a>
            <div id="navbarBurger" class="navbar-burger burger" @click="toggleNavbar">
                <span/>
                <span/>
                <span/>
            </div>
        </div>

        <div id="navbarLinks" class="navbar-menu">
            <!-- mobile nav -->
            <div class="navbar-end is-hidden-desktop">
                <a class="navbar-item blue2" data-scroll-to="clients" @click="scrollTo">
                    Partners
                </a>
                <a class="navbar-item blue3" data-scroll-to="expertise" @click="scrollTo">
                    Expertise
                </a>
                <a class="navbar-item blue4" data-scroll-to="contact" @click="scrollTo">
                    Contact
                </a>
            </div>
            <!-- desktop nav -->
            <div class="navbar-end is-hidden-touch">
                <a class="navbar-item" data-scroll-to="clients" @click="scrollTo">
                    Partners
                </a>
                <a class="navbar-item" data-scroll-to="expertise" @click="scrollTo">
                    Expertise
                </a>
                <a class="navbar-item" data-scroll-to="contact" @click="scrollTo">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</template>

<script>

  export default {
    name: 'Navbar',
    methods: {
      toggleNavbar () {
        document.getElementById('navbarLinks').classList.toggle('is-active')
        document.getElementById('navbarBurger').classList.toggle('is-active')
      },
      scrollTo (e) {
        const scrollTo = e.target.dataset.scrollTo
        const target = document.getElementById(scrollTo)

        if (target) {
          // target.scrollIntoView(true);

          this.$scrollTo(target, 750, { easing: 'ease' })

          this.toggleNavbar()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
