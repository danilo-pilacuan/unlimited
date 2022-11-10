<template>
  <div>
    <!-- <div class="has-text-centered">
      <h1 class="title">Catálogo</h1>
    </div>

    <hr /> -->
    <div class="columns mt-2">
        <div class="column is-2 ml-5">
            <div class="card">
              <div class="card-content cardRounded">
               <div class="p-1 mt-3">
                <p class="subtitle">Categorías</p>
              <b-menu>
                <b-menu-list class="mt-3 mb-3" v-for="categoria,index in tablaCategorias" :key="index">
                  <b-menu-item  :label="categoria.nombre" tag="router-link" :to="{ path: '/catalogo?categoria='+categoria.nombre }" :active="$route.query.categoria==categoria.nombre">
                  </b-menu-item>
                </b-menu-list>
                <b-menu-list class="mt-3 mb-3">
                  <b-menu-item  label="Todas" tag="router-link" :to="{ path: '/catalogo' }" :active="!$route.query.categoria">
                  </b-menu-item>
                </b-menu-list>


              </b-menu>
            </div>
              </div>
            </div>

        </div>
        <div class="column is-9 pr-3">
            <div class="container">
      <div class="block">
        <div class="columns is-multiline">
          <div
            class="column is-one-quarter"
            v-for="(producto, index) in tablaProductos"
            :key="index"
          >
            <div class="cardProducto">
              <div class="contenedorProducto">
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
                            <!-- ${{producto.precio.toFixed(2)}} -->
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
        </div>
      </div>
    </div>
        </div>
    </div>
<!--
    <b-modal v-model="showModalCreateEdit">
      <form @submit.prevent="submit">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Registrar Producto</p>
            <button type="button" class="delete" @click="cancel" />
          </header>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <b-field label="Código">
                  <b-input v-model="inputCodigo" maxlength="50"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Nombre">
                  <b-input v-model="inputNombre" maxlength="50"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Precio">
                  <b-numberinput
                    step="0.01"
                    v-model="inputPrecio"
                    aria-minus-label="Decrement by 0.01"
                    aria-plus-label="Increment by 0.01">
                  </b-numberinput>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Descripción Corta">
                  <b-input type="textarea" v-model="inputDescripcionCorta"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Descripción Larga">
                  <b-input type="textarea" v-model="inputDescripcionLarga"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Estado">
                    <b-select placeholder="Seleccionar Estado" v-model="inputEstado">
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                        <option value="2">Con Descuento</option>
                    </b-select>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Categoría">
                    <b-select placeholder="Seleccionar Categoría"  v-model="inputCategoria">
                        <option
                        v-for="option in tablaCategorias"
                        :value="option.id"
                        :key="option.id"
                        >
                        {{ option.nombre }}
                        </option>

                    </b-select>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Tipo de Producto">
                    <b-select placeholder="Seleccionar Tipo de Producto" v-model="inputTipo">
                        <option value="0">Producto único</option>
                    </b-select>
                </b-field>
              </div>
            </div>

          </section>
          <footer class="modal-card-foot">
            <div class="columns">
              <div class="column">
                <b-button
                  type="is-primary"
                  v-show="isEdit"
                  @click="submit"
                  label="Actualizar"
                />
                <b-button
                  type="is-primary"
                  v-show="isAdd"
                  @click="submit"
                  label="Registrar"
                />
              </div>
              <div class="column">
                <b-button type="is-danger" @click="cancel" label="Cancelar" />
              </div>
            </div>
          </footer>
        </div>
      </form>
    </b-modal> -->
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      tablaProductos: [],
      tablaCategorias: [],
      showModalCreateEdit: false,
      inputCategoria:null,
      inputTipo:null,
      inputDescripcionLarga:"",
      inputDescripcionCorta:"",
      inputPrecio:0,
      inputNombre:"",
      inputCodigo:"",
      inputEstado:null,
      isEdit:false,
      isAdd:false,
    };
  },
  computed:{
    authenticated() {
        return this.$store.state.authenticated;
    },
    cartList(){
        return this.$store.state.cartList;
    }
  },
  mounted() {

    if(this.$route.query.categoria)
    {
        console.log("----------------------------- query")

        this.fetchProductosByCategoria(this.$route.query.categoria);
    }
    else if(this.$route.query.buscar)
    {
        console.log("----------------------------- query")

        this.fetchProductosByBuscar(this.$route.query.buscar);
    }
    else
    {
        console.log("----------------------------- no query")
        this.fetchProductos();
    }
    this.fetchCategorias()
  },
  watch: {
  '$route' () {
    if(this.$route.query.categoria)
    {
        console.log("----------------------------- query")

        this.fetchProductosByCategoria(this.$route.query.categoria);
    }
    if(this.$route.query.buscar)
    {
        console.log("----------------------------- query")

        this.fetchProductosByBuscar(this.$route.query.buscar);
    }
    else
    {
        console.log("----------------------------- no query")
        this.fetchProductos();
    }
  }
},
  methods: {
     getUrlFoto(producto)
    {
        let urlImg=""
        if(producto.tipo==0 || producto.tipo==3)
        {
            let arrayUrls=producto.urlsFotos.split(';')
            urlImg=arrayUrls[0]
        }
        else
        {
            console.log("casasasaasas")
            console.log(producto.caracteristicas_producto)
            if(producto.caracteristicas_producto && producto.caracteristicas_producto.length>0)
            {
                let arrayUrls2=producto.caracteristicas_producto[0].urlFoto.split(';')
                urlImg=arrayUrls2[0]
            }
        }
        return urlImg
    },
    addToCart(producto){
        console.log("Add cart: ")
        console.log(producto)
        let cartAux=this.cartList
        cartAux.itemsList.push(producto)
        this.$store.dispatch("setCartList", cartAux)
    },
    showProduct(producto){
        this.$router.push("/mostrarproducto/"+producto.id)
    },
    recoverStorage(){
        console.log("Recovered: "+this.authenticated)
        console.log("Recovered cart: ")
        console.log(this.cartList)
        console.log(this.cartList.data1)
    },
    cancel() {
      this.showModalCreateEdit=false;
      //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    fetchProductos(nombreCategoria) {
        console.log("process.env.MIX_API_URL")
        console.log(process.env.MIX_API_URL)
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

              this.tablaProductos = [];
            }
          });
      } catch (e) {

      }
    },
    fetchCategorias()
            {
                try {
                    fetch(process.env.MIX_API_URL+"api/categorias", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        var resp = data;

                        if (data) {
                        this.tablaCategorias = data.respuesta;
                        console.log("**********tablaCategorias");
                        console.log(this.tablaCategorias);
                        } else {
                        //this.$router.push("/login")
                        this.tablaCategorias = [];
                        }
                    });
                } catch (e) {

                }

            },
    fetchProductosByCategoria(nombreCategoria) {
        console.log("process.env.MIX_API_URL")
        console.log(process.env.MIX_API_URL)
      try {
       fetch(process.env.MIX_API_URL+"api/productos?categoria="+nombreCategoria, {
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

              this.tablaProductos = [];
            }
          });
      } catch (e) {

      }
    },
    fetchProductosByBuscar(paramBuscar) {

      try {
       fetch(process.env.MIX_API_URL+"api/productos?buscar="+paramBuscar, {
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

              this.tablaProductos = [];
            }
          });
      } catch (e) {

      }
    },
  },
};
</script>

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
.imgProducto
{
    border-radius: 3em;
}

.descripcionCorta {
  overflow: hidden;
  display: -webkit-box;
  min-height: 6em;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
