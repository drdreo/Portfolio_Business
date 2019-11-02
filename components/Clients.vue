<template>
    <section id="clients" class="hero is-light">
        <div class="hero-body">
            <div class="container">
                <nav class="level">
                    <div v-for="(client, index) in clients" :key="index" class="level-item has-text-centered">
                        <div class="client">
                            <a :href="client.link" target="_blank" rel="noreferrer">
                                <div class="client-image">
                                    <figure class="image is-128x128 has-content-centered is-flex">
                                        <img :src="client.logo" alt="Client Logo">
                                    </figure>
                                </div>
                                <div class="client-name">
                                    <h4 class="title is-4 has-text-weight-light">{{ client.name }}</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
  import scLogo from '../assets/images/clients/sc_logo.png'
  import fitzLogo from '../assets/images/clients/fitz_logo_dark.svg'
  import fretelloLogo from '../assets/images/clients/fretello_logo.svg'
  import hahnLogo from '../assets/images/clients/hahn_logo.png'
  import moltkeLogo from '../assets/images/clients/moltke_logo.png'

  export default {
    name: 'Clients',
    data () {
      return {
        clients: [
          {
            name: 'Storyclash',
            link: 'http://www.storyclash.com',
            logo: scLogo
          },
          {
            name: 'F I T Z',
            link: 'http://www.f-i-t-z.com',
            logo: fitzLogo
          },
          {
            name: 'Fretello',
            link: 'https://www.fretello.com',
            logo: fretelloLogo
          },
          {
            name: 'Kurt Hahn',
            link: 'http://www.kurt-hahn.at',
            logo: hahnLogo
          },
          {
            name: 'Moltke',
            link: 'http://www.moltke-anger.de',
            logo: moltkeLogo
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    nav.level {
        flex-flow: row wrap;
    }

    .level-item {
        margin: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        .level-item {
            margin-bottom: 2rem;
        }
    }

    .client {
    }

    .client-image {
        display: flex;
        justify-content: center;
    }

    .client-name {
        padding: 1rem 1.5rem 0 1.5rem;
    }
</style>
