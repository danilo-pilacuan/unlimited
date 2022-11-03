<template>
    <!-- <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel> -->
    <div>
        <!-- <div class="anunnn">
            <p v-for="anuncio,index in tablaAnuncios" :key="index" :index="index">
                {{anuncio.descripcionCorta}}
            </p>
        </div> -->
        <!-- <carousel-3d>
            <slide v-for="(slide,index) in tablaAnuncios" :key="index" :index="index">
                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.id">
                </template>

            </slide>
        </carousel-3d> -->
        <b-carousel v-if="tablaAnuncios.length" :autoplay="false">
        <b-carousel-item v-for="(anuncio, i) in tablaAnuncios" :key="i">
                <section class="hero is-link">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{anuncio.descripcionCorta}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>

        <!-- <carousel-3d>
            <slide v-for="(slide, i) in tablaAnuncios" :index="i" :key="i">
                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                </template>
            </slide>
        </carousel-3d> -->

        <carousel-3d>
            <slide class="testSile" :index="0">
            <img
                    src="/imgs/slides/slide1.jpeg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </slide>
            <slide :index="1">
            <img
                    src="/imgs/slides/slide2.jpeg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </slide>
            <slide :index="2">
            <img
                    src="/imgs/slides/slide3.jpeg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </slide>
            <slide :index="3">
            <img
                    src="/imgs/slides/slide4.jpeg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </slide>
            <slide :index="4">
            <img
                    src="/imgs/slides/slide5.jpeg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </slide>
            <slide :index="5">
            <img
                    src="/imgs/slides/slide6.jpeg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    components: {
    Carousel3d,
    Slide
  },
    data(){
        return {
            tablaAnuncios:[]

        }
    },
    mounted(){
        this.fetchAnuncios()
    },
    methods:{
        fetchAnuncios(){
            try {
                fetch(process.env.MIX_API_URL+"api/anuncios", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    this.tablaAnuncios = data.respuesta;
                    console.log("this.tablaAnuncios");
                    console.log(this.tablaAnuncios);
                    } else {
                    //this.$router.push("/login")
                    this.tablaAnuncios = [];
                    }
                });
            } catch (e) {
                this.$store.dispatch("setAuth", false);
            }
        }
    }
}
</script>

<style>
.testSile{
    border-radius: 15px;

}
</style>
