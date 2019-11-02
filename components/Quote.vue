<template>
    <section class="quote__wrapper hero is-dark quote-bg" :style="backgroundStyle">
        <div class="hero-body">
            <div class="quote__text container has-text-centered has-text-weight-light">
                <h5 class="quote subtitle is-marginless">
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
    import {TweenMax, Power2, TimelineMax} from "gsap";

    import bg1 from "../assets/images/quotes/quoteBG1.jpg";
    import bg2 from "../assets/images/quotes/quoteBG2.jpg";
    import bg3 from "../assets/images/quotes/quoteBG3.jpg";
    import bg4 from "../assets/images/quotes/quoteBG4.jpg";
    import bg5 from "../assets/images/quotes/quoteBG5.jpg";
    import bg6 from "../assets/images/quotes/quoteBG6.jpg";
    import bg7 from "../assets/images/quotes/quoteBG7.jpg";
    import bg8 from "../assets/images/quotes/quoteBG8.jpg";
    import bg9 from "../assets/images/quotes/quoteBG9.jpg";
    import bg10 from "../assets/images/quotes/quoteBG10.jpg";

    /* eslint no-unused-vars: "off" */
    const fixTreeShaking = TweenMax;

    export default {
        name: "Quote",
        data() {
            return {
                quote:
                    "\"I will always choose a lazy person to do a difficult job. Because, he will find an easy way to do it.\"",
                author: "Bill Gates",
                bgImageUrls: [
                    bg1,
                    bg2,
                    bg3,
                    bg4,
                    bg5,
                    bg6,
                    bg7,
                    bg8,
                    bg9,
                    bg10
                ],
                animation: null
            };
        },
        computed: {
            backgroundStyle() {
                const bgImg = this.bgImageUrls[Math.floor(Math.random() * this.bgImageUrls.length)];

                return {
                    background: "center center no-repeat #363636",
                    backgroundSize: "cover",
                    backgroundImage: `url(${bgImg})`
                };
            }
        },
        mounted() {
            this.setAnimation();
            this.listen();
        },
        methods: {
            listen() {
                const quotewrapper = document.getElementsByClassName("quote__wrapper")[0];

                if (window.IntersectionObserver) {
                    this.setIntersectObserver({
                        $el: quotewrapper,
                        threshold: 0.4,
                        cb: this.onIntersection
                    });
                } else {
                    this.start();
                }
            },
            setAnimation() {
                const quote = document.getElementsByClassName("quote__text")[0];

                const tlSet = new TimelineMax({paused: false});
                tlSet.set(quote, {autoAlpha: 0});

                this.animation = new TimelineMax({paused: true});
                this.animation
                    .to(quote, 1.8, {
                        autoAlpha: 0.85,
                        ease: Power2.easeOut
                    })
                    .to(quote, 1.2, {
                        autoAlpha: 0.6,
                        ease: Power2.easeIn
                    })
                    .to(quote, 2, {
                        autoAlpha: 1,
                        ease: Power2.easeOut
                    });
            },
            start() {
                this.animation.play().timeScale(1);
            },

            onIntersection(entry, observer, threshold) {
                if (entry.intersectionRatio >= threshold) {
                    this.start();
                    observer.unobserve(entry.target);
                }
            },
            setIntersectObserver({$el, threshold, cb}) {
                const winHeight = window.innerHeight;
                threshold = Math.min(winHeight * threshold / $el.offsetHeight, threshold);

                const callback = (entries, observer) =>
                    cb(entries[0], observer, threshold);
                const observer = new IntersectionObserver(callback, {threshold});

                observer.observe($el);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .quote {
        text-shadow: 0px 0px 3px black;
        font-family: monospace;
    }

    .quote-author {
        letter-spacing: 0.05rem;
    }
</style>
