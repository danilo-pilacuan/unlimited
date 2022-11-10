<template>
  <div id="login" class="home">
    <div class="container">
      <div class="block">
        <div class="columns">
          <div class="column is-4"></div>
          <div class="column mt-5">
            <div class="card mt-5 p-5">
                <section class="section">
                    <p class="subtitle has-text-centered has-text-weight-bold">Iniciar Sesión</p>
              <form @submit.prevent="submit">
                <!-- <b-checkbox v-model="hasError">Show errors</b-checkbox> -->
                <b-field
                  label="Usuario"
                  :type="{ 'is-danger': validateUsername }"
                  :message="{ 'Username is not available': validateUsername }"
                >
                  <b-input v-model="username" maxlength="30"></b-input>
                </b-field>

                <b-field
                  label="Contraseña"
                  :type="{ 'is-danger': validatePassword }"
                  :message="[
                    { 'Password is too short': validatePassword },
                    {
                      'Password must have at least 8 characters':
                        validatePassword,
                    },
                  ]"
                >
                  <b-input
                    v-model="password"
                    type="password"
                    maxlength="30"
                  ></b-input>
                </b-field>
                <b-field
                  label=""
                  :type="{ 'is-danger': loginFailed }"
                  :message="{ 'Login fallido': loginFailed }"
                >
                </b-field>
                <b-button type="is-primary" @click="submit" label="Iniciar Sesión" size="is-medium"/>
              </form>
            </section>
            </div>
          </div>
          <div class="column is-4"></div>
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
      password: "",
      loginFailed: false,
      validatePassword: false,
      validateUsername: false,
    };
  },
  mounted()
    {

        console.log("🚀 ~ file: Login.vue ~ line 69 ~ this.$route", this.$route.name)
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
    submit() {
      fetch(process.env.MIX_API_URL+"api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json","Accept":"application/json" },
        credentials: "include",
        body: JSON.stringify({ email: this.username, password: this.password }),
      })
        .then((response) => response.json())
        .then((data) => {
          var tokenResp = data.token;
          var user = data.user;
          console.log(tokenResp);

          if (tokenResp) {
            this.$store.dispatch("setAuth", true)
            this.$store.dispatch("setAuthToken", tokenResp)
            this.$store.dispatch("setUserType", user.tipoUsuario)
            this.$store.dispatch("setCurrentUser", user)

            this.$router.push("/");
          } else this.loginFailed = true;
        });
    },
    // authLogin() {
    //   try {
    //     fetch("http://localhost:5000/api/users/get", {
    //       method: "GET",
    //       headers: { "Content-Type": "application/json" },
    //       credentials: "include",
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         var resp = data;
    //         console.log(resp);
    //         if (data._id) {
    //           console.log("hello " + data.name);
    //           if (data.userType) {
    //             this.$store.dispatch("setUserType", data.userType);
    //           }
    //           this.$store.dispatch("setAuth", true);
    //         } else {
    //           this.$router.push("/login");
    //         }
    //       });
    //   } catch (e) {
    //     this.$store.dispatch("setAuth", false);
    //   }
    // },
  },
};
</script>
<style>
html, body {
  height: 100%;
}

</style>
