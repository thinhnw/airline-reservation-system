"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_admin_flights_Flights_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/flights/Flights.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/flights/Flights.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flightFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flightFields */ "./resources/js/src/views/admin/flights/flightFields.js");
/* harmony import */ var _mockAirports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockAirports */ "./resources/js/src/views/admin/flights/mockAirports.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {},
  data: function data() {
    return {
      fields: _flightFields__WEBPACK_IMPORTED_MODULE_1__.default,
      allFlights: [],
      showSidebar: false,
      method: 'Add',
      // EDIT
      selectedFlightId: -1,
      flightNumber: '',
      departure: null,
      destination: null,
      departureDate: '',
      departureTime: '',
      arrivalDate: '',
      arrivalTime: '',
      state: {
        departureDatetime: null,
        arrivalDatetime: null
      }
    };
  },
  computed: {
    airports: function airports() {
      return _mockAirports__WEBPACK_IMPORTED_MODULE_2__.default.map(function (airport) {
        return _objectSpread(_objectSpread({}, airport), {}, {
          label: "".concat(airport.code, " (").concat(airport.city, ", ").concat(airport.country, ")")
        });
      });
    },
    items: function items() {
      var _this = this;

      return this.allFlights.map(function (flight) {
        return _objectSpread(_objectSpread({}, flight), {}, {
          departure: _this.airports.find(function (airport) {
            return flight.departure_id === airport.id;
          }).label,
          destination: _this.airports.find(function (airport) {
            return flight.destination_id === airport.id;
          }).label
        });
      });
    },
    departure_datetime: function departure_datetime() {
      return new Date(this.departureDate + ' ' + this.departureTime);
    },
    arrival_datetime: function arrival_datetime() {
      return new Date(this.arrivalDate + ' ' + this.arrivalTime);
    }
  },
  methods: {
    openSidebar: function openSidebar(method) {
      this.method = method;
      this.showSidebar = true;
    },
    closeSidebar: function closeSidebar() {
      this.showSidebar = false;
    },
    handleDepartureDatetime: function handleDepartureDatetime() {
      var today = new Date(); // console.log(this.departure_datetime, '<=>', this.arrival_datetime)

      this.state.departureDatetime = this.departure_datetime.getTime() > today.getTime();
    },
    handleArrivalDatetime: function handleArrivalDatetime() {
      // console.log(this.departure_datetime, '<=>', this.arrival_datetime)
      this.state.arrivalDatetime = this.arrival_datetime.getTime() > this.departure_datetime.getTime();
    },
    fetchFlights: function fetchFlights() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios__WEBPACK_IMPORTED_MODULE_3__.default.get('/api/flights');

              case 3:
                res = _context.sent;
                _this2.allFlights = res.data.flights;
                console.log(_this2.allFlights);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var form, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                form = {
                  flight_number: _this3.flightNumber,
                  departure_id: _this3.departure.id,
                  destination_id: _this3.destination.id,
                  departure_time: _this3.departure_datetime,
                  arrival_time: _this3.arrival_datetime
                };
                _context2.next = 4;
                return _axios__WEBPACK_IMPORTED_MODULE_3__.default.post('/api/flights', form);

              case 4:
                res = _context2.sent;

                _this3.allFlights.push(res.data.flight);

                console.log(res);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    editFlight: function editFlight(id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {} catch (error) {
                  console.error(err);
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    deleteFlight: function deleteFlight(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _axios__WEBPACK_IMPORTED_MODULE_3__.default.delete("/api/flights/".concat(id));

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this4.allFlights.splice(_this4.allFlights.find(function (flight) {
                    return flight.id === id;
                  }), 1);

                  _this4.$bvToast.toast(res.message, {
                    title: 'Success',
                    autoHideDelay: 1000,
                    appendToast: false,
                    solid: true,
                    toaster: 'b-toaster-top-right',
                    variant: 'success'
                  });
                }

                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.error(err);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.fetchFlights();
  }
});

/***/ }),

/***/ "./resources/js/src/views/admin/flights/flightFields.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/admin/flights/flightFields.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: 'ID',
  key: 'id'
}, {
  label: 'Flight Number',
  key: 'flight_number'
}, {
  label: 'Departure',
  key: 'departure'
}, {
  label: 'Departure Date Time (UTC)',
  key: 'departure_time'
}, {
  label: 'Destination',
  key: 'destination'
}, {
  label: 'Arrival Date Time (UTC)',
  key: 'arrival_time'
}, {
  label: '',
  key: 'actions'
}]);

/***/ }),

/***/ "./resources/js/src/views/admin/flights/mockAirports.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/admin/flights/mockAirports.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  code: 'LED',
  city: 'Saint Petersburg',
  country: 'Russia',
  id: 1
}, {
  code: 'HAN',
  city: 'Hanoi',
  country: 'Vietnam',
  id: 2
}]);

/***/ }),

