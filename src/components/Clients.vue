<template>
 <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered" v-for="(client, index) in clients" :key="index" >

            <div class="client">
                <div class="client__image">
                  <figure class="image is-128x128">
                    <img :src="client.logo" alt="Placeholder image"/>
                  </figure>         
                </div>
                <div class="client__name">  
                    <h4 class="title is-4 has-text-weight-light	">{{ client.name }}</h4>
                </div>
              </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      clients: [
        {
          name: "SC",
          link: "www.storyclash.com",
          logo: "https://bulma.io/images/placeholders/256x256.png"
        },
        {
          name: "SCasdasd",
          link: "www.storyclash.com",
          logo: "https://bulma.io/images/placeholders/256x256.png"
        },
        {
          name: "SCaaa Test for this",
          link: "www.storyclash.com",
          logo: "https://bulma.io/images/placeholders/256x256.png"
        },

        {
          name: "FITZ",
          link: "www.f-i-t-z.com",
          logo: "https://bulma.io/images/placeholders/256x256.png"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.client {
}
.client__image {
  display: flex;
  justify-content: center;
}

.client__name {
  padding: 1rem 1.5rem 0 1.5rem;
}
</style>
