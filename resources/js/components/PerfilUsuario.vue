<template>
  <div class="columns is-centered mt-2">
    <div class="column is-11 profileBackground">
      <div class="columns">
        <div class="column is-2">
          <div class="columns is-multiline">
            <div class="column is-12">
                <div class="has-text-centered">
            <div class="centerProfile">
                <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="(index, done, fileList)=>beforeRemove(index,doneDeleteImg,fileList)"
                @edit-image="editImage"
                :data-images="images"
                idUpload="myIdUpload"
                editUpload="myIdEdit"
                :maxImage="1"
                :showPrimary="false"
                :showEdit="false"
                dragText="Arrastre su imagen de perfil aquí"
                browseText="Examinar"
                primaryText="Por defecto"
                markIsPrimaryText="Establecer por defecto"
                popupText="Esta imagen se mostrará por defecto"
                dropText="Soltar archivo"
                ></vue-upload-multiple-image>
            </div>
          </div>


            </div>
            <div class="column is-12">
                <b-sidebar position="static" mobile="fullwidth" type="is-light" open>
            <div class="p-1 mt-3">
              <b-menu>
                <b-menu-list class="mt-3 mb-3">
                  <b-menu-item label="Perfil" icon="account" :active="activarPerfil" @click="pushLink(0)"></b-menu-item>
                </b-menu-list>

                <b-menu-list class="mt-3 mb-3">
                  <b-menu-item label="Pedidos" icon="cart" :active="activarPedidos" @click="pushLink(1)"></b-menu-item>
                </b-menu-list>

                <b-menu-list class="mt-3 mb-3">
                  <b-menu-item label="Dirección" icon="crosshairs-gps" :active="activarDirecciones" @click="pushLink(2)"></b-menu-item>
                </b-menu-list>

                <b-menu-list class="mt-3 mb-3">
                  <b-menu-item label="Cerrar Sesión" icon="logout" @click="pushLink(3)"></b-menu-item>
                </b-menu-list>

                <!-- <b-menu-list class="mt-3 mb-3">
                  <b-menu-item label="Expo" icon="link"></b-menu-item>
                </b-menu-list> -->
              </b-menu>
            </div>
          </b-sidebar>
            </div>
          </div>
        </div>
        <div class="column is-10 mostrarBorde">
            <router-view/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image';

export default {
  components: {
    VueUploadMultipleImage:VueUploadMultipleImage
  },
  data() {
    return {
        images: [],
        activarDirecciones:false,
        activarPedidos:false,
        activarPerfil:false,
    }
  },
  mounted(){
    // console.log("this.$route.path")
    // console.log(this.$route.path)
    if(this.currentUser.urlFoto)
    {
         let newImage={
            path:"/"+this.currentUser.urlFoto,
            default:1,
            highlight:1,
            caption:""
        }
        this.images=[]
        this.images.push(newImage)
    }
    if(this.$route.path=="/usuario/perfil" || this.$route.path=="/usuario")
    {
        this.activarPerfil=true
        this.activarPedidos=false
        this.activarDirecciones=false
    }
    //const regex = /\/usuario\/pedidos\/\d+/is;
    //var re = new RegExp("/\/usuario\/pedidos\/\d+");

    if(this.$route.path=="/usuario/pedidos" || this.$route.path.match(/\/usuario\/pedidos\/\d+/is))
    {
        this.activarPerfil=false
        this.activarPedidos=true
        this.activarDirecciones=false
    }
    if(this.$route.path=="/usuario/direcciones")
    {
        this.activarPerfil=false
        this.activarPedidos=false
        this.activarDirecciones=true
    }
  },
  computed: {
    authenticated: function authenticated() {
      return this.$store.state.authenticated;
    },
    userType: function userType() {
      return this.$store.state.userType;
    },
    currentUser: function currentUser() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    pushLink(index)
    {
        console.log("push link ")
        console.log("index: "+index)
        if(index=="0")
        {
            this.$router.push("/usuario/perfil");
        }
        if(index=="1")
        {
            this.$router.push("/usuario/pedidos");
        }
        if(index=="2")
        {
            this.$router.push("/usuario/direcciones");
        }
        if(index=="3")
        {

            this.$store.dispatch("setAuth", false)
            this.$store.dispatch("setAuthToken", "")
            this.$store.dispatch("setUserType",0)
            this.$store.dispatch("setCurrentUser",null)
            this.$router.push("/login");

        }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    updateUser(paramUrlFoto)
    {
        let userAux=JSON.parse(JSON.stringify(this.currentUser));
        userAux.urlFoto=paramUrlFoto
        fetch(process.env.MIX_API_URL+"api/usuarios/"+this.currentUser.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body:JSON.stringify({
            urlFoto:paramUrlFoto

          }),



        })
        .then((response) => response.json())
        .then((data) => {
        var resp = data.respuesta;
            if(resp)
            {
                console.log("🚀 ~ file: PerfilUsuario.vue ~ line 169 ~ .then ~ resp", resp)
                this.$buefy.dialog.alert("Foto de perfil actualizada correctamente");

                this.$store.dispatch("setCurrentUser", userAux)
            }


        });
    },
    uploadImageSuccess(formData, index, fileList) {
      //console.log('data', formData, index, fileList)
      // Upload image api
      this.axios.post(process.env.MIX_API_URL+'api/uploadImage', formData).then(response => {
        console.log(response.data.respuesta)
        let newImage={
            path:response.data.respuesta.url,
            default:index,
            highlight:1,
            caption:""
        }
        this.images=[]
        this.images.push(newImage)
        this.updateUser(response.data.respuesta.url)
        // this.producto.urlsFotos=""
        // this.images.forEach(element => {
        //     this.producto.urlsFotos=this.producto.urlsFotos+element.path+";"
        // });
      })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("Está seguro de eliminar la imagen?")
      if (r == true) {
        done(index)
      } else {
      }
    },
    doneDeleteImg(index)
    {
        this.images=[]
        let userAux=JSON.parse(JSON.stringify(this.currentUser));
        userAux.urlFoto=null
        this.$store.dispatch("setCurrentUser", userAux)
    },
  }
}
</script>

<style>
.profileBackground {
  background-color: #ffffff;
}
.b-sidebar .sidebar-content
{
    width: 100% !important;
}
.centerProfile
{
    align-self: center;
    display: inline-flex;

}
.mostrarBorde
{
    box-shadow: -2px 0px 3px 0px rgba(0, 0, 0, 0.10);

}
</style>