/***/ "./resources/js/src/views/admin/flights/Flights.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/admin/flights/Flights.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Flights_vue_vue_type_template_id_a2359a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flights.vue?vue&type=template&id=a2359a06& */ "./resources/js/src/views/admin/flights/Flights.vue?vue&type=template&id=a2359a06&");
/* harmony import */ var _Flights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flights.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/flights/Flights.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Flights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Flights_vue_vue_type_template_id_a2359a06___WEBPACK_IMPORTED_MODULE_0__.render,
  _Flights_vue_vue_type_template_id_a2359a06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/flights/Flights.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/flights/Flights.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/admin/flights/Flights.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Flights.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/flights/Flights.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flights_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/admin/flights/Flights.vue?vue&type=template&id=a2359a06&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/admin/flights/Flights.vue?vue&type=template&id=a2359a06& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flights_vue_vue_type_template_id_a2359a06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flights_vue_vue_type_template_id_a2359a06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flights_vue_vue_type_template_id_a2359a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Flights.vue?vue&type=template&id=a2359a06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/flights/Flights.vue?vue&type=template&id=a2359a06&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/flights/Flights.vue?vue&type=template&id=a2359a06&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/admin/flights/Flights.vue?vue&type=template&id=a2359a06& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "h-100" },
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between mb-3" },
        [
          _c("h2", [_vm._v("FLIGHTS")]),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "py-1",
              attrs: { variant: "outline-warning", squared: "" },
              on: {
                click: function($event) {
                  return _vm.openSidebar("Add")
                }
              }
            },
            [
              _vm._v("\n\t\t\tAdd flight\n\t\t\t"),
              _c("i", { staticClass: "ml-1 fal fa-plus" })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("b-table", {
            attrs: { fields: _vm.fields, items: _vm.items, bordered: "" },
            scopedSlots: _vm._u([
              {
                key: "cell(actions)",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("div", { staticClass: "text-center" }, [
                      _c("i", {
                        staticClass: "far fa-edit btn-icon text-dark mr-3",
                        on: {
                          click: function($event) {
                            return _vm.editFlight(item.id)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass:
                          "far fa-times-octagon btn-icon text-danger",
                        on: {
                          click: function($event) {
                            return _vm.deleteFlight(item.id)
                          }
                        }
                      })
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-sidebar",
        {
          attrs: {
            visible: _vm.showSidebar,
            "header-class": "text-center",
            "body-class": "px-3",
            width: "600px",
            right: "",
            backdrop: "",
            title:
              _vm.method +
              " Flights " +
              (_vm.method == "EDIT" ? _vm.selectedFlightId : "")
          },
          on: { hidden: _vm.closeSidebar }
        },
        [
          _c(
            "b-form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "b-form-group",
                { staticClass: "mb-3" },
                [
                  _c("label", [_vm._v("\n\t\t\t\t\tFlight Number\n\t\t\t\t")]),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-0",
                    attrs: { required: "", placeholder: "Enter Flight Number" },
                    model: {
                      value: _vm.flightNumber,
                      callback: function($$v) {
                        _vm.flightNumber = $$v
                      },
                      expression: "flightNumber"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { staticClass: "mb-3" },
                [
                  _c("label", [_vm._v("\n\t\t\t\t\tDeparture\n\t\t\t\t")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      options: _vm.airports,
                      label: "label",
                      placeholder: "Choose the depature airport",
                      clearable: false
                    },
                    model: {
                      value: _vm.departure,
                      callback: function($$v) {
                        _vm.departure = $$v
                      },
                      expression: "departure"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { staticClass: "mb-3" },
                [
                  _c("label", [
                    _vm._v(
                      "\n\t\t\t\t\tDeparture Date & Time (UTC+0)\n\t\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "7" } },
                        [
                          _c("b-form-datepicker", {
                            staticClass: "rounded-0",
                            attrs: {
                              required: "",
                              state: _vm.state.departureDatetime,
                              min: new Date(),
                              placeholder: "YYYY-MM-DD"
                            },
                            on: { input: _vm.handleDepartureDatetime },
                            model: {
                              value: _vm.departureDate,
                              callback: function($$v) {
                                _vm.departureDate = $$v
                              },
                              expression: "departureDate"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("b-form-timepicker", {
                            staticClass: "rounded-0",
                            attrs: {
                              required: "",
                              state: _vm.state.departureDatetime
                            },
                            on: { input: _vm.handleDepartureDatetime },
                            model: {
                              value: _vm.departureTime,
                              callback: function($$v) {
                                _vm.departureTime = $$v
                              },
                              expression: "departureTime"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v("Departure datetime have to be after today")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { staticClass: "mb-3" },
                [
                  _c("label", [_vm._v("\n\t\t\t\t\tDestination\n\t\t\t\t")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      options: _vm.airports,
                      label: "label",
                      placeholder: "Choose the destination airport",
                      clearable: false
                    },
                    model: {
                      value: _vm.destination,
                      callback: function($$v) {
                        _vm.destination = $$v
                      },
                      expression: "destination"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { staticClass: "mb-4" },
                [
                  _c("label", [
                    _vm._v("\n\t\t\t\t\tArrival Date & Time (UTC+0)\n\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "7" } },
                        [
                          _c("b-form-datepicker", {
                            staticClass: "rounded-0",
                            attrs: {
                              required: "",
                              min: new Date(),
                              state: _vm.state.arrivalDatetime,
                              placeholder: "YYYY-MM-DD"
                            },
                            on: { input: _vm.handleArrivalDatetime },
                            model: {
                              value: _vm.arrivalDate,
                              callback: function($$v) {
                                _vm.arrivalDate = $$v
                              },
                              expression: "arrivalDate"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("b-form-timepicker", {
                            staticClass: "rounded-0",
                            attrs: {
                              required: "",
                              state: _vm.state.arrivalDatetime
                            },
                            on: { input: _vm.handleArrivalDatetime },
                            model: {
                              value: _vm.arrivalTime,
                              callback: function($$v) {
                                _vm.arrivalTime = $$v
                              },
                              expression: "arrivalTime"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [
                    _vm._v(
                      "Arrival datetime have to be after departure datetime"
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "w-100",
                      attrs: { type: "submit", variant: "warning", squared: "" }
                    },
                    [_vm._v("CONFIRM")]
                  )
                ],
                1
              )
            ],
            1
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