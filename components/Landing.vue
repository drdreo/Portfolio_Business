<template>
    <section id="landing" class="is-dark hero is-fullheight">
        <div class="hero-body">
            <div class="container is-fluid">
                <div class="columns">
                    <div id="landing-logo" class="column is-flex is-12-mobile has-content-centered">
                        <figure class="image">
                            <img src="~assets/logo.svg" alt="Andreas K. Hahn Logo">
                        </figure>
                    </div>

                    <div id="landing-text" class="column is-flex offscreen has-content-centered">
                        <h1 class="title is-1 punch-title">
                            <span class="punch-title has-text-primary">Web</span> Developer,
                            <br>freelancer<span class="has-text-primary">.</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {TweenMax, Power2, TimelineMax} from "gsap";

    /* eslint no-unused-vars: "off" */
    const fixTreeShaking = TweenMax;

    export default {
        name: "Landing",
        mounted() {
            this.showLandingText();
        },
        methods: {
            showLandingText() {
                const landingText = document.getElementById("landing-text");
                const logo = document.getElementById("landing-logo");

                let startPoint = 50;
                if (window.innerWidth <= 768) {
                    startPoint = 0;
                }

                const tlSet = new TimelineMax({paused: false});
                tlSet.set(landingText, {xPercent: 200});
                tlSet.set(logo, {xPercent: startPoint});
                // show landingText again to prevent flashing up during startup
                landingText.classList.remove("offscreen");

                const tl = new TimelineMax({paused: true, delay: 3.5});
                tl.to([landingText, logo], 1.2, {
                    xPercent: 0,
                    ease: Power2.easeOut
                });
                tl.play();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    object {
        max-width: 90vw;
    }

    #landing-text {
        /* prevent svg animation roll over text*/
        z-index: 1;

    }

    #landing-text.offscreen {
        opacity: 0;
    }

    .has-content-centered {
        justify-content: center;
        align-items: center;
    }

    .has-vertically-centered {
        align-items: center;
    }
</style>
