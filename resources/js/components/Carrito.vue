<template>
  <div>
    <!-- <div class="has-text-left">

    </div> -->
    <p class="title" v-show="cartList.itemsList.length == 0">No hay items</p>

    <b-steps
      v-model="activeStep"
      :animated="false"
      :rounded="true"
      :has-navigation="false"
    >
      <b-step-item
        step="1"
        label="Resumen de Compra"
        :clickable="isStepsClickable"
      >
        <div class="pl-5 pr-5">
          <h1 class="subtitle">Carrito de Compras</h1>
          <div class="block">
            <div class="columns">
                <div class="column is-9">
                    <b-table
                    :data="cartList.itemsList"
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
                                :src="getUrlFoto(props.row.producto)"
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
                        <p v-if="props.row.producto.estado==2" style="text-decoration: line-through;">${{ props.row.producto.precio.toFixed(2) }}</p>
                        <p v-if="props.row.producto.estado==2" >${{ (props.row.producto.precio*(1-(props.row.producto.descuento/100))).toFixed(2) }}</p>
                        <p v-if="props.row.producto.estado==1">${{ props.row.producto.precio.toFixed(2) }}</p>


                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Cantidad"
                        field="cantidad"
                        centered
                    >

                            <b-numberinput
                    step="1"
                    :expanded="true"
                    :max="getExistencias(props.row.producto,props.row.caracteristica,props.row.tamanioCaracteristica,props.row.tamanioProducto)"
                    :min="1"
                    size="is-small"
                    controls-rounded
                    v-model="props.row.cantidad"
                    aria-minus-label="Decrement by 0.01"
                    aria-plus-label="Increment by 0.01">
                  </b-numberinput>

                    <!-- <input class="input" type="number" v-model="props.row.cantidad"> -->
                    </b-table-column>
                    <b-table-column
                        v-slot="props"
                        label="Total"
                        field="total"
                        centered
                    >
                        ${{ (props.row.cantidad*props.row.producto.precio*(1-(props.row.producto.descuento/100))).toFixed(2) }}
                    </b-table-column>
                    <!-- <b-table-column
                        v-slot="props"
                        label="Estado"
                        field="estado"
                        searchable
                    >
                        {{ props.row.estado?"Activo":"Inactivo" }}
                    </b-table-column> -->

                    <b-table-column field="actions" label="Acciones" v-slot="props">
                        <div class="buttons">
                        <!-- <b-button
                            rounded
                            type="is-warning"
                            icon-left="pencil"
                            @click="editFunction(props.row)"
                        >
                        </b-button> -->
                        <b-button
                            rounded
                            type="is-danger"
                            icon-left="delete"
                            @click="confirmDelete(props.row)"
                        >
                        </b-button>
                        </div>
                    </b-table-column>
                    </b-table>
                </div>
                <div class="column is-3">
<div class="card">

            <div class="card-content">
              <div class="content">
                <p class="title">Resumen</p>
                <p>Subtotal: ${{subtotal.toFixed(2)}}</p>
                <p>IVA: ${{iva.toFixed(2)}}</p>
                <p>Total: ${{total.toFixed(2)}}</p>
                <div class="columns is-centered is-multiline">
                    <div class="column is-12">
                        <b-button type="is-primary" expanded @click="checkout">Finalizar Compra</b-button>
                    </div>
                    <div class="column is-12">
                        <b-button type="is-danger" expanded @click="emptyCart">Vaciar Carrito</b-button>
                    </div>
                </div>
              </div>
            </div>
          </div>
                </div>
            </div>
          </div>
          <!-- <div
            class="container"
            v-for="(registroProducto, index) in cartList.itemsList"
            :key="index"
          >
            <div class="block">
              <div class="columns">
                <div class="column">
                  <section class="hero is-primary" style="cursor: pointer">
                    <div class="hero-body">
                      <p class="title">
                        Nombre: {{ registroProducto.producto.Nombre }}
                      </p>
                      <p class="subtitle">
                        Código: {{ registroProducto.producto.codigo }}
                      </p>
                      <p class="subtitle">
                        Precio: {{ registroProducto.producto.precio }}
                      </p>
                      <p class="subtitle">
                        Cantidad: {{ registroProducto.cantidad }}
                      </p>
                      <p class="subtitle">
                        Descripción:
                        {{ registroProducto.producto.descripcionCorta }}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </b-step-item>

      <b-step-item
        step="2"
        label="Identificación"
        :clickable="isStepsClickable"
        :type="{ 'is-success': isProfileSuccess }"
      >
        <h1 class="title has-text-centered">Profile</h1>
        Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item
        step="3"
        label="Entrega"
        :clickable="isStepsClickable"
      >
        <h1 class="title has-text-centered">Social</h1>
        Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item
        :step="showSocial ? '4' : '3'"
        label="Pago"
        :clickable="isStepsClickable"
        disabled
      >
        <h1 class="title has-text-centered">Finish</h1>
        Lorem ipsum dolor sit amet.
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import AnunciosComponent from "./AnunciosComponent.vue";

