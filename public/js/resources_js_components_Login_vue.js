"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      username: "",
      password: "",
      loginFailed: false,
      validatePassword: false,
      validateUsername: false
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
    submit: function submit() {
      var _this = this;

      fetch("http://192.168.0.100:8000/" + "api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          email: this.username,
          password: this.password
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var tokenResp = data.token;
        var user = data.user;
        console.log(tokenResp);

        if (tokenResp) {
          _this.$store.dispatch("setAuth", true);

          _this.$store.dispatch("setAuthToken", tokenResp);

          _this.$store.dispatch("setUserType", user.tipoUsuario);

          _this.$store.dispatch("setCurrentUser", user);

          _this.$router.push("/");
        } else _this.loginFailed = true;
      });
    } // authLogin() {
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

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "column is-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("section", {
    staticClass: "section"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("b-field", {
    attrs: {
      label: "Usuario",
      type: {
        "is-danger": _vm.validateUsername
      },
      message: {
        "Username is not available": _vm.validateUsername
      }
    }
  }, [_c("b-input", {
    attrs: {
      maxlength: "30"
    },
    model: {
      value: _vm.username,
      callback: function callback($$v) {
        _vm.username = $$v;
      },
      expression: "username"
    }
  })], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      label: "Contraseña",
      type: {
        "is-danger": _vm.validatePassword
      },
      message: [{
        "Password is too short": _vm.validatePassword
      }, {
        "Password must have at least 8 characters": _vm.validatePassword
      }]
    }
  }, [_c("b-input", {
    attrs: {
      type: "password",
      maxlength: "30"
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c("b-field", {
    attrs: {
      label: "",
      type: {
        "is-danger": _vm.loginFailed
      },
      message: {
        "Login fallido": _vm.loginFailed
      }
    }
  }), _vm._v(" "), _c("b-button", {
    attrs: {
      type: "is-primary",
      label: "Iniciar Sesión"
    },
    on: {
      click: _vm.submit
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "column is-4"
  })])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bdc8b8e& */ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=6bdc8b8e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");


/***/ })

}]);