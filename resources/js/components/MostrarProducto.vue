<template>
  <div>
    <div class="container">
      <div class="block">
        <div class="columns is-multiline mt-2 is-vcentered">
          <div class="column is-4">
            <div class="carouselContainer p-3">
                <b-carousel :autoplay="false">
                  <b-carousel-item v-for="(img, i) in arrayImgs" :key="i">
                    <div class="cardCarousel">
                    <div class="stubImg"></div>
                    <div class="card-info">
                        <div class="card-logo-container">
                            <img class="card-logo" :src="envAPP + img" alt="">
                        </div>
                    </div>
                    </div>
                  </b-carousel-item>
                </b-carousel>
            </div>
          </div>
          <div class="column is-8">
            <div class="card infoContainer">
              <div class="card-content">
                <div class="content p-5">

                  <p class="title has-text-centered" style="font-family: ">{{ producto.nombre }}</p>
                  <hr>
                  <div class="has-text-centered mb-5">
                    <div v-if="producto.estado==2" class="title is-4" style="text-decoration: line-through; display:inline;">${{ producto.precio.toFixed(2) }}</div>
                    <div v-if="producto.estado==2" class="title is-4" style="display:inline;">${{ (producto.precio*(1-(producto.descuento/100))).toFixed(2) }}</div>
                    <div v-if="producto.estado==1" class="title is-4">${{ producto.precio.toFixed(2) }}</div>
                  </div>


                  <div class="container" v-if="producto.tipo == 1">
                    <div class="block">
                      <div class="columns is-multiline is-vcentered">
                        <div class="column is-2">
                            <p class="subtitle">Color:</p>
                        </div>
                        <div
                          class="column is-2"
                          v-for="(
                            caracteristica, indexCar
                          ) in producto.caracteristicas_producto"
                          :key="indexCar"
                        >
                          <p v-if="caracteristica.existencias>0"
                          v-bind:class="{ colorSeleccionado: caracteristica.seleccionado }"
                            class="subtitle"
                            :style="{
                              'background-color': caracteristica.color,
                              'width':'4rem',
                              'height':'2rem'
                            }"
                            style="cursor: pointer"
                            @click="
                              handleSeleccionCaracteristica(caracteristica)
                            "
                          >

                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="block" v-if="registroCarrito.caracteristica">
                      <div v-show="registroCarrito.caracteristica.color">
                        <br />
                        <br />
                        <p>Escogido:</p>
                        <p
                          class="subtitle"
                          :style="{
                            'background-color':
                              registroCarrito.caracteristica.color,
                          }"
                        >
                          Color: {{ registroCarrito.caracteristica.color }}
                        </p>

                        <br /><br />
                      </div>
                    </div> -->
                  </div>

                  <!-- <p>testp</p> -->

                  <div class="container" v-if="producto.tipo == 2">

                    <div class="block">
                      <div class="columns is-multiline is-vcentered">
                        <div class="column is-2">
                            <p class="subtitle">Color:</p>
                        </div>
                        <div
                          class="column is-2"
                          v-for="(
                            caracteristica, indexCar
                          ) in producto.caracteristicas_producto"
                          :key="indexCar"
                        >
                          <!-- <p class="subtitle">
                          {{ caracteristica.descripcion }}
                          </p> -->
                          <p
                          v-bind:class="{ colorSeleccionado: caracteristica.seleccionado }"
                            class="subtitle"
                            :style="{
                              'background-color': caracteristica.color,
                              'width':'4rem',
                              'height':'2rem'
                            }"
                            style="cursor: pointer"
                            @click="
                              handleSeleccionCaracteristica(caracteristica)
                            "
                          >

                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="block" v-if="registroCarrito.caracteristica">
                      <div v-show="registroCarrito.caracteristica.color">
                        <div class="columns">
                        <div class="column is-2">
                            <p class="subtitle">Tamaño:</p>
                        </div>

                          <div class="column is-2">
                            <b-select
                                placeholder="Seleccionar Tamaño"
                                v-model="tamCaracteristicaSelected"
                                @input="handleSelectTamCaracteristica"
                              >
                                <option
                                  v-for="option in tamaniosCaractesisticaSelected.filter(element => element.existencias > 0)"
                                  :value="option"
                                  :key="option.id"
                                >
                                  {{ option.tamanio.descripcion }}
                                </option>
                              </b-select>
                          </div>
                        </div>

                        <br />
                        <br />
                      </div>
                    </div>
                  </div>

                  <!-- <p>testp</p> -->

                  <div class="container" v-if="producto.tipo == 3">
                    <p>Producto con Tamaños</p>
                    <br />
                    <div class="block">
                      <div class="columns">
                        <div class="column">
                          <b-field horizontal label="Tamaño">
                            <b-select
                              placeholder="Seleccionar Tamaño"
                              v-model="tamProductoSelected"
                              @input="handleSelectTamProducto"
                            >
                              <option
                                v-for="option in producto.tamanios_producto.filter(element => element.existencias > 0)"
                                :value="option"
                                :key="option.id"
                              >
                                {{ option.tamanio.descripcion }}
                              </option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>

                    </div>
                  </div>

                    <div class="columns is-mobile is-centered">
                    <div class="column is-4">
                        <b-numberinput
                            step="1"
                            :max="maxProductos"
                            :min="1"
                            v-model="registroCarrito.cantidad"
                            aria-minus-label="Decrement by 0.01"
                            aria-plus-label="Increment by 0.01"
                          >
                          </b-numberinput>
                    </div>
                    <div class="column is-4">
                        <b-button
                    type="is-danger"
                    :disabled="disableButton"
                    @click="addToCart()"
                    >Añadir al Carrito</b-button>
                    </div>
                  </div>

                  <div class="columns">
                    <div class="column is-12">
                        <p><b>Código:</b> {{producto.codigo}}</p>
                        <p><b>Información:</b></p>
                        <p>{{producto.descripcionCorta}}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="column is-12 infoContainer p-5">
                <div class="p-5">
                    <div v-html="producto.descripcionLarga">
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxProductos:0,
      envAPP: process.env.MIX_API_URL,
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
      arrayImgs: [],
      disableButton: true,
      tamCaracteristicaSelected: null,
      tamProductoSelected: null,
      tamaniosCaractesisticaSelected: null,
      registroCarrito: {
        id: 0,
        producto: null,
        caracteristica: null,
        tamanioCaracteristica: null,
        tamanioProducto: null,
        tipoRegistro: 0,
        idCaracteristica: 0,
        idTamanioCaracteristica: 0,
        idTamanioProducto: 0,
        cantidad: 0,
      },
      tablaDatos: [],
      tablaCategorias: [],
      showModalCreateEdit: false,
      listaTamsCaracSelect: null,
      isEdit: false,
      isAdd: false,
      producto: {
        id: 0,
        codigo: "",
        nombre: "",
        precio: 0,
        descripcionCorta: "",
        descripcionLarga: "",
        urlsFotos: "C:",
        existencias: 0,
        estado: 1,
        visitas: 0,
        tipo: 1,
        descuento: 0,
        idCategoria: 1,
      },
    };
  },
  mounted() {
    this.fetchProducto();
    this.fetchAddVisita();
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    userType() {
      return this.$store.state.userType;
    },
    cartList() {
      return this.$store.state.cartList;
    },
  },
  methods: {
    fetchAddVisita(){
        if(this.userType==2)
        {
            console.log(process.env.MIX_API_URL + "api/productos/visitas/" + this.$route.params.id)
            fetch(process.env.MIX_API_URL + "api/productos/visitas/" + this.$route.params.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body:JSON.stringify({id:0}),
            })
            .then((response) => response.json())
            .then((data) => {
            var resp = data.resultado;
                if(resp)
                {
                    console.log("🚀 ~ file: PerfilUsuario.vue ~ line 169 ~ .then ~ resp", resp)
                }


            });
        }
    },
    handleSelectTamProducto(tamanioProducto) {
      console.log("dsasd");
      console.log(tamanioProducto);
      console.log("tamProductoSelected");
      console.log(this.tamProductoSelected);
      this.registroCarrito.tamanioProducto = tamanioProducto;
      this.disableButton = false;
      this.maxProductos=tamanioProducto.existencias
      this.registroCarrito.cantidad=1
    },
    handleSelectTamCaracteristica(tamanioCaracteristica) {
      console.log("dsasd");
      console.log(tamanioCaracteristica);
      console.log("tamCaracteristicaSelected");
      console.log(this.tamCaracteristicaSelected);
      this.registroCarrito.tamanioCaracteristica = tamanioCaracteristica;
      this.disableButton = false;
      this.maxProductos=tamanioCaracteristica.existencias;
      this.registroCarrito.cantidad=1
    },
    handleSeleccionCaracteristica(caracteristica) {

        this.producto.caracteristicas_producto.forEach(element => {
            element.seleccionado=0;
        });
        caracteristica.seleccionado=1;
        this.arrayImgs = caracteristica.urlFoto.split(";");
        this.arrayImgs.pop();

      if (this.producto.tipo == 1) {
        this.disableButton = false;
      }
      this.registroCarrito.caracteristica = null;
      this.registroCarrito.caracteristica = caracteristica;
      this.tamaniosCaractesisticaSelected =
        caracteristica.tamanios_caracteristica;
      this.tamCaracteristicaSelected = null;
      console.log("handleSeleccion");
      console.log(caracteristica);
      console.log("color");
      console.log(caracteristica.color);
      this.maxProductos=caracteristica.existencias
      this.registroCarrito.cantidad=1
    },
    addToCart() {
      console.log("fasad");
      if (this.registroCarrito.tipoRegistro == 0) {
        let cartAux = this.$store.state.cartList;
        cartAux.itemsList.push(this.registroCarrito);
        // console.log("Add cart: ")
        // console.log(producto)

        this.$store.dispatch("setCartList", cartAux);
        this.$router.push("/carrito");
      }

      if (this.registroCarrito.tipoRegistro == 1) {
        let cartAux = this.cartList;
        this.registroCarrito.idCaracteristica =
          this.registroCarrito.caracteristica.id;

        cartAux.itemsList.push(this.registroCarrito);
        // console.log("Add cart: ")
        // console.log(producto)

        this.$store.dispatch("setCartList", cartAux);
        this.$router.push("/carrito");
      }

      if (this.registroCarrito.tipoRegistro == 2) {
        console.log("Add con cars y tams");
        let cartAux = this.cartList;
        this.registroCarrito.idCaracteristica =
          this.registroCarrito.caracteristica.id;
        this.registroCarrito.idTamanioCaracteristica =
          this.registroCarrito.tamanioCaracteristica.id;

        cartAux.itemsList.push(this.registroCarrito);
        // console.log("Add cart: ")
        // console.log(producto)

        this.$store.dispatch("setCartList", cartAux);
        this.$router.push("/carrito");
      }

      if (this.registroCarrito.tipoRegistro == 3) {
        console.log("Add con tams");
        let cartAux = this.cartList;
        this.registroCarrito.idTamanioProducto =
          this.registroCarrito.tamanioProducto.id;
        cartAux.itemsList.push(this.registroCarrito);
        // console.log("Add cart: ")
        // console.log(producto)

        this.$store.dispatch("setCartList", cartAux);
        this.$router.push("/carrito");
      }
    },
    fetchProducto() {
      try {
        fetch(
          process.env.MIX_API_URL + "api/productos/" + this.$route.params.id,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.producto = data.respuesta;

              if (this.producto.tipo == 0) {
                this.disableButton=false;
                this.arrayImgs = this.producto.urlsFotos.split(";");
                this.arrayImgs.pop();
                this.disableButton = false;
                this.registroCarrito = {
                  idProducto: this.producto.id,
                  producto: this.producto,
                  caracteristica: null,
                  tamanioCaracteristica: null,
                  tamanioProducto: null,
                  tipoRegistro: this.producto.tipo,
                  idCaracteristica: null,
                  idTamanioCaracteristica: null,
                  idTamanioProducto: null,
                  cantidad: 1,
                };
                this.maxProductos=this.producto.existencias
              }
              if (this.producto.tipo == 1) {
                this.disableButton=false;
                this.producto.caracteristicas_producto.forEach(element => {
                    element.seleccionado=0;
                });
                this.producto.caracteristicas_producto[0].seleccionado=1;

                this.arrayImgs = this.producto.caracteristicas_producto[0].urlFoto.split(";");
                this.arrayImgs.pop();




                this.registroCarrito = {
                  idProducto: this.producto.id,
                  producto: this.producto,
                  caracteristica: null,
                  tamanioCaracteristica: null,
                  tamanioProducto: null,
                  tipoRegistro: this.producto.tipo,
                  idCaracteristica: 0,
                  idTamanioCaracteristica: null,
                  idTamanioProducto: null,
                  cantidad: 1,
                };
                this.maxProductos=this.producto.caracteristicas_producto[0].existencias;
              }
              if (this.producto.tipo == 2) {

                 this.producto.caracteristicas_producto.forEach(element => {
                    element.seleccionado=0;
                });
                this.producto.caracteristicas_producto[0].seleccionado=1;

                this.arrayImgs = this.producto.caracteristicas_producto[0].urlFoto.split(";");


                this.arrayImgs = this.producto.caracteristicas_producto[0].urlFoto.split(";");
                this.arrayImgs.pop();
                this.tamaniosCaractesisticaSelected=this.producto.caracteristicas_producto[0].tamanios_caracteristica

                this.registroCarrito = {
                  idProducto: this.producto.id,
                  producto: this.producto,
                  caracteristica: this.producto.caracteristicas_producto[0],
                  tamanioCaracteristica: null,
                  tamanioProducto: null,
                  tipoRegistro: this.producto.tipo,
                  idCaracteristica: 0,
                  idTamanioCaracteristica: 0,
                  idTamanioProducto: null,
                  cantidad: 1,
                };
                this.maxProductos=this.producto.caracteristicas_producto[0].existencias;
              }
              if (this.producto.tipo == 3) {
                this.arrayImgs = this.producto.urlsFotos.split(";");
                this.arrayImgs.pop();

                this.registroCarrito = {
                  idProducto: this.producto.id,
                  producto: this.producto,
                  caracteristica: null,
                  tamanioCaracteristica: null,
                  tamanioProducto: null,
                  tipoRegistro: this.producto.tipo,
                  idCaracteristica: null,
                  idTamanioCaracteristica: null,
                  idTamanioProducto: 0,
                  cantidad: 1,
                };
                this.maxProductos=this.producto.tamanios_producto[0].existencias;
              }
              console.log("this.producto");
              console.log(this.producto);
            } else {
              //this.$router.push("/login")
              this.tablaProductos = [];
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>

.cardCarousel {
  flex: 1;
}

.carouselContainer
{

  background-color: #f3e5e5;
  border-radius: 5%;
}

.infoContainer
{

  background-color: #f3e5e5;
}



.card-photo {
  display: block;
  width: 100%;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .card-logo {
    position: absolute;
    display: block;
    max-width: 80%;
    max-height: 100%;
    background-color: white;
  }

  .card-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: -80%;
    margin-bottom: 0%;
    padding: 60%;
    min-width: 100%;
  }

.stubImg
{
    height: 300px;
    width: 300px;
}

.colorSeleccionado
{
    border: 4px solid #eebc7c;
}

</style>
