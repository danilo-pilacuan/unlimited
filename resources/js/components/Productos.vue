<template>
  <div>
    <div class="has-text-centered">
      <h1 class="title">Productos</h1>
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
            label="Código"
            field="codigo"
            searchable
          >
            {{ props.row.codigo }}
          </b-table-column>
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
            label="Precio"
            field="precio"
            searchable
          >
            {{ props.row.precio }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Descripción Corta"
            field="descripcionCorta"
            searchable
          >
            {{ props.row.descripcionCorta }}
          </b-table-column>
          <!-- <b-table-column
            v-slot="props"
            label="URLs Fotos"
            field="urlsFotos"
            searchable
          >
            {{ props.row.urlsFotos }}
          </b-table-column> -->

          <b-table-column
            v-slot="props"
            label="Existencias"
            field="existencias"
            searchable
          >
            {{ props.row.existencias }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Estado"
            field="estado"
            searchable
          >
            {{ props.row.estado==1?"Activo":props.row.estado==0?"Inactivo":"Con descuento" }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Visitas"
            field="visitas"
            searchable
          >
            {{ props.row.visitas}}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Tipo"
            field="tipo"
            searchable
          >
            {{ props.row.tipo==0?"Producto único":props.row.tipo==1?"Producto con caracteristicas":props.row.tipo==2?"Producto con caracteristicas y tamaños":"Producto con tamaños" }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Descuento"
            field="descuento"
            searchable
          >
            {{ props.row.descuento }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            label="Categoría"
            field="categoria"
            searchable
          >
            {{ props.row.categoria.nombre }}
          </b-table-column>


          <b-table-column field="actions" label="Acciones" v-slot="props">
            <div class="buttons">
            <b-button
                rounded
                type="is-link"
                icon-left="eye"
                tag="router-link"
                :to="'/mostrarproducto/'+props.row.id"
              >
              </b-button>

              <!-- <b-button tag="router-link"
                rounded
                :to="'/mostrarproducto/'+props.row.id"
                type="is-link">
                Expo
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

    <b-modal v-model="showModalCreateEdit" @close="cancelForm">
      <form @submit.prevent="submit">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Registrar Producto</p>
            <button type="button" class="delete" @click="cancelForm" />
          </header>
          <section class="modal-card-body">



            <div class="columns">
              <div class="column">
                <b-field horizontal label="Código">
                  <b-input v-model="producto.codigo" maxlength="50"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field horizontal label="Nombre">
                  <b-input v-model="producto.nombre" maxlength="50"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field horizontal label="Precio">
                  <b-numberinput
                    step="0.01"
                    v-model="producto.precio"
                    aria-minus-label="Decrement by 0.01"
                    aria-plus-label="Increment by 0.01">
                  </b-numberinput>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field horizontal label="Descripción Corta">
                  <b-input type="textarea" v-model="producto.descripcionCorta"></b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field horizontal label="Descripción Larga">
                  <vue-editor id="editor1" v-model="producto.descripcionLarga"></vue-editor>
                  <!-- <b-input type="textarea" v-model="producto.descripcionLarga"></b-input> -->
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field horizontal label="Estado">
                    <b-select placeholder="Seleccionar Estado" v-model="producto.estado">
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                        <option value="2">Con Descuento</option>
                    </b-select>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field horizontal label="Categoría">
                    <b-select placeholder="Seleccionar Categoría"  v-model="producto.idCategoria">
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
                <b-field horizontal label="Tipo de Producto">
                    <b-select placeholder="Seleccionar Tipo de Producto" v-model="producto.tipo">
                        <option value="0">Producto único</option>
                        <option value="1">Producto con caracteristicas</option>
                        <option value="2">Producto con caracteristicas y tamaños</option>
                        <option value="3">Producto con tamaños</option>
                    </b-select>
                </b-field>
              </div>
            </div>

            <div class="columns" v-if="producto.tipo==0 || producto.tipo==3">
              <div class="column">
                <b-field horizontal label="Imágenes">
                   <vue-upload-multiple-image
                    @upload-success="uploadImageSuccess"
                    @before-remove="(index, done, fileList)=>beforeRemove(index,doneDeleteImg,fileList)"
                    @edit-image="editImage"
                    :data-images="images"
                    idUpload="myIdUpload"
                    editUpload="myIdEdit"
                    :maxImage="10"
                    :showPrimary="false"
                    :showEdit="false"
                    dragText="Arrastre imágenes aquí"
                    browseText="Examinar"
                    primaryText="Por defecto"
                    markIsPrimaryText="Establecer por defecto"
                    popupText="Esta imagen se mostrará por defecto"
                    dropText="Soltar archivo"
                    ></vue-upload-multiple-image>
                </b-field>
              </div>
            </div>

            <div class="columns"  v-show="producto.tipo==1 && producto.caracteristicas_producto.length">
              <div class="column">
                <p class="has-text-centered title">Características</p>
                <div v-for="(caracteristica, index) in producto.caracteristicas_producto" :key="index">
                    <b-message title="Default"  @close="handleClose(index)">
                        <form @submit.prevent="submit">
                        <b-field horizontal label="Descripción">
                            <b-input v-model="caracteristica.descripcion"></b-input>
                        </b-field>
                        <b-field horizontal label="Color">
                            <b-colorpicker v-model="caracteristica.colorObj" @input="handleColorInput(caracteristica)"/>
                        </b-field>
                        <b-field horizontal label="Imagen">

                            <vue-upload-multiple-image
                            @upload-success="(formData, index, fileList)=>uploadImageSuccessCaracteristica(formData, index, fileList,caracteristica)"
                            @before-remove="(index, done, fileList)=>beforeRemoveCaracteristica(index,doneDeleteImgCar,fileList,caracteristica)"
                            @edit-image="editImage"
                            :data-images="caracteristica.images"
                            :idUpload="'uploadCarac'+index"
                            :editUpload="'editCarac'+index"
                            :maxImage="10"
                            :showPrimary="false"
                            :showEdit="false"
                            dragText="Arrastre imágenes aquí"
                            browseText="Examinar"
                            primaryText="Por defecto"
                            markIsPrimaryText="Establecer por defecto"
                            popupText="Esta imagen se mostrará por defecto"
                            dropText="Soltar archivo"
                            ></vue-upload-multiple-image>

                        </b-field>
                        <b-field horizontal label="Existencias" >
                            <b-input v-model="caracteristica.existencias"></b-input>
                        </b-field>
                        <b-field horizontal label="Tipo">
                            <b-input v-model="caracteristica.tipo"></b-input>
                        </b-field>
                        <hr>
                    </form>
                    </b-message>
                </div>
              </div>
            </div>

            <div class="columns"  v-if="producto.tipo==2 && producto.caracteristicas_producto.length">
              <div class="column">
                <p class="has-text-centered title">Características y Tamaños</p>
                <div v-for="(caracteristica, index) in producto.caracteristicas_producto" :key="index">
                    <b-message title="Default"  @close="handleClose(index)">
                        <form @submit.prevent="submit">
                        <b-field horizontal label="Descripción">
                            <b-input v-model="caracteristica.descripcion"></b-input>
                        </b-field>
                        <b-field horizontal label="Color">
                            <b-colorpicker v-model="caracteristica.colorObj" @input="handleColorInput(caracteristica)"/>
                        </b-field>
                        <b-field horizontal label="Imagen">
                            <vue-upload-multiple-image
                            @upload-success="(formData, index, fileList)=>uploadImageSuccessCaracteristica(formData, index, fileList,caracteristica)"
                            @before-remove="(index, done, fileList)=>beforeRemoveCaracteristica(index,doneDeleteImgCar,fileList,caracteristica)"
                            @edit-image="editImage"
                            :data-images="caracteristica.images"
                            :idUpload="'uploadCarac'+index"
                            :editUpload="'editCarac'+index"
                            :maxImage="10"
                            :showPrimary="false"
                            :showEdit="false"
                            dragText="Arrastre imágenes aquí"
                            browseText="Examinar"
                            primaryText="Por defecto"
                            markIsPrimaryText="Establecer por defecto"
                            popupText="Esta imagen se mostrará por defecto"
                            dropText="Soltar archivo"
                            ></vue-upload-multiple-image>
                        </b-field>
                        <b-field horizontal label="Existencias" >
                            <b-input v-model="caracteristica.existencias"></b-input>
                        </b-field>
                        <b-field horizontal label="Tipo">
                            <b-input v-model="caracteristica.tipo"></b-input>
                        </b-field>
                        <div class="columns">
                            <div class="column">
                                <p class="has-text-centered title">Tamaños Característica</p>
                                <b-field label="Agregar Tamaños">
                                    <b-taginput
                                    type="is-success"
                                        :attached="true"
                                        v-model="caracteristica.tags"
                                        :data="caracteristica.filteredTags"
                                        autocomplete
                                        :allow-new="false"
                                        :open-on-focus="true"
                                        field="descripcion"
                                        icon="label"
                                        placeholder="Añadir Tamaño"
                                        :before-adding="(tagToAdd) => validateTag(tagToAdd,caracteristica)"

                                        @typing="getFilteredTags($event,caracteristica,caracteristica.filteredTags)"
                                        @input="handleInputTag(caracteristica)"
                                        >
                                    </b-taginput>
                                </b-field>
                                <div v-for="(tamCaracteristica, indexTC) in caracteristica.tamanios_caracteristica" :key="indexTC">
                                    <b-field horizontal label="Tamaño">
                                        <!-- <b-input v-model="caracteristica.descripcion"></b-input> -->
                                        <p>Tamaño: {{getTamDescripcionById(tamCaracteristica.idTamanio)}}</p>
                                    </b-field>
                                    <b-field horizontal label="Existencias">
                                        <b-input v-model="tamCaracteristica.existencias"></b-input>
                                    </b-field>

                                </div>
                            </div>
                        </div>
                        <hr>
                    </form>
                    </b-message>
                </div>
              </div>
            </div>

            <div class="columns"  v-if="producto.tipo==3">
              <div class="column">
                <div class="columns">
                    <div class="column">
                        <p class="has-text-centered title">Tamaños Productos</p>
                        <b-field label="Agregar Tamaños">
                            <b-taginput
                                v-model="tags"
                                :data="filteredTags"
                                autocomplete
                                :allow-new="false"
                                :open-on-focus="true"
                                field="descripcion"
                                icon="label"
                                placeholder="Añadir Tamaño"
                                @typing="getFilteredTagsTams"
                                @input="handleInputTagTam"
                                >
                            </b-taginput>
                        </b-field>
                        <div v-for="(tamProducto, indexTP) in producto.tamanios_producto" :key="indexTP">
                            <b-field horizontal label="Tamaño">
                                <!-- <b-input v-model="caracteristica.descripcion"></b-input> -->

                                <p>Tamaño: {{getTamDescripcionById(tamProducto.idTamanio)}}</p>
                            </b-field>
                            <b-field horizontal label="Existencias">
                                <b-input v-model="tamProducto.existencias"></b-input>
                            </b-field>

                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div class="columns" v-show="producto.tipo==1">
              <div class="column">
                <b-field horizontal label="Añadir Característica">
                    <b-button
                    type="is-primary"
                    icon-right="plus"
                    @click="addCaracteristica"
                    label="Añadir"
                    />
                </b-field>
              </div>
            </div>

            <div class="columns" v-show="producto.tipo==2">
              <div class="column">
                <b-field horizontal label="Añadir Característica con tamaño">
                    <b-button
                    type="is-primary"
                    icon-right="plus"
                    @click="addCaracteristica"
                    label="Añadir"
                    />
                </b-field>
              </div>
            </div>

            <!-- <div class="columns" v-show="producto.tipo==3">
              <div class="column">
                <b-field horizontal label="Añadir Tamaños">
                    <b-button
                    type="is-primary"
                    icon-right="plus"
                    @click="addTamanioProducto"
                    label="Añadir"
                    />
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
import { VueEditor } from "vue2-editor";
import VueUploadMultipleImage from 'vue-upload-multiple-image';

export default {
  components: {
    VueEditor: VueEditor,
    VueUploadMultipleImage:VueUploadMultipleImage
  },
  data() {
    return {
      images: [],
      tablaDatos:[],
      filteredTags: [],
      tags:[],
      tablaCategorias:[],
      tablaTamanios:[],
      showModalCreateEdit: false,
      isEdit:false,
      isAdd:false,
      producto:{
            id: 0,
			codigo: "",
			nombre: "",
			precio: 0,
			descripcionCorta: "",
			descripcionLarga: "",
			urlsFotos: "C:",
			existencias: 0,
			estado: 1,
			visitas: 0,
			tipo: 0,
			descuento: 0,
			idCategoria: 1,
            caracteristicas_producto:[],
            tamanios_producto:[]
      }
    };
  },
  mounted() {
    this.fetchDatos();
    this.fetchCategorias();
    this.fetchTamanios();
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("-----------------saddsa-----------")
      console.log("formData")
      console.log(formData)
      console.log("index")
      console.log(index)
      console.log("fileList")
      console.log(fileList)

      //console.log('data', formData, index, fileList)
      // Upload image api
      this.axios.post(process.env.MIX_API_URL+'api/uploadImage', formData).then(response => {
        console.log(response.data.respuesta)
        let newImage={
            path:response.data.respuesta.url,
            default:index+5,
            highlight:1,
            caption:""
        }
        this.images.push(newImage)
        this.producto.urlsFotos=""
        this.images.forEach(element => {
            this.producto.urlsFotos=this.producto.urlsFotos+element.path+";"
        });
      })
    },
    uploadImageSuccessCaracteristica(formData, index, fileList,caracteristica) {
      console.log("-----------------carac sin tam-----------")
      console.log("formData")
      console.log(formData)
      console.log("index")
      console.log(index)
      console.log("fileList")
      console.log(fileList)

      //console.log('data', formData, index, fileList)
      // Upload image api
      this.axios.post(process.env.MIX_API_URL+'api/uploadImage', formData).then(response => {
        console.log(response.data.respuesta)
        let newImage={
            path:response.data.respuesta.url,
            default:index+5,
            highlight:1,
            caption:""
        }

        caracteristica.images.push(newImage)
        caracteristica.urlFoto=""
        caracteristica.images.forEach(element => {
            caracteristica.urlFoto=caracteristica.urlFoto+element.path+";"
        });
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
    beforeRemoveCaracteristica(index, done, fileList,caracteristica) {
      console.log('index', index, fileList)
      var r = confirm("Está seguro de eliminar la imagen?")
      if (r == true) {
        done(index,caracteristica)
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    doneDeleteImg(index)
    {
        this.images.splice(index,1)
        this.producto.urlsFotos=""
        this.images.forEach(element => {
            this.producto.urlsFotos=this.producto.urlsFotos+element.path+";"
        });
    },
    doneDeleteImgCar(index,caracteristica)
    {
        caracteristica.images.splice(index,1)
        caracteristica.urlFoto=""
        caracteristica.images.forEach(element => {
            caracteristica.urlFoto=caracteristica.urlFoto+element.path+";"
        });
    },
    validateTag(tagToAdd,caracteristica){
        console.log("***************************************************")
        console.log("tagToAdd")
        console.log(tagToAdd)
        console.log("caracteristica")
        console.log(caracteristica)

        if(caracteristica.tags.find(element=>element.id===tagToAdd.id))
        {
            return false;
        }
        else
        {
            return true;
        }

        //return true

    },
    handleInputTagTam()
    {
        this.producto.tamanios_producto=[]
        this.tags.forEach(element => {
            this.producto.tamanios_producto.push(
                {
                    id:0,
                    existencias:0,
                    idTamanio:element.id,
                    idProducto:0
                }
            )
        });
    },
    handleInputTag(caracteristica){
        console.log("Handle input")
        let bufferTams_caracteristicas=JSON.parse(JSON.stringify(caracteristica.tamanios_caracteristica))
        let tempTamsCaracteristicas=[]

        bufferTams_caracteristicas.forEach(element=>{
            console.log("+++++++++++++++++++++")
            console.log(element)
            caracteristica.tags.forEach(tag => {
                console.log("::::::::::::::::::::::::::")
                console.log(tag)
                if(tag.id==element.idTamanio)
                {
                    console.log("element okkkkkkkkkkkkkkk")
                    console.log(element)
                    tempTamsCaracteristicas.push(element)
                }
            });
        })

        caracteristica.tags.forEach(tag => {
            console.log("|||||||||||||||||||||||||||||||||||||")
            console.log(tag)
            let tagFound=0
            tempTamsCaracteristicas.forEach(element=>{
                console.log("///////////////////////////")
                console.log(element)
                if(tag.id==element.idTamanio)
                {
                    tagFound=1
                }
            })
            if(tagFound==0)
            {
                console.log("tag")
                console.log(tag)
                tempTamsCaracteristicas.push(
                    {
                        id:0,
                        existencias:0,
                        idTamanio:tag.id,
                        idCaracteristicaProducto:0
                    }
                )
            }

        })

        //caracteristica.tamanios_caracteristica=[]
        console.log("tamsss1")
        console.log(caracteristica.tamanios_caracteristica)

        console.log("tempTamsCaracteristicas")
        console.log(tempTamsCaracteristicas)

        caracteristica.tamanios_caracteristica=tempTamsCaracteristicas



        // caracteristica.tags.forEach(element => {
        //     caracteristica.tamanios_caracteristica.push(
        //         {
        //             id:0,
        //             existencias:0,
        //             idTamanio:element.id,
        //             idCaracteristicaProducto:0
        //         }
        //     )
        // });

        console.log("tamsss3")
        console.log(caracteristica.tamanios_caracteristica)
        // producto.producto.caracteristicas_producto.tamanios_caracteristica.push(
        //     {
        //         id:0,
        //         existencias:0,
        //         idTamanio:0,
        //         idProducto:0
        //     }
        // )
    },
    getFilteredTags(text,caracteristica,data) {
        console.log("arguments")
        console.log(arguments)
        console.log("text")
        console.log(text)
        console.log("caracteristica")
        console.log(caracteristica)
        console.log("data")
        console.log(data)
                caracteristica.filteredTags= this.tablaTamanios.filter((option) => {
                    return option.descripcion
                        .toString()
                        .toLowerCase()
                        .indexOf(text.toLowerCase()) >= 0
                })
    },
    getFilteredTagsTams(text) {
                this.filteredTags= this.tablaTamanios.filter((option) => {
                    return option.descripcion
                        .toString()
                        .toLowerCase()
                        .indexOf(text.toLowerCase()) >= 0
                })
    },
    handleColorInput(caracteristica){
        console.log("Colorrrrr")
        console.log(caracteristica.colorObj.toString('hex'))
        caracteristica.color=caracteristica.colorObj.toString('hex')
    },
    addTamanioProducto(){
        console.log("addddddddddddddd")
        this.producto.tamanios_producto.push(
            {

            }
        )
    },
    addCaracteristica(){
        this.producto.caracteristicas_producto.push(
            {
                id:0,
                descripcion:"",
                color:"#FFFFFF",
                colorObj:"#FFFFFF",
                urlFoto:"",
                existencias:"",
                tipo:"",
                idProducto:0,
                isActive:1,
                tamanios_caracteristica:[],
                tags:[],
                filteredTags:this.tablaTamanios,
                images:[]
            }
        )
    },
    cancelForm() {
      this.producto={
        id: 0,
        codigo: "",
        nombre: "",
        precio: 0,
        descripcionCorta: "",
        descripcionLarga: "",
        urlsFotos: "C:",
        existencias: 0,
        estado: 1,
        visitas: 0,
        tipo: 0,
        descuento: 0,
        idCategoria: 1,
        caracteristicas_producto:[],
        tamanios_producto:[]
      }

      this.showModalCreateEdit=false;
      this.tags=[]
      //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    addFunction()
    {
        this.showModalCreateEdit=true
        this.isAdd=true
        this.isEdit=false
    },
    viewFunction(data)
    {
        this.$router.push("mostrarproducto/"+data.id)
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
        fetch(process.env.MIX_API_URL+"api/productos/"+data.id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("producto eliminado correctamente");

                });

                this.cancelForm()
                this.fetchDatos()

    },
    editFunction(data)
    {
        this.fetchProductoById(data.id)

        this.showModalCreateEdit=true
        this.isAdd=false
        this.isEdit=true
    },
    handleClose(index)
    {
        console.log("close");
        console.log("index");
        console.log(index);
        this.$buefy.dialog.alert(index);
        this.producto.caracteristicas_producto[index].isActive=0;
    },
    submit()
    {
        if(this.isAdd)
        {
            let auxProducto=this.producto
            auxProducto.caracteristicas_producto.forEach(element => {
                delete element.filteredTags
                delete element.tags
            });
             auxProducto.caracteristicas_producto=auxProducto.caracteristicas_producto.filter(element=>element.isActive==1)
            console.log("auxProducto ---------------------------")
            console.log(auxProducto)
            fetch(process.env.MIX_API_URL+"api/productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(auxProducto)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Producto registrado correctamente");

                });
                this.cancelForm()
                this.fetchDatos()

        }
        if(this.isEdit)
        {
            fetch(process.env.MIX_API_URL+"api/productos/"+this.producto.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(this.producto)
            })
                .then((response) => response.json())
                .then((data) => {
                var resp = data.message;
                console.log(resp);
                    this.$buefy.dialog.alert("Producto editado correctamente");

                });

                this.cancelForm()
                this.fetchDatos()

        }
    },
    fetchDatos() {
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
    fetchProductoById(id) {
      try {
        fetch(process.env.MIX_API_URL+"api/productos/"+id, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.producto = data.respuesta;

              this.producto.caracteristicas_producto.forEach(element => {
                element.colorObj=element.color
                element.filteredTags=this.tablaTamanios
                element.tags=[]
                element.tamanios_caracteristica.forEach(tamCar => {
                    element.tags.push(tamCar.tamanio)
                });
              });

              this.producto.tamanios_producto.forEach(tamProd => {
                    this.tags.push(tamProd.tamanio)
              });


              console.log("this.producto");
              console.log(this.producto);
            } else {
              //this.$router.push("/login")
              this.cancelForm()
            }
          });
      } catch (e) {

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
              this.tablaCategorias = data.respuesta;
              console.log("this.tablaCategorias");
              console.log(this.tablaCategorias);
            } else {
              //this.$router.push("/login")
              this.tablaCategorias = [];
            }
          });
      } catch (e) {

      }
    },
    getTamDescripcionById(paramId)
    {
        return this.tablaTamanios.find(element=>element.id==paramId).descripcion;
    },
    fetchTamanios() {
      try {
        fetch(process.env.MIX_API_URL+"api/tamanios", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            var resp = data;

            if (data) {
              this.tablaTamanios = data.respuesta;
              this.filteredTags = data.respuesta;
              console.log("this.tablaTamanios");
              console.log(this.tablaTamanios);
            } else {
              //this.$router.push("/login")
              this.tablaTamanios = [];
              this.filteredTags = [];
            }
          });
      } catch (e) {

      }
    },
  },
};
</script>
