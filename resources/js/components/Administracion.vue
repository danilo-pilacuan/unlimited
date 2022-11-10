<template>
  <div>
    <div class="has-text-centered">
      <h1 class="title">Administración</h1>
    </div>
    <hr />
    <div class="container">
      <div class="block">
        <div class="columns is-multiline is-centered">
          <div class="column is-one-fifth">
            <div class="card" style="cursor: pointer;" @click="$router.push('categorias')">
              <div class="card-image">
                <figure class="image is-4by3"> <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/> </figure>
              </div>
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="Title">Categorías</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <br> -->
          <div class="column is-one-fifth">
            <div class="card" style="cursor: pointer;" @click="$router.push('productos')">
              <div class="card-image">
                <figure class="image is-4by3"> <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/> </figure>
              </div>
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="Title">Productos</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <br> -->
          <div class="column is-one-fifth">
            <div class="card" style="cursor: pointer;" @click="$router.push('usuarios')">
              <div class="card-image">
                <figure class="image is-4by3"> <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/> </figure>
              </div>
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="Title">Usuarios</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <br> -->
          <div class="column is-one-fifth">
            <div class="card" style="cursor: pointer;" @click="$router.push('anuncios')">
              <div class="card-image">
                <figure class="image is-4by3"> <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/> </figure>
              </div>
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="Title">Anuncios</p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="column is-one-fifth">
            <div class="card" style="cursor: pointer;" @click="$router.push('contacto')">
              <div class="card-image">
                <figure class="image is-4by3"> <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/> </figure>
              </div>
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="Title">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>

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
  mounted() {
  },
  methods: {
    gotoAdminCategorias()
    {

    }

  },
};
</script>
