<template>
  <div class="columns is-centered mt-2">
    <div class="column is-11 profileBackground">
      <div class="columns">
        <div class="column is-2">
          <div class="columns is-centered is-multiline">
            <div class="column is-8">
                <div class="has-text-centered">
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
        <div class="column is-8">
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
    },
  }
}
</script>

<style>
.profileBackground {
  background-color: #ffffff;
}
</style>
