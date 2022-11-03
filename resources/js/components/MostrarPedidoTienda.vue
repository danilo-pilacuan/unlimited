<template>
    <div>
        <h1 class="title">Atender Pedido</h1>
        <h1 class="subtitle">Items</h1>
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
</template>


<script>
export default {
    data()
    {
        return {
            tablaPedidos:[]

        }
    },
    mounted()
    {
        this.fetchOrden()
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
    methods:{

        fetchOrden()
        {
            try {
                fetch(process.env.MIX_API_URL+"api/ordenes/"+this.$route.params.id, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    this.pedido = data.respuesta;
                    console.log("pedido pedidopedidopedido");
                    console.log(this.pedido);
                    } else {
                    //this.$router.push("/login")
                    this.tablaPedidos = [];
                    }
                });
            } catch (e) {

            }

        },
    }
}
</script>
