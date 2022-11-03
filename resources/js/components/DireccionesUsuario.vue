<template>
    <div>
        <h1 class="title">Datos de Envío</h1>
        <div class="columns is-multiline">
            <div class="column is-6">
            <b-field horizontal label="Calle Principal">
                <b-input v-model="currentUser.direccion.callePrincipal" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Calle Secundaria">
                <b-input v-model="currentUser.direccion.calleSecundaria" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Numero de Casa/Departamento">
                <b-input v-model="currentUser.direccion.numeroCasa" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Teléfono">
                <b-input v-model="currentUser.direccion.telefono" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Ciudad">
                <b-input v-model="currentUser.direccion.ciudad" maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Guardar">
                <b-button type="is-primary" @click="guardarDir">Guardar</b-button>
            </b-field>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            tablaProductos:[]

        }
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
     methods: {
        guardarDir()
        {
            fetch(process.env.MIX_API_URL+"api/direcciones/"+this.currentUser.direccion.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.currentUser.direccion)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.respuesta;
                console.log(resp);
                    this.$buefy.dialog.alert("Categoría editada correctamente");
                    this.$store.dispatch("setCurrentUser", this.currentUser)
                });
        }
     }
}
</script>
