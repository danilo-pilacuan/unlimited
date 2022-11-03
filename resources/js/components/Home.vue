<template>
    <div>
        <AnunciosComponent/>
        <NuevosProductos/>
        <ProductosPopulares/>
        <!-- <div class="container" v-for="producto,index in tablaProductos" :key="index">
            <div class="block" v-if="producto.estado==1">
                <div class="columns">
                <div class="column">
                    <section class="hero is-primary" style="cursor: pointer;">
                    <div class="hero-body">
                        <p class="title">Nombre: {{producto.Nombre}}</p>
                        <p class="subtitle">Código: {{producto.codigo}}</p>
                        <p class="subtitle">Precio: {{producto.precio}}</p>
                        <p class="subtitle">Descripción: {{producto.descripcionCorta}}</p>
                    </div>
                    </section>
                </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import AnunciosComponent from './AnunciosComponent.vue'
import NuevosProductos from './NuevosProductos.vue'
import ProductosPopulares from './ProductosPopulares.vue'

export default {
    components:{
        "AnunciosComponent":AnunciosComponent,
        "NuevosProductos":NuevosProductos,
        "ProductosPopulares":ProductosPopulares,
    },
    data()
    {
        return {
            tablaProductos:[]
        }
    },
    mounted()
    {
        this.getProductos()
    },
    methods:{
        async getProductos(){
            await this.axios.get(process.env.MIX_API_URL+'api/productos')
                      .then(response=>{
                        console.log("response")
                        console.log(response)
                        this.tablaProductos=response.data.respuesta
                        console.log(this.tablaProductos);
                      })
                      .catch(error=>{
                        this.tablaProductos = [];
                        console.log(error)
                      })
        },
        fetchProductos(){
            try {
                fetch(process.env.MIX_API_URL+"api/productos", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    this.tablaProductos = data.respuesta;
                    console.log("this.tablaProductos");
                    console.log(this.tablaProductos);
                    } else {
                    //this.$router.push("/login")
                    this.tablaProductos = [];
                    }
                });
            } catch (e) {
                this.$store.dispatch("setAuth", false);
            }
        }
    }
}
</script>
