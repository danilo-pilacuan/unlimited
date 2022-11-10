"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Usuarios_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Usuarios.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Usuarios.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      tablaDatos: [],
      showModalCreateEdit: false,
      isEdit: false,
      isAdd: false,
      usuario: {
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1
      }
    };
  },
  mounted: function mounted() {
    this.fetchDatos();
  },
  methods: {
    cancelForm: function cancelForm() {
      this.usuario = {
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1
      };
      this.showModalCreateEdit = false; //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    addFunction: function addFunction() {
      this.showModalCreateEdit = true;
      this.isAdd = true;
      this.isEdit = false;
    },
    confirmDelete: function confirmDelete(data) {
      var _this = this;

      this.$buefy.dialog.confirm({
        message: 'Está seguro de continuar?',
        onConfirm: function onConfirm() {
          return _this.deleteFunction(data);
        }
      });
    },
    deleteFunction: function deleteFunction(data) {
      var _this2 = this;

      fetch("http://192.168.0.100:8000/" + "api/usuarios/" + data.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var resp = data.resultado;
        console.log(resp);

        if (resp == "ok") {
          _this2.$buefy.dialog.alert("Usuario eliminado correctamente");
        } else {
          _this2.$buefy.dialog.alert("No se ha podido eliminar usuario");
        }
      });
      this.fetchDatos();
      this.cancelForm();
    },
    editFunction: function editFunction(data) {
      this.usuario = data;
      this.showModalCreateEdit = true;
      this.isAdd = false;
      this.isEdit = true;
    },
    submit: function submit() {
      var _this3 = this;

      if (this.isAdd) {
        fetch("http://192.168.0.100:8000/" + "api/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(this.usuario)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data.message;
          console.log(resp);

          _this3.$buefy.dialog.alert("Usuario registrado correctamente");
        });
        this.cancelForm();
        this.fetchDatos();
      }

      if (this.isEdit) {
        fetch("http://192.168.0.100:8000/" + "api/usuarios/" + this.usuario.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(this.usuario)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data.message;
          console.log(resp);

          _this3.$buefy.dialog.alert("Usuario editado correctamente");
        });
        this.fetchDatos();
        this.cancelForm();
      }
    },
    fetchDatos: function fetchDatos() {
      var _this4 = this;

      try {
        fetch("http://192.168.0.100:8000/" + "api/usuarios", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data;

          if (data) {
            _this4.tablaDatos = data.respuesta;
            console.log("this.tablaDatos");
            console.log(_this4.tablaDatos);
          } else {
            //this.$router.push("/login")
            _this4.tablaDatos = [];
          }
        });
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Usuarios.vue?vue&type=template&id=0d357df0&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Usuarios.vue?vue&type=template&id=0d357df0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm._m(0), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "block"
  }, [_c("b-table", {
    attrs: {
      data: _vm.tablaDatos,
      bordered: true,
      striped: true,
      narrowed: true,
      hoverable: false,
      loading: false,
      focusable: false,
      "mobile-cards": false,
      searchable: true,
      paginated: true,
      "per-page": 20
    }
  }, [_c("b-table-column", {
    attrs: {
      label: "Nombres",
      field: "nombres",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.nombres) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Apellidos",
      field: "apellidos",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.apellidos) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Fecha Nacimiento",
      field: "fechaNacimiento",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.fechaNacimiento) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Teléfono",
      field: "telefono",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.telefono) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Email",
      field: "email",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.email) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      field: "actions",
      label: "Acciones"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "buttons"
        }, [props.row.tipoUsuario == 2 ? _c("b-button", {
          attrs: {
            rounded: "",
            type: "is-danger",
            "icon-left": "delete"
          },
          on: {
            click: function click($event) {
              return _vm.confirmDelete(props.row);
            }
          }
        }) : _vm._e()], 1)];
      }
    }])
  })], 1)], 1)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "has-text-centered"
  }, [_c("h1", {
    staticClass: "title"
  }, [_vm._v("Usuarios")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Usuarios.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Usuarios.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Usuarios_vue_vue_type_template_id_0d357df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuarios.vue?vue&type=template&id=0d357df0& */ "./resources/js/components/Usuarios.vue?vue&type=template&id=0d357df0&");
/* harmony import */ var _Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Usuarios.vue?vue&type=script&lang=js& */ "./resources/js/components/Usuarios.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Usuarios_vue_vue_type_template_id_0d357df0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Usuarios_vue_vue_type_template_id_0d357df0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Usuarios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Usuarios.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Usuarios.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Usuarios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Usuarios.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Usuarios.vue?vue&type=template&id=0d357df0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Usuarios.vue?vue&type=template&id=0d357df0& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_template_id_0d357df0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_template_id_0d357df0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_template_id_0d357df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Usuarios.vue?vue&type=template&id=0d357df0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Usuarios.vue?vue&type=template&id=0d357df0&");


/***/ })

}]);