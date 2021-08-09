"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_client_home_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchFlightsForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchFlightsForm.vue */ "./resources/js/src/views/client/home/SearchFlightsForm.vue");
/* harmony import */ var _FlightBooking_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlightBooking.vue */ "./resources/js/src/views/client/home/FlightBooking.vue");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SearchFlightsForm: _SearchFlightsForm_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    FlightBooking: _FlightBooking_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      fetchedAirports: [],
      // flightsDetails: null,
      flightsDetails: {
        "from_airport_id": 1934,
        "to_airport_id": 2307,
        "trip_type": "Return",
        "departure_date": "2021-08-19",
        "return_date": "2021-08-21",
        "passenger_count": 2,
        "class": "Business",
        "flightsDeparture": [{
          "id": 4,
          "flight_number": "RU66",
          "departure_id": 1934,
          "destination_id": 2307,
          "departure_time": "2021-08-19 11:00:00",
          "arrival_time": "2021-08-19 13:00:00",
          "created_at": "2021-08-07T07:08:26.000000Z",
          "updated_at": "2021-08-07T07:08:26.000000Z",
          "economy_seat_count": 312,
          "business_seat_count": 42,
          "origin": {
            "id": 1934,
            "code": "LED",
            "name": "Pulkovo Airport",
            "cityCode": "LED",
            "cityName": "St Petersburg",
            "countryName": "RUSSIA",
            "countryCode": "RU",
            "timezone": "4",
            "lat": "59.800292",
            "lon": "30.262503",
            "numAirports": 2,
            "city": "true",
            "created_at": null,
            "updated_at": null,
            "label": "St Petersburg LED"
          },
          "destination": {
            "id": 2307,
            "code": "SVO",
            "name": "Sheremetyevo Airport",
            "cityCode": "MOW",
            "cityName": "Moscow",
            "countryName": "RUSSIA",
            "countryCode": "RU",
            "timezone": "4",
            "lat": "55.972642",
            "lon": "37.414589",
            "numAirports": 3,
            "city": "",
            "created_at": null,
            "updated_at": null,
            "label": "Moscow SVO"
          }
        }, {
          "id": 7,
          "flight_number": "RU345",
          "departure_id": 1934,
          "destination_id": 2307,
          "departure_time": "2021-08-19 23:00:00",
          "arrival_time": "2021-08-20 01:00:00",
          "created_at": "2021-08-08T10:24:51.000000Z",
          "updated_at": "2021-08-08T10:24:51.000000Z",
          "economy_seat_count": 312,
          "business_seat_count": 42,
          "origin": {
            "id": 1934,
            "code": "LED",
            "name": "Pulkovo Airport",
            "cityCode": "LED",
            "cityName": "St Petersburg",
            "countryName": "RUSSIA",
            "countryCode": "RU",
            "timezone": "4",
            "lat": "59.800292",
            "lon": "30.262503",
            "numAirports": 2,
            "city": "true",
            "created_at": null,
            "updated_at": null,
            "label": "St Petersburg LED"
          },
          "destination": {
            "id": 2307,
            "code": "SVO",
            "name": "Sheremetyevo Airport",
            "cityCode": "MOW",
            "cityName": "Moscow",
            "countryName": "RUSSIA",
            "countryCode": "RU",
            "timezone": "4",
            "lat": "55.972642",
            "lon": "37.414589",
            "numAirports": 3,
            "city": "",
            "created_at": null,
            "updated_at": null,
            "label": "Moscow SVO"
          }
        }],
        "flightsReturn": [{
          "id": 8,
          "flight_number": "RU 556",
          "departure_id": 2307,
          "destination_id": 1934,
          "departure_time": "2021-08-21 22:00:00",
          "arrival_time": "2021-08-21 23:00:00",
          "created_at": "2021-08-09T03:13:31.000000Z",
          "updated_at": "2021-08-09T03:13:31.000000Z",
          "economy_seat_count": 312,
          "business_seat_count": 42,
          "origin": "Moscow SVO",
          "destination": "St Petersburg LED"
        }]
      },
      bookingStep: 0 // -1: Not yet, 0. Searched, 1. Selected Flights and clicked continue, 2. Require passengers info

    };
  },
  methods: {
    fetchAirports: function fetchAirports() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios__WEBPACK_IMPORTED_MODULE_3__.default.get('/api/airports');

              case 3:
                res = _context.sent;
                _this.fetchedAirports = res.data.airports;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    handleListingFlights: function handleListingFlights(event) {
      console.log('event', event);
      this.flightsDetails = event;
      this.bookingStep = 0;
    }
  },
  computed: {
    airports: function airports() {
      return this.fetchedAirports.map(function (airport) {
        return _objectSpread(_objectSpread({}, airport), {}, {
          label: "".concat(airport.cityName, " ").concat(airport.code)
        });
      });
    }
  },
  mounted: function mounted() {
    this.fetchAirports();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: {
    airports: Array
  },
  data: function data() {
    return {
      form: {
        fromCity: null,
        toCity: null,
        tripType: 'One-way',
        departureDate: new Date().toISOString().split('T')[0],
        returnDate: new Date().toISOString().split('T')[0],
        passengerCount: 1,
        "class": 'Business'
      }
    };
  },
  methods: {
    airportFilterBy: function airportFilterBy(option, label, search) {
      return (label || '').indexOf(search) > -1;
    },
    handleTripChange: function handleTripChange(value) {},
    search: function search() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var filter, res, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // let filter = {
                // 	from_airport_id: this.form.fromCity.id,
                // 	to_airport_id: this.form.toCity.id,
                // 	trip_type: this.form.tripType,
                // 	departure_date: this.form.departureDate,
                // 	passenger_count: this.passengerCount,
                // 	class: this.class
                // }
                filter = {
                  from_airport_id: 1934,
                  to_airport_id: 2307,
                  trip_type: 'Return',
                  departure_date: '2021-08-19',
                  return_date: '2021-08-21',
                  passenger_count: 2,
                  "class": 'Business'
                }; // if (filter.trip_type === 'Return') filter.return_date = this.form.returnDate

                _context.next = 4;
                return _axios__WEBPACK_IMPORTED_MODULE_1__.default.get("/api/flights/search?filter=".concat(JSON.stringify(filter)));

              case 4:
                res = _context.sent;
                console.log(res);
                payload = _objectSpread(_objectSpread({}, filter), {}, {
                  flightsDeparture: res.data.flightsDeparture.map(function (flight) {
                    return _objectSpread(_objectSpread({}, flight), {}, {
                      origin: _this.airports.find(function (airport) {
                        return airport.id == flight.departure_id;
                      }),
                      destination: _this.airports.find(function (airport) {
                        return airport.id == flight.destination_id;
                      })
                    });
                  })
                });

                if (filter.trip_type == 'Return') {
                  payload = _objectSpread(_objectSpread({}, payload), {}, {
                    flightsReturn: res.data.flightsReturn.map(function (flight) {
                      return _objectSpread(_objectSpread({}, flight), {}, {
                        origin: _this.airports.find(function (airport) {
                          return airport.id == flight.departure_id;
                        }).label,
                        destination: _this.airports.find(function (airport) {
                          return airport.id == flight.destination_id;
                        }).label
                      });
                    })
                  });
                }

                _this.$emit('list-flights', payload);

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".banner[data-v-aa6b8316] {\n  background: url(/images/bgbigben.jpg) rgba(0, 0, 0, 0.3);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: darken;\n  width: 100%;\n  height: 800px;\n}\n.main-tabs[data-v-aa6b8316] .nav-tabs .nav-link {\n  border: initial;\n  border-radius: initial;\n  color: white;\n}\n.main-tabs[data-v-aa6b8316] .nav-tabs .nav-link.active {\n  color: black;\n}\n.main-tabs[data-v-aa6b8316] .nav-tabs .nav-link:not(.active) {\n  background: var(--blue);\n}\n.main-tabs[data-v-aa6b8316] .nav-tabs .nav-item:first-child .nav-link {\n  border-top-left-radius: 10px;\n}\n.main-tabs[data-v-aa6b8316] .nav-tabs .nav-item:last-child .nav-link {\n  border-top-right-radius: 10px;\n}\n.form-card[data-v-aa6b8316] {\n  border: initial;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "label[data-v-5476a3f9] {\n  font-size: 0.8rem;\n}\n.from-city-select[data-v-5476a3f9] .vs__dropdown-toggle, .to-city-select[data-v-5476a3f9] .vs__dropdown-toggle, .trip-select[data-v-5476a3f9] .vs__dropdown-toggle, .passenger-select[data-v-5476a3f9] .vs__dropdown-toggle {\n  border-right: 0;\n}\n.departure-date-picker[data-v-5476a3f9], .return-date-picker[data-v-5476a3f9], .passenger-input[data-v-5476a3f9] {\n  border-right: 0;\n}\n.from-city-select[data-v-5476a3f9] .vs__dropdown-toggle {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.class-select[data-v-5476a3f9] .vs__dropdown-toggle {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_aa6b8316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_aa6b8316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_aa6b8316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_style_index_0_id_5476a3f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_style_index_0_id_5476a3f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_style_index_0_id_5476a3f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/views/client/home/FlightBooking.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/client/home/FlightBooking.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__.default)(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/src/views/client/home/FlightBooking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/client/home/Home.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/client/home/Home.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_aa6b8316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=aa6b8316&scoped=true& */ "./resources/js/src/views/client/home/Home.vue?vue&type=template&id=aa6b8316&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/client/home/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_aa6b8316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss& */ "./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_aa6b8316_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_aa6b8316_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aa6b8316",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/client/home/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/client/home/SearchFlightsForm.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/client/home/SearchFlightsForm.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchFlightsForm_vue_vue_type_template_id_5476a3f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true& */ "./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true&");
/* harmony import */ var _SearchFlightsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchFlightsForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _SearchFlightsForm_vue_vue_type_style_index_0_id_5476a3f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss& */ "./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SearchFlightsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SearchFlightsForm_vue_vue_type_template_id_5476a3f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchFlightsForm_vue_vue_type_template_id_5476a3f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5476a3f9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/client/home/SearchFlightsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/client/home/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/client/home/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchFlightsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_aa6b8316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=style&index=0&id=aa6b8316&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_style_index_0_id_5476a3f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=style&index=0&id=5476a3f9&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/src/views/client/home/Home.vue?vue&type=template&id=aa6b8316&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/client/home/Home.vue?vue&type=template&id=aa6b8316&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_aa6b8316_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_aa6b8316_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_aa6b8316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=aa6b8316&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=template&id=aa6b8316&scoped=true&");


/***/ }),

/***/ "./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_template_id_5476a3f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_template_id_5476a3f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchFlightsForm_vue_vue_type_template_id_5476a3f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=template&id=aa6b8316&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/Home.vue?vue&type=template&id=aa6b8316&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "home-component" } }, [
    _c(
      "div",
      { staticClass: "banner" },
      [
        _c(
          "b-container",
          { staticClass: "h-100 px-0" },
          [
            _c(
              "b-row",
              { staticClass: "h-100" },
              [
                _c(
                  "b-col",
                  {
                    staticClass: "d-flex align-items-center h-100 px-0",
                    attrs: { cols: "12" }
                  },
                  [
                    _c(
                      "b-card",
                      {
                        staticClass: "w-100 form-card pb-3",
                        attrs: { "no-body": "" }
                      },
                      [
                        _c(
                          "b-tabs",
                          {
                            staticClass: "main-tabs",
                            attrs: { justified: "", "content-class": "pt-3" }
                          },
                          [
                            _c(
                              "b-tab",
                              { attrs: { title: "Book" } },
                              [
                                _c("SearchFlightsForm", {
                                  attrs: { airports: _vm.airports },
                                  on: {
                                    "list-flights": _vm.handleListingFlights
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-tab", { attrs: { title: "My Trips" } }),
                            _vm._v(" "),
                            _c("b-tab", { attrs: { title: "Check-in" } }),
                            _vm._v(" "),
                            _c("b-tab", { attrs: { title: "Flight Status" } })
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
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.bookingStep >= 0
          ? _c("FlightBooking", {
              attrs: { airports: _vm.airports, details: _vm.flightsDetails }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/home/SearchFlightsForm.vue?vue&type=template&id=5476a3f9&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-form",
        {
          staticClass: "px-3",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.search.apply(null, arguments)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "d-flex justify-content-between" },
            [
              _c(
                "div",
                { staticStyle: { width: "220px" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("From")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "from-city-select",
                        attrs: {
                          options: _vm.airports,
                          required: "",
                          label: "label",
                          placeholder: "From Airport/City",
                          clearable: false,
                          filterBy: _vm.airportFilterBy
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function(ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                _c(
                                  "input",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        staticClass: "vs__search",
                                        attrs: { required: !_vm.form.fromCity }
                                      },
                                      "input",
                                      attributes,
                                      false
                                    ),
                                    events
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.form.fromCity,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "fromCity", $$v)
                          },
                          expression: "form.fromCity"
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
                "div",
                { staticStyle: { width: "220px" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("To")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "to-city-select",
                        attrs: {
                          options: _vm.airports,
                          label: "label",
                          placeholder: "To Airport/City",
                          clearable: false,
                          filterBy: _vm.airportFilterBy
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function(ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                _c(
                                  "input",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        staticClass: "vs__search",
                                        attrs: { required: !_vm.form.toCity }
                                      },
                                      "input",
                                      attributes,
                                      false
                                    ),
                                    events
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.form.toCity,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "toCity", $$v)
                          },
                          expression: "form.toCity"
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
                "div",
                { staticStyle: { width: "130px" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Trip")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "trip-select",
                        attrs: {
                          options: ["One-way", "Return"],
                          clearable: false
                        },
                        on: { change: _vm.handleTripChange },
                        model: {
                          value: _vm.form.tripType,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "tripType", $$v)
                          },
                          expression: "form.tripType"
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
                "b-row",
                { staticClass: "flex-fill", attrs: { "no-gutters": "" } },
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-form-group",
                        [
                          _c("label", [_vm._v("Departure")]),
                          _vm._v(" "),
                          _c("b-form-datepicker", {
                            staticClass: "departure-date-picker",
                            attrs: {
                              "date-format-options": {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              },
                              placeholder: "Departure Date"
                            },
                            model: {
                              value: _vm.form.departureDate,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "departureDate", $$v)
                              },
                              expression: "form.departureDate"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.form.tripType === "Return"
                    ? _c(
                        "b-col",
                        [
                          _c(
                            "b-form-group",
                            [
                              _c("label", [_vm._v("Return")]),
                              _vm._v(" "),
                              _c("b-form-datepicker", {
                                staticClass: "return-date-picker",
                                attrs: {
                                  "date-format-options": {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                  },
                                  placeholder: "Return Date"
                                },
                                model: {
                                  value: _vm.form.returnDate,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "returnDate", $$v)
                                  },
                                  expression: "form.returnDate"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { width: "100px" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Passengers")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "passenger-input",
                        attrs: { type: "number", required: "" },
                        model: {
                          value: _vm.form.passengerCount,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "passengerCount", $$v)
                          },
                          expression: "form.passengerCount"
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
                "div",
                { staticStyle: { width: "130px" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Class")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "class-select",
                        attrs: {
                          options: ["Economy", "Business"],
                          clearable: false
                        },
                        model: {
                          value: _vm.form.class,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "class", $$v)
                          },
                          expression: "form.class"
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
          _c(
            "b-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "b-col",
                { staticClass: "text-right" },
                [
                  _c(
                    "b-button",
                    { attrs: { variant: "primary", type: "submit" } },
                    [_vm._v("\n\t\t\t\t\tSearch\n\t\t\t\t")]
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