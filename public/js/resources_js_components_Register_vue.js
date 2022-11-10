"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      username: "",
      errors: {},
      password: "",
      loginFailed: false,
      validatePassword: false,
      validateUsername: false,
      selected: new Date(),
      usuario: {
        nombres: "",
        apellidos: "",
        fechaNacimientoObj: new Date(),
        fechaNacimiento: "",
        urlFoto: "...",
        email: "",
        telefono: "",
        password: "",
        password_confirmation: "",
        tipoUsuario: 2
      }
    };
  },
  computed: {
    authenticated: function authenticated() {
      return this.$store.state.authenticated;
    },
    userType: function userType() {
      return this.$store.state.userType;
    }
  },
  methods: {
    clearDate: function clearDate() {
      this.user.fechaNacimiento = null;
    },
    submit: function submit() {
      var _this = this;

      this.usuario.fechaNacimiento = this.usuario.fechaNacimientoObj.toISOString().split('T')[0];
      fetch("http://192.168.0.100:8000/" + "api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(this.usuario)
      }).then(function (response) {
        console.log("🚀 ~ file: Register.vue ~ line 145 ~ .then ~ response", response); // if(response.status!=200)
        // {
        //     this.$buefy.dialog.alert("Revise los campos");
        //     //return null;
        // }

        return response.json();
      }).then(function (data) {
        var resp = data;
        console.log("🚀 ~ file: Register.vue ~ line 147 ~ .then ~ data", data);
        console.log(resp);

        if (resp.errors) {
          //this.$buefy.dialog.alert("Error");
          //this.$router.push("/login");
          // resp.errors.forEach(element => {
          // });
          _this.errors = resp.errors;
        } else if (resp) {
          _this.$buefy.dialog.alert("Usuario registrado correctamente");

          _this.$router.push("/login");
        } else {}

        ;
      });
    },
    authLogin: function authLogin() {
      var _this2 = this;

      try {
        fetch("http://192.168.0.100:8000/" + "api/users/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data;
          console.log(resp);

          if (data._id) {
            console.log("hello " + data.name);

            if (data.userType) {
              _this2.$store.dispatch("setUserType", data.userType);
            }

            _this2.$store.dispatch("setAuth", true);
          } else {
            _this2.$router.push("/login");
          }
        });
      } catch (e) {
        this.$store.dispatch("setAuth", false);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4& ***!
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

  return _c("div", {
    staticClass: "home",
    staticStyle: {
      "padding-bottom": "10rem"
    },
    attrs: {
      id: "login"
    }
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column is-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "card mt-3"
  }, [_vm.usuario ? _c("section", {
    staticClass: "section"
  }, [_c("p", {
    staticClass: "subtitle has-text-centered has-text-weight-bold"
  }, [_vm._v("Registrarse")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("b-field", {
    attrs: {
      grouped: ""
    }
  }, [_c("b-field", {
    attrs: {
      label: "Nombres (*)",
      type: {
        "is-danger": _vm.errors.nombres
      },
      expanded: ""
    }
  }, [_c("b-input", {
    attrs: {
      required: "",
      maxlength: "30"
    },
    model: {
      value: _vm.usuario.nombres,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "nombres", $$v);
      },
      expression: "usuario.nombres"
    }
  })], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      label: "Apellidos (*)",
      type: {
        "is-danger": _vm.errors.apellidos
      },
      expanded: ""
    }
  }, [_c("b-input", {
    attrs: {
      required: "",
      maxlength: "30"
    },
    model: {
      value: _vm.usuario.apellidos,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "apellidos", $$v);
      },
      expression: "usuario.apellidos"
    }
  })], 1)], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      grouped: ""
    }
  }, [_c("b-field", {
    attrs: {
      label: "Email (*)",
      type: {
        "is-danger": _vm.errors.email
      },
      expanded: ""
    }
  }, [_c("b-input", {
    attrs: {
      required: "",
      type: "email",
      "validation-message": "Ingrese un email valido",
      pattern: "^\\S+@\\S+\\.\\S+$",
      maxlength: "30"
    },
    model: {
      value: _vm.usuario.email,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "email", $$v);
      },
      expression: "usuario.email"
    }
  })], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      label: "Teléfono (*)",
      type: {
        "is-danger": _vm.errors.telefono
      },
      expanded: ""
    }
  }, [_c("b-input", {
    attrs: {
      required: "",
      maxlength: "10"
    },
    model: {
      value: _vm.usuario.telefono,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "telefono", $$v);
      },
      expression: "usuario.telefono"
    }
  })], 1)], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      label: "Fecha Nacimiento (*)",
      expanded: ""
    }
  }, [_c("b-datepicker", {
    attrs: {
      "show-week-number": false,
      placeholder: "Seleccionar Fecha...",
      icon: "calendar-today",
      "icon-right": _vm.usuario.fechaNacimientoObj ? "close-circle" : "",
      "icon-right-clickable": "",
      "trap-focus": ""
    },
    on: {
      "icon-right-click": _vm.clearDate
    },
    model: {
      value: _vm.usuario.fechaNacimientoObj,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "fechaNacimientoObj", $$v);
      },
      expression: "usuario.fechaNacimientoObj"
    }
  })], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      grouped: ""
    }
  }, [_c("b-field", {
    attrs: {
      type: {
        "is-danger": _vm.errors.password
      },
      label: "Contraseña (*)",
      expanded: ""
    }
  }, [_c("b-input", {
    attrs: {
      required: "",
      maxlength: "16",
      type: "password"
    },
    model: {
      value: _vm.usuario.password,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "password", $$v);
      },
      expression: "usuario.password"
    }
  })], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      type: {
        "is-danger": _vm.errors.password
      },
      label: "Confirmar Contraseña (*)",
      expanded: ""
    }
  }, [_c("b-input", {
    attrs: {
      required: "",
      maxlength: "16",
      type: "password"
    },
    model: {
      value: _vm.usuario.password_confirmation,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "password_confirmation", $$v);
      },
      expression: "usuario.password_confirmation"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "has-text-weight-bold",
    staticStyle: {
      display: "inline"
    }
  }, [_vm._v("(*)")]), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "inline"
    }
  }, [_vm._v("Campos Obligatorios")]), _vm._v(" "), _c("br"), _vm._v(" "), Object.keys(_vm.errors).length > 0 ? _c("div", [_vm._v("Revise los campos marcados")]) : _vm._e(), _vm._v(" "), _c("b-button", {
    attrs: {
      type: "is-primary is-align-self-center",
      label: "Registrarse",
      size: "is-medium"
    },
    on: {
      click: _vm.submit
    }
  })], 1)]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "column is-3"
  })])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=97358ae4& */ "./resources/js/components/Register.vue?vue&type=template&id=97358ae4&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Register.vue?vue&type=template&id=97358ae4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Register.vue?vue&type=template&id=97358ae4& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=97358ae4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&");


/***/ })

}]);