<template>
    <div style="padding-bottom: 5em;" v-if="ordenPedido.user">

        <div class="mt-3 p-4">
            <h1 class="title">Atender Pedido</h1>
        <h1 class="subtitle">Items</h1>

                <div class="columns">
                <div class="column is-9">
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
                <div class="column is-3">
                    <div class="card p-5">
                        <h1 class="title">Datos de Envío</h1>

            <b-field label="Calle Principal">
                <b-input disabled v-model="ordenPedido.user.direccion.callePrincipal" maxlength="50"></b-input>
            </b-field>

            <b-field label="Calle Secundaria">
                <b-input disabled v-model="ordenPedido.user.direccion.calleSecundaria" maxlength="50"></b-input>
            </b-field>

            <b-field label="Numero de Casa/Departamento">
                <b-input disabled v-model="ordenPedido.user.direccion.numeroCasa" maxlength="50"></b-input>
            </b-field>

            <b-field label="Teléfono">
                <b-input disabled v-model="ordenPedido.user.direccion.telefono" maxlength="50"></b-input>
            </b-field>

            <b-field label="Ciudad">
                <b-input disabled v-model="ordenPedido.user.direccion.ciudad" maxlength="50"></b-input>
            </b-field>

            <b-field label="Marcar Como Entregado">
                <b-button type="is-primary" @click="fetchEntregado">Guardar</b-button>
            </b-field>
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
            tablaItems:[],
            ordenPedido:null
        }
    },
    mounted()
    {
        this.fetchItemsOrden()
        this.fetchOrden()
    },
    computed:{
        authenticated() {
            return this.$store.state.authenticated;
        },
        cartList(){
            return this.$store.state.cartList;
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
        fetchItemsOrden()
        {
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
                    this.ordenPedido = data.respuesta;
                    console.log("🚀 ~ file: MostrarPedidoTienda.vue ~ line 241 ~ .then ~ this.ordenPedido", this.ordenPedido)

                    } else {
                    //this.$router.push("/login")
                    this.ordenPedido = [];
                    }
                });
            } catch (e) {

            }
        },
        fetchEntregado()
        {
            try {
                fetch(process.env.MIX_API_URL+"api/ordenes/"+this.$route.params.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                })
                .then((response) => response.json())
                .then((data) => {
                    var resp = data.respuesta;

                    if (resp) {
                        this.$buefy.dialog.alert("Pedido marcado correctamente");
                        this.$router.push("/pedidos/");
                    } else {
                    //this.$router.push("/login")

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
