<template>
  <div>
    <p class="has-text-centered mt-3 has-text-white title">Nuevos</p>
    <b-carousel-list
      v-model="selectedProduct"
      :data="tablaProductos"
      :items-to-show="mobileDetected ? 1 : 4"
      :repeat="true"
      :arrow-hover="false"
    >
      <template #item="producto" class="contenedorGeneral">
        <div class="p-5 contenedorGeneral">
            <div class="cardProducto mt-2 mb-2">
              <div class="contenedorProducto  mt-2 mb-">
                <div>
                <figure class="image is-4by3">
                  <img
                  class="imgProducto"
                    :src="getUrlFoto(producto)"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div >
                <div>
                  <p class="subtitle mt-1">{{ producto.nombre }}</p>
                  <p class="mb-3 descripcionCorta">{{producto.descripcionCorta}}</p>
                  <div class="columns is-vcentered">
                    <div class="column is-8 p-0 mr-1 ml-3">
                        <hr class="mt-5 mb-0 pr-1">
                        <div class="precioProducto mt-1 mb-0">
                            <div v-if="producto.estado==2" class="title is-4" style="text-decoration: line-through; display:inline;">${{ producto.precio.toFixed(2) }}</div>
                            <div v-if="producto.estado==2" class="title is-4" style="display:inline;">${{ (producto.precio*(1-(producto.descuento/100))).toFixed(2) }}</div>
                            <div v-if="producto.estado==1" class="title is-4">${{ producto.precio.toFixed(2) }}</div>

                            </div>
                    </div>
                    <div class="column is-2 p-0 mb-2">
                        <b-button class="has-text-white" style="color:'#FFF'" type="is-primary" size="is-medium" tag="router-link"
                :to="'/mostrarproducto/'+producto.id" icon-left="cart" rounded></b-button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>

        <!-- <div class="card">
          <div class="card-content">
            <div class="content has-text-centered">
              <b-image
                :src="getUrlFoto(producto)"
                :alt="producto.nombre"
                ratio="6by4"
              ></b-image>
              <b-button
                type="is-success"
                tag="router-link"
                :to="'/mostrarproducto/' + producto.id"
                >Mostrar Producto</b-button
              >
            </div>
          </div>
        </div> -->
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { isMobile } from "mobile-device-detect";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      mobileDetected: isMobile ? true : false,
      selectedProduct: null,
      tablaProductos: [],
      tablaCategorias: [],
      showModalCreateEdit: false,
      inputCategoria: null,
      inputTipo: null,
      inputDescripcionLarga: "",
      inputDescripcionCorta: "",
      inputPrecio: 0,
      inputNombre: "",
      inputCodigo: "",
      inputEstado: null,
      isEdit: false,
      isAdd: false,
    };
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    cartList() {
      return this.$store.state.cartList;
    },
  },
  mounted() {
    this.fetchProductos();
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
    addToCart(producto) {
      console.log("Add cart: ");
      console.log(producto);
      let cartAux = this.cartList;
      cartAux.itemsList.push(producto);
      this.$store.dispatch("setCartList", cartAux);
    },
    showProduct(producto) {
      this.$router.push("/mostrarproducto/" + producto.id);
    },
    recoverStorage() {
      console.log("Recovered: " + this.authenticated);
      console.log("Recovered cart: ");
      console.log(this.cartList);
      console.log(this.cartList.data1);
    },
    cancel() {
      this.showModalCreateEdit = false;
      //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    fetchProductos() {
      console.log("process.env.MIX_API_URL");
      console.log(process.env.MIX_API_URL);
      try {
        fetch(process.env.MIX_API_URL + "api/productos?nuevos=1", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.tablaProductos = data.respuesta;
              this.tablaProductos.forEach((element) => {
                element.urlFotoPrincipal = this.getUrlFoto(element);
              });
              console.log("this.tablaProductos");
              console.log(this.tablaProductos);
            } else {
              this.tablaProductos = [];
            }
          });
      } catch (e) {}
    },
  },
};
</script>

<style>

</style>

<style>
.cardProducto
{
    border-radius: 3em;
    background-color: #FFFFFF;
}
.contenedorProducto
{
    padding: 2em;
}


.imgProducto {
  border-radius: 3em;
  display: block;
  height: 10em;
  width: auto;
}
.contenedorGeneral
{
    background-color: #eed9d9;
    border: 0px;
}
.carousel-list .carousel-slides .carousel-slide
{
    border: 0px;
}

.descripcionCorta {
  overflow: hidden;
  display: -webkit-box;
  min-height: 6em;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
