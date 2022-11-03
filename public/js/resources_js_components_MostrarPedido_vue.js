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
      tablaPedidos: []
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
    fetchOrden: function fetchOrden() {
      var _this = this;

      try {
        fetch("http://192.168.0.100:8000/" + "api/ordenes/" + this.$route.params.id, {
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
            _this.pedido = data.respuesta;
            console.log("pedido pedidopedidopedido");
            console.log(_this.pedido);
          } else {
            //this.$router.push("/login")
            _this.tablaPedidos = [];
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
  }, [_vm._v("Items")]), _vm._v(" "), _vm._l(_vm.cartList.itemsList, function (registroProducto, index) {
    return _c("div", {
      key: index,
      staticClass: "container"
    }, [_c("div", {
      staticClass: "block"
    }, [_c("div", {
      staticClass: "columns"
    }, [_c("div", {
      staticClass: "column"
    }, [_c("section", {
      staticClass: "hero is-primary",
      staticStyle: {
        cursor: "pointer"
      }
    }, [_c("div", {
      staticClass: "hero-body"
    }, [_c("p", {
      staticClass: "title"
    }, [_vm._v("Nombre: " + _vm._s(registroProducto.producto.Nombre))]), _vm._v(" "), _c("p", {
      staticClass: "subtitle"
    }, [_vm._v("Código: " + _vm._s(registroProducto.producto.codigo))]), _vm._v(" "), _c("p", {
      staticClass: "subtitle"
    }, [_vm._v("Precio: " + _vm._s(registroProducto.producto.precio))]), _vm._v(" "), _c("p", {
      staticClass: "subtitle"
    }, [_vm._v("Cantidad: " + _vm._s(registroProducto.cantidad))]), _vm._v(" "), _c("p", {
      staticClass: "subtitle"
    }, [_vm._v("Descripción: " + _vm._s(registroProducto.producto.descripcionCorta))])])])])])])]);
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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


/***/ })

}]);