<template>
    <div>
        <h1 class="title">Perfil</h1>
        <div class="columns is-multiline">
            <div class="column is-6">
            <b-field horizontal label="Nombres">
                <b-input v-model="currentUser.nombres" disabled maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Apellidos">
                <b-input v-model="currentUser.apellidos" disabled maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Email">
                <b-input v-model="currentUser.email" disabled maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Teléfono">
                <b-input v-model="currentUser.telefono" disabled maxlength="50"></b-input>
            </b-field>
            </div>
            <div class="column is-6">
            <b-field horizontal label="Fecha Nacimiento">
                <b-input v-model="currentUser.fechaNacimiento" disabled maxlength="50"></b-input>
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
}
</script>
