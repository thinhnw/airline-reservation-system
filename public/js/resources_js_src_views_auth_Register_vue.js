"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      firstName: '',
      lastName: '',
      gender: 'male',
      email: '',
      password: '',
      confirmPassword: '',
      state: {
        email: null,
        password: null,
        confirmPassword: null
      }
    };
  },
  methods: {
    handleEmailChange: function handleEmailChange(value) {
      this.state.email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    },
    handlePasswordChange: function handlePasswordChange(value) {
      this.state.password = value.length >= 6;
      this.state.confirmPassword = this.confirmPassword === this.password;
    },
    handleConfirmPasswordChange: function handleConfirmPasswordChange(value) {
      this.state.confirmPassword = value === this.password;
    },
    validateForm: function validateForm() {
      if (this.confirmPassword != this.password) this.state.confirmPassword = false;
      return this.state.email && this.state.password && this.state.confirmPassword;
    },
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.validateForm()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                payload = {
                  userDetails: {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    gender: _this.gender,
                    email: _this.email,
                    password: _this.password
                  }
                };
                _context.next = 6;
                return _store__WEBPACK_IMPORTED_MODULE_1__.default.dispatch('auth/registerUserJWT', payload);

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-wrapper[data-v-58ce0bb0] {\r\n\ttransform: translateY(-60px);\r\n\twidth: 100%;\r\n\tpadding: 0 30px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_58ce0bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_58ce0bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_58ce0bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/views/auth/Register.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/auth/Register.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_58ce0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=58ce0bb0&scoped=true& */ "./resources/js/src/views/auth/Register.vue?vue&type=template&id=58ce0bb0&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_58ce0bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css& */ "./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_58ce0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_58ce0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58ce0bb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_58ce0bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=style&index=0&id=58ce0bb0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/src/views/auth/Register.vue?vue&type=template&id=58ce0bb0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/auth/Register.vue?vue&type=template&id=58ce0bb0&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_58ce0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_58ce0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_58ce0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=58ce0bb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=template&id=58ce0bb0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=template&id=58ce0bb0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/Register.vue?vue&type=template&id=58ce0bb0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { staticClass: "auth-background h-100 text-light", attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        { staticClass: "h-100", attrs: { "align-h": "center" } },
        [
          _c(
            "b-col",
            {
              staticClass: "h-100 text-center d-flex align-items-center",
              attrs: { cols: "8", lg: "4" }
            },
            [
              _c(
                "div",
                { staticClass: "form-wrapper" },
                [
                  _c("h1", { staticClass: "text-warning" }, [
                    _vm._v("\n\t\t\t\t\tWelcome to Avia Airways!\n\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Please register to your account.")]),
                  _vm._v(" "),
                  _c(
                    "b-form",
                    {
                      staticClass: "mt-5",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.register.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-col",
                            [
                              _c(
                                "b-form-group",
                                { staticClass: "text-left" },
                                [
                                  _c("label", [_vm._v("First Name")]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter your first name",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.firstName,
                                      callback: function($$v) {
                                        _vm.firstName = $$v
                                      },
                                      expression: "firstName"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c(
                                "b-form-group",
                                { staticClass: "text-left" },
                                [
                                  _c("label", [_vm._v("Last Name")]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter your last name",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.lastName,
                                      callback: function($$v) {
                                        _vm.lastName = $$v
                                      },
                                      expression: "lastName"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-group", {
                        staticClass: "text-left",
                        attrs: { label: "Gender" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var ariaDescribedby = ref.ariaDescribedby
                              return [
                                _c(
                                  "b-form-radio-group",
                                  {
                                    attrs: {
                                      "aria-describedby": ariaDescribedby,
                                      name: "radio-sub-component"
                                    },
                                    model: {
                                      value: _vm.gender,
                                      callback: function($$v) {
                                        _vm.gender = $$v
                                      },
                                      expression: "gender"
                                    }
                                  },
                                  [
                                    _c(
                                      "b-form-radio",
                                      { attrs: { value: "male" } },
                                      [_vm._v("Male")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-radio",
                                      { attrs: { value: "female" } },
                                      [_vm._v("Female")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { staticClass: "text-left" },
                        [
                          _c("label", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              type: "email",
                              placeholder: "Enter your email",
                              required: "",
                              state: _vm.state.email
                            },
                            on: { change: _vm.handleEmailChange },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-invalid-feedback",
                            { staticClass: "text-center" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tInvalid email format\n\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { staticClass: "text-left" },
                        [
                          _c("label", [_vm._v("Password")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              type: "password",
                              placeholder: "Enter your password",
                              state: _vm.state.password,
                              required: ""
                            },
                            on: { change: _vm.handlePasswordChange },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-invalid-feedback",
                            { staticClass: "text-center" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tPassword must have more than 6 characters\n\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { staticClass: "text-left" },
                        [
                          _c("label", [_vm._v("Confirm Password")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              type: "password",
                              placeholder: "Enter your password",
                              state: _vm.state.confirmPassword,
                              required: ""
                            },
                            on: { change: _vm.handleConfirmPasswordChange },
                            model: {
                              value: _vm.confirmPassword,
                              callback: function($$v) {
                                _vm.confirmPassword = $$v
                              },
                              expression: "confirmPassword"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-invalid-feedback",
                            { staticClass: "text-center" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tConfirm password and password do not match\n\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { staticClass: "mt-5" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "w-100",
                              attrs: { variant: "primary", type: "submit" }
                            },
                            [_vm._v("Register")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-white" }, [
                    _c(
                      "small",
                      [
                        _vm._v("Already have an account?\n\t\t\t\t\t\t"),
                        _c("router-link", { attrs: { to: "login" } }, [
                          _vm._v("Sign In")
                        ])
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);