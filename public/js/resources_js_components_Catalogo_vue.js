"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Catalogo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=script&lang=js& ***!
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
      tablaProductos: [],
      tablaCategorias: [],
      showModalCreateEdit: false,
      inputCategoria: null,
      inputTipo: null,
      inputDescripcionLarga: "",
      inputDescripcionCorta: "",
      inputPrecio: 0,
      inputNombre: "",
      inputCodigo: "",
      inputEstado: null,
      isEdit: false,
      isAdd: false
    };
  },
  computed: {
    authenticated: function authenticated() {
      return this.$store.state.authenticated;
    },
    cartList: function cartList() {
      return this.$store.state.cartList;
    }
  },
  mounted: function mounted() {
    if (this.$route.query.categoria) {
      console.log("----------------------------- query");
      this.fetchProductosByCategoria(this.$route.query.categoria);
    } else if (this.$route.query.buscar) {
      console.log("----------------------------- query");
      this.fetchProductosByBuscar(this.$route.query.buscar);
    } else {
      console.log("----------------------------- no query");
      this.fetchProductos();
    }

    this.fetchCategorias();
  },
  watch: {
    '$route': function $route() {
      if (this.$route.query.categoria) {
        console.log("----------------------------- query");
        this.fetchProductosByCategoria(this.$route.query.categoria);
      }

      if (this.$route.query.buscar) {
        console.log("----------------------------- query");
        this.fetchProductosByBuscar(this.$route.query.buscar);
      } else {
        console.log("----------------------------- no query");
        this.fetchProductos();
      }
    }
  },
  methods: {
    getUrlFoto: function getUrlFoto(producto) {
      var urlImg = "";

      if (producto.tipo == 0 || producto.tipo == 3) {
        var arrayUrls = producto.urlsFotos.split(';');
        urlImg = arrayUrls[0];
      } else {
        console.log("casasasaasas");
        console.log(producto.caracteristicas_producto);

        if (producto.caracteristicas_producto && producto.caracteristicas_producto.length > 0) {
          var arrayUrls2 = producto.caracteristicas_producto[0].urlFoto.split(';');
          urlImg = arrayUrls2[0];
        }
      }

      return urlImg;
    },
    addToCart: function addToCart(producto) {
      console.log("Add cart: ");
      console.log(producto);
      var cartAux = this.cartList;
      cartAux.itemsList.push(producto);
      this.$store.dispatch("setCartList", cartAux);
    },
    showProduct: function showProduct(producto) {
      this.$router.push("/mostrarproducto/" + producto.id);
    },
    recoverStorage: function recoverStorage() {
      console.log("Recovered: " + this.authenticated);
      console.log("Recovered cart: ");
      console.log(this.cartList);
      console.log(this.cartList.data1);
    },
    cancel: function cancel() {
      this.showModalCreateEdit = false; //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    fetchProductos: function fetchProductos(nombreCategoria) {
      var _this = this;

      console.log("process.env.MIX_API_URL");
      console.log("http://192.168.0.100:8000/");

      try {
        fetch("http://192.168.0.100:8000/" + "api/productos", {
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
            _this.tablaProductos = data.respuesta;
            console.log("this.tablaProductos");
            console.log(_this.tablaProductos);
          } else {
            _this.tablaProductos = [];
          }
        });
      } catch (e) {}
    },
    fetchCategorias: function fetchCategorias() {
      var _this2 = this;

      try {
        fetch("http://192.168.0.100:8000/" + "api/categorias", {
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
            _this2.tablaCategorias = data.respuesta;
            console.log("**********tablaCategorias");
            console.log(_this2.tablaCategorias);
          } else {
            //this.$router.push("/login")
            _this2.tablaCategorias = [];
          }
        });
      } catch (e) {}
    },
    fetchProductosByCategoria: function fetchProductosByCategoria(nombreCategoria) {
      var _this3 = this;

      console.log("process.env.MIX_API_URL");
      console.log("http://192.168.0.100:8000/");

      try {
        fetch("http://192.168.0.100:8000/" + "api/productos?categoria=" + nombreCategoria, {
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
            _this3.tablaProductos = data.respuesta;
            console.log("this.tablaProductos");
            console.log(_this3.tablaProductos);
          } else {
            _this3.tablaProductos = [];
          }
        });
      } catch (e) {}
    },
    fetchProductosByBuscar: function fetchProductosByBuscar(paramBuscar) {
      var _this4 = this;

      try {
        fetch("http://192.168.0.100:8000/" + "api/productos?buscar=" + paramBuscar, {
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
            _this4.tablaProductos = data.respuesta;
            console.log("this.tablaProductos");
            console.log(_this4.tablaProductos);
          } else {
            _this4.tablaProductos = [];
          }
        });
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=template&id=52cde43e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=template&id=52cde43e& ***!
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

  return _c("div", [_c("div", {
    staticClass: "columns mt-2"
  }, [_c("div", {
    staticClass: "column is-2 ml-5"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-content cardRounded"
  }, [_c("div", {
    staticClass: "p-1 mt-3"
  }, [_c("p", {
    staticClass: "subtitle"
  }, [_vm._v("Categorías")]), _vm._v(" "), _c("b-menu", [_vm._l(_vm.tablaCategorias, function (categoria, index) {
    return _c("b-menu-list", {
      key: index,
      staticClass: "mt-3 mb-3"
    }, [_c("b-menu-item", {
      attrs: {
        label: categoria.nombre,
        tag: "router-link",
        to: {
          path: "/catalogo?categoria=" + categoria.nombre
        },
        active: _vm.$route.query.categoria == categoria.nombre
      }
    })], 1);
  }), _vm._v(" "), _c("b-menu-list", {
    staticClass: "mt-3 mb-3"
  }, [_c("b-menu-item", {
    attrs: {
      label: "Todas",
      tag: "router-link",
      to: {
        path: "/catalogo"
      },
      active: !_vm.$route.query.categoria
    }
  })], 1)], 2)], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "column is-9 pr-3"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "columns is-multiline"
  }, _vm._l(_vm.tablaProductos, function (producto, index) {
    return _c("div", {
      key: index,
      staticClass: "column is-one-quarter"
    }, [_c("div", {
      staticClass: "cardProducto"
    }, [_c("div", {
      staticClass: "contenedorProducto"
    }, [_c("div", [_c("figure", {
      staticClass: "image is-4by3"
    }, [_c("img", {
      staticClass: "imgProducto",
      attrs: {
        src: _vm.getUrlFoto(producto),
        alt: "Placeholder image"
      }
    })])]), _vm._v(" "), _c("div", [_c("div", [_c("p", {
      staticClass: "subtitle mt-1"
    }, [_vm._v(_vm._s(producto.nombre))]), _vm._v(" "), _c("p", {
      staticClass: "mb-3 descripcionCorta"
    }, [_vm._v(_vm._s(producto.descripcionCorta))]), _vm._v(" "), _c("div", {
      staticClass: "columns is-vcentered"
    }, [_c("div", {
      staticClass: "column is-8 p-0 mr-1 ml-3"
    }, [_c("hr", {
      staticClass: "mt-5 mb-0 pr-1"
    }), _vm._v(" "), _c("div", {
      staticClass: "precioProducto mt-1 mb-0"
    }, [producto.estado == 2 ? _c("div", {
      staticClass: "title is-4",
      staticStyle: {
        "text-decoration": "line-through",
        display: "inline"
      }
    }, [_vm._v("$" + _vm._s(producto.precio.toFixed(2)))]) : _vm._e(), _vm._v(" "), producto.estado == 2 ? _c("div", {
      staticClass: "title is-4",
      staticStyle: {
        display: "inline"
      }
    }, [_vm._v("$" + _vm._s((producto.precio * (1 - producto.descuento / 100)).toFixed(2)))]) : _vm._e(), _vm._v(" "), producto.estado == 1 ? _c("div", {
      staticClass: "title is-4"
    }, [_vm._v("$" + _vm._s(producto.precio.toFixed(2)))]) : _vm._e()])]), _vm._v(" "), _c("div", {
      staticClass: "column is-2 p-0 mb-2"
    }, [_c("b-button", {
      staticClass: "has-text-white",
      staticStyle: {
        color: "'#FFF'"
      },
      attrs: {
        type: "is-primary",
        size: "is-medium",
        tag: "router-link",
        to: "/mostrarproducto/" + producto.id,
        "icon-left": "cart",
        rounded: ""
      }
    })], 1)])])])])])]);
  }), 0)])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.cardProducto\n{\n    border-radius: 3em;\n    background-color: #FFFFFF;\n}\n.contenedorProducto\n{\n    padding: 2em;\n}\n.imgProducto\n{\n    border-radius: 3em;\n}\n.descripcionCorta {\n  overflow: hidden;\n  display: -webkit-box;\n  min-height: 6em;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_style_index_0_id_52cde43e_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_style_index_0_id_52cde43e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_style_index_0_id_52cde43e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Catalogo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Catalogo.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Catalogo_vue_vue_type_template_id_52cde43e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catalogo.vue?vue&type=template&id=52cde43e& */ "./resources/js/components/Catalogo.vue?vue&type=template&id=52cde43e&");
/* harmony import */ var _Catalogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalogo.vue?vue&type=script&lang=js& */ "./resources/js/components/Catalogo.vue?vue&type=script&lang=js&");
/* harmony import */ var _Catalogo_vue_vue_type_style_index_0_id_52cde43e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css& */ "./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Catalogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Catalogo_vue_vue_type_template_id_52cde43e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Catalogo_vue_vue_type_template_id_52cde43e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Catalogo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Catalogo.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Catalogo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalogo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Catalogo.vue?vue&type=template&id=52cde43e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Catalogo.vue?vue&type=template&id=52cde43e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_template_id_52cde43e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_template_id_52cde43e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_template_id_52cde43e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalogo.vue?vue&type=template&id=52cde43e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=template&id=52cde43e&");


/***/ }),

/***/ "./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogo_vue_vue_type_style_index_0_id_52cde43e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Catalogo.vue?vue&type=style&index=0&id=52cde43e&lang=css&");


/***/ })

}]);