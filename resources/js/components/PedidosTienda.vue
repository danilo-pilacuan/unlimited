<template>
    <div>
        <h1 class="title">Pedidos</h1>
        <div class="container" v-for="pedido,index in tablaPedidos" :key="index">
            <div class="block">
                <div class="columns">
                <div class="column">

                    <div v-bind:class="{ 'entregado': pedido.estadoOrden==1,'noentregado':pedido.estadoOrden==0}" style="cursor: pointer;" @click="verPedido(pedido.id)">
                        <p class="subtitle">Fecha: {{pedido.fechaOrden}}</p>
                        <p class="subtitle">Estado: {{pedido.estadoOrden==1?"Entregado":"No entregado"}}</p>
                        <p class="subtitle">Valor Total: {{pedido.valorTotal}}</p>
                        <!-- <p class="subtitle">Precio: {{registroProducto.producto.precio}}</p>
                        <p class="subtitle">Cantidad: {{registroProducto.cantidad}}</p>
                        <p class="subtitle">Descripción: {{registroProducto.producto.descripcionCorta}}</p> -->
                        <!-- <p v-if="registroProducto.tipoRegistro==1" class="subtitle">Color: {{registroProducto.producto.caracteristicas_producto[registroProducto.idCaracteristica].color}}</p> -->
                    </div>

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
        this.fetchOrdenesByUserId()
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
        verPedido(id)
        {
            console.log("🚀 ~ file: PedidosUsuario.vue ~ line 55 ~ id", id)
            this.$router.push("/pedidos/"+id)
        },
        fetchOrdenesByUserId()
        {
            try {
                fetch(process.env.MIX_API_URL+"api/ordenes", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    this.tablaPedidos = data.respuesta;
                    console.log("tablaPedidos");
                    console.log(this.tablaPedidos);
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

<style>
.entregado
{
    background-color: rgb(38, 141, 47);
}
.noentregado
{
    background-color: rgb(150, 97, 87);
}
</style>
