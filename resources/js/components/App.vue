<template>
    <div>
        <Nav/>

        <div>
            <router-view/>
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
    }
}
</script>
