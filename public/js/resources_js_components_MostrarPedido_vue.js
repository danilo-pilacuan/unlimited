"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MostrarPedido_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tablaItems: []
    };
  },
  mounted: function mounted() {
    this.fetchOrden();
  },
  computed: {
    authenticated: function authenticated() {
      return this.$store.state.authenticated;
    },
    cartList: function cartList() {
      return this.$store.state.cartList;
    },
    currentUser: function currentUser() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    getUrlFoto: function getUrlFoto(item) {
      var urlImg = "";

      if (item.producto.tipo == 0 || item.producto.tipo == 3) {
        var arrayUrls = item.producto.urlsFotos.split(";");
        urlImg = arrayUrls[0];
      } else {
        // console.log("casasasaasas")
        // console.log(producto.caracteristicas_producto)
        if (item.caracteristica) {
          var arrayUrls2 = item.caracteristica.urlFoto.split(";");
          urlImg = arrayUrls2[0];
        }
      }

      return "http://192.168.0.100:8000/" + urlImg;
    },
    getExistencias: function getExistencias(producto, caracteristica, tamCaracteristica, tamProducto) {
      var existencias = 0;

      if (producto.tipo == 0) {
        existencias = producto.existencias;
      }

      if (producto.tipo == 1) {
        existencias = caracteristica.existencias;
      }

      if (producto.tipo == 2) {
        existencias = tamCaracteristica.existencias;
      }

      if (producto.tipo == 3) {
        existencias = tamProducto.existencias;
      }

      return existencias;
    },
    fetchOrden: function fetchOrden() {
      var _this = this;

      console.log("http://192.168.0.100:8000/" + "api/registrocarrito/orden/" + this.$route.params.id);

      try {
        fetch("http://192.168.0.100:8000/" + "api/registrocarrito/orden/" + this.$route.params.id, {
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
            _this.tablaItems = data.respuesta;
            console.log("pedido pedidopedidopedido");
            console.log(_this.tablaItems);
          } else {
            //this.$router.push("/login")
            _this.tablaItems = [];
          }
        });
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=template&id=090cde4a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=template&id=090cde4a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("h1", {
    staticClass: "title"
  }, [_vm._v("Pedido")]), _vm._v(" "), _c("h1", {
    staticClass: "subtitle"
  }, [_vm._v("Items")]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column is-12"
  }, [_c("b-table", {
    attrs: {
      data: _vm.tablaItems,
      bordered: true,
      striped: false,
      hoverable: false,
      loading: false,
      focusable: false,
      "mobile-cards": true,
      paginated: true,
      "per-page": 5
    }
  }, [_c("b-table-column", {
    attrs: {
      label: "Item",
      field: "producto.urlFoto",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "contenedorImgProd"
        }, [_c("img", {
          staticClass: "imgProducto",
          attrs: {
            src: _vm.getUrlFoto(props.row),
            alt: "Placeholder image"
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    staticClass: "is-vcentered",
    attrs: {
      label: "Nombre Producto",
      field: "producto.descripcionCorta",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    " + _vm._s(props.row.producto.nombre) + "\n\n                ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    staticClass: "is-vcentered",
    attrs: {
      label: "Detalle",
      field: "producto.descripcionCorta",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    " + _vm._s(props.row.producto.descripcionCorta) + "\n\n                ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Precio",
      field: "precio",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    $" + _vm._s(props.row.producto.precio.toFixed(2)) + "\n                ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Cantidad",
      field: "cantidad",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n\n                        " + _vm._s(props.row.cantidad) + "\n\n                ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Total",
      field: "total",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    $" + _vm._s((props.row.cantidad * props.row.producto.precio).toFixed(2)) + "\n                ")];
      }
    }])
  })], 1)], 1)])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.contenedorImgProd\n{\n    width: 7em;\n}\n.imgProducto {\n\n  height: 6em;\n  width: auto;\n}\ntd\n{\n        vertical-align: middle !important;\n}\n.b-numberinput.field.is-grouped div.control\n{\n    flex-grow: 1 !important;\n    flex-shrink: 1 !important;\n}\n.b-numberinput\n{\n    display: inline-flex !important;\n    min-width: 10em;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_style_index_0_id_090cde4a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_style_index_0_id_090cde4a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_style_index_0_id_090cde4a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/MostrarPedido.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/MostrarPedido.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MostrarPedido_vue_vue_type_template_id_090cde4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarPedido.vue?vue&type=template&id=090cde4a& */ "./resources/js/components/MostrarPedido.vue?vue&type=template&id=090cde4a&");
/* harmony import */ var _MostrarPedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarPedido.vue?vue&type=script&lang=js& */ "./resources/js/components/MostrarPedido.vue?vue&type=script&lang=js&");
/* harmony import */ var _MostrarPedido_vue_vue_type_style_index_0_id_090cde4a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css& */ "./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MostrarPedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarPedido_vue_vue_type_template_id_090cde4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MostrarPedido_vue_vue_type_template_id_090cde4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MostrarPedido.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MostrarPedido.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/MostrarPedido.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarPedido.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MostrarPedido.vue?vue&type=template&id=090cde4a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/MostrarPedido.vue?vue&type=template&id=090cde4a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_template_id_090cde4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_template_id_090cde4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_template_id_090cde4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarPedido.vue?vue&type=template&id=090cde4a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=template&id=090cde4a&");


/***/ }),

/***/ "./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarPedido_vue_vue_type_style_index_0_id_090cde4a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarPedido.vue?vue&type=style&index=0&id=090cde4a&lang=css&");


/***/ })

}]);