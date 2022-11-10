<template>
    <div>
        <h1 class="title">Pedido</h1>
        <h1 class="subtitle">Items</h1>
        <div class="container">
            <div class="block">
                <div class="columns">
                <div class="column is-12">
                    <b-table
                    :data="tablaItems"
                    :bordered="true"
                    :striped="false"
                    :hoverable="false"
                    :loading="false"
                    :focusable="false"
                    :mobile-cards="true"
                    :paginated="true"
                    :per-page="5"
                    >
                    <b-table-column
                        v-slot="props"
                        label="Item"
                        field="producto.urlFoto"
                        centered
                    >
                        <div class="contenedorImgProd">
                            <img
                            class="imgProducto"
                                :src="getUrlFoto(props.row)"
                                alt="Placeholder image"
                            />
                        </div>
                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Nombre Producto"
                        field="producto.descripcionCorta"
                        class="is-vcentered"
                        centered
                    >
                        {{ props.row.producto.nombre }}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Detalle"
                        field="producto.descripcionCorta"
                        class="is-vcentered"
                        centered
                    >
                        {{ props.row.producto.descripcionCorta }}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Precio"
                        field="precio"
                        centered
                    >
                        ${{ props.row.producto.precio.toFixed(2) }}
                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Cantidad"
                        field="cantidad"
                        centered
                    >

                            {{props.row.cantidad}}

                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Total"
                        field="total"
                        centered
                    >
                        ${{ (props.row.cantidad*props.row.producto.precio).toFixed(2) }}
                    </b-table-column>

                    <!-- <b-table-column field="actions" label="Acciones" v-slot="props">
                        <div class="buttons">
                        <b-button
                            rounded
                            type="is-danger"
                            icon-left="delete"
                            @click="confirmDelete(props.row)"
                        >
                        </b-button>
                        </div>
                    </b-table-column> -->
                    </b-table>

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
            tablaItems:[]

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
        getUrlFoto(item) {
      let urlImg = "";
      if (item.producto.tipo == 0 || item.producto.tipo == 3) {
        let arrayUrls = item.producto.urlsFotos.split(";");
        urlImg = arrayUrls[0];
      } else {
        // console.log("casasasaasas")
        // console.log(producto.caracteristicas_producto)
        if (
          item.caracteristica
        ) {
          let arrayUrls2 =
            item.caracteristica.urlFoto.split(";");
          urlImg = arrayUrls2[0];
        }
      }
      return "http://192.168.0.100:8000/"+urlImg;
    },
    getExistencias(producto,caracteristica,tamCaracteristica,tamProducto) {
      let existencias=0
      if (producto.tipo == 0){
        existencias=producto.existencias
      }
      if (producto.tipo == 1){
        existencias=caracteristica.existencias
      }
      if (producto.tipo == 2){
        existencias=tamCaracteristica.existencias
      }
      if (producto.tipo == 3){
        existencias=tamProducto.existencias
      }
      return existencias
    },
        fetchOrden()
        {
            console.log(process.env.MIX_API_URL+"api/registrocarrito/orden/"+this.$route.params.id)
            try {
                fetch(process.env.MIX_API_URL+"api/registrocarrito/orden/"+this.$route.params.id, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data;

                    if (data) {
                    this.tablaItems = data.respuesta;
                    console.log("pedido pedidopedidopedido");
                    console.log(this.tablaItems);
                    } else {
                    //this.$router.push("/login")
                    this.tablaItems = [];
                    }
                });
            } catch (e) {

            }

        },
    }
}
</script>

<style>
.contenedorImgProd
{
    width: 7em;
}
.imgProducto {

  height: 6em;
  width: auto;
}
td
{
        vertical-align: middle !important;
}
.b-numberinput.field.is-grouped div.control
{
    flex-grow: 1 !important;
    flex-shrink: 1 !important;

}
.b-numberinput
{
    display: inline-flex !important;
    min-width: 10em;
}
</style>
