<template>
  <div>
    <div class="has-text-centered">
      <h1 class="title">Usuarios</h1>
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
            label="Nombres"
            field="nombres"
            searchable
          >
            {{ props.row.nombres }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Apellidos"
            field="apellidos"
            searchable
          >
            {{ props.row.apellidos }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Fecha Nacimiento"
            field="fechaNacimiento"
            searchable
          >
            {{ props.row.fechaNacimiento }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Teléfono"
            field="telefono"
            searchable
          >
            {{ props.row.telefono }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Email"
            field="email"
            searchable
          >
            {{ props.row.email }}
          </b-table-column>

          <b-table-column field="actions" label="Acciones" v-slot="props">
            <div class="buttons">
              <b-button v-if="props.row.tipoUsuario==2"
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
      usuario:{
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1,
      }
    };
  },
  mounted() {
    this.fetchDatos();
  },
  methods: {
    cancelForm() {
      this.usuario={
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1,
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
        fetch(process.env.MIX_API_URL+"api/usuarios/"+data.id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.resultado;
                console.log(resp);
                    if(resp=="ok")
                {
                    this.$buefy.dialog.alert("Usuario eliminado correctamente");
                }
                else
                {
                    this.$buefy.dialog.alert("No se ha podido eliminar usuario");
                }

                });

                this.fetchDatos()
                this.cancelForm()
    },
    editFunction(data)
    {
        this.usuario=data

        this.showModalCreateEdit=true
        this.isAdd=false
        this.isEdit=true
    },
    submit()
    {
        if(this.isAdd)
        {
            fetch(process.env.MIX_API_URL+"api/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.usuario)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Usuario registrado correctamente");

                });
                this.cancelForm()
                this.fetchDatos()

        }
        if(this.isEdit)
        {
            fetch(process.env.MIX_API_URL+"api/usuarios/"+this.usuario.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.usuario)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Usuario editado correctamente");

                });

                this.fetchDatos()
                this.cancelForm()
        }
    },
    fetchDatos() {
      try {
        fetch(process.env.MIX_API_URL+"api/usuarios", {
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
