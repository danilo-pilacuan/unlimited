<template>
  <div>
    <div class="has-text-centered">
      <h1 class="title">Categorías</h1>
    </div>
    <div class="has-text-left">
       <b-button type="is-primary" @click="addFunction">Registrar</b-button>
    </div>
    <hr />
    <div class="container">
      <div class="block">
        <b-table
          :data="tablaDatos"
          :bordered="true"
          :striped="true"
          :narrowed="true"
          :hoverable="false"
          :loading="false"
          :focusable="false"
          :mobile-cards="false"
          :searchable="true"
          :paginated="true"
          :per-page="20"
        >
          <b-table-column
            v-slot="props"
            label="Nombre"
            field="nombre"
            searchable
          >
            {{ props.row.nombre }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Descripción"
            field="descripcion"
            searchable
          >
            {{ props.row.descripcion }}
          </b-table-column>






          <b-table-column field="actions" label="Acciones" v-slot="props">
            <div class="buttons">
            <!-- <b-button
                rounded
                type="is-link"
                icon-left="eye"
                @click="verCategoria(props.row)"
              >
              </b-button> -->


              <b-button
                rounded
                type="is-warning"
                icon-left="pencil"
                @click="editFunction(props.row)"
              >
              </b-button>
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
    </div>

    <b-modal v-model="showModalCreateEdit">
      <form @submit.prevent="submit">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Registrar Categoría</p>
            <button type="button" class="delete" @click="cancelForm" />
          </header>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <b-field label="Nombre">
                  <b-input v-model="categoria.nombre" maxlength="50"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Descripción">
                  <b-input v-model="categoria.descripcion" maxlength="200"></b-input>
                </b-field>
              </div>
            </div>


            <!-- <div class="columns">
              <div class="column">
                <b-field label="Estado">
                    <b-select placeholder="Seleccionar Estado" v-model="categoria.estado">
                        <option value="0">Sin Descuento</option>
                        <option value="1">Con Descuento</option>
                    </b-select>
                </b-field>
              </div>
            </div> -->


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
                <b-button type="is-danger" @click="cancelForm" label="Cancelar" />
              </div>
            </div>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      tablaDatos:[],
      showModalCreateEdit: false,
      isEdit:false,
      isAdd:false,
      categoria:{
        id:0,
        nombre:"",
        descripcion:"",
        urlFotoCategoria:"C:",
        estadoCategoria:0,
        descuentoCategoria:0,
      }
    };
  },
  mounted() {
    this.fetchCategorias();
  },
  methods: {
    cancelForm() {
      this.categoria={
        id:0,
        nombre:"",
        descripcion:"",
        urlFotoCategoria:"C:",
        estadoCategoria:0,
        descuentoCategoria:0,
      }

      this.showModalCreateEdit=false;
      //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    addFunction()
    {
        this.showModalCreateEdit=true
        this.isAdd=true
        this.isEdit=false
    },
    confirmDelete(data)
    {
        this.$buefy.dialog.confirm({
            message: 'Está seguro de continuar?',
            onConfirm: () => this.deleteFunction(data)
        })
    },
    deleteFunction(data)
    {
        fetch(process.env.MIX_API_URL+"api/categorias/"+data.id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Categoría eliminada correctamente");

                });

                this.fetchCategorias()
                this.cancelForm()
    },
    editFunction(data)
    {
        this.categoria=data

        this.showModalCreateEdit=true
        this.isAdd=false
        this.isEdit=true
    },
    submit()
    {
        if(this.isAdd)
        {
            fetch(process.env.MIX_API_URL+"api/categorias", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.categoria)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Categoría registrada correctamente");

                });
                this.cancelForm()
                this.fetchCategorias()

        }
        if(this.isEdit)
        {
            fetch(process.env.MIX_API_URL+"api/categorias/"+this.categoria.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.categoria)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Categoría editada correctamente");

                });

                this.fetchCategorias()
                this.cancelForm()
        }
    },
    fetchCategorias() {
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
              this.tablaDatos = data.respuesta;
              console.log("this.tablaDatos");
              console.log(this.tablaDatos);


                this.$emit('actualizarCategorias');

            } else {
              //this.$router.push("/login")
              this.tablaDatos = [];
            }
          });
      } catch (e) {

      }
    },
  },
};
</script>
