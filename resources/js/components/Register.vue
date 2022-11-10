<template>
  <div id="login" class="home" style="padding-bottom:10rem;">
    <div class="container">
      <div class="block">
        <div class="columns">
          <div class="column is-3"></div>
          <div class="column">
            <div class="card mt-3">
                <section class="section" v-if="usuario">
                    <p class="subtitle has-text-centered has-text-weight-bold">Registrarse</p>
              <form @submit.prevent="submit">
                <!-- nombres":"julian5",
                    "apellidos":"loza5",
                    "fechaNacimiento": "1999-05-05",
                    "email":"julia2n5@gmail.com",
                    "telefono":"0934623812",
                    "password":"123456",
                    "password_confirmation":"123456",
                    "tipoUsuario":2 -->
                <!-- <b-checkbox v-model="hasError">Show errors</b-checkbox> -->
                <b-field grouped>
                    <b-field
                  label="Nombres (*)"
                  :type="{'is-danger':errors.nombres}"
                  expanded
                >
                  <b-input required  v-model="usuario.nombres" maxlength="30"></b-input>
                </b-field>
                <b-field
                  label="Apellidos (*)"
                  :type="{'is-danger':errors.apellidos}"
                  expanded
                >
                  <b-input required  v-model="usuario.apellidos" maxlength="30"></b-input>
                </b-field>
                </b-field>
                <b-field grouped>
                    <b-field
                  label="Email (*)"
                  :type="{'is-danger':errors.email}"
                  expanded
                >
                  <b-input required  v-model="usuario.email" type="email"
                  validation-message="Ingrese un email valido"
                  pattern='^\S+@\S+\.\S+$'
                  maxlength="30"></b-input>
                </b-field>
                <b-field
                  label="Teléfono (*)"
                  :type="{'is-danger':errors.telefono}"
                  expanded
                >
                  <b-input required  v-model="usuario.telefono" maxlength="10"></b-input>
                </b-field>
                </b-field>


                <b-field
                  label="Fecha Nacimiento (*)"
                  expanded
                >
                    <b-datepicker
                        v-model="usuario.fechaNacimientoObj"
                        :show-week-number="false"
                        placeholder="Seleccionar Fecha..."
                        icon="calendar-today"
                        :icon-right="usuario.fechaNacimientoObj ? 'close-circle' : ''"
                        icon-right-clickable
                        @icon-right-click="clearDate"
                        trap-focus>
                    </b-datepicker>
                </b-field>


                <b-field grouped>
                    <b-field
                    :type="{'is-danger':errors.password}"
                  label="Contraseña (*)"
                  expanded
                >
                  <b-input required  v-model="usuario.password" maxlength="16" type="password"></b-input>
                </b-field>
                <b-field
                :type="{'is-danger':errors.password}"
                  label="Confirmar Contraseña (*)"
                  expanded
                >
                  <b-input required  v-model="usuario.password_confirmation" maxlength="16" type="password"></b-input>
                </b-field>

                </b-field>

                <div class="has-text-weight-bold" style="display: inline">(*)</div>
                <div  style="display: inline">Campos Obligatorios</div>
                <br>
                <div v-if="Object.keys(errors).length>0">Revise los campos marcados</div>

                <b-button type="is-primary is-align-self-center" @click="submit" label="Registrarse" size="is-medium" />

              </form>
            </section>
            </div>
          </div>
          <div class="column is-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      errors:{},
      password: "",
      loginFailed: false,
      validatePassword: false,
      validateUsername: false,
      selected: new Date(),
      usuario:{
        nombres:"",
        apellidos:"",
        fechaNacimientoObj: new Date(),
        fechaNacimiento: "",
        urlFoto:"...",
        email:"",
        telefono:"",
        password:"",
        password_confirmation:"",
        tipoUsuario:2
      }
    };
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    userType() {
      return this.$store.state.userType;
    },
  },
  methods: {
    clearDate () {
            this.user.fechaNacimiento = null
        },
    submit() {
    this.usuario.fechaNacimiento=this.usuario.fechaNacimientoObj.toISOString().split('T')[0]
      fetch(process.env.MIX_API_URL+"api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json","Accept": "application/json" },
        credentials: "include",
        body: JSON.stringify(this.usuario),
      })
        .then((response) => {
            console.log("🚀 ~ file: Register.vue ~ line 145 ~ .then ~ response", response)
            // if(response.status!=200)
            // {
            //     this.$buefy.dialog.alert("Revise los campos");
            //     //return null;
            // }
            return response.json()
        })
        .then((data) => {
          var resp = data;
          console.log("🚀 ~ file: Register.vue ~ line 147 ~ .then ~ data", data)

          console.log(resp);
          if (resp.errors) {
            //this.$buefy.dialog.alert("Error");
            //this.$router.push("/login");
            // resp.errors.forEach(element => {

            // });
            this.errors=resp.errors
          } else if(resp) {
            this.$buefy.dialog.alert("Usuario registrado correctamente");
            this.$router.push("/login");
          } else {

          };
        });
    },
    authLogin() {
      try {
        fetch(process.env.MIX_API_URL+"api/users/get", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;
            console.log(resp);
            if (data._id) {
              console.log("hello " + data.name);
              if (data.userType) {
                this.$store.dispatch("setUserType", data.userType);
              }
              this.$store.dispatch("setAuth", true);
            } else {
              this.$router.push("/login");
            }
          });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
    },
  },
};
</script>
