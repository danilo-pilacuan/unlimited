<template>
    <div class="fullPage">
        <Nav ref="navBarComponent" />

        <div class="appBody" v-bind:class="{ 'fondoLogin': setLoginStyle,'fondoRegister':setRegisterStyle}">
            <div class="mainSection">
                <router-view @actualizarCategorias="processEmit"/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'

export default {
    components:{
        "Nav":Nav,
        "Footer":Footer
    },
    methods:{
        processEmit(){
            console.log("emited");
            this.$refs.navBarComponent.fetchCategorias();
        }
    },
    data() {
    return {
      setLoginStyle:false,
      setRegisterStyle:false,
    };
  },
    watch: {
  '$route' () {
    if(this.$route.name=="login")
    {
        console.log("----------------------------- query")

        this.setLoginStyle=true
        this.setRegisterStyle=false
    }
    else if(this.$route.name=="registrarse")
    {
        console.log("----------------------------- query")

        this.setLoginStyle=false
        this.setRegisterStyle=true
    }
    else
    {
        this.setLoginStyle=false
        this.setRegisterStyle=false
    }
  }
},

}
</script>

<style>
.appBody {
  min-height: calc( 100vh - 4.75rem );
  padding: 0;
  margin-top: 0px;
}
.fullPage
{
min-height: 100vh;
}
.mainSection
{
    height: calc( 100% - 10rem );
    margin-bottom: 10rem;
}
.fondoRegister
{
    background-image: url("/imgs/fondoRegister.png");
        background-position: right -5rem;

    background-size:100% 100%;


}
.fondoLogin
{
    background-image: url("/imgs/logowhite.png");
}
</style>
