<template>
    <div>
        <div class="has-text-left">
       <b-button type="is-danger" @click="emptyCart">Vaciar Carrito</b-button>
       <b-button type="is-primary" @click="checkout">Finalizar Compra</b-button>
    </div>
        <p class="title" v-show="cartList.itemsList.length==0">No hay items</p>

         <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="false"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">
            <b-step-item step="1" label="Resumen de Compra" :clickable="isStepsClickable">
                <div class="pl-5 pr-5">
<h1 class="subtitle">Carrito de Compras</h1>
                <div class="container" v-for="registroProducto,index in cartList.itemsList" :key="index">
            <div class="block">
                <div class="columns">
                <div class="column">
                    <section class="hero is-primary" style="cursor: pointer;">
                    <div class="hero-body">
                        <p class="title">Nombre: {{registroProducto.producto.Nombre}}</p>
                        <p class="subtitle">Código: {{registroProducto.producto.codigo}}</p>
                        <p class="subtitle">Precio: {{registroProducto.producto.precio}}</p>
                        <p class="subtitle">Cantidad: {{registroProducto.cantidad}}</p>
                        <p class="subtitle">Descripción: {{registroProducto.producto.descripcionCorta}}</p>
                        <!-- <p v-if="registroProducto.tipoRegistro==1" class="subtitle">Color: {{registroProducto.producto.caracteristicas_producto[registroProducto.idCaracteristica].color}}</p> -->
                    </div>
                    </section>
                </div>
                </div>
            </div>
        </div>
                </div>
            </b-step-item>

            <b-step-item step="2" label="Identificación" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
                <h1 class="title has-text-centered">Profile</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>

            <b-step-item step="3" :visible="showSocial" label="Entrega" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Social</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>

            <b-step-item :step="showSocial ? '4' : '3'" label="Pago" :clickable="isStepsClickable" disabled>
                <h1 class="title has-text-centered">Finish</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>


        </b-steps>


    </div>
</template>

<script>
import AnunciosComponent from './AnunciosComponent.vue'

export default {
    components:{
        "AnunciosComponent":AnunciosComponent
    },
    data()
    {
        return {
            tablaProductos:[]
        }
    },
    computed:{
        authenticated() {
            return this.$store.state.authenticated;
        },
        cartList(){
            return this.$store.state.cartList;
        },
        currentUser(){
            return this.$store.state.currentUser;
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
        checkout(){

            // this.cartList.itemsList.forEach(element => {
            //     this.fetchRegistroCarrito(element)
            // });

            try {
                fetch(process.env.MIX_API_URL+"api/ordenes", {
                method: "POST",
                headers: { "Content-Type": "application/json","Accept": "application/json" },
                credentials: "include",
                body: JSON.stringify({currentUser:this.currentUser,itemsList:this.cartList.itemsList})
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    // this.tablaProductos = data.respuesta;
                    // console.log("this.datasssssssssssss");
                    // console.log(resp);
                    //this.$buefy.dialog.alert("Usuario agregado correctamente");
                    this.emptyCart()
                    this.$router.push("/usuario/pedidos")
                    } else {
                    //this.$router.push("/login")
                    //this.tablaProductos = [];
                    }
                });
            } catch (e) {
                this.$store.dispatch("setAuth", false);
            }

        },
        fetchRegistroCarrito(registroCarrito)
        {
            try {
                fetch(process.env.MIX_API_URL+"api/registrocarrito", {
                method: "POST",
                headers: { "Content-Type": "application/json","Accept": "application/json" },
                credentials: "include",
                body: JSON.stringify(registroCarrito)
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
        },
        emptyCart(){
            // let cartAux={
            //     data1:"ada",
            //     data2:"ada1",
            //     data3:"ada2",
            //     data4:"ada3",
            // }
            // this.$store.dispatch("setAuth", true)
            let cartAux={
                itemsList:[]
            }
            this.$store.dispatch("setCartList", cartAux)
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