export default {
  components: {
    AnunciosComponent: AnunciosComponent,
  },
  data() {
    return {
      tablaProductos: [],
      subtotal:0,
      iva:0,
      total:0,
      activeStep: 0,

                showSocial: false,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: false,

                hasNavigation: true,
                customNavigation: false,
                isProfileSuccess: false,

                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'minimalist'
    };
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    cartList() {
      return this.$store.state.cartList;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  mounted() {
    let auxtotal=0;
    this.cartList.itemsList.forEach(element => {

        console.log("🚀 ~ file: Carrito.vue ~ line 270 ~ mounted ~ element", element)
        if(element.producto.estado==1)
        {
            auxtotal=auxtotal+(element.producto.precio*element.cantidad)
        }
        if(element.producto.estado==2)
        {
            auxtotal=auxtotal+((element.producto.precio*(1-(element.producto.descuento/100)))*element.cantidad)
        }
        console.log("🚀 ~ file: Carrito.vue ~ line 272 ~ mounted ~ element.cantidad", element.cantidad)
        console.log("🚀 ~ file: Carrito.vue ~ line 272 ~ mounted ~ element.producto.precio", element.producto.precio)
    });
    this.total=auxtotal
    this.subtotal=auxtotal*0.88
    this.iva=auxtotal*0.12
  },
  methods: {
    getUrlFoto(producto) {
      let urlImg = "";
      if (producto.tipo == 0 || producto.tipo == 3) {
        let arrayUrls = producto.urlsFotos.split(";");
        urlImg = arrayUrls[0];
      } else {
        // console.log("casasasaasas")
        // console.log(producto.caracteristicas_producto)
        if (
          producto.caracteristicas_producto &&
          producto.caracteristicas_producto.length > 0
        ) {
          let arrayUrls2 =
            producto.caracteristicas_producto[0].urlFoto.split(";");
          urlImg = arrayUrls2[0];
        }
      }
      return urlImg;
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
    checkout() {
      // this.cartList.itemsList.forEach(element => {
      //     this.fetchRegistroCarrito(element)
      // });

      if(this.authenticated)
      {
        try {
        fetch(process.env.MIX_API_URL + "api/ordenes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            currentUser: this.currentUser,
            itemsList: this.cartList.itemsList,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              // this.tablaProductos = data.respuesta;
              // console.log("this.datasssssssssssss");
              // console.log(resp);
              //this.$buefy.dialog.alert("Usuario agregado correctamente");
              this.emptyCart();
              this.$router.push("/usuario/pedidos");
            } else {
              //this.$router.push("/login")
              //this.tablaProductos = [];
            }
          });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
      }
      else
      {
        this.$router.push("/login")
      }
    },
    fetchRegistroCarrito(registroCarrito) {
      try {
        fetch(process.env.MIX_API_URL + "api/registrocarrito", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify(registroCarrito),
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
    emptyCart() {
      // let cartAux={
      //     data1:"ada",
      //     data2:"ada1",
      //     data3:"ada2",
      //     data4:"ada3",
      // }
      // this.$store.dispatch("setAuth", true)
      let cartAux = {
        itemsList: [],
      };
      this.$store.dispatch("setCartList", cartAux);
    },
    fetchProductos() {
      try {
        fetch(process.env.MIX_API_URL + "api/productos", {
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
    },
  },
};
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
