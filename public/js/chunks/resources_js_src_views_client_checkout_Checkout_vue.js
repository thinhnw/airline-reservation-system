(self["webpackChunkars"] = self["webpackChunkars"] || []).push([["resources_js_src_views_client_checkout_Checkout_vue"],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadStripe": () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.17.1",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
};

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _data_regions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/regions */ "./resources/js/src/data/regions.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios */ "./resources/js/src/axios.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helper */ "./resources/js/src/helper/index.js");


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
//
//
//
//
//
//
//
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
      regions: _data_regions__WEBPACK_IMPORTED_MODULE_2__.default,
      stripe: {},
      cardElement: {},
      paymentProcessing: false,
      form: {
        reservation_id: '',
        txt_billing_fullname: '',
        txt_billing_email: '',
        txt_inv_addr1: '',
        txt_bill_city: '',
        txt_bill_country: '',
        txt_expire: '',
        zip_code: ''
      },
      // form: {
      //   reservation_id: '53',
      //   txt_billing_fullname: 'NGUYEN VINH THINH',
      //   txt_billing_email: 'nvt0412@gmail.com',
      //   txt_inv_addr1: '502 LD',
      //   txt_bill_city: 'Hanoi',
      //   txt_bill_country: 'VN',
      //   txt_expire: '',
      //   zip_code: ''
      // },
      reservation: null,
      cardError: ''
    };
  },
  methods: {
    formatMoney: _helper__WEBPACK_IMPORTED_MODULE_4__.formatMoney,
    fetchProduct: function fetchProduct() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var id, _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _this.$route.query.reservation_id;
                if (!id) _this.$router.push('home');
                _context.prev = 2;
                _context.next = 5;
                return _axios__WEBPACK_IMPORTED_MODULE_3__.default.get('/api/reservations/' + id);

              case 5:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.reservation = data.reservation;
                if (_this.reservation.status === 'CONFIRMED') _this.$router.push({
                  name: 'home'
                });
                _this.form.reservation_id = id;
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

                _this.$router.push({
                  name: 'home'
                });

                return _context.abrupt("return");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12]]);
      }))();
    },
    processPayment: function processPayment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$_this2$stripe$, paymentMethod, error, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.paymentProcessing = true;
                _context2.next = 3;
                return _this2.stripe.createPaymentMethod('card', _this2.cardElement, {
                  billing_details: {
                    name: _this2.form.txt_billing_fullname,
                    email: _this2.form.txt_billing_email,
                    address: {
                      line1: _this2.form.txt_inv_addr1,
                      city: _this2.form.txt_bill_city,
                      country: _this2.form.txt_bill_country,
                      postal_code: _this2.form.zip_code
                    }
                  }
                });

              case 3:
                _yield$_this2$stripe$ = _context2.sent;
                paymentMethod = _yield$_this2$stripe$.paymentMethod;
                error = _yield$_this2$stripe$.error;

                if (!error) {
                  _context2.next = 10;
                  break;
                }

                _this2.paymentProcessing = false; // alert(error.message)

                _this2.cardError = error.message;
                return _context2.abrupt("return");

              case 10:
                _this2.form.payment_method_id = paymentMethod.id;
                _this2.form.amount = _this2.reservation.price;
                _context2.prev = 12;
                _context2.next = 15;
                return _axios__WEBPACK_IMPORTED_MODULE_3__.default.post('/api/reservations/checkout', _this2.form);

              case 15:
                res = _context2.sent;

                _this2.$router.push({
                  name: 'checkout-success'
                });

                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](12);
                console.error(_context2.t0);
                _this2.cardError = _context2.t0.message;

              case 23:
                _context2.prev = 23;
                _this2.paymentProcessing = false;
                return _context2.finish(23);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[12, 19, 23, 26]]);
      }))();
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.processPayment();

                return _context3.abrupt("return");

              case 6:
                res = _context3.sent;
                window.location.href = res.data.url;
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                console.error(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 10]]);
      }))();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var elements;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this4.fetchProduct();

              console.log("pk_test_iExRVVvOL1PdZ2e1CsWHStLD00Htd3STIL");
              _context4.next = 4;
              return (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)("pk_test_iExRVVvOL1PdZ2e1CsWHStLD00Htd3STIL");

            case 4:
              _this4.stripe = _context4.sent;
              elements = _this4.stripe.elements();
              _this4.cardElement = elements.create('card', {
                classes: {
                  base: 'form-control py-2'
                }
              });

              _this4.cardElement.mount('#card-element');

              _this4.cardElement.on('change', function () {
                _this4.cardError = '';
              });

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/src/data/regions.js":
/*!******************************************!*\
  !*** ./resources/js/src/data/regions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  "countryname": "Afghanistan",
  "countryShortCode": "AF",
  "regions": [{
    "name": "Badakhshan",
    "shortCode": "BDS"
  }, {
    "name": "Badghis",
    "shortCode": "BDG"
  }, {
    "name": "Baghlan",
    "shortCode": "BGL"
  }, {
    "name": "Balkh",
    "shortCode": "BAL"
  }, {
    "name": "Bamyan",
    "shortCode": "BAM"
  }, {
    "name": "Daykundi",
    "shortCode": "DAY"
  }, {
    "name": "Farah",
    "shortCode": "FRA"
  }, {
    "name": "Faryab",
    "shortCode": "FYB"
  }, {
    "name": "Ghazni",
    "shortCode": "GHA"
  }, {
    "name": "Ghor",
    "shortCode": "GHO"
  }, {
    "name": "Helmand",
    "shortCode": "HEL"
  }, {
    "name": "Herat",
    "shortCode": "HER"
  }, {
    "name": "Jowzjan",
    "shortCode": "JOW"
  }, {
    "name": "Kabul",
    "shortCode": "KAB"
  }, {
    "name": "Kandahar",
    "shortCode": "KAN"
  }, {
    "name": "Kapisa",
    "shortCode": "KAP"
  }, {
    "name": "Khost",
    "shortCode": "KHO"
  }, {
    "name": "Kunar",
    "shortCode": "KNR"
  }, {
    "name": "Kunduz",
    "shortCode": "KDZ"
  }, {
    "name": "Laghman",
    "shortCode": "LAG"
  }, {
    "name": "Logar",
    "shortCode": "LOW"
  }, {
    "name": "Maidan Wardak",
    "shortCode": "WAR"
  }, {
    "name": "Nangarhar",
    "shortCode": "NAN"
  }, {
    "name": "Nimruz",
    "shortCode": "NIM"
  }, {
    "name": "Nuristan",
    "shortCode": "NUR"
  }, {
    "name": "Paktia",
    "shortCode": "PIA"
  }, {
    "name": "Paktika",
    "shortCode": "PKA"
  }, {
    "name": "Panjshir",
    "shortCode": "PAN"
  }, {
    "name": "Parwan",
    "shortCode": "PAR"
  }, {
    "name": "Samangan",
    "shortCode": "SAM"
  }, {
    "name": "Sar-e Pol",
    "shortCode": "SAR"
  }, {
    "name": "Takhar",
    "shortCode": "TAK"
  }, {
    "name": "Urozgan",
    "shortCode": "ORU"
  }, {
    "name": "Zabul",
    "shortCode": "ZAB"
  }]
}, {
  "countryname": "??land Islands",
  "countryShortCode": "AX",
  "regions": [{
    "name": "Br??nd??",
    "shortCode": "BR"
  }, {
    "name": "Ecker??",
    "shortCode": "EC"
  }, {
    "name": "Finstr??m",
    "shortCode": "FN"
  }, {
    "name": "F??gl??",
    "shortCode": "FG"
  }, {
    "name": "Geta",
    "shortCode": "GT"
  }, {
    "name": "Hammarland",
    "shortCode": "HM"
  }, {
    "name": "Jomala",
    "shortCode": "JM"
  }, {
    "name": "Kumlinge",
    "shortCode": "KM"
  }, {
    "name": "K??kar",
    "shortCode": "KK"
  }, {
    "name": "Lemland",
    "shortCode": "LE"
  }, {
    "name": "Lumparland",
    "shortCode": "LU"
  }, {
    "name": "Mariehamn",
    "shortCode": "MH"
  }, {
    "name": "Saltvik",
    "shortCode": "SV"
  }, {
    "name": "Sottunga",
    "shortCode": "ST"
  }, {
    "name": "Sund",
    "shortCode": "SD"
  }, {
    "name": "V??rd??",
    "shortCode": "VR"
  }]
}, {
  "countryname": "Albania",
  "countryShortCode": "AL",
  "regions": [{
    "name": "Berat",
    "shortCode": "01"
  }, {
    "name": "Dib??r",
    "shortCode": "09"
  }, {
    "name": "Durr??s",
    "shortCode": "02"
  }, {
    "name": "Elbasan",
    "shortCode": "03"
  }, {
    "name": "Fier",
    "shortCode": "04"
  }, {
    "name": "Gjirokast??r",
    "shortCode": "05"
  }, {
    "name": "Kor????",
    "shortCode": "06"
  }, {
    "name": "Kuk??s",
    "shortCode": "07"
  }, {
    "name": "Lezh??",
    "shortCode": "08"
  }, {
    "name": "Shkod??r",
    "shortCode": "10"
  }, {
    "name": "Tirana",
    "shortCode": "11"
  }, {
    "name": "Vlor??",
    "shortCode": "12"
  }]
}, {
  "countryname": "Algeria",
  "countryShortCode": "DZ",
  "regions": [{
    "name": "Adrar",
    "shortCode": "01"
  }, {
    "name": "A??n Defla",
    "shortCode": "44"
  }, {
    "name": "A??n T??mouchent",
    "shortCode": "46"
  }, {
    "name": "Algiers",
    "shortCode": "16"
  }, {
    "name": "Annaba",
    "shortCode": "23"
  }, {
    "name": "Batna",
    "shortCode": "05"
  }, {
    "name": "B??char",
    "shortCode": "08"
  }, {
    "name": "B??ja??a",
    "shortCode": "06"
  }, {
    "name": "Biskra",
    "shortCode": "07"
  }, {
    "name": "Blida",
    "shortCode": "09"
  }, {
    "name": "Bordj Bou Arr??ridj",
    "shortCode": "34"
  }, {
    "name": "Bou??ra",
    "shortCode": "10"
  }, {
    "name": "Boumerd??s",
    "shortCode": "35"
  }, {
    "name": "Chlef",
    "shortCode": "02"
  }, {
    "name": "Constantine",
    "shortCode": "25"
  }, {
    "name": "Djelfa",
    "shortCode": "17"
  }, {
    "name": "El Bayadh",
    "shortCode": "32"
  }, {
    "name": "El Oued",
    "shortCode": "39"
  }, {
    "name": "El Tarf",
    "shortCode": "36"
  }, {
    "name": "Gharda??a",
    "shortCode": "47"
  }, {
    "name": "Guelma",
    "shortCode": "24"
  }, {
    "name": "Illizi",
    "shortCode": "33"
  }, {
    "name": "Jijel",
    "shortCode": "18"
  }, {
    "name": "Khenchela",
    "shortCode": "40"
  }, {
    "name": "Laghouat",
    "shortCode": "03"
  }, {
    "name": "Mascara",
    "shortCode": "29"
  }, {
    "name": "M??d??a",
    "shortCode": "26"
  }, {
    "name": "Mila",
    "shortCode": "43"
  }, {
    "name": "Mostaganem",
    "shortCode": "27"
  }, {
    "name": "Msila",
    "shortCode": "28"
  }, {
    "name": "Na??ma",
    "shortCode": "45"
  }, {
    "name": "Oran",
    "shortCode": "31"
  }, {
    "name": "Ouargla",
    "shortCode": "30"
  }, {
    "name": "Oum el Bouaghi",
    "shortCode": "04"
  }, {
    "name": "Relizane",
    "shortCode": "48"
  }, {
    "name": "Sa??da",
    "shortCode": "20"
  }, {
    "name": "S??tif",
    "shortCode": "19"
  }, {
    "name": "Sidi Bel Abb??s",
    "shortCode": "22"
  }, {
    "name": "Skikda",
    "shortCode": "21"
  }, {
    "name": "Souk Ahras",
    "shortCode": "41"
  }, {
    "name": "Tamanghasset",
    "shortCode": "11"
  }, {
    "name": "T??bessa",
    "shortCode": "12"
  }, {
    "name": "Tiaret",
    "shortCode": "14"
  }, {
    "name": "Tindouf",
    "shortCode": "37"
  }, {
    "name": "Tipaza",
    "shortCode": "42"
  }, {
    "name": "Tissemsilt",
    "shortCode": "38"
  }, {
    "name": "Tizi Ouzou",
    "shortCode": "15"
  }, {
    "name": "Tlemcen",
    "shortCode": "13"
  }]
}, {
  "countryname": "American Samoa",
  "countryShortCode": "AS",
  "regions": [{
    "name": "Tutuila",
    "shortCode": "01"
  }, {
    "name": "Aunu'u",
    "shortCode": "02"
  }, {
    "name": "Ta'??",
    "shortCode": "03"
  }, {
    "name": "Ofu???Olosega",
    "shortCode": "04"
  }, {
    "name": "Rose Atoll",
    "shortCode": "21"
  }, {
    "name": "Swains Island",
    "shortCode": "22"
  }]
}, {
  "countryname": "Andorra",
  "countryShortCode": "AD",
  "regions": [{
    "name": "Andorra la Vella",
    "shortCode": "07"
  }, {
    "name": "Canillo",
    "shortCode": "02"
  }, {
    "name": "Encamp",
    "shortCode": "03"
  }, {
    "name": "Escaldes-Engordany",
    "shortCode": "08"
  }, {
    "name": "La Massana",
    "shortCode": "04"
  }, {
    "name": "Ordino",
    "shortCode": "05"
  }, {
    "name": "Sant Juli?? de L??ria",
    "shortCode": "06"
  }]
}, {
  "countryname": "Angola",
  "countryShortCode": "AO",
  "regions": [{
    "name": "Bengo",
    "shortCode": "BGO"
  }, {
    "name": "Benguela",
    "shortCode": "BGU"
  }, {
    "name": "Bi??",
    "shortCode": "BIE"
  }, {
    "name": "Cabinda",
    "shortCode": "CAB"
  }, {
    "name": "Cuando Cubango",
    "shortCode": "CCU"
  }, {
    "name": "Cuanza Norte",
    "shortCode": "CNO"
  }, {
    "name": "Cuanza Sul",
    "shortCode": "CUS"
  }, {
    "name": "Cunene",
    "shortCode": "CNN"
  }, {
    "name": "Huambo",
    "shortCode": "HUA"
  }, {
    "name": "Hu??la",
    "shortCode": "HUI"
  }, {
    "name": "Luanda",
    "shortCode": "LUA"
  }, {
    "name": "Lunda Norte",
    "shortCode": "LNO"
  }, {
    "name": "Lunda Sul",
    "shortCode": "LSU"
  }, {
    "name": "Malanje",
    "shortCode": "MAL"
  }, {
    "name": "Moxico",
    "shortCode": "MOX"
  }, {
    "name": "Namibe",
    "shortCode": "NAM"
  }, {
    "name": "U??ge",
    "shortCode": "UIG"
  }, {
    "name": "Zaire",
    "shortCode": "ZAI"
  }]
}, {
  "countryname": "Anguilla",
  "countryShortCode": "AI",
  "regions": [{
    "name": "Anguilla",
    "shortCode": "01"
  }, {
    "name": "Anguillita Island",
    "shortCode": "02"
  }, {
    "name": "Blowing Rock",
    "shortCode": "03"
  }, {
    "name": "Cove Cay",
    "shortCode": "04"
  }, {
    "name": "Crocus Cay",
    "shortCode": "05"
  }, {
    "name": "Deadman's Cay",
    "shortCode": "06"
  }, {
    "name": "Dog Island",
    "shortCode": "07"
  }, {
    "name": "East Cay",
    "shortCode": "08"
  }, {
    "name": "Little Island",
    "shortCode": "09"
  }, {
    "name": "Little Scrub Island",
    "shortCode": "10"
  }, {
    "name": "Mid Cay",
    "shortCode": "11"
  }, {
    "name": "North Cay",
    "shortCode": "12"
  }, {
    "name": "Prickly Pear Cays",
    "shortCode": "13"
  }, {
    "name": "Rabbit Island",
    "shortCode": "14"
  }, {
    "name": "Sandy Island/Sand Island",
    "shortCode": "15"
  }, {
    "name": "Scilly Cay",
    "shortCode": "16"
  }, {
    "name": "Scrub Island",
    "shortCode": "17"
  }, {
    "name": "Seal Island",
    "shortCode": "18"
  }, {
    "name": "Sombrero/Hat Island",
    "shortCode": "19"
  }, {
    "name": "South Cay",
    "shortCode": "20"
  }, {
    "name": "South Wager Island",
    "shortCode": "21"
  }, {
    "name": "West Cay",
    "shortCode": "22"
  }]
}, {
  "countryname": "Antarctica",
  "countryShortCode": "AQ",
  "regions": [{
    "name": "Antarctica",
    "shortCode": "AQ"
  }]
}, {
  "countryname": "Antigua and Barbuda",
  "countryShortCode": "AG",
  "regions": [{
    "name": "Antigua Island",
    "shortCode": "01"
  }, {
    "name": "Barbuda Island",
    "shortCode": "02"
  }, {
    "name": "Bird Island",
    "shortCode": "04"
  }, {
    "name": "Bishop Island",
    "shortCode": "05"
  }, {
    "name": "Blake Island",
    "shortCode": "06"
  }, {
    "name": "Crump Island",
    "shortCode": "09"
  }, {
    "name": "Dulcina Island",
    "shortCode": "10"
  }, {
    "name": "Exchange Island",
    "shortCode": "11"
  }, {
    "name": "Five Islands",
    "shortCode": "12"
  }, {
    "name": "Great Bird Island",
    "shortCode": "13"
  }, {
    "name": "Green Island",
    "shortCode": "14"
  }, {
    "name": "Guiana Island",
    "shortCode": "15"
  }, {
    "name": "Hawes Island",
    "shortCode": "17"
  }, {
    "name": "Hells Gate Island",
    "shortCode": "16"
  }, {
    "name": "Henry Island",
    "shortCode": "18"
  }, {
    "name": "Johnson Island",
    "shortCode": "19"
  }, {
    "name": "Kid Island",
    "shortCode": "20"
  }, {
    "name": "Lobster Island",
    "shortCode": "22"
  }, {
    "name": "Maiden Island",
    "shortCode": "24"
  }, {
    "name": "Moor Island",
    "shortCode": "25"
  }, {
    "name": "Nanny Island",
    "shortCode": "26"
  }, {
    "name": "Pelican Island",
    "shortCode": "27"
  }, {
    "name": "Prickly Pear Island",
    "shortCode": "28"
  }, {
    "name": "Rabbit Island",
    "shortCode": "29"
  }, {
    "name": "Red Head Island",
    "shortCode": "31"
  }, {
    "name": "Redonda Island",
    "shortCode": "03"
  }, {
    "name": "Sandy Island",
    "shortCode": "32"
  }, {
    "name": "Smith Island",
    "shortCode": "33"
  }, {
    "name": "The Sisters",
    "shortCode": "34"
  }, {
    "name": "Vernon Island",
    "shortCode": "35"
  }, {
    "name": "Wicked Will Island",
    "shortCode": "36"
  }, {
    "name": "York Island",
    "shortCode": "37"
  }]
}, {
  "countryname": "Argentina",
  "countryShortCode": "AR",
  "regions": [{
    "name": "Buenos Aires",
    "shortCode": "B"
  }, {
    "name": "Capital Federal",
    "shortCode": "C"
  }, {
    "name": "Catamarca",
    "shortCode": "K"
  }, {
    "name": "Chaco",
    "shortCode": "H"
  }, {
    "name": "Chubut",
    "shortCode": "U"
  }, {
    "name": "C??rdoba",
    "shortCode": "X"
  }, {
    "name": "Corrientes",
    "shortCode": "W"
  }, {
    "name": "Entre R??os",
    "shortCode": "E"
  }, {
    "name": "Formosa",
    "shortCode": "P"
  }, {
    "name": "Jujuy",
    "shortCode": "Y"
  }, {
    "name": "La Pampa",
    "shortCode": "L"
  }, {
    "name": "La Rioja",
    "shortCode": "F"
  }, {
    "name": "Mendoza",
    "shortCode": "M"
  }, {
    "name": "Misiones",
    "shortCode": "N"
  }, {
    "name": "Neuqu??n",
    "shortCode": "Q"
  }, {
    "name": "R??o Negro",
    "shortCode": "R"
  }, {
    "name": "Salta",
    "shortCode": "A"
  }, {
    "name": "San Juan",
    "shortCode": "J"
  }, {
    "name": "San Luis",
    "shortCode": "D"
  }, {
    "name": "Santa Cruz",
    "shortCode": "Z"
  }, {
    "name": "Santa Fe",
    "shortCode": "S"
  }, {
    "name": "Santiago del Estero",
    "shortCode": "G"
  }, {
    "name": "Tierra del Fuego",
    "shortCode": "V"
  }, {
    "name": "Tucum??n",
    "shortCode": "T"
  }]
}, {
  "countryname": "Armenia",
  "countryShortCode": "AM",
  "regions": [{
    "name": "Aragatsotn",
    "shortCode": "AG"
  }, {
    "name": "Ararat",
    "shortCode": "AR"
  }, {
    "name": "Armavir",
    "shortCode": "AV"
  }, {
    "name": "Gegharkunik",
    "shortCode": "GR"
  }, {
    "name": "Kotayk",
    "shortCode": "KT"
  }, {
    "name": "Lori",
    "shortCode": "LO"
  }, {
    "name": "Shirak",
    "shortCode": "SH"
  }, {
    "name": "Syunik",
    "shortCode": "SU"
  }, {
    "name": "Tavush",
    "shortCode": "TV"
  }, {
    "name": "Vayots Dzor",
    "shortCode": "VD"
  }, {
    "name": "Yerevan",
    "shortCode": "ER"
  }]
}, {
  "countryname": "Aruba",
  "countryShortCode": "AW",
  "regions": [{
    "name": "Aruba",
    "shortCode": "AW"
  }]
}, {
  "countryname": "Australia",
  "countryShortCode": "AU",
  "regions": [{
    "name": "Australian Capital Territory",
    "shortCode": "ACT"
  }, {
    "name": "New South Wales",
    "shortCode": "NSW"
  }, {
    "name": "Northern Territory",
    "shortCode": "NT"
  }, {
    "name": "Queensland",
    "shortCode": "QLD"
  }, {
    "name": "South Australia",
    "shortCode": "SA"
  }, {
    "name": "Tasmania",
    "shortCode": "TAS"
  }, {
    "name": "Victoria",
    "shortCode": "VIC"
  }, {
    "name": "Western Australia",
    "shortCode": "WA"
  }]
}, {
  "countryname": "Austria",
  "countryShortCode": "AT",
  "regions": [{
    "name": "Burgenland",
    "shortCode": "1"
  }, {
    "name": "K??rnten",
    "shortCode": "2"
  }, {
    "name": "Nieder??sterreich",
    "shortCode": "3"
  }, {
    "name": "Ober??sterreich",
    "shortCode": "4"
  }, {
    "name": "Salzburg",
    "shortCode": "5"
  }, {
    "name": "Steiermark",
    "shortCode": "6"
  }, {
    "name": "Tirol",
    "shortCode": "7"
  }, {
    "name": "Vorarlberg",
    "shortCode": "8"
  }, {
    "name": "Wien",
    "shortCode": "9"
  }]
}, {
  "countryname": "Azerbaijan",
  "countryShortCode": "AZ",
  "regions": [{
    "name": "Ab??eron",
    "shortCode": "ABS"
  }, {
    "name": "A??cab??di",
    "shortCode": "AGC"
  }, {
    "name": "A??dam",
    "shortCode": "AGM"
  }, {
    "name": "A??da??",
    "shortCode": "AGS"
  }, {
    "name": "A??stafa",
    "shortCode": "AGA"
  }, {
    "name": "A??su",
    "shortCode": "AGU"
  }, {
    "name": "Astara",
    "shortCode": "AST"
  }, {
    "name": "Bak??",
    "shortCode": "BAK"
  }, {
    "name": "Bab??k",
    "shortCode": "BAB"
  }, {
    "name": "Balak??n",
    "shortCode": "BAL"
  }, {
    "name": "B??rd??",
    "shortCode": "BAR"
  }, {
    "name": "Beyl??qan",
    "shortCode": "BEY"
  }, {
    "name": "Bil??suvar",
    "shortCode": "BIL"
  }, {
    "name": "C??bray??l",
    "shortCode": "CAB"
  }, {
    "name": "C??lilabad",
    "shortCode": "CAL"
  }, {
    "name": "Culfa",
    "shortCode": "CUL"
  }, {
    "name": "Da??k??s??n",
    "shortCode": "DAS"
  }, {
    "name": "F??zuli",
    "shortCode": "FUZ"
  }, {
    "name": "G??d??b??y",
    "shortCode": "GAD"
  }, {
    "name": "Goranboy",
    "shortCode": "GOR"
  }, {
    "name": "G??y??ay",
    "shortCode": "GOY"
  }, {
    "name": "G??yg??l",
    "shortCode": "GYG"
  }, {
    "name": "Hac??qabul",
    "shortCode": "HAC"
  }, {
    "name": "??mi??li",
    "shortCode": "IMI"
  }, {
    "name": "??smay??ll??",
    "shortCode": "ISM"
  }, {
    "name": "K??lb??c??r",
    "shortCode": "KAL"
  }, {
    "name": "K??ng??rli",
    "shortCode": "KAN"
  }, {
    "name": "K??rd??mir",
    "shortCode": "KUR"
  }, {
    "name": "La????n",
    "shortCode": "LAC"
  }, {
    "name": "L??nk??ran",
    "shortCode": "LAN"
  }, {
    "name": "Lerik",
    "shortCode": "LER"
  }, {
    "name": "Masall??",
    "shortCode": "MAS"
  }, {
    "name": "Neft??ala",
    "shortCode": "NEF"
  }, {
    "name": "O??uz",
    "shortCode": "OGU"
  }, {
    "name": "Ordubad",
    "shortCode": "ORD"
  }, {
    "name": "Q??b??l??",
    "shortCode": "QAB"
  }, {
    "name": "Qax",
    "shortCode": "QAX"
  }, {
    "name": "Qazax",
    "shortCode": "QAZ"
  }, {
    "name": "Qobustan",
    "shortCode": "QOB"
  }, {
    "name": "Quba",
    "shortCode": "QBA"
  }, {
    "name": "Qubadli",
    "shortCode": "QBI"
  }, {
    "name": "Qusar",
    "shortCode": "QUS"
  }, {
    "name": "Saatl??",
    "shortCode": "SAT"
  }, {
    "name": "Sabirabad",
    "shortCode": "SAB"
  }, {
    "name": "??abran",
    "shortCode": "SBN"
  }, {
    "name": "S??d??r??k",
    "shortCode": "SAD"
  }, {
    "name": "??ahbuz",
    "shortCode": "SAH"
  }, {
    "name": "????ki",
    "shortCode": "SAK"
  }, {
    "name": "Salyan",
    "shortCode": "SAL"
  }, {
    "name": "??amax??",
    "shortCode": "SMI"
  }, {
    "name": "????mkir",
    "shortCode": "SKR"
  }, {
    "name": "Samux",
    "shortCode": "SMX"
  }, {
    "name": "????rur",
    "shortCode": "SAR"
  }, {
    "name": "Siy??z??n",
    "shortCode": "SIY"
  }, {
    "name": "??u??a",
    "shortCode": "SUS"
  }, {
    "name": "T??rt??r",
    "shortCode": "TAR"
  }, {
    "name": "Tovuz",
    "shortCode": "TOV"
  }, {
    "name": "Ucar",
    "shortCode": "UCA"
  }, {
    "name": "Xa??maz",
    "shortCode": "XAC"
  }, {
    "name": "X??z??",
    "shortCode": "XIZ"
  }, {
    "name": "Xocal??",
    "shortCode": "XCI"
  }, {
    "name": "Xocav??nd",
    "shortCode": "XVD"
  }, {
    "name": "Yard??ml??",
    "shortCode": "YAR"
  }, {
    "name": "Yevlax",
    "shortCode": "YEV"
  }, {
    "name": "Z??ngilan",
    "shortCode": "ZAN"
  }, {
    "name": "Zaqatala",
    "shortCode": "ZAQ"
  }, {
    "name": "Z??rdab",
    "shortCode": "ZAR"
  }]
}, {
  "countryname": "Bahamas",
  "countryShortCode": "BS",
  "regions": [{
    "name": "Acklins Island",
    "shortCode": "01"
  }, {
    "name": "Berry Islands",
    "shortCode": "22"
  }, {
    "name": "Bimini",
    "shortCode": "02"
  }, {
    "name": "Black Point",
    "shortCode": "23"
  }, {
    "name": "Cat Island",
    "shortCode": "03"
  }, {
    "name": "Central Abaco",
    "shortCode": "24"
  }, {
    "name": "Crooked Island and Long Cay",
    "shortCode": "28"
  }, {
    "name": "East Grand Bahama",
    "shortCode": "29"
  }, {
    "name": "Exuma",
    "shortCode": "04"
  }, {
    "name": "Freeport",
    "shortCode": "05"
  }, {
    "name": "Fresh Creek",
    "shortCode": "06"
  }, {
    "name": "Governor's Harbour",
    "shortCode": "07"
  }, {
    "name": "Green Turtle Cay",
    "shortCode": "08"
  }, {
    "name": "Harbour Island",
    "shortCode": "09"
  }, {
    "name": "High Rock",
    "shortCode": "10"
  }, {
    "name": "Inagua",
    "shortCode": "11"
  }, {
    "name": "Kemps Bay",
    "shortCode": "12"
  }, {
    "name": "Long Island",
    "shortCode": "13"
  }, {
    "name": "Marsh Harbour",
    "shortCode": "14"
  }, {
    "name": "Mayaguana",
    "shortCode": "15"
  }, {
    "name": "Moore???s Island",
    "shortCode": "40"
  }, {
    "name": "New Providence",
    "shortCode": "16"
  }, {
    "name": "Nichollstown and Berry Islands",
    "shortCode": "17"
  }, {
    "name": "North Abaco",
    "shortCode": "42"
  }, {
    "name": "North Andros",
    "shortCode": "41"
  }, {
    "name": "North Eleuthera",
    "shortCode": "33"
  }, {
    "name": "Ragged Island",
    "shortCode": "18"
  }, {
    "name": "Rock Sound",
    "shortCode": "19"
  }, {
    "name": "San Salvador and Rum Cay",
    "shortCode": "20"
  }, {
    "name": "Sandy Point",
    "shortCode": "21"
  }, {
    "name": "South Abaco",
    "shortCode": "35"
  }, {
    "name": "South Andros",
    "shortCode": "36"
  }, {
    "name": "South Eleuthera",
    "shortCode": "37"
  }, {
    "name": "West Grand Bahama",
    "shortCode": "39"
  }]
}, {
  "countryname": "Bahrain",
  "countryShortCode": "BH",
  "regions": [{
    "name": "Al Jan??b??yah",
    "shortCode": "14"
  }, {
    "name": "Al Man??mah",
    "shortCode": "13"
  }, {
    "name": "Al Mu???arraq",
    "shortCode": "15"
  }, {
    "name": "Al Wus????",
    "shortCode": "16"
  }, {
    "name": "Ash Sham??l??yah",
    "shortCode": "17"
  }]
}, {
  "countryname": "Bangladesh",
  "countryShortCode": "BD",
  "regions": [{
    "name": "Barisal",
    "shortCode": "A"
  }, {
    "name": "Chittagong",
    "shortCode": "B"
  }, {
    "name": "Dhaka",
    "shortCode": "C"
  }, {
    "name": "Khulna",
    "shortCode": "D"
  }, {
    "name": "Mymensingh",
    "shortCode": "M"
  }, {
    "name": "Rajshahi",
    "shortCode": "E"
  }, {
    "name": "Rangpur",
    "shortCode": "F"
  }, {
    "name": "Sylhet",
    "shortCode": "G"
  }]
}, {
  "countryname": "Barbados",
  "countryShortCode": "BB",
  "regions": [{
    "name": "Christ Church",
    "shortCode": "01"
  }, {
    "name": "Saint Andrew",
    "shortCode": "02"
  }, {
    "name": "Saint George",
    "shortCode": "03"
  }, {
    "name": "Saint James",
    "shortCode": "04"
  }, {
    "name": "Saint John",
    "shortCode": "05"
  }, {
    "name": "Saint Joseph",
    "shortCode": "06"
  }, {
    "name": "Saint Lucy",
    "shortCode": "07"
  }, {
    "name": "Saint Michael",
    "shortCode": "08"
  }, {
    "name": "Saint Peter",
    "shortCode": "09"
  }, {
    "name": "Saint Philip",
    "shortCode": "10"
  }, {
    "name": "Saint Thomas",
    "shortCode": "11"
  }]
}, {
  "countryname": "Belarus",
  "countryShortCode": "BY",
  "regions": [{
    "name": "Brest voblast",
    "shortCode": "BR"
  }, {
    "name": "Gorod Minsk",
    "shortCode": "HM"
  }, {
    "name": "Homiel voblast",
    "shortCode": "HO"
  }, {
    "name": "Hrodna voblast",
    "shortCode": "HR"
  }, {
    "name": "Mahilyow voblast",
    "shortCode": "MA"
  }, {
    "name": "Minsk voblast",
    "shortCode": "MI"
  }, {
    "name": "Vitsebsk voblast",
    "shortCode": "VI"
  }]
}, {
  "countryname": "Belgium",
  "countryShortCode": "BE",
  "regions": [{
    "name": "Bruxelles-Capitale",
    "shortCode": "BRU"
  }, {
    "name": "R??gion Flamande",
    "shortCode": "VLG"
  }, {
    "name": "R??gion Walloni??",
    "shortCode": "WAL"
  }]
}, {
  "countryname": "Belize",
  "countryShortCode": "BZ",
  "regions": [{
    "name": "Belize District",
    "shortCode": "BZ"
  }, {
    "name": "Cayo District",
    "shortCode": "CY"
  }, {
    "name": "Corozal District",
    "shortCode": "CZL"
  }, {
    "name": "Orange Walk District",
    "shortCode": "OW"
  }, {
    "name": "Stann Creek District",
    "shortCode": "SC"
  }, {
    "name": "Toledo District",
    "shortCode": "TOL"
  }]
}, {
  "countryname": "Benin",
  "countryShortCode": "BJ",
  "regions": [{
    "name": "Alibori",
    "shortCode": "AL"
  }, {
    "name": "Atakora",
    "shortCode": "AK"
  }, {
    "name": "Atlantique",
    "shortCode": "AQ"
  }, {
    "name": "Borgou",
    "shortCode": "BO"
  }, {
    "name": "Collines Department",
    "shortCode": "CO"
  }, {
    "name": "Donga",
    "shortCode": "DO"
  }, {
    "name": "Kouffo",
    "shortCode": "KO"
  }, {
    "name": "Littoral Department",
    "shortCode": "LI"
  }, {
    "name": "Mono Department",
    "shortCode": "MO"
  }, {
    "name": "Ou??m??",
    "shortCode": "OU"
  }, {
    "name": "Plateau",
    "shortCode": "PL"
  }, {
    "name": "Zou",
    "shortCode": "ZO"
  }]
}, {
  "countryname": "Bermuda",
  "countryShortCode": "BM",
  "regions": [{
    "name": "City of Hamilton",
    "shortCode": "03"
  }, {
    "name": "Devonshire Parish",
    "shortCode": "01"
  }, {
    "name": "Hamilton Parish",
    "shortCode": "02"
  }, {
    "name": "Paget Parish",
    "shortCode": "04"
  }, {
    "name": "Pembroke Parish",
    "shortCode": "05"
  }, {
    "name": "Sandys Parish",
    "shortCode": "08"
  }, {
    "name": "Smith's Parish",
    "shortCode": "09"
  }, {
    "name": "Southampton Parish",
    "shortCode": "10"
  }, {
    "name": "St. George's Parish",
    "shortCode": "07"
  }, {
    "name": "Town of St. George",
    "shortCode": "06"
  }, {
    "name": "Warwick Parish",
    "shortCode": "11"
  }]
}, {
  "countryname": "Bhutan",
  "countryShortCode": "BT",
  "regions": [{
    "name": "Bumthang",
    "shortCode": "33"
  }, {
    "name": "Chhukha",
    "shortCode": "12"
  }, {
    "name": "Dagana",
    "shortCode": "22"
  }, {
    "name": "Gasa",
    "shortCode": "GA"
  }, {
    "name": "Haa",
    "shortCode": "13"
  }, {
    "name": "Lhuntse",
    "shortCode": "44"
  }, {
    "name": "Mongar",
    "shortCode": "42"
  }, {
    "name": "Paro",
    "shortCode": "11"
  }, {
    "name": "Pemagatshel",
    "shortCode": "43"
  }, {
    "name": "Punakha",
    "shortCode": "23"
  }, {
    "name": "Samdrup Jongkhar",
    "shortCode": "45"
  }, {
    "name": "Samtse",
    "shortCode": "14"
  }, {
    "name": "Sarpang",
    "shortCode": "31"
  }, {
    "name": "Thimphu",
    "shortCode": "15"
  }, {
    "name": "Trashigang",
    "shortCode": "41"
  }, {
    "name": "Trashiyangtse",
    "shortCode": "TY"
  }, {
    "name": "Trongsa",
    "shortCode": "32"
  }, {
    "name": "Tsirang",
    "shortCode": "21"
  }, {
    "name": "Wangdue Phodrang",
    "shortCode": "24"
  }, {
    "name": "Zhemgang",
    "shortCode": "34"
  }]
}, {
  "countryname": "Bolivia",
  "countryShortCode": "BO",
  "regions": [{
    "name": "Beni",
    "shortCode": "B"
  }, {
    "name": "Chuquisaca",
    "shortCode": "H"
  }, {
    "name": "Cochabamba",
    "shortCode": "C"
  }, {
    "name": "La Paz",
    "shortCode": "L"
  }, {
    "name": "Oruro",
    "shortCode": "O"
  }, {
    "name": "Pando",
    "shortCode": "N"
  }, {
    "name": "Potos??",
    "shortCode": "P"
  }, {
    "name": "Santa Cruz",
    "shortCode": "S"
  }, {
    "name": "Tarija",
    "shortCode": "T"
  }]
}, {
  "countryname": "Bonaire, Sint Eustatius and Saba",
  "countryShortCode": "BQ",
  "regions": [{
    "name": "Bonaire",
    "shortCode": "BO"
  }, {
    "name": "Saba Isand",
    "shortCode": "SA"
  }, {
    "name": "Sint Eustatius",
    "shortCode": "SE"
  }]
}, {
  "countryname": "Bosnia and Herzegovina",
  "countryShortCode": "BA",
  "regions": [{
    "name": "Br??ko Distrikt",
    "shortCode": "BRC"
  }, {
    "name": "Federacija Bosne i Hercegovine",
    "shortCode": "BIH"
  }, {
    "name": "Republika Srpska",
    "shortCode": "SRP"
  }]
}, {
  "countryname": "Botswana",
  "countryShortCode": "BW",
  "regions": [{
    "name": "Central",
    "shortCode": "CE"
  }, {
    "name": "Ghanzi",
    "shortCode": "GH"
  }, {
    "name": "Kgalagadi",
    "shortCode": "KG"
  }, {
    "name": "Kgatleng",
    "shortCode": "KL"
  }, {
    "name": "Kweneng",
    "shortCode": "KW"
  }, {
    "name": "North West",
    "shortCode": "NW"
  }, {
    "name": "North-East",
    "shortCode": "NE"
  }, {
    "name": "South East",
    "shortCode": "SE"
  }, {
    "name": "Southern",
    "shortCode": "SO"
  }]
}, {
  "countryname": "Bouvet Island",
  "countryShortCode": "BV",
  "regions": [{
    "name": "Bouvet Island",
    "shortCode": "BV"
  }]
}, {
  "countryname": "Brazil",
  "countryShortCode": "BR",
  "regions": [{
    "name": "Acre",
    "shortCode": "AC"
  }, {
    "name": "Alagoas",
    "shortCode": "AL"
  }, {
    "name": "Amap??",
    "shortCode": "AP"
  }, {
    "name": "Amazonas",
    "shortCode": "AM"
  }, {
    "name": "Bahia",
    "shortCode": "BA"
  }, {
    "name": "Cear??",
    "shortCode": "CE"
  }, {
    "name": "Distrito Federal",
    "shortCode": "DF"
  }, {
    "name": "Esp??rito Santo",
    "shortCode": "ES"
  }, {
    "name": "Goi??s",
    "shortCode": "GO"
  }, {
    "name": "Maranh??o",
    "shortCode": "MA"
  }, {
    "name": "Mato Grosso",
    "shortCode": "MT"
  }, {
    "name": "Mato Grosso do Sul",
    "shortCode": "MS"
  }, {
    "name": "Minas Gerais",
    "shortCode": "MG"
  }, {
    "name": "Par??",
    "shortCode": "PA"
  }, {
    "name": "Para??ba",
    "shortCode": "PB"
  }, {
    "name": "Paran??",
    "shortCode": "PR"
  }, {
    "name": "Pernambuco",
    "shortCode": "PE"
  }, {
    "name": "Piau??",
    "shortCode": "PI"
  }, {
    "name": "Rio de Janeiro",
    "shortCode": "RJ"
  }, {
    "name": "Rio Grande do Norte",
    "shortCode": "RN"
  }, {
    "name": "Rio Grande do Sul",
    "shortCode": "RS"
  }, {
    "name": "Rond??nia",
    "shortCode": "RO"
  }, {
    "name": "Roraima",
    "shortCode": "RR"
  }, {
    "name": "Santa Catarina",
    "shortCode": "SC"
  }, {
    "name": "S??o Paulo",
    "shortCode": "SP"
  }, {
    "name": "Sergipe",
    "shortCode": "SE"
  }, {
    "name": "Tocantins",
    "shortCode": "TO"
  }]
}, {
  "countryname": "British Indian Ocean Territory",
  "countryShortCode": "IO",
  "regions": [{
    "name": "British Indian Ocean Territory",
    "shortCode": "IO"
  }]
}, {
  "countryname": "Brunei Darussalam",
  "countryShortCode": "BN",
  "regions": [{
    "name": "Belait",
    "shortCode": "BE"
  }, {
    "name": "Brunei Muara",
    "shortCode": "BM"
  }, {
    "name": "Temburong",
    "shortCode": "TE"
  }, {
    "name": "Tutong",
    "shortCode": "TU"
  }]
}, {
  "countryname": "Bulgaria",
  "countryShortCode": "BG",
  "regions": [{
    "name": "Blagoevgrad",
    "shortCode": "01"
  }, {
    "name": "Burgas",
    "shortCode": "02"
  }, {
    "name": "Dobrich",
    "shortCode": "08"
  }, {
    "name": "Gabrovo",
    "shortCode": "07"
  }, {
    "name": "Jambol",
    "shortCode": "28"
  }, {
    "name": "Khaskovo",
    "shortCode": "26"
  }, {
    "name": "Kjustendil",
    "shortCode": "10"
  }, {
    "name": "Kurdzhali",
    "shortCode": "09"
  }, {
    "name": "Lovech",
    "shortCode": "11"
  }, {
    "name": "Montana",
    "shortCode": "12"
  }, {
    "name": "Pazardzhik",
    "shortCode": "13"
  }, {
    "name": "Pernik",
    "shortCode": "14"
  }, {
    "name": "Pleven",
    "shortCode": "15"
  }, {
    "name": "Plovdiv",
    "shortCode": "16"
  }, {
    "name": "Razgrad",
    "shortCode": "17"
  }, {
    "name": "Ruse",
    "shortCode": "18"
  }, {
    "name": "Shumen",
    "shortCode": "27"
  }, {
    "name": "Silistra",
    "shortCode": "19"
  }, {
    "name": "Sliven",
    "shortCode": "20"
  }, {
    "name": "Smoljan",
    "shortCode": "21"
  }, {
    "name": "Sofija",
    "shortCode": "23"
  }, {
    "name": "Sofija-Grad",
    "shortCode": "22"
  }, {
    "name": "Stara Zagora",
    "shortCode": "24"
  }, {
    "name": "Turgovishhe",
    "shortCode": "25"
  }, {
    "name": "Varna",
    "shortCode": "03"
  }, {
    "name": "Veliko Turnovo",
    "shortCode": "04"
  }, {
    "name": "Vidin",
    "shortCode": "05"
  }, {
    "name": "Vraca",
    "shortCode": "06"
  }]
}, {
  "countryname": "Burkina Faso",
  "countryShortCode": "BF",
  "regions": [{
    "name": "Bal??",
    "shortCode": "BAL"
  }, {
    "name": "Bam/Lake Bam",
    "shortCode": "BAM"
  }, {
    "name": "Banwa Province",
    "shortCode": "BAN"
  }, {
    "name": "Baz??ga",
    "shortCode": "BAZ"
  }, {
    "name": "Bougouriba",
    "shortCode": "BGR"
  }, {
    "name": "Boulgou Province",
    "shortCode": "BLG"
  }, {
    "name": "Boulkiemd??",
    "shortCode": "BLK"
  }, {
    "name": "Como??/Komoe",
    "shortCode": "COM"
  }, {
    "name": "Ganzourgou Province",
    "shortCode": "GAN"
  }, {
    "name": "Gnagna",
    "shortCode": "GNA"
  }, {
    "name": "Gourma Province",
    "shortCode": "GOU"
  }, {
    "name": "Houet",
    "shortCode": "HOU"
  }, {
    "name": "Ioba",
    "shortCode": "IOB"
  }, {
    "name": "Kadiogo",
    "shortCode": "KAD"
  }, {
    "name": "K??n??dougou",
    "shortCode": "KEN"
  }, {
    "name": "Komondjari",
    "shortCode": "KMD"
  }, {
    "name": "Kompienga",
    "shortCode": "KMP"
  }, {
    "name": "Kossi Province",
    "shortCode": "KOS"
  }, {
    "name": "Koulp??logo",
    "shortCode": "KOP"
  }, {
    "name": "Kouritenga",
    "shortCode": "KOT"
  }, {
    "name": "Kourw??ogo",
    "shortCode": "KOW"
  }, {
    "name": "L??raba",
    "shortCode": "LER"
  }, {
    "name": "Loroum",
    "shortCode": "LOR"
  }, {
    "name": "Mouhoun",
    "shortCode": "MOU"
  }, {
    "name": "Namentenga",
    "shortCode": "NAM"
  }, {
    "name": "Naouri/Nahouri",
    "shortCode": "NAO"
  }, {
    "name": "Nayala",
    "shortCode": "NAY"
  }, {
    "name": "Noumbiel",
    "shortCode": "NOU"
  }, {
    "name": "Oubritenga",
    "shortCode": "OUB"
  }, {
    "name": "Oudalan",
    "shortCode": "OUD"
  }, {
    "name": "Passor??",
    "shortCode": "PAS"
  }, {
    "name": "Poni",
    "shortCode": "PON"
  }, {
    "name": "Sangui??",
    "shortCode": "SNG"
  }, {
    "name": "Sanmatenga",
    "shortCode": "SMT"
  }, {
    "name": "S??no",
    "shortCode": "SEN"
  }, {
    "name": "Sissili",
    "shortCode": "SIS"
  }, {
    "name": "Soum",
    "shortCode": "SOM"
  }, {
    "name": "Sourou",
    "shortCode": "SOR"
  }, {
    "name": "Tapoa",
    "shortCode": "TAP"
  }, {
    "name": "Tui/Tuy",
    "shortCode": "TUI"
  }, {
    "name": "Yagha",
    "shortCode": "YAG"
  }, {
    "name": "Yatenga",
    "shortCode": "YAT"
  }, {
    "name": "Ziro",
    "shortCode": "ZIR"
  }, {
    "name": "Zondoma",
    "shortCode": "ZON"
  }, {
    "name": "Zoundw??ogo",
    "shortCode": "ZOU"
  }]
}, {
  "countryname": "Burundi",
  "countryShortCode": "BI",
  "regions": [{
    "name": "Bubanza",
    "shortCode": "BB"
  }, {
    "name": "Bujumbura Mairie",
    "shortCode": "BM"
  }, {
    "name": "Bujumbura Rural",
    "shortCode": "BL"
  }, {
    "name": "Bururi",
    "shortCode": "BR"
  }, {
    "name": "Cankuzo",
    "shortCode": "CA"
  }, {
    "name": "Cibitoke",
    "shortCode": "CI"
  }, {
    "name": "Gitega",
    "shortCode": "GI"
  }, {
    "name": "Karuzi",
    "shortCode": "KR"
  }, {
    "name": "Kayanza",
    "shortCode": "KY"
  }, {
    "name": "Kirundo",
    "shortCode": "KI"
  }, {
    "name": "Makamba",
    "shortCode": "MA"
  }, {
    "name": "Muramvya",
    "shortCode": "MU"
  }, {
    "name": "Muyinga",
    "shortCode": "MY"
  }, {
    "name": "Mwaro",
    "shortCode": "MW"
  }, {
    "name": "Ngozi",
    "shortCode": "NG"
  }, {
    "name": "Rutana",
    "shortCode": "RT"
  }, {
    "name": "Ruyigi",
    "shortCode": "RY"
  }]
}, {
  "countryname": "Cambodia",
  "countryShortCode": "KH",
  "regions": [{
    "name": "Baat Dambang",
    "shortCode": "2"
  }, {
    "name": "Banteay Mean Chey",
    "shortCode": "1"
  }, {
    "name": "Kampong Chaam",
    "shortCode": "3"
  }, {
    "name": "Kampong Chhnang",
    "shortCode": "4"
  }, {
    "name": "Kampong Spueu",
    "shortCode": "5"
  }, {
    "name": "Kampong Thum",
    "shortCode": "6"
  }, {
    "name": "Kampot",
    "shortCode": "7"
  }, {
    "name": "Kandaal",
    "shortCode": "8"
  }, {
    "name": "Kaoh Kong",
    "shortCode": "9"
  }, {
    "name": "Kracheh",
    "shortCode": "10"
  }, {
    "name": "Krong Kaeb",
    "shortCode": "23"
  }, {
    "name": "Krong Pailin",
    "shortCode": "24"
  }, {
    "name": "Krong Preah Sihanouk",
    "shortCode": "18"
  }, {
    "name": "Mondol Kiri",
    "shortCode": "11"
  }, {
    "name": "Otdar Mean Chey",
    "shortCode": "22"
  }, {
    "name": "Phnom Penh",
    "shortCode": "12"
  }, {
    "name": "Pousaat",
    "shortCode": "15"
  }, {
    "name": "Preah Vihear",
    "shortCode": "13"
  }, {
    "name": "Prey Veaeng",
    "shortCode": "14"
  }, {
    "name": "Rotanah Kiri",
    "shortCode": "16"
  }, {
    "name": "Siem Reab",
    "shortCode": "17"
  }, {
    "name": "Stueng Treng",
    "shortCode": "19"
  }, {
    "name": "Svaay Rieng",
    "shortCode": "20"
  }, {
    "name": "Taakaev",
    "shortCode": "21"
  }, {
    "name": "Tbong Khmum",
    "shortCode": "25"
  }]
}, {
  "countryname": "Cameroon",
  "countryShortCode": "CM",
  "regions": [{
    "name": "Adamaoua",
    "shortCode": "AD"
  }, {
    "name": "Centre",
    "shortCode": "CE"
  }, {
    "name": "Est",
    "shortCode": "ES"
  }, {
    "name": "Extr??me-Nord",
    "shortCode": "EN"
  }, {
    "name": "Littoral",
    "shortCode": "LT"
  }, {
    "name": "Nord",
    "shortCode": "NO"
  }, {
    "name": "Nord-Ouest",
    "shortCode": "NW"
  }, {
    "name": "Ouest",
    "shortCode": "OU"
  }, {
    "name": "Sud",
    "shortCode": "SU"
  }, {
    "name": "Sud-Ouest",
    "shortCode": "SW"
  }]
}, {
  "countryname": "Canada",
  "countryShortCode": "CA",
  "regions": [{
    "name": "Alberta",
    "shortCode": "AB"
  }, {
    "name": "British Columbia",
    "shortCode": "BC"
  }, {
    "name": "Manitoba",
    "shortCode": "MB"
  }, {
    "name": "New Brunswick",
    "shortCode": "NB"
  }, {
    "name": "Newfoundland and Labrador",
    "shortCode": "NL"
  }, {
    "name": "Northwest Territories",
    "shortCode": "NT"
  }, {
    "name": "Nova Scotia",
    "shortCode": "NS"
  }, {
    "name": "Nunavut",
    "shortCode": "NU"
  }, {
    "name": "Ontario",
    "shortCode": "ON"
  }, {
    "name": "Prince Edward Island",
    "shortCode": "PE"
  }, {
    "name": "Quebec",
    "shortCode": "QC"
  }, {
    "name": "Saskatchewan",
    "shortCode": "SK"
  }, {
    "name": "Yukon",
    "shortCode": "YT"
  }]
}, {
  "countryname": "Cape Verde",
  "countryShortCode": "CV",
  "regions": [{
    "name": "Boa Vista",
    "shortCode": "BV"
  }, {
    "name": "Brava",
    "shortCode": "BR"
  }, {
    "name": "Calheta de S??o Miguel",
    "shortCode": "CS"
  }, {
    "name": "Maio",
    "shortCode": "MA"
  }, {
    "name": "Mosteiros",
    "shortCode": "MO"
  }, {
    "name": "Pa??l",
    "shortCode": "PA"
  }, {
    "name": "Porto Novo",
    "shortCode": "PN"
  }, {
    "name": "Praia",
    "shortCode": "PR"
  }, {
    "name": "Ribeira Brava",
    "shortCode": "RB"
  }, {
    "name": "Ribeira Grande",
    "shortCode": "RG"
  }, {
    "name": "Sal",
    "shortCode": "SL"
  }, {
    "name": "Santa Catarina",
    "shortCode": "CA"
  }, {
    "name": "Santa Cruz",
    "shortCode": "CR"
  }, {
    "name": "S??o Domingos",
    "shortCode": "SD"
  }, {
    "name": "S??o Filipe",
    "shortCode": "SF"
  }, {
    "name": "S??o Nicolau",
    "shortCode": "SN"
  }, {
    "name": "S??o Vicente",
    "shortCode": "SV"
  }, {
    "name": "Tarrafal",
    "shortCode": "TA"
  }, {
    "name": "Tarrafal de S??o Nicolau",
    "shortCode": "TS"
  }]
}, {
  "countryname": "Cayman Islands",
  "countryShortCode": "KY",
  "regions": [{
    "name": "Creek"
  }, {
    "name": "Eastern"
  }, {
    "name": "Midland"
  }, {
    "name": "South Town"
  }, {
    "name": "Spot Bay"
  }, {
    "name": "Stake Bay"
  }, {
    "name": "West End"
  }, {
    "name": "Western"
  }]
}, {
  "countryname": "Central African Republic",
  "countryShortCode": "CF",
  "regions": [{
    "name": "Bamingui-Bangoran",
    "shortCode": "BB"
  }, {
    "name": "Bangui",
    "shortCode": "BGF"
  }, {
    "name": "Basse-Kotto",
    "shortCode": "BK"
  }, {
    "name": "Haute-Kotto",
    "shortCode": "HK"
  }, {
    "name": "Haut-Mbomou",
    "shortCode": "HM"
  }, {
    "name": "K??mo",
    "shortCode": "KG"
  }, {
    "name": "Lobaye",
    "shortCode": "LB"
  }, {
    "name": "Mamb??r??-Kad????",
    "shortCode": "HS"
  }, {
    "name": "Mbomou",
    "shortCode": "MB"
  }, {
    "name": "Nana-Grebizi",
    "shortCode": "10"
  }, {
    "name": "Nana-Mamb??r??",
    "shortCode": "NM"
  }, {
    "name": "Ombella-M'Poko",
    "shortCode": "MP"
  }, {
    "name": "Ouaka",
    "shortCode": "UK"
  }, {
    "name": "Ouham",
    "shortCode": "AC"
  }, {
    "name": "Ouham P??nd??",
    "shortCode": "OP"
  }, {
    "name": "Sangha-Mba??r??",
    "shortCode": "SE"
  }, {
    "name": "Vakaga",
    "shortCode": "VK"
  }]
}, {
  "countryname": "Chad",
  "countryShortCode": "TD",
  "regions": [{
    "name": "Bahr el Ghazal",
    "shortCode": "BG"
  }, {
    "name": "Batha",
    "shortCode": "BA"
  }, {
    "name": "Borkou",
    "shortCode": "BO"
  }, {
    "name": "Chari-Baguirmi",
    "shortCode": "CB"
  }, {
    "name": "Ennedi-Est",
    "shortCode": "EE"
  }, {
    "name": "Ennedi-Ouest",
    "shortCode": "EO"
  }, {
    "name": "Gu??ra",
    "shortCode": "GR"
  }, {
    "name": "Hadjer Lamis",
    "shortCode": "HL"
  }, {
    "name": "Kanem",
    "shortCode": "KA"
  }, {
    "name": "Lac",
    "shortCode": "LC"
  }, {
    "name": "Logone Occidental",
    "shortCode": "LO"
  }, {
    "name": "Logone Oriental",
    "shortCode": "LR"
  }, {
    "name": "Mondoul",
    "shortCode": "MA"
  }, {
    "name": "Mayo-K??bbi-Est",
    "shortCode": "ME"
  }, {
    "name": "Moyen-Chari",
    "shortCode": "MC"
  }, {
    "name": "Ouaddai",
    "shortCode": "OD"
  }, {
    "name": "Salamat",
    "shortCode": "SA"
  }, {
    "name": "Sila",
    "shortCode": "SI"
  }, {
    "name": "Tandjil??",
    "shortCode": "TA"
  }, {
    "name": "Tibesti",
    "shortCode": "TI"
  }, {
    "name": "Ville de Ndjamena",
    "shortCode": "ND"
  }, {
    "name": "Wadi Fira",
    "shortCode": "WF"
  }]
}, {
  "countryname": "Chile",
  "countryShortCode": "CL",
  "regions": [{
    "name": "Ais??n del General Carlos Ib????ez del Campo",
    "shortCode": "AI"
  }, {
    "name": "Antofagasta",
    "shortCode": "AN"
  }, {
    "name": "Araucan??a",
    "shortCode": "AR"
  }, {
    "name": "Arica y Parinacota",
    "shortCode": "AP"
  }, {
    "name": "Atacama",
    "shortCode": "AT"
  }, {
    "name": "B??o-B??o",
    "shortCode": "BI"
  }, {
    "name": "Coquimbo",
    "shortCode": "CO"
  }, {
    "name": "Libertador General Bernardo O'Higgins",
    "shortCode": "LI"
  }, {
    "name": "Los Lagos",
    "shortCode": "LL"
  }, {
    "name": "Los R??os",
    "shortCode": "LR"
  }, {
    "name": "Magallanes y Antartica Chilena",
    "shortCode": "MA"
  }, {
    "name": "Marga-Marga",
    "shortCode": ""
  }, {
    "name": "Maule",
    "shortCode": "ML"
  }, {
    "name": "??uble",
    "shortCode": "NB"
  }, {
    "name": "Regi??n Metropolitana de Santiago",
    "shortCode": "RM"
  }, {
    "name": "Tarapac??",
    "shortCode": "TA"
  }, {
    "name": "Valpara??so",
    "shortCode": "VS"
  }]
}, {
  "countryname": "China",
  "countryShortCode": "CN",
  "regions": [{
    "name": "Anhui",
    "shortCode": "34"
  }, {
    "name": "Beijing",
    "shortCode": "11"
  }, {
    "name": "Chongqing",
    "shortCode": "50"
  }, {
    "name": "Fujian",
    "shortCode": "35"
  }, {
    "name": "Gansu",
    "shortCode": "62"
  }, {
    "name": "Guangdong",
    "shortCode": "44"
  }, {
    "name": "Guangxi",
    "shortCode": "45"
  }, {
    "name": "Guizhou",
    "shortCode": "52"
  }, {
    "name": "Hainan",
    "shortCode": "46"
  }, {
    "name": "Hebei",
    "shortCode": "13"
  }, {
    "name": "Heilongjiang",
    "shortCode": "23"
  }, {
    "name": "Henan",
    "shortCode": "41"
  }, {
    "name": "Hong Kong",
    "shortCode": "91"
  }, {
    "name": "Hubei",
    "shortCode": "42"
  }, {
    "name": "Hunan",
    "shortCode": "43"
  }, {
    "name": "Inner Mongolia",
    "shortCode": "15"
  }, {
    "name": "Jiangsu",
    "shortCode": "32"
  }, {
    "name": "Jiangxi",
    "shortCode": "36"
  }, {
    "name": "Jilin",
    "shortCode": "22"
  }, {
    "name": "Liaoning",
    "shortCode": "21"
  }, {
    "name": "Macau",
    "shortCode": "92"
  }, {
    "name": "Ningxia",
    "shortCode": "64"
  }, {
    "name": "Qinghai",
    "shortCode": "63"
  }, {
    "name": "Shaanxi",
    "shortCode": "61"
  }, {
    "name": "Shandong",
    "shortCode": "37"
  }, {
    "name": "Shanghai",
    "shortCode": "31"
  }, {
    "name": "Shanxi",
    "shortCode": "14"
  }, {
    "name": "Sichuan",
    "shortCode": "51"
  }, {
    "name": "Tianjin",
    "shortCode": "12"
  }, {
    "name": "Tibet",
    "shortCode": "54"
  }, {
    "name": "Xinjiang",
    "shortCode": "65"
  }, {
    "name": "Yunnan",
    "shortCode": "53"
  }, {
    "name": "Zhejiang",
    "shortCode": "33"
  }]
}, {
  "countryname": "Christmas Island",
  "countryShortCode": "CX",
  "regions": [{
    "name": "Christmas Island",
    "shortCode": "CX"
  }]
}, {
  "countryname": "Cocos (Keeling) Islands",
  "countryShortCode": "CC",
  "regions": [{
    "name": "Direction Island",
    "shortCode": "DI"
  }, {
    "name": "Home Island",
    "shortCode": "HM"
  }, {
    "name": "Horsburgh Island",
    "shortCode": "HR"
  }, {
    "name": "North Keeling Island",
    "shortCode": "NK"
  }, {
    "name": "South Island",
    "shortCode": "SI"
  }, {
    "name": "West Island",
    "shortCode": "WI"
  }]
}, {
  "countryname": "Colombia",
  "countryShortCode": "CO",
  "regions": [{
    "name": "Amazonas",
    "shortCode": "AMA"
  }, {
    "name": "Antioquia",
    "shortCode": "ANT"
  }, {
    "name": "Arauca",
    "shortCode": "ARA"
  }, {
    "name": "Archipi??lago de San Andr??s",
    "shortCode": "SAP"
  }, {
    "name": "Atl??ntico",
    "shortCode": "ATL"
  }, {
    "name": "Bogot?? D.C.",
    "shortCode": "DC"
  }, {
    "name": "Bol??var",
    "shortCode": "BOL"
  }, {
    "name": "Boyac??",
    "shortCode": "BOY"
  }, {
    "name": "Caldas",
    "shortCode": "CAL"
  }, {
    "name": "Caquet??",
    "shortCode": "CAQ"
  }, {
    "name": "Casanare",
    "shortCode": "CAS"
  }, {
    "name": "Cauca",
    "shortCode": "CAU"
  }, {
    "name": "Cesar",
    "shortCode": "CES"
  }, {
    "name": "Choc??",
    "shortCode": "CHO"
  }, {
    "name": "C??rdoba",
    "shortCode": "COR"
  }, {
    "name": "Cundinamarca",
    "shortCode": "CUN"
  }, {
    "name": "Guain??a",
    "shortCode": "GUA"
  }, {
    "name": "Guaviare",
    "shortCode": "GUV"
  }, {
    "name": "Huila",
    "shortCode": "HUI"
  }, {
    "name": "La Guajira",
    "shortCode": "LAG"
  }, {
    "name": "Magdalena",
    "shortCode": "MAG"
  }, {
    "name": "Meta",
    "shortCode": "MET"
  }, {
    "name": "Nari??o",
    "shortCode": "NAR"
  }, {
    "name": "Norte de Santander",
    "shortCode": "NSA"
  }, {
    "name": "Putumayo",
    "shortCode": "PUT"
  }, {
    "name": "Quind??o",
    "shortCode": "QUI"
  }, {
    "name": "Risaralda",
    "shortCode": "RIS"
  }, {
    "name": "Santander",
    "shortCode": "SAN"
  }, {
    "name": "Sucre",
    "shortCode": "SUC"
  }, {
    "name": "Tolima",
    "shortCode": "TOL"
  }, {
    "name": "Valle del Cauca",
    "shortCode": "VAC"
  }, {
    "name": "Vaup??s",
    "shortCode": "VAU"
  }, {
    "name": "Vichada",
    "shortCode": "VID"
  }]
}, {
  "countryname": "Comoros",
  "countryShortCode": "KM",
  "regions": [{
    "name": "Andjaz??dja",
    "shortCode": "G"
  }, {
    "name": "Andjou??n",
    "shortCode": "A"
  }, {
    "name": "Mo??h??l??",
    "shortCode": "M"
  }]
}, {
  "countryname": "Congo, Republic of the (Brazzaville)",
  "countryShortCode": "CG",
  "regions": [{
    "name": "Bouenza",
    "shortCode": "11"
  }, {
    "name": "Brazzaville",
    "shortCode": "BZV"
  }, {
    "name": "Cuvette",
    "shortCode": "8"
  }, {
    "name": "Cuvette-Ouest",
    "shortCode": "15"
  }, {
    "name": "Kouilou",
    "shortCode": "5"
  }, {
    "name": "L??koumou",
    "shortCode": "2"
  }, {
    "name": "Likouala",
    "shortCode": "7"
  }, {
    "name": "Niari",
    "shortCode": "9"
  }, {
    "name": "Plateaux",
    "shortCode": "14"
  }, {
    "name": "Pointe-Noire",
    "shortCode": "16"
  }, {
    "name": "Pool",
    "shortCode": "12"
  }, {
    "name": "Sangha",
    "shortCode": "13"
  }]
}, {
  "countryname": "Congo, the Democratic Republic of the (Kinshasa)",
  "countryShortCode": "CD",
  "regions": [{
    "name": "Bandundu",
    "shortCode": "BN"
  }, {
    "name": "Bas-Congo",
    "shortCode": "BC"
  }, {
    "name": "??quateur",
    "shortCode": "EQ"
  }, {
    "name": "Kasa??-Occidental",
    "shortCode": "KE"
  }, {
    "name": "Kasa??-Oriental",
    "shortCode": "KW"
  }, {
    "name": "Katanga",
    "shortCode": "KA"
  }, {
    "name": "Kinshasa",
    "shortCode": "KN"
  }, {
    "name": "Maniema",
    "shortCode": "MA"
  }, {
    "name": "Nord-Kivu",
    "shortCode": "NK"
  }, {
    "name": "Orientale",
    "shortCode": "OR"
  }, {
    "name": "Sud-Kivu",
    "shortCode": "SK"
  }]
}, {
  "countryname": "Cook Islands",
  "countryShortCode": "CK",
  "regions": [{
    "name": "Aitutaki"
  }, {
    "name": "Atiu"
  }, {
    "name": "Avarua"
  }, {
    "name": "Mangaia"
  }, {
    "name": "Manihiki"
  }, {
    "name": "Ma'uke"
  }, {
    "name": "Mitiaro"
  }, {
    "name": "Nassau"
  }, {
    "name": "Palmerston"
  }, {
    "name": "Penrhyn"
  }, {
    "name": "Pukapuka"
  }, {
    "name": "Rakahanga"
  }]
}, {
  "countryname": "Costa Rica",
  "countryShortCode": "CR",
  "regions": [{
    "name": "Alajuela",
    "shortCode": "2"
  }, {
    "name": "Cartago",
    "shortCode": "3"
  }, {
    "name": "Guanacaste",
    "shortCode": "5"
  }, {
    "name": "Heredia",
    "shortCode": "4"
  }, {
    "name": "Lim??n",
    "shortCode": "7"
  }, {
    "name": "Puntarenas",
    "shortCode": "6"
  }, {
    "name": "San Jos??",
    "shortCode": "1"
  }]
}, {
  "countryname": "C??te d'Ivoire, Republic of",
  "countryShortCode": "CI",
  "regions": [{
    "name": "Agn??by",
    "shortCode": "16"
  }, {
    "name": "Bafing",
    "shortCode": "17"
  }, {
    "name": "Bas-Sassandra",
    "shortCode": "09"
  }, {
    "name": "Dengu??l??",
    "shortCode": "10"
  }, {
    "name": "Dix-Huit Montagnes",
    "shortCode": "06"
  }, {
    "name": "Fromager",
    "shortCode": "18"
  }, {
    "name": "Haut-Sassandra",
    "shortCode": "02"
  }, {
    "name": "Lacs",
    "shortCode": "07"
  }, {
    "name": "Lagunes",
    "shortCode": "01"
  }, {
    "name": "Marahou??",
    "shortCode": "12"
  }, {
    "name": "Moyen-Cavally",
    "shortCode": "19"
  }, {
    "name": "Moyen-Como??",
    "shortCode": "05"
  }, {
    "name": "N'zi-Como??",
    "shortCode": "11"
  }, {
    "name": "Savanes",
    "shortCode": "03"
  }, {
    "name": "Sud-Bandama",
    "shortCode": "15"
  }, {
    "name": "Sud-Como??",
    "shortCode": "13"
  }, {
    "name": "Vall??e du Bandama",
    "shortCode": "04"
  }, {
    "name": "Worodougou",
    "shortCode": "14"
  }, {
    "name": "Zanzan",
    "shortCode": "08"
  }]
}, {
  "countryname": "Croatia",
  "countryShortCode": "HR",
  "regions": [{
    "name": "Bjelovarsko-Bilogorska ??upanija",
    "shortCode": "07"
  }, {
    "name": "Brodsko-Posavska ??upanija",
    "shortCode": "12"
  }, {
    "name": "Dubrova??ko-Neretvanska ??upanija",
    "shortCode": "19"
  }, {
    "name": "Grad Zagreb",
    "shortCode": "21"
  }, {
    "name": "Istarska ??upanija",
    "shortCode": "18"
  }, {
    "name": "Karlova??ka ??upanija",
    "shortCode": "04"
  }, {
    "name": "Koprivni??ko-Krizeva??ka ??upanija",
    "shortCode": "06"
  }, {
    "name": "Krapinsko-Zagorska ??upanija",
    "shortCode": "02"
  }, {
    "name": "Li??ko-Senjska ??upanija",
    "shortCode": "09"
  }, {
    "name": "Me??imurska ??upanija",
    "shortCode": "20"
  }, {
    "name": "Osje??ko-Baranjska ??upanija",
    "shortCode": "14"
  }, {
    "name": "Po??e??ko-Slavonska ??upanija",
    "shortCode": "11"
  }, {
    "name": "Primorsko-Goranska ??upanija",
    "shortCode": "08"
  }, {
    "name": "Sisa??ko-Moslava??ka ??upanija",
    "shortCode": "03"
  }, {
    "name": "Splitsko-Dalmatinska ??upanija",
    "shortCode": "17"
  }, {
    "name": "Sibensko-Kninska ??upanija",
    "shortCode": "15"
  }, {
    "name": "Vara??dinska ??upanija",
    "shortCode": "05"
  }, {
    "name": "Viroviti??ko-Podravska ??upanija",
    "shortCode": "10"
  }, {
    "name": "Vukovarsko-Srijemska ??upanija",
    "shortCode": "16"
  }, {
    "name": "Zadarska ??upanija",
    "shortCode": "13"
  }, {
    "name": "Zagrebacka Zupanija",
    "shortCode": "01"
  }]
}, {
  "countryname": "Cuba",
  "countryShortCode": "CU",
  "regions": [{
    "name": "Artemisa",
    "shortCode": "15"
  }, {
    "name": "Camag??ey",
    "shortCode": "09"
  }, {
    "name": "Ciego de ??vila",
    "shortCode": "08"
  }, {
    "name": "Cienfuegos",
    "shortCode": "06"
  }, {
    "name": "Granma",
    "shortCode": "12"
  }, {
    "name": "Guant??namo",
    "shortCode": "14"
  }, {
    "name": "Holgu??n",
    "shortCode": "11"
  }, {
    "name": "Isla de la Juventud",
    "shortCode": "99"
  }, {
    "name": "La Habana",
    "shortCode": "03"
  }, {
    "name": "Las Tunas",
    "shortCode": "10"
  }, {
    "name": "Matanzas",
    "shortCode": "04"
  }, {
    "name": "Mayabeque",
    "shortCode": "16"
  }, {
    "name": "Pinar del R??o",
    "shortCode": "01"
  }, {
    "name": "Sancti Sp??ritus",
    "shortCode": "07"
  }, {
    "name": "Santiago de Cuba",
    "shortCode": "13"
  }, {
    "name": "Villa Clara",
    "shortCode": "05"
  }]
}, {
  "countryname": "Cura??ao",
  "countryShortCode": "CW",
  "regions": [{
    "name": "Cura??ao",
    "shortCode": "CW"
  }]
}, {
  "countryname": "Cyprus",
  "countryShortCode": "CY",
  "regions": [{
    "name": "Ammochostos",
    "shortCode": "04"
  }, {
    "name": "Keryneia",
    "shortCode": "05"
  }, {
    "name": "Larnaka",
    "shortCode": "03"
  }, {
    "name": "Lefkosia",
    "shortCode": "01"
  }, {
    "name": "Lemesos",
    "shortCode": "02"
  }, {
    "name": "Pafos",
    "shortCode": "05"
  }]
}, {
  "countryname": "Czech Republic",
  "countryShortCode": "CZ",
  "regions": [{
    "name": "Hlavn?? m??sto Praha",
    "shortCode": "PR"
  }, {
    "name": "Jiho??esk?? kraj",
    "shortCode": "JC"
  }, {
    "name": "Jihomoravsk?? kraj",
    "shortCode": "JM"
  }, {
    "name": "Karlovarsk?? kraj",
    "shortCode": "KA"
  }, {
    "name": "Kr??lov??hradeck?? kraj",
    "shortCode": "KR"
  }, {
    "name": "Libereck?? kraj",
    "shortCode": "LI"
  }, {
    "name": "Moravskoslezsk?? kraj",
    "shortCode": "MO"
  }, {
    "name": "Olomouck?? kraj",
    "shortCode": "OL"
  }, {
    "name": "Pardubick?? kraj",
    "shortCode": "PA"
  }, {
    "name": "Plze??sk?? kraj",
    "shortCode": "PL"
  }, {
    "name": "St??edo??esk?? kraj",
    "shortCode": "ST"
  }, {
    "name": "??steck?? kraj",
    "shortCode": "US"
  }, {
    "name": "Vyso??ina",
    "shortCode": "VY"
  }, {
    "name": "Zl??nsk?? kraj",
    "shortCode": "ZL"
  }]
}, {
  "countryname": "Denmark",
  "countryShortCode": "DK",
  "regions": [{
    "name": "Hovedstaden",
    "shortCode": "84"
  }, {
    "name": "Kujalleq",
    "shortCode": "GL-KU"
  }, {
    "name": "Midtjylland",
    "shortCode": "82"
  }, {
    "name": "Norder??erne",
    "shortCode": "FO-01"
  }, {
    "name": "Nordjylland",
    "shortCode": "81"
  }, {
    "name": "??ster??",
    "shortCode": "FO-06"
  }, {
    "name": "Qaasuitsup",
    "shortCode": "GL-QA"
  }, {
    "name": "Qeqqata",
    "shortCode": "GL-QE"
  }, {
    "name": "Sand??",
    "shortCode": "FO-02"
  }, {
    "name": "Sermersooq",
    "shortCode": "GL-SM"
  }, {
    "name": "Sj??lland",
    "shortCode": "85"
  }, {
    "name": "Str??m??",
    "shortCode": "FO-03"
  }, {
    "name": "Suder??",
    "shortCode": "FO-04"
  }, {
    "name": "Syddanmark",
    "shortCode": "83"
  }, {
    "name": "V??g??",
    "shortCode": "FO-05"
  }]
}, {
  "countryname": "Djibouti",
  "countryShortCode": "DJ",
  "regions": [{
    "name": "Ali Sabieh",
    "shortCode": "AS"
  }, {
    "name": "Arta",
    "shortCode": "AR"
  }, {
    "name": "Dikhil",
    "shortCode": "DI"
  }, {
    "name": "Obock",
    "shortCode": "OB"
  }, {
    "name": "Tadjourah",
    "shortCode": "TA"
  }]
}, {
  "countryname": "Dominica",
  "countryShortCode": "DM",
  "regions": [{
    "name": "Saint Andrew Parish",
    "shortCode": "02"
  }, {
    "name": "Saint David Parish",
    "shortCode": "03"
  }, {
    "name": "Saint George Parish",
    "shortCode": "04"
  }, {
    "name": "Saint John Parish",
    "shortCode": "05"
  }, {
    "name": "Saint Joseph Parish",
    "shortCode": "06"
  }, {
    "name": "Saint Luke Parish",
    "shortCode": "07"
  }, {
    "name": "Saint Mark Parish",
    "shortCode": "08"
  }, {
    "name": "Saint Patrick Parish",
    "shortCode": "09"
  }, {
    "name": "Saint Paul Parish",
    "shortCode": "10"
  }, {
    "name": "Saint Peter Parish",
    "shortCode": "11"
  }]
}, {
  "countryname": "Dominican Republic",
  "countryShortCode": "DO",
  "regions": [{
    "name": "Cibao Central",
    "shortCode": "02"
  }, {
    "name": "Del Valle",
    "shortCode": "37"
  }, {
    "name": "Distrito Nacional",
    "shortCode": "01"
  }, {
    "name": "Enriquillo",
    "shortCode": "38"
  }, {
    "name": "Norcentral",
    "shortCode": "04"
  }, {
    "name": "Nordeste",
    "shortCode": "34"
  }, {
    "name": "Noroeste",
    "shortCode": "34"
  }, {
    "name": "Norte",
    "shortCode": "35"
  }, {
    "name": "Valdesia",
    "shortCode": "42"
  }]
}, {
  "countryname": "Ecuador",
  "countryShortCode": "EC",
  "regions": [{
    "name": "Azuay",
    "shortCode": "A"
  }, {
    "name": "Bol??var",
    "shortCode": "B"
  }, {
    "name": "Ca??ar",
    "shortCode": "F"
  }, {
    "name": "Carchi",
    "shortCode": "C"
  }, {
    "name": "Chimborazo",
    "shortCode": "H"
  }, {
    "name": "Cotopaxi",
    "shortCode": "X"
  }, {
    "name": "El Oro",
    "shortCode": "O"
  }, {
    "name": "Esmeraldas",
    "shortCode": "E"
  }, {
    "name": "Gal??pagos",
    "shortCode": "W"
  }, {
    "name": "Guayas",
    "shortCode": "G"
  }, {
    "name": "Imbabura",
    "shortCode": "I"
  }, {
    "name": "Loja",
    "shortCode": "L"
  }, {
    "name": "Los R??os",
    "shortCode": "R"
  }, {
    "name": "Manab??",
    "shortCode": "M"
  }, {
    "name": "Morona-Santiago",
    "shortCode": "S"
  }, {
    "name": "Napo",
    "shortCode": "N"
  }, {
    "name": "Orellana",
    "shortCode": "D"
  }, {
    "name": "Pastaza",
    "shortCode": "Y"
  }, {
    "name": "Pichincha",
    "shortCode": "P"
  }, {
    "name": "Santa Elena",
    "shortCode": "SE"
  }, {
    "name": "Santo Domingo de los Ts??chilas",
    "shortCode": "SD"
  }, {
    "name": "Sucumb??os",
    "shortCode": "U"
  }, {
    "name": "Tungurahua",
    "shortCode": "T"
  }, {
    "name": "Zamora-Chinchipe",
    "shortCode": "Z"
  }]
}, {
  "countryname": "Egypt",
  "countryShortCode": "EG",
  "regions": [{
    "name": "Alexandria",
    "shortCode": "ALX"
  }, {
    "name": "Aswan",
    "shortCode": "ASN"
  }, {
    "name": "Asyout",
    "shortCode": "AST"
  }, {
    "name": "Bani Sueif",
    "shortCode": "BNS"
  }, {
    "name": "Beheira",
    "shortCode": "BH"
  }, {
    "name": "Cairo",
    "shortCode": "C"
  }, {
    "name": "Daqahlia",
    "shortCode": "DK"
  }, {
    "name": "Dumiat",
    "shortCode": "DT"
  }, {
    "name": "El Bahr El Ahmar",
    "shortCode": "BA"
  }, {
    "name": "El Ismailia",
    "shortCode": "IS"
  }, {
    "name": "El Suez",
    "shortCode": "SUZ"
  }, {
    "name": "El Wadi El Gedeed",
    "shortCode": "WAD"
  }, {
    "name": "Fayoum",
    "shortCode": "FYM"
  }, {
    "name": "Gharbia",
    "shortCode": "GH"
  }, {
    "name": "Giza",
    "shortCode": "SUZ"
  }, {
    "name": "Helwan",
    "shortCode": "HU"
  }, {
    "name": "Kafr El Sheikh",
    "shortCode": "KFS"
  }, {
    "name": "Luxor",
    "shortCode": "LX"
  }, {
    "name": "Matrouh",
    "shortCode": "MT"
  }, {
    "name": "Menia",
    "shortCode": "MN"
  }, {
    "name": "Menofia",
    "shortCode": "MNF"
  }, {
    "name": "North Sinai",
    "shortCode": "SIN"
  }, {
    "name": "Port Said",
    "shortCode": "PTS"
  }, {
    "name": "Qalubia",
    "shortCode": "KB"
  }, {
    "name": "Qena",
    "shortCode": "KN"
  }, {
    "name": "Sharqia",
    "shortCode": "SHR"
  }, {
    "name": "Sixth of October",
    "shortCode": "SU"
  }, {
    "name": "Sohag",
    "shortCode": "SHG"
  }, {
    "name": "South Sinai",
    "shortCode": "JS"
  }]
}, {
  "countryname": "El Salvador",
  "countryShortCode": "SV",
  "regions": [{
    "name": "Ahuachap??n",
    "shortCode": "AH"
  }, {
    "name": "Caba??as",
    "shortCode": "CA"
  }, {
    "name": "Cuscatl??n",
    "shortCode": "CU"
  }, {
    "name": "Chalatenango",
    "shortCode": "CH"
  }, {
    "name": "La Libertad",
    "shortCode": "LI"
  }, {
    "name": "La Paz",
    "shortCode": "PA"
  }, {
    "name": "La Uni??n",
    "shortCode": "UN"
  }, {
    "name": "Moraz??n",
    "shortCode": "MO"
  }, {
    "name": "San Miguel",
    "shortCode": "SM"
  }, {
    "name": "San Salvador",
    "shortCode": "SS"
  }, {
    "name": "Santa Ana",
    "shortCode": "SA"
  }, {
    "name": "San Vicente",
    "shortCode": "SV"
  }, {
    "name": "Sonsonate",
    "shortCode": "SO"
  }, {
    "name": "Usulut??n",
    "shortCode": "US"
  }]
}, {
  "countryname": "Equatorial Guinea",
  "countryShortCode": "GQ",
  "regions": [{
    "name": "Annob??n",
    "shortCode": "AN"
  }, {
    "name": "Bioko Norte",
    "shortCode": "BN"
  }, {
    "name": "Bioko Sur",
    "shortCode": "BS"
  }, {
    "name": "Centro Sur",
    "shortCode": "CS"
  }, {
    "name": "Ki??-Ntem",
    "shortCode": "KN"
  }, {
    "name": "Litoral",
    "shortCode": "LI"
  }, {
    "name": "Wele-Nzas",
    "shortCode": "WN"
  }]
}, {
  "countryname": "Eritrea",
  "countryShortCode": "ER",
  "regions": [{
    "name": "Anseba",
    "shortCode": "AN"
  }, {
    "name": "Debub",
    "shortCode": "DU"
  }, {
    "name": "Debub-Keih-Bahri",
    "shortCode": "DK"
  }, {
    "name": "Gash-Barka",
    "shortCode": "GB"
  }, {
    "name": "Maekel",
    "shortCode": "MA"
  }, {
    "name": "Semien-Keih-Bahri",
    "shortCode": "SK"
  }]
}, {
  "countryname": "Estonia",
  "countryShortCode": "EE",
  "regions": [{
    "name": "Harjumaa (Tallinn)",
    "shortCode": "37"
  }, {
    "name": "Hiiumaa (Kardla)",
    "shortCode": "39"
  }, {
    "name": "Ida-Virumaa (Johvi)",
    "shortCode": "44"
  }, {
    "name": "J??rvamaa (Paide)",
    "shortCode": "41"
  }, {
    "name": "J??gevamaa (Jogeva)",
    "shortCode": "49"
  }, {
    "name": "L????nemaa",
    "shortCode": "57"
  }, {
    "name": "L????ne-Virumaa (Rakvere)",
    "shortCode": "59"
  }, {
    "name": "P??rnumaa (Parnu)",
    "shortCode": "67"
  }, {
    "name": "P??lvamaa (Polva)",
    "shortCode": "65"
  }, {
    "name": "Raplamaa (Rapla)",
    "shortCode": "70"
  }, {
    "name": "Saaremaa (Kuessaare)",
    "shortCode": "74"
  }, {
    "name": "Tartumaa (Tartu)",
    "shortCode": "78"
  }, {
    "name": "Valgamaa (Valga)",
    "shortCode": "82"
  }, {
    "name": "Viljandimaa (Viljandi)",
    "shortCode": "84"
  }, {
    "name": "V??rumaa (Voru)",
    "shortCode": "86"
  }]
}, {
  "countryname": "Ethiopia",
  "countryShortCode": "ET",
  "regions": [{
    "name": "Addis Ababa",
    "shortCode": "AA"
  }, {
    "name": "Afar",
    "shortCode": "AF"
  }, {
    "name": "Amhara",
    "shortCode": "AM"
  }, {
    "name": "Benshangul-Gumaz",
    "shortCode": "BE"
  }, {
    "name": "Dire Dawa",
    "shortCode": "DD"
  }, {
    "name": "Gambela",
    "shortCode": "GA"
  }, {
    "name": "Harari",
    "shortCode": "HA"
  }, {
    "name": "Oromia",
    "shortCode": "OR"
  }, {
    "name": "Somali",
    "shortCode": "SO"
  }, {
    "name": "Southern Nations Nationalities and People's Region",
    "shortCode": "SN"
  }, {
    "name": "Tigray",
    "shortCode": "TI"
  }]
}, {
  "countryname": "Falkland Islands (Islas Malvinas)",
  "countryShortCode": "FK",
  "regions": [{
    "name": "Falkland Islands (Islas Malvinas)"
  }]
}, {
  "countryname": "Faroe Islands",
  "countryShortCode": "FO",
  "regions": [{
    "name": "Bordoy"
  }, {
    "name": "Eysturoy"
  }, {
    "name": "Mykines"
  }, {
    "name": "Sandoy"
  }, {
    "name": "Skuvoy"
  }, {
    "name": "Streymoy"
  }, {
    "name": "Suduroy"
  }, {
    "name": "Tvoroyri"
  }, {
    "name": "Vagar"
  }]
}, {
  "countryname": "Fiji",
  "countryShortCode": "FJ",
  "regions": [{
    "name": "Ba",
    "shortCode": "01"
  }, {
    "name": "Bua",
    "shortCode": "01"
  }, {
    "name": "Cakaudrove",
    "shortCode": "03"
  }, {
    "name": "Kadavu",
    "shortCode": "04"
  }, {
    "name": "Lau",
    "shortCode": "05"
  }, {
    "name": "Lomaiviti",
    "shortCode": "06"
  }, {
    "name": "Macuata",
    "shortCode": "07"
  }, {
    "name": "Nadroga and Navosa",
    "shortCode": "08"
  }, {
    "name": "Naitasiri",
    "shortCode": "09"
  }, {
    "name": "Namosi",
    "shortCode": "10"
  }, {
    "name": "Ra",
    "shortCode": "011"
  }, {
    "name": "Rewa",
    "shortCode": "12"
  }, {
    "name": "Rotuma",
    "shortCode": "R"
  }, {
    "name": "Serua",
    "shortCode": "12"
  }, {
    "name": "Tailevu",
    "shortCode": "14"
  }]
}, {
  "countryname": "Finland",
  "countryShortCode": "FI",
  "regions": [{
    "name": "Ahvenanmaan l????ni",
    "shortCode": "AL"
  }, {
    "name": "Etel??-Suomen l????ni",
    "shortCode": "ES"
  }, {
    "name": "It??-Suomen l????ni",
    "shortCode": "IS"
  }, {
    "name": "L??nsi-Suomen l????ni",
    "shortCode": "LS"
  }, {
    "name": "Lapin l????ni",
    "shortCode": "LL"
  }, {
    "name": "Oulun l????ni",
    "shortCode": "OL"
  }]
}, {
  "countryname": "France",
  "countryShortCode": "FR",
  "regions": [{
    "name": "Auvergne-Rh??ne-Alpes",
    "shortCode": "ARA"
  }, {
    "name": "Bourgogne-Franche-Comt??",
    "shortCode": "BFC"
  }, {
    "name": "Bretagne",
    "shortCode": "BRE"
  }, {
    "name": "Centre-Val de Loire",
    "shortCode": "CVL"
  }, {
    "name": "Corse",
    "shortCode": "COR"
  }, {
    "name": "Grand Est",
    "shortCode": "GES"
  }, {
    "name": "Hauts-de-France",
    "shortCode": "HDF"
  }, {
    "name": "??le-de-France",
    "shortCode": "IDF"
  }, {
    "name": "Normandie",
    "shortCode": "NOR"
  }, {
    "name": "Nouvelle-Aquitaine",
    "shortCode": "NAQ"
  }, {
    "name": "Occitanie",
    "shortCode": "OCC"
  }, {
    "name": "Pays de la Loire",
    "shortCode": "PDL"
  }, {
    "name": "Provence-Alpes-Cote d'Azur",
    "shortCode": "PAC"
  }, {
    "name": "Clipperton",
    "shortCode": "CP"
  }, {
    "name": "Guadeloupe",
    "shortCode": "GP"
  }, {
    "name": "Guyane",
    "shortCode": "GF"
  }, {
    "name": "Martinique",
    "shortCode": "MQ"
  }, {
    "name": "Mayotte",
    "shortCode": "YT"
  }, {
    "name": "Novelle-Cal??donie",
    "shortCode": "NC"
  }, {
    "name": "Polyn??sie",
    "shortCode": "PF"
  }, {
    "name": "Saint-Pierre-et-Miquelon",
    "shortCode": "PM"
  }, {
    "name": "Saint Barth??lemy",
    "shortCode": "BL"
  }, {
    "name": "Saint Martin",
    "shortCode": "MF"
  }, {
    "name": "R??union",
    "shortCode": "RE"
  }, {
    "name": "Terres Australes Fran??aises",
    "shortCode": "TF"
  }, {
    "name": "Wallis-et-Futuna",
    "shortCode": "WF"
  }]
}, {
  "countryname": "French Guiana",
  "countryShortCode": "GF",
  "regions": [{
    "name": "French Guiana"
  }]
}, {
  "countryname": "French Polynesia",
  "countryShortCode": "PF",
  "regions": [{
    "name": "Archipel des Marquises"
  }, {
    "name": "Archipel des Tuamotu"
  }, {
    "name": "Archipel des Tubuai"
  }, {
    "name": "Iles du Vent"
  }, {
    "name": "Iles Sous-le-Vent"
  }]
}, {
  "countryname": "French Southern and Antarctic Lands",
  "countryShortCode": "TF",
  "regions": [{
    "name": "Adelie Land"
  }, {
    "name": "Ile Crozet"
  }, {
    "name": "Iles Kerguelen"
  }, {
    "name": "Iles Saint-Paul et Amsterdam"
  }]
}, {
  "countryname": "Gabon",
  "countryShortCode": "GA",
  "regions": [{
    "name": "Estuaire",
    "shortCode": "1"
  }, {
    "name": "Haut-Ogoou??",
    "shortCode": "2"
  }, {
    "name": "Moyen-Ogoou??",
    "shortCode": "3"
  }, {
    "name": "Ngouni??",
    "shortCode": "4"
  }, {
    "name": "Nyanga",
    "shortCode": "5"
  }, {
    "name": "Ogoou??-Ivindo",
    "shortCode": "6"
  }, {
    "name": "Ogoou??-Lolo",
    "shortCode": "7"
  }, {
    "name": "Ogoou??-Maritime",
    "shortCode": "8"
  }, {
    "name": "Woleu-Ntem",
    "shortCode": "9"
  }]
}, {
  "countryname": "Gambia, The",
  "countryShortCode": "GM",
  "regions": [{
    "name": "Banjul",
    "shortCode": "B"
  }, {
    "name": "Central River",
    "shortCode": "M"
  }, {
    "name": "Lower River",
    "shortCode": "L"
  }, {
    "name": "North Bank",
    "shortCode": "N"
  }, {
    "name": "Upper River",
    "shortCode": "U"
  }, {
    "name": "Western",
    "shortCode": "W"
  }]
}, {
  "countryname": "Georgia",
  "countryShortCode": "GE",
  "regions": [{
    "name": "Abkhazia (Sokhumi)",
    "shortCode": "AB"
  }, {
    "name": "Ajaria (Bat'umi)",
    "shortCode": "AJ"
  }, {
    "name": "Guria",
    "shortCode": "GU"
  }, {
    "name": "Imereti",
    "shortCode": "IM"
  }, {
    "name": "K'akheti",
    "shortCode": "KA"
  }, {
    "name": "Kvemo Kartli",
    "shortCode": "KK"
  }, {
    "name": "Mtshkheta-Mtianeti",
    "shortCode": "MM"
  }, {
    "name": "Rach'a-Lexhkumi-KvemoSvaneti",
    "shortCode": "RL"
  }, {
    "name": "Samegrelo-Zemo Svaneti",
    "shortCode": "SZ"
  }, {
    "name": "Samtskhe-Javakheti",
    "shortCode": "SJ"
  }, {
    "name": "Shida Kartli",
    "shortCode": "SK"
  }, {
    "name": "Tbilisi",
    "shortCode": "TB"
  }]
}, {
  "countryname": "Germany",
  "countryShortCode": "DE",
  "regions": [{
    "name": "Baden-W??rttemberg",
    "shortCode": "BW"
  }, {
    "name": "Bayern",
    "shortCode": "BY"
  }, {
    "name": "Berlin",
    "shortCode": "BE"
  }, {
    "name": "Brandenburg",
    "shortCode": "BB"
  }, {
    "name": "Bremen",
    "shortCode": "HB"
  }, {
    "name": "Hamburg",
    "shortCode": "HH"
  }, {
    "name": "Hessen",
    "shortCode": "HE"
  }, {
    "name": "Mecklenburg-Vorpommern",
    "shortCode": "MV"
  }, {
    "name": "Niedersachsen",
    "shortCode": "NI"
  }, {
    "name": "Nordrhein-Westfalen",
    "shortCode": "NW"
  }, {
    "name": "Rheinland-Pfalz",
    "shortCode": "RP"
  }, {
    "name": "Saarland",
    "shortCode": "SL"
  }, {
    "name": "Sachsen",
    "shortCode": "SN"
  }, {
    "name": "Sachsen-Anhalt",
    "shortCode": "ST"
  }, {
    "name": "Schleswig-Holstein",
    "shortCode": "SH"
  }, {
    "name": "Th??ringen",
    "shortCode": "TH"
  }]
}, {
  "countryname": "Ghana",
  "countryShortCode": "GH",
  "regions": [{
    "name": "Ahafo"
  }, {
    "name": "Ashanti",
    "shortCode": "AH"
  }, {
    "name": "Bono"
  }, {
    "name": "Bono East"
  }, {
    "name": "Central",
    "shortCode": "CP"
  }, {
    "name": "Eastern",
    "shortCode": "EP"
  }, {
    "name": "Greater Accra",
    "shortCode": "AA"
  }, {
    "name": "Northern",
    "shortCode": "NP"
  }, {
    "name": "North East"
  }, {
    "name": "Oti"
  }, {
    "name": "Savannah"
  }, {
    "name": "Upper East",
    "shortCode": "UE"
  }, {
    "name": "Upper West",
    "shortCode": "UW"
  }, {
    "name": "Volta",
    "shortCode": "TV"
  }, {
    "name": "Western",
    "shortCode": "WP"
  }, {
    "name": "Western North"
  }]
}, {
  "countryname": "Gibraltar",
  "countryShortCode": "GI",
  "regions": [{
    "name": "Gibraltar"
  }]
}, {
  "countryname": "Greece",
  "countryShortCode": "GR",
  "regions": [{
    "name": "Anatolik?? Makedon??a kai Thr??ki",
    "shortCode": "A"
  }, {
    "name": "Attik???",
    "shortCode": "I"
  }, {
    "name": "Dytik?? Ell??da",
    "shortCode": "G"
  }, {
    "name": "Dytik?? Makedon??a",
    "shortCode": "C"
  }, {
    "name": "Ion??a N??sia",
    "shortCode": "F"
  }, {
    "name": "Kentrik?? Makedon??a",
    "shortCode": "B"
  }, {
    "name": "Kr??t??",
    "shortCode": "M"
  }, {
    "name": "Not??o Aiga??o",
    "shortCode": "L"
  }, {
    "name": "Peloponn??sos",
    "shortCode": "J"
  }, {
    "name": "Stere?? Ell??da",
    "shortCode": "H"
  }, {
    "name": "Thessal??a",
    "shortCode": "E"
  }, {
    "name": "Vore??o Aiga??o",
    "shortCode": "K"
  }, {
    "name": "??peiros",
    "shortCode": "D"
  }, {
    "name": "??gion ??ros",
    "shortCode": "69"
  }]
}, {
  "countryname": "Greenland",
  "countryShortCode": "GL",
  "regions": [{
    "name": "Kommune Kujalleq",
    "shortCode": "KU"
  }, {
    "name": "Kommuneqarfik Sermersooq",
    "shortCode": "SM"
  }, {
    "name": "Qaasuitsup Kommunia",
    "shortCode": "QA"
  }, {
    "name": "Qeqqata Kommunia",
    "shortCode": "QE"
  }]
}, {
  "countryname": "Grenada",
  "countryShortCode": "GD",
  "regions": [{
    "name": "Saint Andrew",
    "shortCode": "01"
  }, {
    "name": "Saint David",
    "shortCode": "02"
  }, {
    "name": "Saint George",
    "shortCode": "03"
  }, {
    "name": "Saint John",
    "shortCode": "04"
  }, {
    "name": "Saint Mark",
    "shortCode": "05"
  }, {
    "name": "Saint Patrick",
    "shortCode": "06"
  }, {
    "name": "Southern Grenadine Islands",
    "shortCode": "10"
  }]
}, {
  "countryname": "Guadeloupe",
  "countryShortCode": "GP",
  "regions": [{
    "name": "Guadeloupe"
  }]
}, {
  "countryname": "Guam",
  "countryShortCode": "GU",
  "regions": [{
    "name": "Guam"
  }]
}, {
  "countryname": "Guatemala",
  "countryShortCode": "GT",
  "regions": [{
    "name": "Alta Verapaz",
    "shortCode": "AV"
  }, {
    "name": "Baja Verapaz",
    "shortCode": "BV"
  }, {
    "name": "Chimaltenango",
    "shortCode": "CM"
  }, {
    "name": "Chiquimula",
    "shortCode": "CQ"
  }, {
    "name": "El Progreso",
    "shortCode": "PR"
  }, {
    "name": "Escuintla",
    "shortCode": "ES"
  }, {
    "name": "Guatemala",
    "shortCode": "GU"
  }, {
    "name": "Huehuetenango",
    "shortCode": "HU"
  }, {
    "name": "Izabal",
    "shortCode": "IZ"
  }, {
    "name": "Jalapa",
    "shortCode": "JA"
  }, {
    "name": "Jutiapa",
    "shortCode": "JU"
  }, {
    "name": "Pet??n",
    "shortCode": "PE"
  }, {
    "name": "Quetzaltenango",
    "shortCode": "QZ"
  }, {
    "name": "Quich??",
    "shortCode": "QC"
  }, {
    "name": "Retalhuleu",
    "shortCode": "Re"
  }, {
    "name": "Sacatep??quez",
    "shortCode": "SA"
  }, {
    "name": "San Marcos",
    "shortCode": "SM"
  }, {
    "name": "Santa Rosa",
    "shortCode": "SR"
  }, {
    "name": "Solol??",
    "shortCode": "SO"
  }, {
    "name": "Suchitep??quez",
    "shortCode": "SU"
  }, {
    "name": "Totonicap??n",
    "shortCode": "TO"
  }, {
    "name": "Zacapa",
    "shortCode": "ZA"
  }]
}, {
  "countryname": "Guernsey",
  "countryShortCode": "GG",
  "regions": [{
    "name": "Castel"
  }, {
    "name": "Forest"
  }, {
    "name": "St. Andrew"
  }, {
    "name": "St. Martin"
  }, {
    "name": "St. Peter Port"
  }, {
    "name": "St. Pierre du Bois"
  }, {
    "name": "St. Sampson"
  }, {
    "name": "St. Saviour"
  }, {
    "name": "Torteval"
  }, {
    "name": "Vale"
  }]
}, {
  "countryname": "Guinea",
  "countryShortCode": "GN",
  "regions": [{
    "name": "Bok??",
    "shortCode": "B"
  }, {
    "name": "Conakry",
    "shortCode": "C"
  }, {
    "name": "Faranah",
    "shortCode": "F"
  }, {
    "name": "Kankan",
    "shortCode": "K"
  }, {
    "name": "Kindia",
    "shortCode": "D"
  }, {
    "name": "Lab??",
    "shortCode": "L"
  }, {
    "name": "Mamou",
    "shortCode": "M"
  }, {
    "name": "Nz??r??kor??",
    "shortCode": "N"
  }]
}, {
  "countryname": "Guinea-Bissau",
  "countryShortCode": "GW",
  "regions": [{
    "name": "Bafat??",
    "shortCode": "BA"
  }, {
    "name": "Biombo",
    "shortCode": "BM"
  }, {
    "name": "Bissau",
    "shortCode": "BS"
  }, {
    "name": "Bolama-Bijagos",
    "shortCode": "BL"
  }, {
    "name": "Cacheu",
    "shortCode": "CA"
  }, {
    "name": "Gab??",
    "shortCode": "GA"
  }, {
    "name": "Oio",
    "shortCode": "OI"
  }, {
    "name": "Quinara",
    "shortCode": "QU"
  }, {
    "name": "Tombali",
    "shortCode": "TO"
  }]
}, {
  "countryname": "Guyana",
  "countryShortCode": "GY",
  "regions": [{
    "name": "Barima-Waini",
    "shortCode": "BA"
  }, {
    "name": "Cuyuni-Mazaruni",
    "shortCode": "CU"
  }, {
    "name": "Demerara-Mahaica",
    "shortCode": "DE"
  }, {
    "name": "East Berbice-Corentyne",
    "shortCode": "EB"
  }, {
    "name": "Essequibo Islands-West Demerara",
    "shortCode": "ES"
  }, {
    "name": "Mahaica-Berbice",
    "shortCode": "MA"
  }, {
    "name": "Pomeroon-Supenaam",
    "shortCode": "PM"
  }, {
    "name": "Potaro-Siparuni",
    "shortCode": "PT"
  }, {
    "name": "Upper Demerara-Berbice",
    "shortCode": "UD"
  }, {
    "name": "Upper Takutu-Upper Essequibo",
    "shortCode": "UT"
  }]
}, {
  "countryname": "Haiti",
  "countryShortCode": "HT",
  "regions": [{
    "name": "Artibonite",
    "shortCode": "AR"
  }, {
    "name": "Centre",
    "shortCode": "CE"
  }, {
    "name": "Grand'Anse",
    "shortCode": "GA"
  }, {
    "name": "Nippes",
    "shortCode": "NI"
  }, {
    "name": "Nord",
    "shortCode": "ND"
  }, {
    "name": "Nord-Est",
    "shortCode": "NE"
  }, {
    "name": "Nord-Ouest",
    "shortCode": "NO"
  }, {
    "name": "Ouest",
    "shortCode": "OU"
  }, {
    "name": "Sud",
    "shortCode": "SD"
  }, {
    "name": "Sud-Est",
    "shortCode": "SE"
  }]
}, {
  "countryname": "Heard Island and McDonald Islands",
  "countryShortCode": "HM",
  "regions": [{
    "name": "Heard Island and McDonald Islands"
  }]
}, {
  "countryname": "Holy See (Vatican City)",
  "countryShortCode": "VA",
  "regions": [{
    "name": "Holy See (Vatican City)",
    "shortCode": "01"
  }]
}, {
  "countryname": "Honduras",
  "countryShortCode": "HN",
  "regions": [{
    "name": "Atl??ntida",
    "shortCode": "AT"
  }, {
    "name": "Choluteca",
    "shortCode": "CH"
  }, {
    "name": "Col??n",
    "shortCode": "CL"
  }, {
    "name": "Comayagua",
    "shortCode": "CM"
  }, {
    "name": "Cop??n",
    "shortCode": "CP"
  }, {
    "name": "Cort??s",
    "shortCode": "CR"
  }, {
    "name": "El Para??so",
    "shortCode": "EP"
  }, {
    "name": "Francisco Morazan",
    "shortCode": "FM"
  }, {
    "name": "Gracias a Dios",
    "shortCode": "GD"
  }, {
    "name": "Intibuc??",
    "shortCode": "IN"
  }, {
    "name": "Islas de la Bah??a",
    "shortCode": "IB"
  }, {
    "name": "La Paz",
    "shortCode": "LP"
  }, {
    "name": "Lempira",
    "shortCode": "LE"
  }, {
    "name": "Ocotepeque",
    "shortCode": "OC"
  }, {
    "name": "Olancho",
    "shortCode": "OL"
  }, {
    "name": "Santa B??rbara",
    "shortCode": "SB"
  }, {
    "name": "Valle",
    "shortCode": "VA"
  }, {
    "name": "Yoro",
    "shortCode": "YO"
  }]
}, {
  "countryname": "Hong Kong",
  "countryShortCode": "HK",
  "regions": [{
    "name": "Hong Kong",
    "shortCode": "HK"
  }]
}, {
  "countryname": "Hungary",
  "countryShortCode": "HU",
  "regions": [{
    "name": "B??cs-Kiskun",
    "shortCode": "BK"
  }, {
    "name": "Baranya",
    "shortCode": "BA"
  }, {
    "name": "B??k??s",
    "shortCode": "BE"
  }, {
    "name": "B??k??scsaba",
    "shortCode": "BC"
  }, {
    "name": "Borsod-Abauj-Zemplen",
    "shortCode": "BZ"
  }, {
    "name": "Budapest",
    "shortCode": "BU"
  }, {
    "name": "Csongr??d",
    "shortCode": "CS"
  }, {
    "name": "Debrecen",
    "shortCode": "DE"
  }, {
    "name": "Duna??jv??ros",
    "shortCode": "DU"
  }, {
    "name": "Eger",
    "shortCode": "EG"
  }, {
    "name": "??rd",
    "shortCode": "ER"
  }, {
    "name": "Fej??r",
    "shortCode": "FE"
  }, {
    "name": "Gy??r",
    "shortCode": "GY"
  }, {
    "name": "Gy??r-Moson-Sopron",
    "shortCode": "GS"
  }, {
    "name": "Hajd??-Bihar",
    "shortCode": "HB"
  }, {
    "name": "Heves",
    "shortCode": "HE"
  }, {
    "name": "H??dmez??v??s??rhely",
    "shortCode": "HV"
  }, {
    "name": "J??sz-Nagykun-Szolnok",
    "shortCode": "N"
  }, {
    "name": "Kaposv??r",
    "shortCode": "KV"
  }, {
    "name": "Kecskem??t",
    "shortCode": "KM"
  }, {
    "name": "Kom??rom-Esztergom",
    "shortCode": "KE"
  }, {
    "name": "Miskolc",
    "shortCode": "MI"
  }, {
    "name": "Nagykanizsa",
    "shortCode": "NK"
  }, {
    "name": "N??gr??d",
    "shortCode": "NO"
  }, {
    "name": "Ny??regyh??za",
    "shortCode": "NY"
  }, {
    "name": "P??cs",
    "shortCode": "PS"
  }, {
    "name": "Pest",
    "shortCode": "PE"
  }, {
    "name": "Salg??tarj??n",
    "shortCode": "ST"
  }, {
    "name": "Somogy",
    "shortCode": "SO"
  }, {
    "name": "Sopron",
    "shortCode": "SN"
  }, {
    "name": "Szabolcs-??-Bereg",
    "shortCode": "SZ"
  }, {
    "name": "Szeged",
    "shortCode": "SD"
  }, {
    "name": "Sz??kesfeh??rv??r",
    "shortCode": "SF"
  }, {
    "name": "Szeksz??rd",
    "shortCode": "SS"
  }, {
    "name": "Szolnok",
    "shortCode": "SK"
  }, {
    "name": "Szombathely",
    "shortCode": "SH"
  }, {
    "name": "Tatab??nya",
    "shortCode": "TB"
  }, {
    "name": "Tolna",
    "shortCode": "TO"
  }, {
    "name": "Vas",
    "shortCode": "VA"
  }, {
    "name": "Veszpr??m",
    "shortCode": "VE"
  }, {
    "name": "Veszpr??m (City)",
    "shortCode": "VM"
  }, {
    "name": "Zala",
    "shortCode": "ZA"
  }, {
    "name": "Zalaegerszeg",
    "shortCode": "ZE"
  }]
}, {
  "countryname": "Iceland",
  "countryShortCode": "IS",
  "regions": [{
    "name": "Austurland",
    "shortCode": "7"
  }, {
    "name": "H??fu??borgarsv????i utan Reykjav??kur",
    "shortCode": "1"
  }, {
    "name": "Nor??urland eystra",
    "shortCode": "6"
  }, {
    "name": "Nor??urland vestra",
    "shortCode": "5"
  }, {
    "name": "Su??urland",
    "shortCode": "8"
  }, {
    "name": "Su??urnes",
    "shortCode": "2"
  }, {
    "name": "Vestfir??ir",
    "shortCode": "4"
  }, {
    "name": "Vesturland",
    "shortCode": "3"
  }]
}, {
  "countryname": "India",
  "countryShortCode": "IN",
  "regions": [{
    "name": "Andaman and Nicobar Islands",
    "shortCode": "AN"
  }, {
    "name": "Andhra Pradesh",
    "shortCode": "AP"
  }, {
    "name": "Arunachal Pradesh",
    "shortCode": "AR"
  }, {
    "name": "Assam",
    "shortCode": "AS"
  }, {
    "name": "Bihar",
    "shortCode": "BR"
  }, {
    "name": "Chandigarh",
    "shortCode": "CH"
  }, {
    "name": "Chhattisgarh",
    "shortCode": "CT"
  }, {
    "name": "Dadra and Nagar Haveli",
    "shortCode": "DN"
  }, {
    "name": "Daman and Diu",
    "shortCode": "DD"
  }, {
    "name": "Delhi",
    "shortCode": "DL"
  }, {
    "name": "Goa",
    "shortCode": "GA"
  }, {
    "name": "Gujarat",
    "shortCode": "GJ"
  }, {
    "name": "Haryana",
    "shortCode": "HR"
  }, {
    "name": "Himachal Pradesh",
    "shortCode": "HP"
  }, {
    "name": "Jammu and Kashmir",
    "shortCode": "JK"
  }, {
    "name": "Jharkhand",
    "shortCode": "JH"
  }, {
    "name": "Karnataka",
    "shortCode": "KA"
  }, {
    "name": "Kerala",
    "shortCode": "KL"
  }, {
    "name": 'Ladakh',
    "shortCode": "LA"
  }, {
    "name": "Lakshadweep",
    "shortCode": "LD"
  }, {
    "name": "Madhya Pradesh",
    "shortCode": "MP"
  }, {
    "name": "Maharashtra",
    "shortCode": "MH"
  }, {
    "name": "Manipur",
    "shortCode": "MN"
  }, {
    "name": "Meghalaya",
    "shortCode": "ML"
  }, {
    "name": "Mizoram",
    "shortCode": "MZ"
  }, {
    "name": "Nagaland",
    "shortCode": "NL"
  }, {
    "name": "Odisha",
    "shortCode": "OR"
  }, {
    "name": "Puducherry",
    "shortCode": "PY"
  }, {
    "name": "Punjab",
    "shortCode": "PB"
  }, {
    "name": "Rajasthan",
    "shortCode": "RJ"
  }, {
    "name": "Sikkim",
    "shortCode": "WK"
  }, {
    "name": "Tamil Nadu",
    "shortCode": "TN"
  }, {
    "name": "Telangana",
    "shortCode": "TG"
  }, {
    "name": "Tripura",
    "shortCode": "TR"
  }, {
    "name": "Uttarakhand",
    "shortCode": "UT"
  }, {
    "name": "Uttar Pradesh",
    "shortCode": "UP"
  }, {
    "name": "West Bengal",
    "shortCode": "WB"
  }]
}, {
  "countryname": "Indonesia",
  "countryShortCode": "ID",
  "regions": [{
    "name": "Aceh",
    "shortCode": "AC"
  }, {
    "name": "Bali",
    "shortCode": "BA"
  }, {
    "name": "Bangka Belitung",
    "shortCode": "BB"
  }, {
    "name": "Banten",
    "shortCode": "BT"
  }, {
    "name": "Bengkulu",
    "shortCode": "BE"
  }, {
    "name": "Gorontalo",
    "shortCode": "GO"
  }, {
    "name": "Jakarta Raya",
    "shortCode": "JK"
  }, {
    "name": "Jambi",
    "shortCode": "JA"
  }, {
    "name": "Jawa Barat",
    "shortCode": "JB"
  }, {
    "name": "Jawa Tengah",
    "shortCode": "JT"
  }, {
    "name": "Jawa Timur",
    "shortCode": "JI"
  }, {
    "name": "Kalimantan Barat",
    "shortCode": "KB"
  }, {
    "name": "Kalimantan Selatan",
    "shortCode": "KS"
  }, {
    "name": "Kalimantan Tengah",
    "shortCode": "KT"
  }, {
    "name": "Kalimantan Timur",
    "shortCode": "KI"
  }, {
    "name": "Kalimantan Utara",
    "shortCode": "KU"
  }, {
    "name": "Kepulauan Riau",
    "shortCode": "KR"
  }, {
    "name": "Lampung",
    "shortCode": "LA"
  }, {
    "name": "Maluku",
    "shortCode": "MA"
  }, {
    "name": "Maluku Utara",
    "shortCode": "MU"
  }, {
    "name": "Nusa Tenggara Barat",
    "shortCode": "NB"
  }, {
    "name": "Nusa Tenggara Timur",
    "shortCode": "NT"
  }, {
    "name": "Papua",
    "shortCode": "PA"
  }, {
    "name": "Papua Barat",
    "shortCode": "PB"
  }, {
    "name": "Riau",
    "shortCode": "RI"
  }, {
    "name": "Sulawesi Selatan",
    "shortCode": "SR"
  }, {
    "name": "Sulawesi Tengah",
    "shortCode": "ST"
  }, {
    "name": "Sulawesi Tenggara",
    "shortCode": "SG"
  }, {
    "name": "Sulawesi Utara",
    "shortCode": "SA"
  }, {
    "name": "Sumatera Barat",
    "shortCode": "SB"
  }, {
    "name": "Sumatera Selatan",
    "shortCode": "SS"
  }, {
    "name": "Sumatera Utara",
    "shortCode": "SU"
  }, {
    "name": "Yogyakarta",
    "shortCode": "YO"
  }]
}, {
  "countryname": "Iran, Islamic Republic of",
  "countryShortCode": "IR",
  "regions": [{
    "name": "Alborz",
    "shortCode": "32"
  }, {
    "name": "Ardab??l",
    "shortCode": "03"
  }, {
    "name": "??z??arb??yj??n-e Gharb??",
    "shortCode": "02"
  }, {
    "name": "??z??arb??yj??n-e Sharq??",
    "shortCode": "01"
  }, {
    "name": "B??shehr",
    "shortCode": "06"
  }, {
    "name": "Chah??r Ma?????l va Bakht????r??",
    "shortCode": "08"
  }, {
    "name": "E??fah??n",
    "shortCode": "04"
  }, {
    "name": "F??rs",
    "shortCode": "14"
  }, {
    "name": "G??l??n",
    "shortCode": "19"
  }, {
    "name": "Golest??n",
    "shortCode": "27"
  }, {
    "name": "Hamad??n",
    "shortCode": "24"
  }, {
    "name": "Hormozg??n",
    "shortCode": "23"
  }, {
    "name": "??l??m",
    "shortCode": "05"
  }, {
    "name": "Kerm??n",
    "shortCode": "15"
  }, {
    "name": "Kerm??nsh??h",
    "shortCode": "17"
  }, {
    "name": "Khor??s??n-e Jon??b??",
    "shortCode": "29"
  }, {
    "name": "Khor??s??n-e Ra???av??",
    "shortCode": "30"
  }, {
    "name": "Khor??s??n-e Shom??l??",
    "shortCode": "61"
  }, {
    "name": "Kh??zest??n",
    "shortCode": "10"
  }, {
    "name": "Kohg??l??yeh va Bowyer A???mad",
    "shortCode": "18"
  }, {
    "name": "Kordest??n",
    "shortCode": "16"
  }, {
    "name": "Lorest??n",
    "shortCode": "20"
  }, {
    "name": "Markazi",
    "shortCode": "22"
  }, {
    "name": "M??zandar??n",
    "shortCode": "21"
  }, {
    "name": "Qazv??n",
    "shortCode": "28"
  }, {
    "name": "Qom",
    "shortCode": "26"
  }, {
    "name": "Semn??n",
    "shortCode": "12"
  }, {
    "name": "S??st??n va Bal??chest??n",
    "shortCode": "13"
  }, {
    "name": "Tehr??n",
    "shortCode": "07"
  }, {
    "name": "Yazd",
    "shortCode": "25"
  }, {
    "name": "Zanj??n",
    "shortCode": "11"
  }]
}, {
  "countryname": "Iraq",
  "countryShortCode": "IQ",
  "regions": [{
    "name": "Al Anb??r",
    "shortCode": "AN"
  }, {
    "name": "Al Ba??rah",
    "shortCode": "BA"
  }, {
    "name": "Al Muthann??",
    "shortCode": "MU"
  }, {
    "name": "Al Q??dis??yah",
    "shortCode": "QA"
  }, {
    "name": "An Najaf",
    "shortCode": "NA"
  }, {
    "name": "Arb??l",
    "shortCode": "AR"
  }, {
    "name": "As Sulaym??n??yah",
    "shortCode": "SU"
  }, {
    "name": "B??bil",
    "shortCode": "BB"
  }, {
    "name": "Baghd??d",
    "shortCode": "BG"
  }, {
    "name": "Dohuk",
    "shortCode": "DA"
  }, {
    "name": "Dh?? Q??r",
    "shortCode": "DQ"
  }, {
    "name": "Diy??l??",
    "shortCode": "DI"
  }, {
    "name": "Karbal??'",
    "shortCode": "KA"
  }, {
    "name": "Kirkuk",
    "shortCode": "KI"
  }, {
    "name": "Mays??n",
    "shortCode": "MA"
  }, {
    "name": "N??naw??",
    "shortCode": "NI"
  }, {
    "name": "??al????? ad D??n",
    "shortCode": "SD"
  }, {
    "name": "W??si??",
    "shortCode": "WA"
  }]
}, {
  "countryname": "Ireland",
  "countryShortCode": "IE",
  "regions": [{
    "name": "Carlow",
    "shortCode": "CW"
  }, {
    "name": "Cavan",
    "shortCode": "CN"
  }, {
    "name": "Clare",
    "shortCode": "CE"
  }, {
    "name": "Cork",
    "shortCode": "CO"
  }, {
    "name": "Donegal",
    "shortCode": "DL"
  }, {
    "name": "Dublin",
    "shortCode": "D"
  }, {
    "name": "Galway",
    "shortCode": "G"
  }, {
    "name": "Kerry",
    "shortCode": "KY"
  }, {
    "name": "Kildare",
    "shortCode": "KE"
  }, {
    "name": "Kilkenny",
    "shortCode": "KK"
  }, {
    "name": "Laois",
    "shortCode": "LS"
  }, {
    "name": "Leitrim",
    "shortCode": "LM"
  }, {
    "name": "Limerick",
    "shortCode": "LK"
  }, {
    "name": "Longford",
    "shortCode": "LD"
  }, {
    "name": "Louth",
    "shortCode": "LH"
  }, {
    "name": "Mayo",
    "shortCode": "MO"
  }, {
    "name": "Meath",
    "shortCode": "MH"
  }, {
    "name": "Monaghan",
    "shortCode": "MN"
  }, {
    "name": "Offaly",
    "shortCode": "OY"
  }, {
    "name": "Roscommon",
    "shortCode": "RN"
  }, {
    "name": "Sligo",
    "shortCode": "SO"
  }, {
    "name": "Tipperary",
    "shortCode": "TA"
  }, {
    "name": "Waterford",
    "shortCode": "WD"
  }, {
    "name": "Westmeath",
    "shortCode": "WH"
  }, {
    "name": "Wexford",
    "shortCode": "WX"
  }, {
    "name": "Wicklow",
    "shortCode": "WW"
  }]
}, {
  "countryname": "Isle of Man",
  "countryShortCode": "IM",
  "regions": [{
    "name": "Isle of Man"
  }]
}, {
  "countryname": "Israel",
  "countryShortCode": "IL",
  "regions": [{
    "name": "HaDarom",
    "shortCode": "D"
  }, {
    "name": "HaMerkaz",
    "shortCode": "M"
  }, {
    "name": "HaTsafon",
    "shortCode": "Z"
  }, {
    "name": "H??efa",
    "shortCode": "HA"
  }, {
    "name": "Tel-Aviv",
    "shortCode": "TA"
  }, {
    "name": "Yerushalayim",
    "shortCode": "JM"
  }]
}, {
  "countryname": "Italy",
  "countryShortCode": "IT",
  "regions": [{
    "name": "Abruzzo",
    "shortCode": "65"
  }, {
    "name": "Basilicata",
    "shortCode": "77"
  }, {
    "name": "Calabria",
    "shortCode": "78"
  }, {
    "name": "Campania",
    "shortCode": "72"
  }, {
    "name": "Emilia-Romagna",
    "shortCode": "45"
  }, {
    "name": "Friuli-Venezia Giulia",
    "shortCode": "36"
  }, {
    "name": "Lazio",
    "shortCode": "62"
  }, {
    "name": "Liguria",
    "shortCode": "42"
  }, {
    "name": "Lombardia",
    "shortCode": "25"
  }, {
    "name": "Marche",
    "shortCode": "57"
  }, {
    "name": "Molise",
    "shortCode": "67"
  }, {
    "name": "Piemonte",
    "shortCode": "21"
  }, {
    "name": "Puglia",
    "shortCode": "75"
  }, {
    "name": "Sardegna",
    "shortCode": "88"
  }, {
    "name": "Sicilia",
    "shortCode": "82"
  }, {
    "name": "Toscana",
    "shortCode": "52"
  }, {
    "name": "Trentino-Alto Adige",
    "shortCode": "32"
  }, {
    "name": "Umbria",
    "shortCode": "55"
  }, {
    "name": "Valle d'Aosta",
    "shortCode": "23"
  }, {
    "name": "Veneto",
    "shortCode": "34"
  }]
}, {
  "countryname": "Jamaica",
  "countryShortCode": "JM",
  "regions": [{
    "name": "Clarendon",
    "shortCode": "13"
  }, {
    "name": "Hanover",
    "shortCode": "09"
  }, {
    "name": "Kingston",
    "shortCode": "01"
  }, {
    "name": "Manchester",
    "shortCode": "12"
  }, {
    "name": "Portland",
    "shortCode": "04"
  }, {
    "name": "Saint Andrew",
    "shortCode": "02"
  }, {
    "name": "Saint Ann",
    "shortCode": "06"
  }, {
    "name": "Saint Catherine",
    "shortCode": "14"
  }, {
    "name": "Saint Elizabeth",
    "shortCode": "11"
  }, {
    "name": "Saint James",
    "shortCode": "08"
  }, {
    "name": "Saint Mary",
    "shortCode": "05"
  }, {
    "name": "Saint Thomas",
    "shortCode": "03"
  }, {
    "name": "Trelawny",
    "shortCode": "07"
  }, {
    "name": "Westmoreland",
    "shortCode": "10"
  }]
}, {
  "countryname": "Japan",
  "countryShortCode": "JP",
  "regions": [{
    "name": "Aichi",
    "shortCode": "23"
  }, {
    "name": "Akita",
    "shortCode": "05"
  }, {
    "name": "Aomori",
    "shortCode": "02"
  }, {
    "name": "Chiba",
    "shortCode": "12"
  }, {
    "name": "Ehime",
    "shortCode": "38"
  }, {
    "name": "Fukui",
    "shortCode": "18"
  }, {
    "name": "Fukuoka",
    "shortCode": "40"
  }, {
    "name": "Fukushima",
    "shortCode": "07"
  }, {
    "name": "Gifu",
    "shortCode": "21"
  }, {
    "name": "Gunma",
    "shortCode": "10"
  }, {
    "name": "Hiroshima",
    "shortCode": "34"
  }, {
    "name": "Hokkaido",
    "shortCode": "01"
  }, {
    "name": "Hyogo",
    "shortCode": "28"
  }, {
    "name": "Ibaraki",
    "shortCode": "08"
  }, {
    "name": "Ishikawa",
    "shortCode": "17"
  }, {
    "name": "Iwate",
    "shortCode": "03"
  }, {
    "name": "Kagawa",
    "shortCode": "37"
  }, {
    "name": "Kagoshima",
    "shortCode": "46"
  }, {
    "name": "Kanagawa",
    "shortCode": "14"
  }, {
    "name": "Kochi",
    "shortCode": "39"
  }, {
    "name": "Kumamoto",
    "shortCode": "43"
  }, {
    "name": "Kyoto",
    "shortCode": "26"
  }, {
    "name": "Mie",
    "shortCode": "24"
  }, {
    "name": "Miyagi",
    "shortCode": "04"
  }, {
    "name": "Miyazaki",
    "shortCode": "45"
  }, {
    "name": "Nagano",
    "shortCode": "20"
  }, {
    "name": "Nagasaki",
    "shortCode": "42"
  }, {
    "name": "Nara",
    "shortCode": "29"
  }, {
    "name": "Niigata",
    "shortCode": "15"
  }, {
    "name": "Oita",
    "shortCode": "44"
  }, {
    "name": "Okayama",
    "shortCode": "33"
  }, {
    "name": "Okinawa",
    "shortCode": "47"
  }, {
    "name": "Osaka",
    "shortCode": "27"
  }, {
    "name": "Saga",
    "shortCode": "41"
  }, {
    "name": "Saitama",
    "shortCode": "11"
  }, {
    "name": "Shiga",
    "shortCode": "25"
  }, {
    "name": "Shimane",
    "shortCode": "32"
  }, {
    "name": "Shizuoka",
    "shortCode": "22"
  }, {
    "name": "Tochigi",
    "shortCode": "09"
  }, {
    "name": "Tokushima",
    "shortCode": "36"
  }, {
    "name": "Tokyo",
    "shortCode": "13"
  }, {
    "name": "Tottori",
    "shortCode": "31"
  }, {
    "name": "Toyama",
    "shortCode": "16"
  }, {
    "name": "Wakayama",
    "shortCode": "30"
  }, {
    "name": "Yamagata",
    "shortCode": "06"
  }, {
    "name": "Yamaguchi",
    "shortCode": "35"
  }, {
    "name": "Yamanashi",
    "shortCode": "19"
  }]
}, {
  "countryname": "Jersey",
  "countryShortCode": "JE",
  "regions": [{
    "name": "Jersey"
  }]
}, {
  "countryname": "Jordan",
  "countryShortCode": "JO",
  "regions": [{
    "name": "???Ajl??n",
    "shortCode": "AJ"
  }, {
    "name": "Al 'Aqabah",
    "shortCode": "AQ"
  }, {
    "name": "Al Balq?????",
    "shortCode": "BA"
  }, {
    "name": "Al Karak",
    "shortCode": "KA"
  }, {
    "name": "Al Mafraq",
    "shortCode": "MA"
  }, {
    "name": "Al ???A????imah",
    "shortCode": "AM"
  }, {
    "name": "A?? ??af??lah",
    "shortCode": "AT"
  }, {
    "name": "Az Zarq?????",
    "shortCode": "AZ"
  }, {
    "name": "Irbid",
    "shortCode": "IR"
  }, {
    "name": "Jarash",
    "shortCode": "JA"
  }, {
    "name": "Ma?????n",
    "shortCode": "MN"
  }, {
    "name": "M??dab??",
    "shortCode": "MD"
  }]
}, {
  "countryname": "Kazakhstan",
  "countryShortCode": "KZ",
  "regions": [{
    "name": "Almaty",
    "shortCode": "ALA"
  }, {
    "name": "Aqmola",
    "shortCode": "AKM"
  }, {
    "name": "Aqtobe",
    "shortCode": "AKT"
  }, {
    "name": "Astana",
    "shortCode": "AST"
  }, {
    "name": "Atyrau",
    "shortCode": "ATY"
  }, {
    "name": "Batys Qazaqstan",
    "shortCode": "ZAP"
  }, {
    "name": "Bayqongyr"
  }, {
    "name": "Mangghystau",
    "shortCode": "MAN"
  }, {
    "name": "Ongtustik Qazaqstan",
    "shortCode": "YUZ"
  }, {
    "name": "Pavlodar",
    "shortCode": "PAV"
  }, {
    "name": "Qaraghandy",
    "shortCode": "KAR"
  }, {
    "name": "Qostanay",
    "shortCode": "KUS"
  }, {
    "name": "Qyzylorda",
    "shortCode": "KZY"
  }, {
    "name": "Shyghys Qazaqstan",
    "shortCode": "VOS"
  }, {
    "name": "Soltustik Qazaqstan",
    "shortCode": "SEV"
  }, {
    "name": "Zhambyl",
    "shortCode": "ZHA"
  }]
}, {
  "countryname": "Kenya",
  "countryShortCode": "KE",
  "regions": [{
    "name": "Baringo",
    "shortCode": "01"
  }, {
    "name": "Bomet",
    "shortCode": "02"
  }, {
    "name": "Bungoma",
    "shortCode": "03"
  }, {
    "name": "Busia",
    "shortCode": "04"
  }, {
    "name": "Eleyo/Marakwet",
    "shortCode": "05"
  }, {
    "name": "Embu",
    "shortCode": "06"
  }, {
    "name": "Garissa",
    "shortCode": "07"
  }, {
    "name": "Homa Bay",
    "shortCode": "08"
  }, {
    "name": "Isiolo",
    "shortCode": "09"
  }, {
    "name": "Kajiado",
    "shortCode": "10"
  }, {
    "name": "Kakamega",
    "shortCode": "11"
  }, {
    "name": "Kericho",
    "shortCode": "12"
  }, {
    "name": "Kiambu",
    "shortCode": "13"
  }, {
    "name": "Kilifi",
    "shortCode": "14"
  }, {
    "name": "Kirinyaga",
    "shortCode": "15"
  }, {
    "name": "Kisii",
    "shortCode": "16"
  }, {
    "name": "Kisumu",
    "shortCode": "17"
  }, {
    "name": "Kitui",
    "shortCode": "18"
  }, {
    "name": "Kwale",
    "shortCode": "19"
  }, {
    "name": "Laikipia",
    "shortCode": "20"
  }, {
    "name": "Lamu",
    "shortCode": "21"
  }, {
    "name": "Machakos",
    "shortCode": "22"
  }, {
    "name": "Makueni",
    "shortCode": "23"
  }, {
    "name": "Mandera",
    "shortCode": "24"
  }, {
    "name": "Marsabit",
    "shortCode": "25"
  }, {
    "name": "Meru",
    "shortCode": "26"
  }, {
    "name": "Migori",
    "shortCode": "27"
  }, {
    "name": "Mombasa",
    "shortCode": "28"
  }, {
    "name": "Murang'a",
    "shortCode": "29"
  }, {
    "name": "Nairobi City",
    "shortCode": "30"
  }, {
    "name": "Nakuru",
    "shortCode": "31"
  }, {
    "name": "Nandi",
    "shortCode": "32"
  }, {
    "name": "Narok",
    "shortCode": "33"
  }, {
    "name": "Nyamira",
    "shortCode": "34"
  }, {
    "name": "Nyandarua",
    "shortCode": "35"
  }, {
    "name": "Nyeri",
    "shortCode": "36"
  }, {
    "name": "Samburu",
    "shortCode": "37"
  }, {
    "name": "Siaya",
    "shortCode": "38"
  }, {
    "name": "Taita/Taveta",
    "shortCode": "39"
  }, {
    "name": "Tana River",
    "shortCode": "40"
  }, {
    "name": "Tharaka-Nithi",
    "shortCode": "41"
  }, {
    "name": "Trans Nzoia",
    "shortCode": "42"
  }, {
    "name": "Turkana",
    "shortCode": "43"
  }, {
    "name": "Uasin Gishu",
    "shortCode": "44"
  }, {
    "name": "Vihiga",
    "shortCode": "45"
  }, {
    "name": "Wajir",
    "shortCode": "46"
  }, {
    "name": "West Pokot",
    "shortCode": "47"
  }]
}, {
  "countryname": "Kiribati",
  "countryShortCode": "KI",
  "regions": [{
    "name": "Abaiang"
  }, {
    "name": "Abemama"
  }, {
    "name": "Aranuka"
  }, {
    "name": "Arorae"
  }, {
    "name": "Banaba"
  }, {
    "name": "Beru"
  }, {
    "name": "Butaritari"
  }, {
    "name": "Central Gilberts"
  }, {
    "name": "Gilbert Islands",
    "shortCode": "G"
  }, {
    "name": "Kanton"
  }, {
    "name": "Kiritimati"
  }, {
    "name": "Kuria"
  }, {
    "name": "Line Islands",
    "shortCode": "L"
  }, {
    "name": "Maiana"
  }, {
    "name": "Makin"
  }, {
    "name": "Marakei"
  }, {
    "name": "Nikunau"
  }, {
    "name": "Nonouti"
  }, {
    "name": "Northern Gilberts"
  }, {
    "name": "Onotoa"
  }, {
    "name": "Phoenix Islands",
    "shortCode": "P"
  }, {
    "name": "Southern Gilberts"
  }, {
    "name": "Tabiteuea"
  }, {
    "name": "Tabuaeran"
  }, {
    "name": "Tamana"
  }, {
    "name": "Tarawa"
  }, {
    "name": "Teraina"
  }]
}, {
  "countryname": "Korea, Democratic People's Republic of",
  "countryShortCode": "KP",
  "regions": [{
    "name": "Chagang-do (Chagang Province)",
    "shortCode": "04"
  }, {
    "name": "Hamgyong-bukto (North Hamgyong Province)",
    "shortCode": "09"
  }, {
    "name": "Hamgyong-namdo (South Hamgyong Province)",
    "shortCode": "08"
  }, {
    "name": "Hwanghae-bukto (North Hwanghae Province)",
    "shortCode": "06"
  }, {
    "name": "Hwanghae-namdo (South Hwanghae Province)",
    "shortCode": "05"
  }, {
    "name": "Kangwon-do (Kangwon Province)",
    "shortCode": "07"
  }, {
    "name": "Nas??n (Najin-S??nbong)",
    "shortCode": "13"
  }, {
    "name": "P'yongan-bukto (North P'yongan Province)",
    "shortCode": "03"
  }, {
    "name": "P'yongan-namdo (South P'yongan Province)",
    "shortCode": "02"
  }, {
    "name": "P'yongyang-si (P'yongyang City)",
    "shortCode": "01"
  }, {
    "name": "Yanggang-do (Yanggang Province)",
    "shortCode": "10"
  }]
}, {
  "countryname": "Korea, Republic of",
  "countryShortCode": "KR",
  "regions": [{
    "name": "Ch'ungch'ongbuk-do",
    "shortCode": "43"
  }, {
    "name": "Ch'ungch'ongnam-do",
    "shortCode": "44"
  }, {
    "name": "Cheju-do",
    "shortCode": "49"
  }, {
    "name": "Chollabuk-do",
    "shortCode": "45"
  }, {
    "name": "Chollanam-do",
    "shortCode": "46"
  }, {
    "name": "Inch'on-Kwangyokhi",
    "shortCode": "28"
  }, {
    "name": "Kang-won-do",
    "shortCode": "42"
  }, {
    "name": "Kwangju-Kwangyokshi",
    "shortCode": "28"
  }, {
    "name": "Kyonggi-do",
    "shortCode": "41"
  }, {
    "name": "Kyongsangbuk-do",
    "shortCode": "47"
  }, {
    "name": "Kyongsangnam-do",
    "shortCode": "48"
  }, {
    "name": "Pusan-Kwangyokshi",
    "shortCode": "26"
  }, {
    "name": "Seoul-T'ukpyolshi",
    "shortCode": "11"
  }, {
    "name": "Sejong",
    "shortCode": "50"
  }, {
    "name": "Taegu-Kwangyokshi",
    "shortCode": "27"
  }, {
    "name": "Taejon-Kwangyokshi",
    "shortCode": "30"
  }, {
    "name": "Ulsan-Kwangyokshi",
    "shortCode": "31"
  }]
}, {
  "countryname": "Kuwait",
  "countryShortCode": "KW",
  "regions": [{
    "name": "Al A???madi",
    "shortCode": "AH"
  }, {
    "name": "Al Farw??n??yah",
    "shortCode": "FA"
  }, {
    "name": "Al Jahr?????",
    "shortCode": "JA"
  }, {
    "name": "Al ???????imah",
    "shortCode": "KU"
  }, {
    "name": "???awall??",
    "shortCode": "HA"
  }, {
    "name": "Mub??rak al Kabir",
    "shortCode": "MU"
  }]
}, {
  "countryname": "Kyrgyzstan",
  "countryShortCode": "KG",
  "regions": [{
    "name": "Batken Oblasty",
    "shortCode": "B"
  }, {
    "name": "Bishkek Shaary",
    "shortCode": "GB"
  }, {
    "name": "Chuy Oblasty (Bishkek)",
    "shortCode": "C"
  }, {
    "name": "Jalal-Abad Oblasty",
    "shortCode": "J"
  }, {
    "name": "Naryn Oblasty",
    "shortCode": "N"
  }, {
    "name": "Osh Oblasty",
    "shortCode": "O"
  }, {
    "name": "Talas Oblasty",
    "shortCode": "T"
  }, {
    "name": "Ysyk-Kol Oblasty (Karakol)",
    "shortCode": "Y"
  }]
}, {
  "countryname": "Laos",
  "countryShortCode": "LA",
  "regions": [{
    "name": "Attapu",
    "shortCode": "AT"
  }, {
    "name": "Bok??o",
    "shortCode": "BK"
  }, {
    "name": "Bolikhamxai",
    "shortCode": "BL"
  }, {
    "name": "Champasak",
    "shortCode": "CH"
  }, {
    "name": "Houaphan",
    "shortCode": "HO"
  }, {
    "name": "Khammouan",
    "shortCode": "KH"
  }, {
    "name": "Louang Namtha",
    "shortCode": "LM"
  }, {
    "name": "Louangphabang",
    "shortCode": "LP"
  }, {
    "name": "Oud??mxai",
    "shortCode": "OU"
  }, {
    "name": "Ph??ngsali",
    "shortCode": "PH"
  }, {
    "name": "Salavan",
    "shortCode": "SL"
  }, {
    "name": "Savannakh??t",
    "shortCode": "SV"
  }, {
    "name": "Vientiane",
    "shortCode": "VI"
  }, {
    "name": "Xaignabouli",
    "shortCode": "XA"
  }, {
    "name": "X??kong",
    "shortCode": "XE"
  }, {
    "name": "Xaisomboun",
    "shortCode": "XS"
  }, {
    "name": "Xiangkhouang",
    "shortCode": "XI"
  }]
}, {
  "countryname": "Latvia",
  "countryShortCode": "LV",
  "regions": [{
    "name": "Aglona",
    "shortCode": "001"
  }, {
    "name": "Aizkraukle",
    "shortCode": "002"
  }, {
    "name": "Aizpute",
    "shortCode": "003"
  }, {
    "name": "Akn??ste",
    "shortCode": "004"
  }, {
    "name": "Aloja",
    "shortCode": "005"
  }, {
    "name": "Alsunga",
    "shortCode": "06"
  }, {
    "name": "Al??ksne",
    "shortCode": "007"
  }, {
    "name": "Amata",
    "shortCode": "008"
  }, {
    "name": "Ape",
    "shortCode": "009"
  }, {
    "name": "Auce",
    "shortCode": "010"
  }, {
    "name": "??da??i",
    "shortCode": "011"
  }, {
    "name": "Bab??te",
    "shortCode": "012"
  }, {
    "name": "Baldone",
    "shortCode": "013"
  }, {
    "name": "Baltinava",
    "shortCode": "014"
  }, {
    "name": "Balvi",
    "shortCode": "015"
  }, {
    "name": "Bauska",
    "shortCode": "016"
  }, {
    "name": "Bever??na",
    "shortCode": "017"
  }, {
    "name": "Broc??ni",
    "shortCode": "018"
  }, {
    "name": "Burtnieki",
    "shortCode": "019"
  }, {
    "name": "Carnikava",
    "shortCode": "020"
  }, {
    "name": "Cesvaine",
    "shortCode": "021"
  }, {
    "name": "C??sis",
    "shortCode": "022"
  }, {
    "name": "Cibla",
    "shortCode": "023"
  }, {
    "name": "Dagda",
    "shortCode": "024"
  }, {
    "name": "Daugavpils",
    "shortCode": "025"
  }, {
    "name": "Daugavpils (City)",
    "shortCode": "DGV"
  }, {
    "name": "Dobele",
    "shortCode": "026"
  }, {
    "name": "Dundaga",
    "shortCode": "027"
  }, {
    "name": "Durbe",
    "shortCode": "028"
  }, {
    "name": "Engure",
    "shortCode": "029"
  }, {
    "name": "??rg??i",
    "shortCode": "030"
  }, {
    "name": "Garkalne",
    "shortCode": "031"
  }, {
    "name": "Grobi??a",
    "shortCode": "032"
  }, {
    "name": "Gulbene",
    "shortCode": "033"
  }, {
    "name": "Iecava",
    "shortCode": "034"
  }, {
    "name": "Ik????ile",
    "shortCode": "035"
  }, {
    "name": "Il??kste",
    "shortCode": "036"
  }, {
    "name": "In??ukalns",
    "shortCode": "037"
  }, {
    "name": "Jaunjelgava",
    "shortCode": "038"
  }, {
    "name": "Jaunpiebalga",
    "shortCode": "039"
  }, {
    "name": "Jaunpils",
    "shortCode": "040"
  }, {
    "name": "Jelgava",
    "shortCode": "041"
  }, {
    "name": "Jelgava (City)",
    "shortCode": "JEL"
  }, {
    "name": "J??kabpils",
    "shortCode": "042"
  }, {
    "name": "J??kabpils (City)",
    "shortCode": "JKB"
  }, {
    "name": "J??rmala (City)",
    "shortCode": "JUR"
  }, {
    "name": "Kandava",
    "shortCode": "043"
  }, {
    "name": "K??rsava",
    "shortCode": "044"
  }, {
    "name": "Koc??ni",
    "shortCode": "045"
  }, {
    "name": "Koknese",
    "shortCode": "046"
  }, {
    "name": "Kr??slava",
    "shortCode": "047"
  }, {
    "name": "Krimulda",
    "shortCode": "048"
  }, {
    "name": "Krustpils",
    "shortCode": "049"
  }, {
    "name": "Kuld??ga",
    "shortCode": "050"
  }, {
    "name": "??egums",
    "shortCode": "051"
  }, {
    "name": "??ekava",
    "shortCode": "052"
  }, {
    "name": "Lielv??rde",
    "shortCode": "053"
  }, {
    "name": "Liep??ja",
    "shortCode": "LPX"
  }, {
    "name": "Limba??i",
    "shortCode": "054"
  }, {
    "name": "L??gatne",
    "shortCode": "055"
  }, {
    "name": "L??v??ni",
    "shortCode": "056"
  }, {
    "name": "Lub??na",
    "shortCode": "057"
  }, {
    "name": "Ludza",
    "shortCode": "058"
  }, {
    "name": "Madona",
    "shortCode": "059"
  }, {
    "name": "Mazsalaca",
    "shortCode": "060"
  }, {
    "name": "M??lpils",
    "shortCode": "061"
  }, {
    "name": "M??rupe",
    "shortCode": "062"
  }, {
    "name": "M??rsrags",
    "shortCode": "063"
  }, {
    "name": "Nauk????ni",
    "shortCode": "064"
  }, {
    "name": "Nereta",
    "shortCode": "065"
  }, {
    "name": "N??ca",
    "shortCode": "066"
  }, {
    "name": "Ogre",
    "shortCode": "067"
  }, {
    "name": "Olaine",
    "shortCode": "068"
  }, {
    "name": "Ozolnieki",
    "shortCode": "069"
  }, {
    "name": "P??rgauja",
    "shortCode": "070"
  }, {
    "name": "P??vilosta",
    "shortCode": "071"
  }, {
    "name": "P??avi??as",
    "shortCode": "072"
  }, {
    "name": "Prei??i",
    "shortCode": "073"
  }, {
    "name": "Priekule",
    "shortCode": "074"
  }, {
    "name": "Prieku??i",
    "shortCode": "075"
  }, {
    "name": "Rauna",
    "shortCode": "076"
  }, {
    "name": "R??zekne",
    "shortCode": "077"
  }, {
    "name": "R??zekne (City)",
    "shortCode": "REZ"
  }, {
    "name": "Riebi??i",
    "shortCode": "078"
  }, {
    "name": "R??ga",
    "shortCode": "RIX"
  }, {
    "name": "Roja",
    "shortCode": "079"
  }, {
    "name": "Ropa??i",
    "shortCode": "080"
  }, {
    "name": "Rucava",
    "shortCode": "081"
  }, {
    "name": "Rug??ji",
    "shortCode": "082"
  }, {
    "name": "Rund??le",
    "shortCode": "083"
  }, {
    "name": "R??jiena",
    "shortCode": "084"
  }, {
    "name": "Sala",
    "shortCode": "085"
  }, {
    "name": "Salacgr??va",
    "shortCode": "086"
  }, {
    "name": "Salaspils",
    "shortCode": "087"
  }, {
    "name": "Saldus",
    "shortCode": "088"
  }, {
    "name": "Saulkrasti",
    "shortCode": "089"
  }, {
    "name": "S??ja",
    "shortCode": "090"
  }, {
    "name": "Sigulda",
    "shortCode": "091"
  }, {
    "name": "Skr??veri",
    "shortCode": "092"
  }, {
    "name": "Skrunda",
    "shortCode": "093"
  }, {
    "name": "Smiltene",
    "shortCode": "094"
  }, {
    "name": "Stopi??i",
    "shortCode": "095"
  }, {
    "name": "Stren??i",
    "shortCode": "096"
  }, {
    "name": "Talsi",
    "shortCode": "097"
  }, {
    "name": "T??rvete",
    "shortCode": "098"
  }, {
    "name": "Tukums",
    "shortCode": "099"
  }, {
    "name": "Vai??ode",
    "shortCode": "100"
  }, {
    "name": "Valka",
    "shortCode": "101"
  }, {
    "name": "Valmiera",
    "shortCode": "VMR"
  }, {
    "name": "Varak????ni",
    "shortCode": "102"
  }, {
    "name": "V??rkava",
    "shortCode": "103"
  }, {
    "name": "Vecpiebalga",
    "shortCode": "104"
  }, {
    "name": "Vecumnieki",
    "shortCode": "105"
  }, {
    "name": "Ventspils",
    "shortCode": "106"
  }, {
    "name": "Ventspils (City)",
    "shortCode": "VEN"
  }, {
    "name": "Vies??te",
    "shortCode": "107"
  }, {
    "name": "Vi??aka",
    "shortCode": "108"
  }, {
    "name": "Vi????ni",
    "shortCode": "109"
  }, {
    "name": "Zilupe",
    "shortCode": "110"
  }]
}, {
  "countryname": "Lebanon",
  "countryShortCode": "LB",
  "regions": [{
    "name": "Aakk??r",
    "shortCode": "AK"
  }, {
    "name": "Baalbelk-Hermel",
    "shortCode": "BH"
  }, {
    "name": "B??qaa",
    "shortCode": "BI"
  }, {
    "name": "Beyrouth",
    "shortCode": "BA"
  }, {
    "name": "Liban-Nord",
    "shortCode": "AS"
  }, {
    "name": "Liban-Sud",
    "shortCode": "JA"
  }, {
    "name": "Mont-Liban",
    "shortCode": "JL"
  }, {
    "name": "Nabat??y??",
    "shortCode": "NA"
  }]
}, {
  "countryname": "Lesotho",
  "countryShortCode": "LS",
  "regions": [{
    "name": "Berea",
    "shortCode": "D"
  }, {
    "name": "Butha-Buthe",
    "shortCode": "B"
  }, {
    "name": "Leribe",
    "shortCode": "C"
  }, {
    "name": "Mafeteng",
    "shortCode": "E"
  }, {
    "name": "Maseru",
    "shortCode": "A"
  }, {
    "name": "Mohales Hoek",
    "shortCode": "F"
  }, {
    "name": "Mokhotlong",
    "shortCode": "J"
  }, {
    "name": "Qacha's Nek",
    "shortCode": "H"
  }, {
    "name": "Quthing",
    "shortCode": "G"
  }, {
    "name": "Thaba-Tseka",
    "shortCode": "K"
  }]
}, {
  "countryname": "Liberia",
  "countryShortCode": "LR",
  "regions": [{
    "name": "Bomi",
    "shortCode": "BM"
  }, {
    "name": "Bong",
    "shortCode": "BG"
  }, {
    "name": "Gbarpolu",
    "shortCode": "GP"
  }, {
    "name": "Grand Bassa",
    "shortCode": "GB"
  }, {
    "name": "Grand Cape Mount",
    "shortCode": "CM"
  }, {
    "name": "Grand Gedeh",
    "shortCode": "GG"
  }, {
    "name": "Grand Kru",
    "shortCode": "GK"
  }, {
    "name": "Lofa",
    "shortCode": "LO"
  }, {
    "name": "Margibi",
    "shortCode": "MG"
  }, {
    "name": "Maryland",
    "shortCode": "MY"
  }, {
    "name": "Montserrado",
    "shortCode": "MO"
  }, {
    "name": "Nimba",
    "shortCode": "NI"
  }, {
    "name": "River Cess",
    "shortCode": "RI"
  }, {
    "name": "River Geee",
    "shortCode": "RG"
  }, {
    "name": "Sinoe",
    "shortCode": "SI"
  }]
}, {
  "countryname": "Libya",
  "countryShortCode": "LY",
  "regions": [{
    "name": "Al Bu??n??n",
    "shortCode": "BU"
  }, {
    "name": "Al Jabal al Akh???ar",
    "shortCode": "JA"
  }, {
    "name": "Al Jabal al Gharb??",
    "shortCode": "JG"
  }, {
    "name": "Al Jaf??rah",
    "shortCode": "JA"
  }, {
    "name": "Al Jufrah",
    "shortCode": "JU"
  }, {
    "name": "Al Kufrah",
    "shortCode": "FK"
  }, {
    "name": "Al Marj",
    "shortCode": "MJ"
  }, {
    "name": "Al Marquab",
    "shortCode": "MB"
  }, {
    "name": "Al W???????t",
    "shortCode": "WA"
  }, {
    "name": "An Nuqa?? al Khams",
    "shortCode": "NQ"
  }, {
    "name": "Az Z??wiyah",
    "shortCode": "ZA"
  }, {
    "name": "Bangh??z??",
    "shortCode": "BA"
  }, {
    "name": "Darnah",
    "shortCode": "DR"
  }, {
    "name": "Gh??t",
    "shortCode": "GH"
  }, {
    "name": "Mi??r??tah",
    "shortCode": "MI"
  }, {
    "name": "Murzuq",
    "shortCode": "MQ"
  }, {
    "name": "N??l??t",
    "shortCode": "NL"
  }, {
    "name": "Sabh??",
    "shortCode": "SB"
  }, {
    "name": "Surt",
    "shortCode": "SR"
  }, {
    "name": "??ar??bulus",
    "shortCode": "TB"
  }, {
    "name": "Yafran",
    "shortCode": "WD"
  }, {
    "name": "W??d?? ash Sh????i??",
    "shortCode": "WS"
  }]
}, {
  "countryname": "Liechtenstein",
  "countryShortCode": "LI",
  "regions": [{
    "name": "Balzers",
    "shortCode": "01"
  }, {
    "name": "Eschen",
    "shortCode": "02"
  }, {
    "name": "Gamprin",
    "shortCode": "03"
  }, {
    "name": "Mauren",
    "shortCode": "04"
  }, {
    "name": "Planken",
    "shortCode": "05"
  }, {
    "name": "Ruggell",
    "shortCode": "06"
  }, {
    "name": "Schaan",
    "shortCode": "07"
  }, {
    "name": "Schellenberg",
    "shortCode": "08"
  }, {
    "name": "Triesen",
    "shortCode": "09"
  }, {
    "name": "Triesenberg",
    "shortCode": "10"
  }, {
    "name": "Vaduz",
    "shortCode": "11"
  }]
}, {
  "countryname": "Lithuania",
  "countryShortCode": "LT",
  "regions": [{
    "name": "Alytaus",
    "shortCode": "AL"
  }, {
    "name": "Kauno",
    "shortCode": "KU"
  }, {
    "name": "Klaip??dos",
    "shortCode": "KL"
  }, {
    "name": "Marijampol??s",
    "shortCode": "MR"
  }, {
    "name": "Panev????io",
    "shortCode": "PN"
  }, {
    "name": "??iauli??",
    "shortCode": "SA"
  }, {
    "name": "Taurag??s",
    "shortCode": "TA"
  }, {
    "name": "Tel??i??",
    "shortCode": "TE"
  }, {
    "name": "Utenos",
    "shortCode": "UT"
  }, {
    "name": "Vilniaus",
    "shortCode": "VL"
  }]
}, {
  "countryname": "Luxembourg",
  "countryShortCode": "LU",
  "regions": [{
    "name": "Capellen",
    "shortCode": "CA"
  }, {
    "name": "Clevaux",
    "shortCode": "CL"
  }, {
    "name": "Diekirch",
    "shortCode": "DI"
  }, {
    "name": "Echternach",
    "shortCode": "EC"
  }, {
    "name": "Esch-sur-Alzette",
    "shortCode": "ES"
  }, {
    "name": "Grevenmacher",
    "shortCode": "GR"
  }, {
    "name": "Luxembourg",
    "shortCode": "LU"
  }, {
    "name": "Mersch",
    "shortCode": "ME"
  }, {
    "name": "Redange",
    "shortCode": "RD"
  }, {
    "name": "Remich",
    "shortCode": "RM"
  }, {
    "name": "Vianden",
    "shortCode": "VD"
  }, {
    "name": "Wiltz",
    "shortCode": "WI"
  }]
}, {
  "countryname": "Macao",
  "countryShortCode": "MO",
  "regions": [{
    "name": "Macao"
  }]
}, {
  "countryname": "Macedonia, Republic of",
  "countryShortCode": "MK",
  "regions": [{
    "name": "Ara??inovo",
    "shortCode": "02"
  }, {
    "name": "Berovo",
    "shortCode": "03"
  }, {
    "name": "Bitola",
    "shortCode": "04"
  }, {
    "name": "Bogdanci",
    "shortCode": "05"
  }, {
    "name": "Bogovinje",
    "shortCode": "06"
  }, {
    "name": "Bosilovo",
    "shortCode": "07"
  }, {
    "name": "Brvenica",
    "shortCode": "08"
  }, {
    "name": "Centar ??upa",
    "shortCode": "78"
  }, {
    "name": "??a??ka",
    "shortCode": "08"
  }, {
    "name": "??e??inovo-Oble??evo",
    "shortCode": "81"
  }, {
    "name": "??u??er Sandevo",
    "shortCode": "82"
  }, {
    "name": "Debar",
    "shortCode": "21"
  }, {
    "name": "Debarca",
    "shortCode": "22"
  }, {
    "name": "Del??evo",
    "shortCode": "23"
  }, {
    "name": "Demir Hisar",
    "shortCode": "25"
  }, {
    "name": "Demir Kapija",
    "shortCode": "24"
  }, {
    "name": "Doran",
    "shortCode": "26"
  }, {
    "name": "Dolneni",
    "shortCode": "27"
  }, {
    "name": "Gevgelija",
    "shortCode": "18"
  }, {
    "name": "Gostivar",
    "shortCode": "19"
  }, {
    "name": "Gradsko",
    "shortCode": "20"
  }, {
    "name": "Ilinden",
    "shortCode": "34"
  }, {
    "name": "Jegunovce",
    "shortCode": "35"
  }, {
    "name": "Karbinci",
    "shortCode": "37"
  }, {
    "name": "Kavadarci",
    "shortCode": "36"
  }, {
    "name": "Ki??evo",
    "shortCode": "40"
  }, {
    "name": "Ko??ani",
    "shortCode": "42"
  }, {
    "name": "Kon??e",
    "shortCode": "41"
  }, {
    "name": "Kratovo",
    "shortCode": "43"
  }, {
    "name": "Kriva Palanka",
    "shortCode": "44"
  }, {
    "name": "Krivoga??tani",
    "shortCode": "45"
  }, {
    "name": "Kru??evo",
    "shortCode": "46"
  }, {
    "name": "Kumanovo",
    "shortCode": "47"
  }, {
    "name": "Lipkovo",
    "shortCode": "48"
  }, {
    "name": "Lozovo",
    "shortCode": "49"
  }, {
    "name": "Makedonska Kamenica",
    "shortCode": "51"
  }, {
    "name": "Makedonski Brod",
    "shortCode": "52"
  }, {
    "name": "Mavrovo i Rostu??a",
    "shortCode": "50"
  }, {
    "name": "Mogila",
    "shortCode": "53"
  }, {
    "name": "Negotino",
    "shortCode": "54"
  }, {
    "name": "Novaci",
    "shortCode": "55"
  }, {
    "name": "Novo Selo",
    "shortCode": "56"
  }, {
    "name": "Ohrid",
    "shortCode": "58"
  }, {
    "name": "Peh??evo",
    "shortCode": "60"
  }, {
    "name": "Petrovec",
    "shortCode": "59"
  }, {
    "name": "Plasnica",
    "shortCode": "61"
  }, {
    "name": "Prilep",
    "shortCode": "62"
  }, {
    "name": "Probi??tip",
    "shortCode": "63"
  }, {
    "name": "Radovi??",
    "shortCode": ""
  }, {
    "name": "Rankovce",
    "shortCode": "65"
  }, {
    "name": "Resen",
    "shortCode": "66"
  }, {
    "name": "Rosoman",
    "shortCode": "67"
  }, {
    "name": "Skopje",
    "shortCode": "85"
  }, {
    "name": "Sopi??te",
    "shortCode": "70"
  }, {
    "name": "Staro Nagori??ane",
    "shortCode": "71"
  }, {
    "name": "Struga",
    "shortCode": "72"
  }, {
    "name": "Strumica",
    "shortCode": "73"
  }, {
    "name": "Studeni??ani",
    "shortCode": "74"
  }, {
    "name": "Sveti Nikole",
    "shortCode": "69"
  }, {
    "name": "??tip",
    "shortCode": "83"
  }, {
    "name": "Tearce",
    "shortCode": "75"
  }, {
    "name": "Tetovo",
    "shortCode": "76"
  }, {
    "name": "Valandovo",
    "shortCode": "10"
  }, {
    "name": "Vasilevo",
    "shortCode": "11"
  }, {
    "name": "Veles",
    "shortCode": "13"
  }, {
    "name": "Vev??ani",
    "shortCode": "12"
  }, {
    "name": "Vinica",
    "shortCode": "14"
  }, {
    "name": "Vrap??i??te",
    "shortCode": "16"
  }, {
    "name": "Zelenikovo",
    "shortCode": "32"
  }, {
    "name": "Zrnovci",
    "shortCode": "33"
  }, {
    "name": "??elino",
    "shortCode": "30"
  }]
}, {
  "countryname": "Madagascar",
  "countryShortCode": "MG",
  "regions": [{
    "name": "Antananarivo",
    "shortCode": "T"
  }, {
    "name": "Antsiranana",
    "shortCode": "D"
  }, {
    "name": "Fianarantsoa",
    "shortCode": "F"
  }, {
    "name": "Mahajanga",
    "shortCode": "M"
  }, {
    "name": "Toamasina",
    "shortCode": "A"
  }, {
    "name": "Toliara",
    "shortCode": "U"
  }]
}, {
  "countryname": "Malawi",
  "countryShortCode": "MW",
  "regions": [{
    "name": "Balaka",
    "shortCode": "BA"
  }, {
    "name": "Blantyre",
    "shortCode": "BL"
  }, {
    "name": "Chikwawa",
    "shortCode": "CK"
  }, {
    "name": "Chiradzulu",
    "shortCode": "CR"
  }, {
    "name": "Chitipa",
    "shortCode": "CT"
  }, {
    "name": "Dedza",
    "shortCode": "DE"
  }, {
    "name": "Dowa",
    "shortCode": "DO"
  }, {
    "name": "Karonga",
    "shortCode": "KR"
  }, {
    "name": "Kasungu",
    "shortCode": "KS"
  }, {
    "name": "Likoma",
    "shortCode": "LK"
  }, {
    "name": "Lilongwe",
    "shortCode": "LI"
  }, {
    "name": "Machinga",
    "shortCode": "MH"
  }, {
    "name": "Mangochi",
    "shortCode": "MG"
  }, {
    "name": "Mchinji",
    "shortCode": "MC"
  }, {
    "name": "Mulanje",
    "shortCode": "MU"
  }, {
    "name": "Mwanza",
    "shortCode": "MW"
  }, {
    "name": "Mzimba",
    "shortCode": "MZ"
  }, {
    "name": "Nkhata Bay",
    "shortCode": "NE"
  }, {
    "name": "Nkhotakota",
    "shortCode": "NB"
  }, {
    "name": "Nsanje",
    "shortCode": "NS"
  }, {
    "name": "Ntcheu",
    "shortCode": "NU"
  }, {
    "name": "Ntchisi",
    "shortCode": "NI"
  }, {
    "name": "Phalombe",
    "shortCode": "PH"
  }, {
    "name": "Rumphi",
    "shortCode": "RU"
  }, {
    "name": "Salima",
    "shortCode": "SA"
  }, {
    "name": "Thyolo",
    "shortCode": "TH"
  }, {
    "name": "Zomba",
    "shortCode": "ZO"
  }]
}, {
  "countryname": "Malaysia",
  "countryShortCode": "MY",
  "regions": [{
    "name": "Johor",
    "shortCode": "01"
  }, {
    "name": "Kedah",
    "shortCode": "02"
  }, {
    "name": "Kelantan",
    "shortCode": "03"
  }, {
    "name": "Melaka",
    "shortCode": "04"
  }, {
    "name": "Negeri Sembilan",
    "shortCode": "05"
  }, {
    "name": "Pahang",
    "shortCode": "06"
  }, {
    "name": "Perak",
    "shortCode": "08"
  }, {
    "name": "Perlis",
    "shortCode": "09"
  }, {
    "name": "Pulau Pinang",
    "shortCode": "07"
  }, {
    "name": "Sabah",
    "shortCode": "12"
  }, {
    "name": "Sarawak",
    "shortCode": "13"
  }, {
    "name": "Selangor",
    "shortCode": "10"
  }, {
    "name": "Terengganu",
    "shortCode": "11"
  }, {
    "name": "Wilayah Persekutuan (Kuala Lumpur)",
    "shortCode": "14"
  }, {
    "name": "Wilayah Persekutuan (Labuan)",
    "shortCode": "15"
  }, {
    "name": "Wilayah Persekutuan (Putrajaya)",
    "shortCode": "16"
  }]
}, {
  "countryname": "Maldives",
  "countryShortCode": "MV",
  "regions": [{
    "name": "Alifu Alifu",
    "shortCode": "02"
  }, {
    "name": "Alifu Dhaalu",
    "shortCode": "00"
  }, {
    "name": "Baa",
    "shortCode": "20"
  }, {
    "name": "Dhaalu",
    "shortCode": "17"
  }, {
    "name": "Faafu",
    "shortCode": "14"
  }, {
    "name": "Gaafu Alifu",
    "shortCode": "27"
  }, {
    "name": "Gaafu Dhaalu",
    "shortCode": "28"
  }, {
    "name": "Gnaviyani",
    "shortCode": "29"
  }, {
    "name": "Haa Alifu",
    "shortCode": "07"
  }, {
    "name": "Haa Dhaalu",
    "shortCode": "23"
  }, {
    "name": "Kaafu",
    "shortCode": "29"
  }, {
    "name": "Laamu",
    "shortCode": "05"
  }, {
    "name": "Lhaviyani",
    "shortCode": "03"
  }, {
    "name": "Mal??",
    "shortCode": "MLE"
  }, {
    "name": "Meemu",
    "shortCode": "12"
  }, {
    "name": "Noonu",
    "shortCode": "25"
  }, {
    "name": "Raa",
    "shortCode": "13"
  }, {
    "name": "Seenu",
    "shortCode": "01"
  }, {
    "name": "Shaviyani",
    "shortCode": "24"
  }, {
    "name": "Thaa",
    "shortCode": "08"
  }, {
    "name": "Vaavu",
    "shortCode": "04"
  }]
}, {
  "countryname": "Mali",
  "countryShortCode": "ML",
  "regions": [{
    "name": "Bamako",
    "shortCode": "BKO"
  }, {
    "name": "Gao",
    "shortCode": "7"
  }, {
    "name": "Kayes",
    "shortCode": "1"
  }, {
    "name": "Kidal",
    "shortCode": "8"
  }, {
    "name": "Koulikoro",
    "shortCode": "2"
  }, {
    "name": "Mopti",
    "shortCode": "5"
  }, {
    "name": "Segou",
    "shortCode": "4"
  }, {
    "name": "Sikasso",
    "shortCode": "3"
  }, {
    "name": "Tombouctou",
    "shortCode": "6"
  }]
}, {
  "countryname": "Malta",
  "countryShortCode": "MT",
  "regions": [{
    "name": "Attard",
    "shortCode": "01"
  }, {
    "name": "Balzan",
    "shortCode": "02"
  }, {
    "name": "Birgu",
    "shortCode": "03"
  }, {
    "name": "Birkirkara",
    "shortCode": "04"
  }, {
    "name": "Bir??ebbu??a",
    "shortCode": "05"
  }, {
    "name": "Bormla",
    "shortCode": "06"
  }, {
    "name": "Dingli",
    "shortCode": "07"
  }, {
    "name": "Fgura",
    "shortCode": "08"
  }, {
    "name": "Floriana",
    "shortCode": "09"
  }, {
    "name": "Fontana",
    "shortCode": "10"
  }, {
    "name": "Guda",
    "shortCode": "11"
  }, {
    "name": "G??ira",
    "shortCode": "12"
  }, {
    "name": "G??ajnsielem",
    "shortCode": "13"
  }, {
    "name": "G??arb",
    "shortCode": "14"
  }, {
    "name": "G??arg??ur",
    "shortCode": "15"
  }, {
    "name": "G??asri",
    "shortCode": "16"
  }, {
    "name": "G??axaq",
    "shortCode": "17"
  }, {
    "name": "??amrun",
    "shortCode": "18"
  }, {
    "name": "Iklin",
    "shortCode": "19"
  }, {
    "name": "Isla",
    "shortCode": "20"
  }, {
    "name": "Kalkara",
    "shortCode": "21"
  }, {
    "name": "Ker??em",
    "shortCode": "22"
  }, {
    "name": "Kirkop",
    "shortCode": "23"
  }, {
    "name": "Lija",
    "shortCode": "24"
  }, {
    "name": "Luqa",
    "shortCode": "25"
  }, {
    "name": "Marsa",
    "shortCode": "26"
  }, {
    "name": "Marsaskala",
    "shortCode": "27"
  }, {
    "name": "Marsaxlokk",
    "shortCode": "28"
  }, {
    "name": "Mdina",
    "shortCode": "29"
  }, {
    "name": "Mellie??a",
    "shortCode": "30"
  }, {
    "name": "M??arr",
    "shortCode": "31"
  }, {
    "name": "Mosta",
    "shortCode": "32"
  }, {
    "name": "Mqabba",
    "shortCode": "33"
  }, {
    "name": "Msida",
    "shortCode": "34"
  }, {
    "name": "Mtarfa",
    "shortCode": "35"
  }, {
    "name": "Munxar",
    "shortCode": "36"
  }, {
    "name": "Nadur",
    "shortCode": "37"
  }, {
    "name": "Naxxar",
    "shortCode": "38"
  }, {
    "name": "Paola",
    "shortCode": "39"
  }, {
    "name": "Pembroke",
    "shortCode": "40"
  }, {
    "name": "Piet??",
    "shortCode": "41"
  }, {
    "name": "Qala",
    "shortCode": "42"
  }, {
    "name": "Qormi",
    "shortCode": "43"
  }, {
    "name": "Qrendi",
    "shortCode": "44"
  }, {
    "name": "Rabat G??awdex",
    "shortCode": "45"
  }, {
    "name": "Rabat Malta",
    "shortCode": "46"
  }, {
    "name": "Safi",
    "shortCode": "47"
  }, {
    "name": "San ??iljan",
    "shortCode": "48"
  }, {
    "name": "San ??wann",
    "shortCode": "49"
  }, {
    "name": "San Lawrenz",
    "shortCode": "50"
  }, {
    "name": "San Pawl il-Ba??ar",
    "shortCode": "51"
  }, {
    "name": "Sannat",
    "shortCode": "52"
  }, {
    "name": "Santa Lu??ija",
    "shortCode": "53"
  }, {
    "name": "Santa Venera",
    "shortCode": "54"
  }, {
    "name": "Si????iewi",
    "shortCode": "55"
  }, {
    "name": "Sliema",
    "shortCode": "56"
  }, {
    "name": "Swieqi",
    "shortCode": "57"
  }, {
    "name": "Tai Xbiex",
    "shortCode": "58"
  }, {
    "name": "Tarzien",
    "shortCode": "59"
  }, {
    "name": "Valletta",
    "shortCode": "60"
  }, {
    "name": "Xag??ra",
    "shortCode": "61"
  }, {
    "name": "Xewkija",
    "shortCode": "62"
  }, {
    "name": "Xg??ajra",
    "shortCode": "63"
  }, {
    "name": "??abbar",
    "shortCode": "64"
  }, {
    "name": "??ebbu?? G??awde",
    "shortCode": "65"
  }, {
    "name": "??ebbu?? Malta",
    "shortCode": "66"
  }, {
    "name": "??ejtun",
    "shortCode": "67"
  }, {
    "name": "??urrieq",
    "shortCode": "68"
  }]
}, {
  "countryname": "Marshall Islands",
  "countryShortCode": "MH",
  "regions": [{
    "name": "Ailinglaplap",
    "shortCode": "ALL"
  }, {
    "name": "Ailuk",
    "shortCode": "ALK"
  }, {
    "name": "Arno",
    "shortCode": "ARN"
  }, {
    "name": "Aur",
    "shortCode": "AUR"
  }, {
    "name": "Bikini and Kili",
    "shortCode": "KIL"
  }, {
    "name": "Ebon",
    "shortCode": "EBO"
  }, {
    "name": "Jabat",
    "shortCode": "JAB"
  }, {
    "name": "Jaluit",
    "shortCode": "JAL"
  }, {
    "name": "Kwajalein",
    "shortCode": "KWA"
  }, {
    "name": "Lae",
    "shortCode": "LAE"
  }, {
    "name": "Lib",
    "shortCode": "LIB"
  }, {
    "name": "Likiep",
    "shortCode": "LIK"
  }, {
    "name": "Majuro",
    "shortCode": "MAJ"
  }, {
    "name": "Maloelap",
    "shortCode": "MAL"
  }, {
    "name": "Mejit",
    "shortCode": "MEJ"
  }, {
    "name": "Namdrik",
    "shortCode": "NMK"
  }, {
    "name": "Namu",
    "shortCode": "NMU"
  }, {
    "name": "Rongelap",
    "shortCode": "RON"
  }, {
    "name": "Ujae",
    "shortCode": "UJA"
  }, {
    "name": "Utrik",
    "shortCode": "UTI"
  }, {
    "name": "Wotho",
    "shortCode": "WTH"
  }, {
    "name": "Wotje",
    "shortCode": "WTJ"
  }]
}, {
  "countryname": "Martinique",
  "countryShortCode": "MQ",
  "regions": [{
    "name": "Martinique"
  }]
}, {
  "countryname": "Mauritania",
  "countryShortCode": "MR",
  "regions": [{
    "name": "Adrar",
    "shortCode": "07"
  }, {
    "name": "Assaba",
    "shortCode": "03"
  }, {
    "name": "Brakna",
    "shortCode": "05"
  }, {
    "name": "Dakhlet Nouadhibou",
    "shortCode": "08"
  }, {
    "name": "Gorgol",
    "shortCode": "04"
  }, {
    "name": "Guidimaka",
    "shortCode": "10"
  }, {
    "name": "Hodh Ech Chargui",
    "shortCode": "01"
  }, {
    "name": "Hodh El Gharbi",
    "shortCode": "02"
  }, {
    "name": "Inchiri",
    "shortCode": "12"
  }, {
    "name": "Nouakchott Nord",
    "shortCode": "14"
  }, {
    "name": "Nouakchott Ouest",
    "shortCode": "13"
  }, {
    "name": "Nouakchott Sud",
    "shortCode": "15"
  }, {
    "name": "Tagant",
    "shortCode": "09"
  }, {
    "name": "Tiris Zemmour",
    "shortCode": "11"
  }, {
    "name": "Trarza",
    "shortCode": "06"
  }]
}, {
  "countryname": "Mauritius",
  "countryShortCode": "MU",
  "regions": [{
    "name": "Agalega Islands",
    "shortCode": "AG"
  }, {
    "name": "Beau Bassin-Rose Hill",
    "shortCode": "BR"
  }, {
    "name": "Black River",
    "shortCode": "BL"
  }, {
    "name": "Cargados Carajos Shoals",
    "shortCode": "CC"
  }, {
    "name": "Curepipe",
    "shortCode": "CU"
  }, {
    "name": "Flacq",
    "shortCode": "FL"
  }, {
    "name": "Grand Port",
    "shortCode": "GP"
  }, {
    "name": "Moka",
    "shortCode": "MO"
  }, {
    "name": "Pamplemousses",
    "shortCode": "PA"
  }, {
    "name": "Plaines Wilhems",
    "shortCode": "PW"
  }, {
    "name": "Port Louis (City)",
    "shortCode": "PU"
  }, {
    "name": "Port Louis",
    "shortCode": "PL"
  }, {
    "name": "Riviere du Rempart",
    "shortCode": "RR"
  }, {
    "name": "Rodrigues Island",
    "shortCode": "RO"
  }, {
    "name": "Savanne",
    "shortCode": "SA"
  }, {
    "name": "Vacoas-Phoenix",
    "shortCode": "CP"
  }]
}, {
  "countryname": "Mayotte",
  "countryShortCode": "YT",
  "regions": [{
    "name": "Dzaoudzi",
    "shortCode": "01"
  }, {
    "name": "Pamandzi",
    "shortCode": "02"
  }, {
    "name": "Mamoudzou",
    "shortCode": "03"
  }, {
    "name": "Dembeni",
    "shortCode": "04"
  }, {
    "name": "Bandr??l??",
    "shortCode": "05"
  }, {
    "name": "Kani-K??li",
    "shortCode": "06"
  }, {
    "name": "Bou??ni",
    "shortCode": "07"
  }, {
    "name": "Chirongui",
    "shortCode": "08"
  }, {
    "name": "Sada",
    "shortCode": "09"
  }, {
    "name": "Ouangani",
    "shortCode": "10"
  }, {
    "name": "Chiconi",
    "shortCode": "11"
  }, {
    "name": "Tsingoni",
    "shortCode": "12"
  }, {
    "name": "M'Tsangamouji",
    "shortCode": "13"
  }, {
    "name": "Acoua",
    "shortCode": "14"
  }, {
    "name": "Mtsamboro",
    "shortCode": "15"
  }, {
    "name": "Bandraboua",
    "shortCode": "16"
  }, {
    "name": "Koungou",
    "shortCode": "17"
  }]
}, {
  "countryname": "Mexico",
  "countryShortCode": "MX",
  "regions": [{
    "name": "Aguascalientes",
    "shortCode": "AGU"
  }, {
    "name": "Baja California",
    "shortCode": "BCN"
  }, {
    "name": "Baja California Sur",
    "shortCode": "BCS"
  }, {
    "name": "Campeche",
    "shortCode": "CAM"
  }, {
    "name": "Ciudad de M??xico",
    "shortCode": "DIF"
  }, {
    "name": "Chiapas",
    "shortCode": "CHP"
  }, {
    "name": "Chihuahua",
    "shortCode": "CHH"
  }, {
    "name": "Coahuila de Zaragoza",
    "shortCode": "COA"
  }, {
    "name": "Colima",
    "shortCode": "COL"
  }, {
    "name": "Durango",
    "shortCode": "DUR"
  }, {
    "name": "Estado de M??xico",
    "shortCode": "MEX"
  }, {
    "name": "Guanajuato",
    "shortCode": "GUA"
  }, {
    "name": "Guerrero",
    "shortCode": "GRO"
  }, {
    "name": "Hidalgo",
    "shortCode": "HID"
  }, {
    "name": "Jalisco",
    "shortCode": "JAL"
  }, {
    "name": "Michoac??n de Ocampo",
    "shortCode": "MIC"
  }, {
    "name": "Morelos",
    "shortCode": "MOR"
  }, {
    "name": "Nayarit",
    "shortCode": "NAY"
  }, {
    "name": "Nuevo Le??n",
    "shortCode": "NLE"
  }, {
    "name": "Oaxaca",
    "shortCode": "OAX"
  }, {
    "name": "Puebla",
    "shortCode": "PUE"
  }, {
    "name": "Quer??taro de Arteaga",
    "shortCode": "QUE"
  }, {
    "name": "Quintana Roo",
    "shortCode": "ROO"
  }, {
    "name": "San Luis Potos??",
    "shortCode": "SLP"
  }, {
    "name": "Sinaloa",
    "shortCode": "SIN"
  }, {
    "name": "Sonora",
    "shortCode": "SON"
  }, {
    "name": "Tabasco",
    "shortCode": "TAB"
  }, {
    "name": "Tamaulipas",
    "shortCode": "TAM"
  }, {
    "name": "Tlaxcala",
    "shortCode": "TLA"
  }, {
    "name": "Veracruz",
    "shortCode": "VER"
  }, {
    "name": "Yucat??n",
    "shortCode": "YUC"
  }, {
    "name": "Zacatecas",
    "shortCode": "ZAC"
  }]
}, {
  "countryname": "Micronesia, Federated States of",
  "countryShortCode": "FM",
  "regions": [{
    "name": "Chuuk (Truk)",
    "shortCode": "TRK"
  }, {
    "name": "Kosrae",
    "shortCode": "KSA"
  }, {
    "name": "Pohnpei",
    "shortCode": "PNI"
  }, {
    "name": "Yap",
    "shortCode": "YAP"
  }]
}, {
  "countryname": "Moldova",
  "countryShortCode": "MD",
  "regions": [{
    "name": "Aenii Noi",
    "shortCode": "AN"
  }, {
    "name": "Basarabeasca",
    "shortCode": "BS"
  }, {
    "name": "B??l??i",
    "shortCode": "BA"
  }, {
    "name": "Bender",
    "shortCode": "BD"
  }, {
    "name": "Briceni",
    "shortCode": "BR"
  }, {
    "name": "Cahul",
    "shortCode": "CA"
  }, {
    "name": "Cantemir",
    "shortCode": "CT"
  }, {
    "name": "C??l??ra??i",
    "shortCode": "CL"
  }, {
    "name": "C??u??eni",
    "shortCode": "CS"
  }, {
    "name": "Chi??in??u",
    "shortCode": "CU"
  }, {
    "name": "Cimi??lia",
    "shortCode": "CM"
  }, {
    "name": "Criuleni",
    "shortCode": "CR"
  }, {
    "name": "Dondu??eni",
    "shortCode": "DO"
  }, {
    "name": "Drochia",
    "shortCode": "DR"
  }, {
    "name": "Dub??sari",
    "shortCode": "DU"
  }, {
    "name": "Edine??",
    "shortCode": "ED"
  }, {
    "name": "F??le??ti",
    "shortCode": "FA"
  }, {
    "name": "Flore??ti",
    "shortCode": "FL"
  }, {
    "name": "G??g??uzia",
    "shortCode": "GA"
  }, {
    "name": "Glodeni",
    "shortCode": "GL"
  }, {
    "name": "H??nce??ti",
    "shortCode": "HI"
  }, {
    "name": "Ialoveni",
    "shortCode": "IA"
  }, {
    "name": "Leova",
    "shortCode": "LE"
  }, {
    "name": "Nisporeni",
    "shortCode": "NI"
  }, {
    "name": "Ocni??a",
    "shortCode": "OC"
  }, {
    "name": "Orhei",
    "shortCode": "OR"
  }, {
    "name": "Rezina",
    "shortCode": "RE"
  }, {
    "name": "R????cani",
    "shortCode": "RI"
  }, {
    "name": "S??ngerei",
    "shortCode": "SI"
  }, {
    "name": "Soroca",
    "shortCode": "SO"
  }, {
    "name": "St??nga Nistrului",
    "shortCode": "SN"
  }, {
    "name": "Str????eni",
    "shortCode": "ST"
  }, {
    "name": "??old??ne??ti",
    "shortCode": "SD"
  }, {
    "name": "??tefan Vod??",
    "shortCode": "SV"
  }, {
    "name": "Taraclia",
    "shortCode": "TA"
  }, {
    "name": "Telene??ti",
    "shortCode": "TE"
  }, {
    "name": "Ungheni",
    "shortCode": "UN"
  }]
}, {
  "countryname": "Monaco",
  "countryShortCode": "MC",
  "regions": [{
    "name": "Colle",
    "shortCode": "CL"
  }, {
    "name": "Condamine",
    "shortCode": "CO"
  }, {
    "name": "Fontvieille",
    "shortCode": "FO"
  }, {
    "name": "Gare",
    "shortCode": "GA"
  }, {
    "name": "Jardin Exotique",
    "shortCode": "JE"
  }, {
    "name": "Larvotto",
    "shortCode": "LA"
  }, {
    "name": "Malbousquet",
    "shortCode": "MA"
  }, {
    "name": "Monaco-Ville",
    "shortCode": "MO"
  }, {
    "name": "Moneghetti",
    "shortCode": "MG"
  }, {
    "name": "Monte-Carlo",
    "shortCode": "MC"
  }, {
    "name": "Moulins",
    "shortCode": "MU"
  }, {
    "name": "Port-Hercule",
    "shortCode": "PH"
  }, {
    "name": "Saint-Roman",
    "shortCode": "SR"
  }, {
    "name": "Sainte-D??vote",
    "shortCode": "SD"
  }, {
    "name": "Source",
    "shortCode": "SO"
  }, {
    "name": "Sp??lugues",
    "shortCode": "SP"
  }, {
    "name": "Vallon de la Rousse",
    "shortCode": "VR"
  }]
}, {
  "countryname": "Mongolia",
  "countryShortCode": "MN",
  "regions": [{
    "name": "Arhangay",
    "shortCode": "073"
  }, {
    "name": "Bayan-Olgiy",
    "shortCode": "071"
  }, {
    "name": "Bayanhongor",
    "shortCode": "069"
  }, {
    "name": "Bulgan",
    "shortCode": "067"
  }, {
    "name": "Darhan",
    "shortCode": "037"
  }, {
    "name": "Dornod",
    "shortCode": "061"
  }, {
    "name": "Dornogovi",
    "shortCode": "063"
  }, {
    "name": "Dundgovi",
    "shortCode": "059"
  }, {
    "name": "Dzavhan",
    "shortCode": "065"
  }, {
    "name": "Govi-Altay",
    "shortCode": "065"
  }, {
    "name": "Govi-Sumber",
    "shortCode": "064"
  }, {
    "name": "Hovd",
    "shortCode": "043"
  }, {
    "name": "Hovsgol",
    "shortCode": "041"
  }, {
    "name": "Omnogovi",
    "shortCode": "053"
  }, {
    "name": "Ovorhangay",
    "shortCode": "055"
  }, {
    "name": "Selenge",
    "shortCode": "049"
  }, {
    "name": "Suhbaatar",
    "shortCode": "051"
  }, {
    "name": "Tov",
    "shortCode": "047"
  }, {
    "name": "Ulaanbaatar",
    "shortCode": "1"
  }, {
    "name": "Uvs",
    "shortCode": "046"
  }]
}, {
  "countryname": "Montenegro",
  "countryShortCode": "ME",
  "regions": [{
    "name": "Andrijevica",
    "shortCode": "01"
  }, {
    "name": "Bar",
    "shortCode": "02"
  }, {
    "name": "Berane",
    "shortCode": "03"
  }, {
    "name": "Bijelo Polje",
    "shortCode": "04"
  }, {
    "name": "Budva",
    "shortCode": "05"
  }, {
    "name": "Cetinje",
    "shortCode": "06"
  }, {
    "name": "Danilovgrad",
    "shortCode": "07"
  }, {
    "name": "Gusinje",
    "shortCode": "22"
  }, {
    "name": "Herceg Novi",
    "shortCode": "08"
  }, {
    "name": "Kola??in",
    "shortCode": "09"
  }, {
    "name": "Kotor",
    "shortCode": "10"
  }, {
    "name": "Mojkovac",
    "shortCode": "11"
  }, {
    "name": "Nik??i??",
    "shortCode": "12"
  }, {
    "name": "Petnica",
    "shortCode": "23"
  }, {
    "name": "Plav",
    "shortCode": "13"
  }, {
    "name": "Plu??ine",
    "shortCode": "14"
  }, {
    "name": "Pljevlja",
    "shortCode": "15"
  }, {
    "name": "Podgorica",
    "shortCode": "16"
  }, {
    "name": "Ro??aje",
    "shortCode": "17"
  }, {
    "name": "??avnik",
    "shortCode": "18"
  }, {
    "name": "Tivat",
    "shortCode": "19"
  }, {
    "name": "Ulcinj",
    "shortCode": "20"
  }, {
    "name": "??abljak",
    "shortCode": "21"
  }]
}, {
  "countryname": "Montserrat",
  "countryShortCode": "MS",
  "regions": [{
    "name": "Saint Anthony"
  }, {
    "name": "Saint Georges"
  }, {
    "name": "Saint Peter's"
  }]
}, {
  "countryname": "Morocco",
  "countryShortCode": "MA",
  "regions": [{
    "name": "Chaouia-Ouardigha",
    "shortCode": "09"
  }, {
    "name": "Doukhala-Abda",
    "shortCode": "10"
  }, {
    "name": "F??s-Boulemane",
    "shortCode": "05"
  }, {
    "name": "Gharb-Chrarda-Beni Hssen",
    "shortCode": "02"
  }, {
    "name": "Grand Casablanca",
    "shortCode": "08"
  }, {
    "name": "Guelmim-Es Semara",
    "shortCode": "14"
  }, {
    "name": "La??youne-Boujdour-Sakia el Hamra",
    "shortCode": "15"
  }, {
    "name": "Marrakech-Tensift-Al Haouz",
    "shortCode": "11"
  }, {
    "name": "Mekn??s-Tafilalet",
    "shortCode": "06"
  }, {
    "name": "Oriental",
    "shortCode": "04"
  }, {
    "name": "Oued ed Dahab-Lagouira",
    "shortCode": "16"
  }, {
    "name": "Souss-Massa-Dr??a",
    "shortCode": "13"
  }, {
    "name": "Tadla-Azilal",
    "shortCode": "12"
  }, {
    "name": "Tanger-T??touan",
    "shortCode": "01"
  }, {
    "name": "Taza-Al Hoceima-Taounate",
    "shortCode": "03"
  }]
}, {
  "countryname": "Mozambique",
  "countryShortCode": "MZ",
  "regions": [{
    "name": "Cabo Delgado",
    "shortCode": "P"
  }, {
    "name": "Gaza",
    "shortCode": "G"
  }, {
    "name": "Inhambane",
    "shortCode": "I"
  }, {
    "name": "Manica",
    "shortCode": "B"
  }, {
    "name": "Maputo",
    "shortCode": "L"
  }, {
    "name": "Maputo (City)",
    "shortCode": "MPM"
  }, {
    "name": "Nampula",
    "shortCode": "N"
  }, {
    "name": "Niassa",
    "shortCode": "A"
  }, {
    "name": "Sofala",
    "shortCode": "S"
  }, {
    "name": "Tete",
    "shortCode": "T"
  }, {
    "name": "Zambezia",
    "shortCode": "Q"
  }]
}, {
  "countryname": "Myanmar",
  "countryShortCode": "MM",
  "regions": [{
    "name": "Ayeyarwady",
    "shortCode": "07"
  }, {
    "name": "Bago",
    "shortCode": "02"
  }, {
    "name": "Chin",
    "shortCode": "14"
  }, {
    "name": "Kachin",
    "shortCode": "11"
  }, {
    "name": "Kayah",
    "shortCode": "12"
  }, {
    "name": "Kayin",
    "shortCode": "13"
  }, {
    "name": "Magway",
    "shortCode": "03"
  }, {
    "name": "Mandalay",
    "shortCode": "04"
  }, {
    "name": "Mon",
    "shortCode": "15"
  }, {
    "name": "Nay Pyi Taw",
    "shortCode": "18"
  }, {
    "name": "Rakhine",
    "shortCode": "16"
  }, {
    "name": "Sagaing",
    "shortCode": "01"
  }, {
    "name": "Shan",
    "shortCode": "17"
  }, {
    "name": "Tanintharyi",
    "shortCode": "05"
  }, {
    "name": "Yangon",
    "shortCode": "06"
  }]
}, {
  "countryname": "Namibia",
  "countryShortCode": "NA",
  "regions": [{
    "name": "Erongo",
    "shortCode": "ER"
  }, {
    "name": "Hardap",
    "shortCode": "HA"
  }, {
    "name": "Kavango East",
    "shortCode": "KE"
  }, {
    "name": "Kavango West",
    "shortCode": "KW"
  }, {
    "name": "Karas",
    "shortCode": "KA"
  }, {
    "name": "Khomas",
    "shortCode": "KH"
  }, {
    "name": "Kunene",
    "shortCode": "KU"
  }, {
    "name": "Ohangwena",
    "shortCode": "OW"
  }, {
    "name": "Omaheke",
    "shortCode": "OH"
  }, {
    "name": "Omusati",
    "shortCode": "OS"
  }, {
    "name": "Oshana",
    "shortCode": "ON"
  }, {
    "name": "Oshikoto",
    "shortCode": "OT"
  }, {
    "name": "Otjozondjupa",
    "shortCode": "OD"
  }, {
    "name": "Zambezi",
    "shortCode": "CA"
  }]
}, {
  "countryname": "Nauru",
  "countryShortCode": "NR",
  "regions": [{
    "name": "Aiwo",
    "shortCode": "01"
  }, {
    "name": "Anabar",
    "shortCode": "02"
  }, {
    "name": "Anetan",
    "shortCode": "03"
  }, {
    "name": "Anibare",
    "shortCode": "04"
  }, {
    "name": "Baiti",
    "shortCode": "05"
  }, {
    "name": "Boe",
    "shortCode": "06"
  }, {
    "name": "Buada",
    "shortCode": "07"
  }, {
    "name": "Denigomodu",
    "shortCode": "08"
  }, {
    "name": "Ewa",
    "shortCode": "09"
  }, {
    "name": "Ijuw",
    "shortCode": "10"
  }, {
    "name": "Meneng",
    "shortCode": "11"
  }, {
    "name": "Nibok",
    "shortCode": "12"
  }, {
    "name": "Uaboe",
    "shortCode": "13"
  }, {
    "name": "Yaren",
    "shortCode": "14"
  }]
}, {
  "countryname": "Nepal",
  "countryShortCode": "NP",
  "regions": [{
    "name": "Bagmati",
    "shortCode": "BA"
  }, {
    "name": "Bheri",
    "shortCode": "BH"
  }, {
    "name": "Dhawalagiri",
    "shortCode": "DH"
  }, {
    "name": "Gandaki",
    "shortCode": "GA"
  }, {
    "name": "Janakpur",
    "shortCode": "JA"
  }, {
    "name": "Karnali",
    "shortCode": "KA"
  }, {
    "name": "Kosi",
    "shortCode": "KO"
  }, {
    "name": "Lumbini",
    "shortCode": "LU"
  }, {
    "name": "Mahakali",
    "shortCode": "MA"
  }, {
    "name": "Mechi",
    "shortCode": "ME"
  }, {
    "name": "Narayani",
    "shortCode": "NA"
  }, {
    "name": "Rapti",
    "shortCode": "RA"
  }, {
    "name": "Sagarmatha",
    "shortCode": "SA"
  }, {
    "name": "Seti",
    "shortCode": "SE"
  }]
}, {
  "countryname": "Netherlands",
  "countryShortCode": "NL",
  "regions": [{
    "name": "Drenthe",
    "shortCode": "DR"
  }, {
    "name": "Flevoland",
    "shortCode": "FL"
  }, {
    "name": "Friesland",
    "shortCode": "FR"
  }, {
    "name": "Gelderland",
    "shortCode": "GE"
  }, {
    "name": "Groningen",
    "shortCode": "GR"
  }, {
    "name": "Limburg",
    "shortCode": "LI"
  }, {
    "name": "Noord-Brabant",
    "shortCode": "NB"
  }, {
    "name": "Noord-Holland",
    "shortCode": "NH"
  }, {
    "name": "Overijssel",
    "shortCode": "OV"
  }, {
    "name": "Utrecht",
    "shortCode": "UT"
  }, {
    "name": "Zeeland",
    "shortCode": "ZE"
  }, {
    "name": "Zuid-Holland",
    "shortCode": "ZH"
  }]
}, {
  "countryname": "New Caledonia",
  "countryShortCode": "NC",
  "regions": [{
    "name": "Iles Loyaute"
  }, {
    "name": "Nord"
  }, {
    "name": "Sud"
  }]
}, {
  "countryname": "New Zealand",
  "countryShortCode": "NZ",
  "regions": [{
    "name": "Auckland",
    "shortCode": "AUK"
  }, {
    "name": "Bay of Plenty",
    "shortCode": "BOP"
  }, {
    "name": "Canterbury",
    "shortCode": "CAN"
  }, {
    "name": "Gisborne",
    "shortCode": "GIS"
  }, {
    "name": "Hawke's Bay",
    "shortCode": "HKB"
  }, {
    "name": "Marlborough",
    "shortCode": "MBH"
  }, {
    "name": "Manawatu-Wanganui",
    "shortCode": "MWT"
  }, {
    "name": "Northland",
    "shortCode": "NTL"
  }, {
    "name": "Nelson",
    "shortCode": "NSN"
  }, {
    "name": "Otago",
    "shortCode": "OTA"
  }, {
    "name": "Southland",
    "shortCode": "STL"
  }, {
    "name": "Taranaki",
    "shortCode": "TKI"
  }, {
    "name": "Tasman",
    "shortCode": "TAS"
  }, {
    "name": "Waikato",
    "shortCode": "WKO"
  }, {
    "name": "Wellington",
    "shortCode": "WGN"
  }, {
    "name": "West Coast",
    "shortCode": "WTC"
  }, {
    "name": "Chatham Islands Territory",
    "shortCode": "CIT"
  }]
}, {
  "countryname": "Nicaragua",
  "countryShortCode": "NI",
  "regions": [{
    "name": "Boaco",
    "shortCode": "BO"
  }, {
    "name": "Carazo",
    "shortCode": "CA"
  }, {
    "name": "Chinandega",
    "shortCode": "CI"
  }, {
    "name": "Chontales",
    "shortCode": "CO"
  }, {
    "name": "Estel??",
    "shortCode": "ES"
  }, {
    "name": "Granada",
    "shortCode": "GR"
  }, {
    "name": "Jinotega",
    "shortCode": "JI"
  }, {
    "name": "Le??n",
    "shortCode": "LE"
  }, {
    "name": "Madriz",
    "shortCode": "MD"
  }, {
    "name": "Managua",
    "shortCode": "MN"
  }, {
    "name": "Masaya",
    "shortCode": "MS"
  }, {
    "name": "Matagalpa",
    "shortCode": "MT"
  }, {
    "name": "Nueva Segovia",
    "shortCode": "NS"
  }, {
    "name": "R??o San Juan",
    "shortCode": "SJ"
  }, {
    "name": "Rivas",
    "shortCode": "RI"
  }, {
    "name": "Atl??ntico Norte",
    "shortCode": "AN"
  }, {
    "name": "Atl??ntico Sur",
    "shortCode": "AS"
  }]
}, {
  "countryname": "Niger",
  "countryShortCode": "NE",
  "regions": [{
    "name": "Agadez",
    "shortCode": "1"
  }, {
    "name": "Diffa",
    "shortCode": "2"
  }, {
    "name": "Dosso",
    "shortCode": "3"
  }, {
    "name": "Maradi",
    "shortCode": "4"
  }, {
    "name": "Niamey",
    "shortCode": "8"
  }, {
    "name": "Tahoua",
    "shortCode": "5"
  }, {
    "name": "Tillab??ri",
    "shortCode": "6"
  }, {
    "name": "Zinder",
    "shortCode": "7"
  }]
}, {
  "countryname": "Nigeria",
  "countryShortCode": "NG",
  "regions": [{
    "name": "Abia",
    "shortCode": "AB"
  }, {
    "name": "Abuja Federal Capital Territory",
    "shortCode": "FC"
  }, {
    "name": "Adamawa",
    "shortCode": "AD"
  }, {
    "name": "Akwa Ibom",
    "shortCode": "AK"
  }, {
    "name": "Anambra",
    "shortCode": "AN"
  }, {
    "name": "Bauchi",
    "shortCode": "BA"
  }, {
    "name": "Bayelsa",
    "shortCode": "BY"
  }, {
    "name": "Benue",
    "shortCode": "BE"
  }, {
    "name": "Borno",
    "shortCode": "BO"
  }, {
    "name": "Cross River",
    "shortCode": "CR"
  }, {
    "name": "Delta",
    "shortCode": "DE"
  }, {
    "name": "Ebonyi",
    "shortCode": "EB"
  }, {
    "name": "Edo",
    "shortCode": "ED"
  }, {
    "name": "Ekiti",
    "shortCode": "EK"
  }, {
    "name": "Enugu",
    "shortCode": "EN"
  }, {
    "name": "Gombe",
    "shortCode": "GO"
  }, {
    "name": "Imo",
    "shortCode": "IM"
  }, {
    "name": "Jigawa",
    "shortCode": "JI"
  }, {
    "name": "Kaduna",
    "shortCode": "KD"
  }, {
    "name": "Kano",
    "shortCode": "KN"
  }, {
    "name": "Katsina",
    "shortCode": "KT"
  }, {
    "name": "Kebbi",
    "shortCode": "KE"
  }, {
    "name": "Kogi",
    "shortCode": "KO"
  }, {
    "name": "Kwara",
    "shortCode": "KW"
  }, {
    "name": "Lagos",
    "shortCode": "LA"
  }, {
    "name": "Nassarawa",
    "shortCode": "NA"
  }, {
    "name": "Niger",
    "shortCode": "NI"
  }, {
    "name": "Ogun",
    "shortCode": "OG"
  }, {
    "name": "Ondo",
    "shortCode": "ON"
  }, {
    "name": "Osun",
    "shortCode": "OS"
  }, {
    "name": "Oyo",
    "shortCode": "OY"
  }, {
    "name": "Plateau",
    "shortCode": "PL"
  }, {
    "name": "Rivers",
    "shortCode": "RI"
  }, {
    "name": "Sokoto",
    "shortCode": "SO"
  }, {
    "name": "Taraba",
    "shortCode": "TA"
  }, {
    "name": "Yobe",
    "shortCode": "YO"
  }, {
    "name": "Zamfara",
    "shortCode": "ZA"
  }]
}, {
  "countryname": "Niue",
  "countryShortCode": "NU",
  "regions": [{
    "name": "Niue"
  }]
}, {
  "countryname": "Norfolk Island",
  "countryShortCode": "NF",
  "regions": [{
    "name": "Norfolk Island"
  }]
}, {
  "countryname": "Northern Mariana Islands",
  "countryShortCode": "MP",
  "regions": [{
    "name": "Northern Islands"
  }, {
    "name": "Rota"
  }, {
    "name": "Saipan"
  }, {
    "name": "Tinian"
  }]
}, {
  "countryname": "Norway",
  "countryShortCode": "NO",
  "regions": [{
    "name": "Akershus",
    "shortCode": "02"
  }, {
    "name": "Aust-Agder",
    "shortCode": "09"
  }, {
    "name": "Buskerud",
    "shortCode": "06"
  }, {
    "name": "Finnmark",
    "shortCode": "20"
  }, {
    "name": "Hedmark",
    "shortCode": "04"
  }, {
    "name": "Hordaland",
    "shortCode": "12"
  }, {
    "name": "M??re og Romsdal",
    "shortCode": "15"
  }, {
    "name": "Nordland",
    "shortCode": "18"
  }, {
    "name": "Nord-Tr??ndelag",
    "shortCode": "17"
  }, {
    "name": "Oppland",
    "shortCode": "05"
  }, {
    "name": "Oslo",
    "shortCode": "03"
  }, {
    "name": "Rogaland",
    "shortCode": "11"
  }, {
    "name": "Sogn og Fjordane",
    "shortCode": "14"
  }, {
    "name": "S??r-Tr??ndelag",
    "shortCode": "16"
  }, {
    "name": "Telemark",
    "shortCode": "08"
  }, {
    "name": "Troms",
    "shortCode": "19"
  }, {
    "name": "Vest-Agder",
    "shortCode": "10"
  }, {
    "name": "Vestfold",
    "shortCode": "07"
  }, {
    "name": "??stfold",
    "shortCode": "01"
  }, {
    "name": "Jan Mayen",
    "shortCode": "22"
  }, {
    "name": "Svalbard",
    "shortCode": "21"
  }]
}, {
  "countryname": "Oman",
  "countryShortCode": "OM",
  "regions": [{
    "name": "Ad Dakhiliyah",
    "shortCode": "DA"
  }, {
    "name": "Al Buraymi",
    "shortCode": "BU"
  }, {
    "name": "Al Wusta",
    "shortCode": "WU"
  }, {
    "name": "Az Zahirah",
    "shortCode": "ZA"
  }, {
    "name": "Janub al Batinah",
    "shortCode": "BS"
  }, {
    "name": "Janub ash Sharqiyah",
    "shortCode": "SS"
  }, {
    "name": "Masqat",
    "shortCode": "MA"
  }, {
    "name": "Musandam",
    "shortCode": "MU"
  }, {
    "name": "Shamal al Batinah",
    "shortCode": "BJ"
  }, {
    "name": "Shamal ash Sharqiyah",
    "shortCode": "SJ"
  }, {
    "name": "Zufar",
    "shortCode": "ZU"
  }]
}, {
  "countryname": "Pakistan",
  "countryShortCode": "PK",
  "regions": [{
    "name": "??z??d Kashm??r",
    "shortCode": "JK"
  }, {
    "name": "Bal??chist??n",
    "shortCode": "BA"
  }, {
    "name": "Gilgit-Baltist??n",
    "shortCode": "GB"
  }, {
    "name": "Isl??m??b??d",
    "shortCode": "IS"
  }, {
    "name": "Kha??bar Pakht??nkhw??s",
    "shortCode": "KP"
  }, {
    "name": "Punj??b",
    "shortCode": "PB"
  }, {
    "name": "Sindh",
    "shortCode": "SD"
  }, {
    "name": "Federally Administered Tribal Areas",
    "shortCode": "TA"
  }]
}, {
  "countryname": "Palau",
  "countryShortCode": "PW",
  "regions": [{
    "name": "Aimeliik",
    "shortCode": "002"
  }, {
    "name": "Airai",
    "shortCode": "004"
  }, {
    "name": "Angaur",
    "shortCode": "010"
  }, {
    "name": "Hatobohei",
    "shortCode": "050"
  }, {
    "name": "Kayangel",
    "shortCode": "100"
  }, {
    "name": "Koror",
    "shortCode": "150"
  }, {
    "name": "Melekeok",
    "shortCode": "212"
  }, {
    "name": "Ngaraard",
    "shortCode": "214"
  }, {
    "name": "Ngarchelong",
    "shortCode": "218"
  }, {
    "name": "Ngardmau",
    "shortCode": "222"
  }, {
    "name": "Ngatpang",
    "shortCode": "224"
  }, {
    "name": "Ngchesar",
    "shortCode": "226"
  }, {
    "name": "Ngeremlengui",
    "shortCode": "227"
  }, {
    "name": "Ngiwal",
    "shortCode": "228"
  }, {
    "name": "Peleliu",
    "shortCode": "350"
  }, {
    "name": "Sonsoral",
    "shortCode": "350"
  }]
}, {
  "countryname": "Palestine, State of",
  "countryShortCode": "PS",
  "regions": [{
    "name": "Ak Khal??l",
    "shortCode": "HBN"
  }, {
    "name": "Al Quds",
    "shortCode": "JEM"
  }, {
    "name": "Ar??????? wal Aghw??r",
    "shortCode": "JRH"
  }, {
    "name": "Bayt La???m",
    "shortCode": "BTH"
  }, {
    "name": "Dayr al Bala???",
    "shortCode": "DEB"
  }, {
    "name": "Ghazzah",
    "shortCode": "GZA"
  }, {
    "name": "Jan??n",
    "shortCode": "JEN"
  }, {
    "name": "Kh??n Y??nis",
    "shortCode": "KYS"
  }, {
    "name": "N??blus",
    "shortCode": "NBS"
  }, {
    "name": "Qalq??yah",
    "shortCode": "QQA"
  }, {
    "name": "Rafa???",
    "shortCode": "RFH"
  }, {
    "name": "R??m All??h wal B??rah",
    "shortCode": "RBH"
  }, {
    "name": "Salf??t",
    "shortCode": "SLT"
  }, {
    "name": "Sham??l Ghazzah",
    "shortCode": "NGZ"
  }, {
    "name": "????b??s",
    "shortCode": "TBS"
  }, {
    "name": "????lkarm",
    "shortCode": "TKM"
  }]
}, {
  "countryname": "Panama",
  "countryShortCode": "PA",
  "regions": [{
    "name": "Bocas del Toro",
    "shortCode": "1"
  }, {
    "name": "Chiriqu??",
    "shortCode": "4"
  }, {
    "name": "Cocl??",
    "shortCode": "2"
  }, {
    "name": "Col??n",
    "shortCode": "3"
  }, {
    "name": "Dari??n",
    "shortCode": "5"
  }, {
    "name": "Ember??",
    "shortCode": "EM"
  }, {
    "name": "Herrera",
    "shortCode": "6"
  }, {
    "name": "Kuna Yala",
    "shortCode": "KY"
  }, {
    "name": "Los Santos",
    "shortCode": "7"
  }, {
    "name": "Ng??be-Bugl??",
    "shortCode": "NB"
  }, {
    "name": "Panam??",
    "shortCode": "8"
  }, {
    "name": "Panam?? Oeste",
    "shortCode": "10"
  }, {
    "name": "Veraguas",
    "shortCode": "9"
  }]
}, {
  "countryname": "Papua New Guinea",
  "countryShortCode": "PG",
  "regions": [{
    "name": "Bougainville",
    "shortCode": "NSB"
  }, {
    "name": "Central",
    "shortCode": "CPM"
  }, {
    "name": "Chimbu",
    "shortCode": "CPK"
  }, {
    "name": "East New Britain",
    "shortCode": "EBR"
  }, {
    "name": "East Sepik",
    "shortCode": "ESW"
  }, {
    "name": "Eastern Highlands",
    "shortCode": "EHG"
  }, {
    "name": "Enga",
    "shortCode": "EPW"
  }, {
    "name": "Gulf",
    "shortCode": "GPK"
  }, {
    "name": "Hela",
    "shortCode": "HLA"
  }, {
    "name": "Jiwaka",
    "shortCode": "JWK"
  }, {
    "name": "Madang",
    "shortCode": "MOM"
  }, {
    "name": "Manus",
    "shortCode": "MRL"
  }, {
    "name": "Milne Bay",
    "shortCode": "MBA"
  }, {
    "name": "Morobe",
    "shortCode": "MPL"
  }, {
    "name": "Port Moresby",
    "shortCode": "NCD"
  }, {
    "name": "New Ireland",
    "shortCode": "NIK"
  }, {
    "name": "Northern",
    "shortCode": "NPP"
  }, {
    "name": "Southern Highlands",
    "shortCode": "SHM"
  }, {
    "name": "West New Britain",
    "shortCode": "WBK"
  }, {
    "name": "West Sepik",
    "shortCode": "SAN"
  }, {
    "name": "Western",
    "shortCode": "WPD"
  }, {
    "name": "Western Highlands",
    "shortCode": "WHM"
  }]
}, {
  "countryname": "Paraguay",
  "countryShortCode": "PY",
  "regions": [{
    "name": "Alto Paraguay",
    "shortCode": "16"
  }, {
    "name": "Alto Parana",
    "shortCode": "10"
  }, {
    "name": "Amambay",
    "shortCode": "13"
  }, {
    "name": "Asuncion",
    "shortCode": "ASU"
  }, {
    "name": "Caaguazu",
    "shortCode": "5"
  }, {
    "name": "Caazapa",
    "shortCode": "6"
  }, {
    "name": "Canindeyu",
    "shortCode": "14"
  }, {
    "name": "Central",
    "shortCode": "11"
  }, {
    "name": "Concepcion",
    "shortCode": "1"
  }, {
    "name": "Cordillera",
    "shortCode": "3"
  }, {
    "name": "Guaira",
    "shortCode": "4"
  }, {
    "name": "Itapua",
    "shortCode": "7"
  }, {
    "name": "Misiones",
    "shortCode": "8"
  }, {
    "name": "Neembucu",
    "shortCode": "12"
  }, {
    "name": "Paraguari",
    "shortCode": "9"
  }, {
    "name": "Presidente Hayes",
    "shortCode": "15"
  }, {
    "name": "San Pedro",
    "shortCode": "2"
  }]
}, {
  "countryname": "Peru",
  "countryShortCode": "PE",
  "regions": [{
    "name": "Amazonas",
    "shortCode": "AMA"
  }, {
    "name": "Ancash",
    "shortCode": "ANC"
  }, {
    "name": "Apurimac",
    "shortCode": "APU"
  }, {
    "name": "Arequipa",
    "shortCode": "ARE"
  }, {
    "name": "Ayacucho",
    "shortCode": "AYA"
  }, {
    "name": "Cajamarca",
    "shortCode": "CAJ"
  }, {
    "name": "Callao",
    "shortCode": "CAL"
  }, {
    "name": "Cusco",
    "shortCode": "CUS"
  }, {
    "name": "Huancavelica",
    "shortCode": "HUV"
  }, {
    "name": "Huanuco",
    "shortCode": "HUC"
  }, {
    "name": "Ica",
    "shortCode": "ICA"
  }, {
    "name": "Junin",
    "shortCode": "JUN"
  }, {
    "name": "La Libertad",
    "shortCode": "LAL"
  }, {
    "name": "Lambayeque",
    "shortCode": "LAM"
  }, {
    "name": "Lima",
    "shortCode": "LIM"
  }, {
    "name": "Loreto",
    "shortCode": "LOR"
  }, {
    "name": "Madre de Dios",
    "shortCode": "MDD"
  }, {
    "name": "Moquegua",
    "shortCode": "MOQ"
  }, {
    "name": "Municipalidad Metropolitana de Lima",
    "shortCode": "LMA"
  }, {
    "name": "Pasco",
    "shortCode": "PAS"
  }, {
    "name": "Piura",
    "shortCode": "PIU"
  }, {
    "name": "Puno",
    "shortCode": "PUN"
  }, {
    "name": "San Martin",
    "shortCode": "SAM"
  }, {
    "name": "Tacna",
    "shortCode": "TAC"
  }, {
    "name": "Tumbes",
    "shortCode": "TUM"
  }, {
    "name": "Ucayali",
    "shortCode": "UCA"
  }]
}, {
  "countryname": "Philippines",
  "countryShortCode": "PH",
  "regions": [{
    "name": "Abra",
    "shortCode": "ABR"
  }, {
    "name": "Agusan del Norte",
    "shortCode": "AGN"
  }, {
    "name": "Agusan del Sur",
    "shortCode": "AGS"
  }, {
    "name": "Aklan",
    "shortCode": "AKL"
  }, {
    "name": "Albay",
    "shortCode": "ALB"
  }, {
    "name": "Antique",
    "shortCode": "ANT"
  }, {
    "name": "Apayao",
    "shortCode": "APA"
  }, {
    "name": "Aurora",
    "shortCode": "AUR"
  }, {
    "name": "Basilan",
    "shortCode": "BAS"
  }, {
    "name": "Bataan",
    "shortCode": "BAN"
  }, {
    "name": "Batanes",
    "shortCode": "BTN"
  }, {
    "name": "Batangas",
    "shortCode": "BTG"
  }, {
    "name": "Benguet",
    "shortCode": "BEN"
  }, {
    "name": "Biliran",
    "shortCode": "BIL"
  }, {
    "name": "Bohol",
    "shortCode": "BOH"
  }, {
    "name": "Bukidnon",
    "shortCode": "BUK"
  }, {
    "name": "Bulacan",
    "shortCode": "BUL"
  }, {
    "name": "Cagayan",
    "shortCode": "CAG"
  }, {
    "name": "Camarines Norte",
    "shortCode": "CAN"
  }, {
    "name": "Camarines Sur",
    "shortCode": "CAS"
  }, {
    "name": "Camiguin",
    "shortCode": "CAM"
  }, {
    "name": "Capiz",
    "shortCode": "CAP"
  }, {
    "name": "Catanduanes",
    "shortCode": "CAT"
  }, {
    "name": "Cavite",
    "shortCode": "CAV"
  }, {
    "name": "Cebu",
    "shortCode": "CEB"
  }, {
    "name": "Compostela",
    "shortCode": "COM"
  }, {
    "name": "Cotabato",
    "shortCode": "NCO"
  }, {
    "name": "Davao del Norte",
    "shortCode": "DAV"
  }, {
    "name": "Davao del Sur",
    "shortCode": "DAS"
  }, {
    "name": "Davao Occidental",
    "shortCode": "DVO"
  }, {
    "name": "Davao Oriental",
    "shortCode": "DAO"
  }, {
    "name": "Dinagat Islands",
    "shortCode": "DIN"
  }, {
    "name": "Eastern Samar",
    "shortCode": "EAS"
  }, {
    "name": "Guimaras",
    "shortCode": "GUI"
  }, {
    "name": "Ifugao",
    "shortCode": "IFU"
  }, {
    "name": "Ilocos Norte",
    "shortCode": "ILN"
  }, {
    "name": "Ilocos Sur",
    "shortCode": "ILS"
  }, {
    "name": "Iloilo",
    "shortCode": "ILI"
  }, {
    "name": "Isabela",
    "shortCode": "ISA"
  }, {
    "name": "Kalinga",
    "shortCode": "KAL"
  }, {
    "name": "La Union",
    "shortCode": "LUN"
  }, {
    "name": "Laguna",
    "shortCode": "LAG"
  }, {
    "name": "Lanao del Norte",
    "shortCode": "LAN"
  }, {
    "name": "Lanao del Sur",
    "shortCode": "LAS"
  }, {
    "name": "Leyte",
    "shortCode": "LEY"
  }, {
    "name": "Maguindanao",
    "shortCode": "MAG"
  }, {
    "name": "Masbate",
    "shortCode": "MAS"
  }, {
    "name": "Metro Manila",
    "shortCode": "00"
  }, {
    "name": "Mindoro Occidental",
    "shortCode": "MDC"
  }, {
    "name": "Mindoro Oriental",
    "shortCode": "MDR"
  }, {
    "name": "Misamis Occidental",
    "shortCode": "MSC"
  }, {
    "name": "Misamis Oriental",
    "shortCode": "MSR"
  }, {
    "name": "Mountain Province",
    "shortCode": "MOU"
  }, {
    "name": "Negros Occidental",
    "shortCode": "NEC"
  }, {
    "name": "Negros Oriental",
    "shortCode": "NER"
  }, {
    "name": "Northern Samar",
    "shortCode": "NSA"
  }, {
    "name": "Nueva Ecija",
    "shortCode": "NUE"
  }, {
    "name": "Nueva Vizcaya",
    "shortCode": "NUV"
  }, {
    "name": "Palawan",
    "shortCode": "PLW"
  }, {
    "name": "Pampanga",
    "shortCode": "PAM"
  }, {
    "name": "Pangasinan",
    "shortCode": "PAN"
  }, {
    "name": "Quezon",
    "shortCode": "QUE"
  }, {
    "name": "Quirino",
    "shortCode": "QUI"
  }, {
    "name": "Rizal",
    "shortCode": "RIZ"
  }, {
    "name": "Romblon",
    "shortCode": "ROM"
  }, {
    "name": "Samar",
    "shortCode": "WSA"
  }, {
    "name": "Sarangani",
    "shortCode": "SAR"
  }, {
    "name": "Siquijor",
    "shortCode": "SIG"
  }, {
    "name": "Sorsogon",
    "shortCode": "SOR"
  }, {
    "name": "Southern Leyte",
    "shortCode": "SLE"
  }, {
    "name": "Sultan Kudarat",
    "shortCode": "AUK"
  }, {
    "name": "Sulu",
    "shortCode": "SLU"
  }, {
    "name": "Surigao del Norte",
    "shortCode": "SUN"
  }, {
    "name": "Surigao del Sur",
    "shortCode": "SUR"
  }, {
    "name": "Tarlac",
    "shortCode": "TAR"
  }, {
    "name": "Tawi-Tawi",
    "shortCode": "TAW"
  }, {
    "name": "Zambales",
    "shortCode": "ZMB"
  }, {
    "name": "Zamboanga del Norte",
    "shortCode": "ZAN"
  }, {
    "name": "Zamboanga del Sur",
    "shortCode": "ZAS"
  }, {
    "name": "Zamboanga Sibugay",
    "shortCode": "ZSI"
  }]
}, {
  "countryname": "Pitcairn",
  "countryShortCode": "PN",
  "regions": [{
    "name": "Pitcairn Islands"
  }]
}, {
  "countryname": "Poland",
  "countryShortCode": "PL",
  "regions": [{
    "name": "Dolno??l??skie",
    "shortCode": "DS"
  }, {
    "name": "Kujawsko-pomorskie",
    "shortCode": "KP"
  }, {
    "name": "????dzkie",
    "shortCode": "LD"
  }, {
    "name": "Lubelskie",
    "shortCode": "LU"
  }, {
    "name": "Lubuskie",
    "shortCode": "LB"
  }, {
    "name": "Malopolskie",
    "shortCode": "MA"
  }, {
    "name": "Mazowieckie",
    "shortCode": "MZ"
  }, {
    "name": "Opolskie",
    "shortCode": "OP"
  }, {
    "name": "Podkarpackie",
    "shortCode": "PK"
  }, {
    "name": "Podlaskie",
    "shortCode": "PD"
  }, {
    "name": "Pomorskie",
    "shortCode": "PM"
  }, {
    "name": "??l??skie",
    "shortCode": "SL"
  }, {
    "name": "??wi??tokrzyskie",
    "shortCode": "SK"
  }, {
    "name": "Warmi??sko-mazurskie",
    "shortCode": "WN"
  }, {
    "name": "Wielkopolskie",
    "shortCode": "WP"
  }, {
    "name": "Zachodniopomorskie",
    "shortCode": "ZP"
  }]
}, {
  "countryname": "Portugal",
  "countryShortCode": "PT",
  "regions": [{
    "name": "A??ores",
    "shortCode": "20"
  }, {
    "name": "Aveiro",
    "shortCode": "01"
  }, {
    "name": "Beja",
    "shortCode": "02"
  }, {
    "name": "Braga",
    "shortCode": "03"
  }, {
    "name": "Bragan??a",
    "shortCode": "04"
  }, {
    "name": "Castelo Branco",
    "shortCode": "05"
  }, {
    "name": "Coimbra",
    "shortCode": "06"
  }, {
    "name": "??vora",
    "shortCode": "07"
  }, {
    "name": "Faro",
    "shortCode": "08"
  }, {
    "name": "Guarda",
    "shortCode": "09"
  }, {
    "name": "Leiria",
    "shortCode": "10"
  }, {
    "name": "Lisboa",
    "shortCode": "11"
  }, {
    "name": "Madeira",
    "shortCode": "30"
  }, {
    "name": "Portalegre",
    "shortCode": "12"
  }, {
    "name": "Porto",
    "shortCode": "13"
  }, {
    "name": "Santar??m",
    "shortCode": "14"
  }, {
    "name": "Set??bal",
    "shortCode": "15"
  }, {
    "name": "Viana do Castelo",
    "shortCode": "16"
  }, {
    "name": "Vila Real",
    "shortCode": "17"
  }, {
    "name": "Viseu",
    "shortCode": "18"
  }]
}, {
  "countryname": "Puerto Rico",
  "countryShortCode": "PR",
  "regions": [{
    "name": "Adjuntas"
  }, {
    "name": "Aguada"
  }, {
    "name": "Aguadilla"
  }, {
    "name": "Aguas Buenas"
  }, {
    "name": "Aibonito"
  }, {
    "name": "Anasco"
  }, {
    "name": "Arecibo"
  }, {
    "name": "Arroyo"
  }, {
    "name": "Barceloneta"
  }, {
    "name": "Barranquitas"
  }, {
    "name": "Bayamon"
  }, {
    "name": "Cabo Rojo"
  }, {
    "name": "Caguas"
  }, {
    "name": "Camuy"
  }, {
    "name": "Canovanas"
  }, {
    "name": "Carolina"
  }, {
    "name": "Cat"
  }, {
    "name": "Ceiba"
  }, {
    "name": "Ciales"
  }, {
    "name": "Cidra"
  }, {
    "name": "Coamo"
  }, {
    "name": "Comerio"
  }, {
    "name": "Corozal"
  }, {
    "name": "Culebra"
  }, {
    "name": "Dorado"
  }, {
    "name": "Fajardo"
  }, {
    "name": "Florida"
  }, {
    "name": "Guanica"
  }, {
    "name": "Guayama"
  }, {
    "name": "Guayanilla"
  }, {
    "name": "Guaynabo"
  }, {
    "name": "Gurabo"
  }, {
    "name": "Hatillo"
  }, {
    "name": "Hormigueros"
  }, {
    "name": "Humacao"
  }, {
    "name": "Isabe"
  }, {
    "name": "Juana Diaz"
  }, {
    "name": "Juncos"
  }, {
    "name": "Lajas"
  }, {
    "name": "Lares"
  }, {
    "name": "Las Marias"
  }, {
    "name": "Las oiza"
  }, {
    "name": "Luquillo"
  }, {
    "name": "Manati"
  }, {
    "name": "Maricao"
  }, {
    "name": "Maunabo"
  }, {
    "name": "Mayaguez"
  }, {
    "name": "Moca"
  }, {
    "name": "Morovis"
  }, {
    "name": "Naguabo"
  }, {
    "name": "Naranjito"
  }, {
    "name": "Orocovis"
  }, {
    "name": "Patillas"
  }, {
    "name": "Penuelas"
  }, {
    "name": "Ponce"
  }, {
    "name": "Quebradillas"
  }, {
    "name": "Rincon"
  }, {
    "name": "Rio Grande"
  }, {
    "name": "Sabana linas"
  }, {
    "name": "San German"
  }, {
    "name": "San Juan"
  }, {
    "name": "San Lorenzo"
  }, {
    "name": "San Sebastian"
  }, {
    "name": "Santa Isabel"
  }, {
    "name": "Toa Alta"
  }, {
    "name": "Toa Baja"
  }, {
    "name": "Trujillo Alto"
  }, {
    "name": "Utuado"
  }, {
    "name": "Vega Alta"
  }, {
    "name": "Vega ues"
  }, {
    "name": "Villalba"
  }, {
    "name": "Yabucoa"
  }, {
    "name": "Yauco"
  }]
}, {
  "countryname": "Qatar",
  "countryShortCode": "QA",
  "regions": [{
    "name": "Ad Daw???ah",
    "shortCode": "DA"
  }, {
    "name": "Al Khawr wa adh Dhakh??rah",
    "shortCode": "KH"
  }, {
    "name": "Al Wakrah",
    "shortCode": "WA"
  }, {
    "name": "Ar Rayy??n",
    "shortCode": "RA"
  }, {
    "name": "Ash Sham??l",
    "shortCode": "MS"
  }, {
    "name": "Az?? Za??`??yin",
    "shortCode": "ZA"
  }, {
    "name": "Umm ??al??l",
    "shortCode": "US"
  }]
}, {
  "countryname": "R??union",
  "countryShortCode": "RE",
  "regions": [{
    "name": "R??union"
  }]
}, {
  "countryname": "Romania",
  "countryShortCode": "RO",
  "regions": [{
    "name": "Alba",
    "shortCode": "AB"
  }, {
    "name": "Arad",
    "shortCode": "AR"
  }, {
    "name": "Arges",
    "shortCode": "AG"
  }, {
    "name": "Bacau",
    "shortCode": "BC"
  }, {
    "name": "Bihor",
    "shortCode": "BH"
  }, {
    "name": "Bistrita-Nasaud",
    "shortCode": "BN"
  }, {
    "name": "Botosani",
    "shortCode": "BT"
  }, {
    "name": "Braila",
    "shortCode": "BR"
  }, {
    "name": "Brasov",
    "shortCode": "BV"
  }, {
    "name": "Bucuresti",
    "shortCode": "B"
  }, {
    "name": "Buzau",
    "shortCode": "BZ"
  }, {
    "name": "Calarasi",
    "shortCode": "CL"
  }, {
    "name": "Caras-Severin",
    "shortCode": "CS"
  }, {
    "name": "Cluj",
    "shortCode": "CJ"
  }, {
    "name": "Constanta",
    "shortCode": "CT"
  }, {
    "name": "Covasna",
    "shortCode": "CV"
  }, {
    "name": "Dambovita",
    "shortCode": "DB"
  }, {
    "name": "Dolj",
    "shortCode": "DJ"
  }, {
    "name": "Galati",
    "shortCode": "GL"
  }, {
    "name": "Giurgiu",
    "shortCode": "GR"
  }, {
    "name": "Gorj",
    "shortCode": "GJ"
  }, {
    "name": "Harghita",
    "shortCode": "HR"
  }, {
    "name": "Hunedoara",
    "shortCode": "HD"
  }, {
    "name": "Ialomita",
    "shortCode": "IL"
  }, {
    "name": "Iasi",
    "shortCode": "IS"
  }, {
    "name": "Maramures",
    "shortCode": "MM"
  }, {
    "name": "Mehedinti",
    "shortCode": "MH"
  }, {
    "name": "Mures",
    "shortCode": "MS"
  }, {
    "name": "Neamt",
    "shortCode": "NT"
  }, {
    "name": "Olt",
    "shortCode": "OT"
  }, {
    "name": "Prahova",
    "shortCode": "PH"
  }, {
    "name": "Salaj",
    "shortCode": "SJ"
  }, {
    "name": "Satu Mare",
    "shortCode": "SM"
  }, {
    "name": "Sibiu",
    "shortCode": "SB"
  }, {
    "name": "Suceava",
    "shortCode": "SV"
  }, {
    "name": "Teleorman",
    "shortCode": "TR"
  }, {
    "name": "Timis",
    "shortCode": "TM"
  }, {
    "name": "Tulcea",
    "shortCode": "TL"
  }, {
    "name": "Valcea",
    "shortCode": "VL"
  }, {
    "name": "Vaslui",
    "shortCode": "VS"
  }, {
    "name": "Vrancea",
    "shortCode": "VN"
  }]
}, {
  "countryname": "Russian Federation",
  "countryShortCode": "RU",
  "regions": [{
    "name": "Republic of Adygea",
    "shortCode": "AD"
  }, {
    "name": "Republic of Altai (Gorno-Altaysk)",
    "shortCode": "AL"
  }, {
    "name": "Altai Krai",
    "shortCode": "ALT"
  }, {
    "name": "Amur Oblast",
    "shortCode": "AMU"
  }, {
    "name": "Arkhangelsk Oblast",
    "shortCode": "ARK"
  }, {
    "name": "Astrakhan Oblast",
    "shortCode": "AST"
  }, {
    "name": "Republic of Bashkortostan",
    "shortCode": "BA"
  }, {
    "name": "Belgorod Oblast",
    "shortCode": "BEL"
  }, {
    "name": "Bryansk Oblast",
    "shortCode": "BRY"
  }, {
    "name": "Republic of Buryatia",
    "shortCode": "BU"
  }, {
    "name": "Chechen Republic",
    "shortCode": "CE"
  }, {
    "name": "Chelyabinsk Oblast",
    "shortCode": "CHE"
  }, {
    "name": "Chukotka Autonomous Okrug",
    "shortCode": "CHU"
  }, {
    "name": "Chuvash Republic",
    "shortCode": "CU"
  }, {
    "name": "Republic of Dagestan",
    "shortCode": "DA"
  }, {
    "name": "Republic of Ingushetia",
    "shortCode": "IN"
  }, {
    "name": "Irkutsk Oblast",
    "shortCode": "IRK"
  }, {
    "name": "Ivanovo Oblast",
    "shortCode": "IVA"
  }, {
    "name": "Jewish Autonomous Oblast",
    "shortCode": "JEW"
  }, {
    "name": "Kabardino-Balkar Republic",
    "shortCode": "KB"
  }, {
    "name": "Kaliningrad Oblast",
    "shortCode": "KLN"
  }, {
    "name": "Republic of Kalmykia",
    "shortCode": "KL"
  }, {
    "name": "Kaluga Oblast",
    "shortCode": "KLU"
  }, {
    "name": "Kamchatka Krai",
    "shortCode": "KAM"
  }, {
    "name": "Karachay-Cherkess Republic",
    "shortCode": "KC"
  }, {
    "name": "Republic of Karelia",
    "shortCode": "KR"
  }, {
    "name": "Khabarovsk Krai",
    "shortCode": "KHA"
  }, {
    "name": "Republic of Khakassia",
    "shortCode": "KK"
  }, {
    "name": "Khanty-Mansi Autonomous Okrug - Yugra",
    "shortCode": "KHM"
  }, {
    "name": "Kemerovo Oblast",
    "shortCode": "KEM"
  }, {
    "name": "Kirov Oblast",
    "shortCode": "KIR"
  }, {
    "name": "Komi Republic",
    "shortCode": "KO"
  }, {
    "name": "Kostroma Oblast",
    "shortCode": "KOS"
  }, {
    "name": "Krasnodar Krai",
    "shortCode": "KDA"
  }, {
    "name": "Krasnoyarsk Krai",
    "shortCode": "KYA"
  }, {
    "name": "Kurgan Oblast",
    "shortCode": "KGN"
  }, {
    "name": "Kursk Oblast",
    "shortCode": "KRS"
  }, {
    "name": "Leningrad Oblast",
    "shortCode": "LEN"
  }, {
    "name": "Lipetsk Oblast",
    "shortCode": "LIP"
  }, {
    "name": "Magadan Oblast",
    "shortCode": "MAG"
  }, {
    "name": "Mari El Republic",
    "shortCode": "ME"
  }, {
    "name": "Republic of Mordovia",
    "shortCode": "MO"
  }, {
    "name": "Moscow Oblast",
    "shortCode": "MOS"
  }, {
    "name": "Moscow",
    "shortCode": "MOW"
  }, {
    "name": "Murmansk Oblast",
    "shortCode": "MU"
  }, {
    "name": "Nenets Autonomous Okrug",
    "shortCode": "NEN"
  }, {
    "name": "Nizhny Novgorod Oblast",
    "shortCode": "NIZ"
  }, {
    "name": "Novgorod Oblast",
    "shortCode": "NGR"
  }, {
    "name": "Novosibirsk Oblast",
    "shortCode": "NVS"
  }, {
    "name": "Omsk Oblast",
    "shortCode": "OMS"
  }, {
    "name": "Orenburg Oblast",
    "shortCode": "ORE"
  }, {
    "name": "Oryol Oblast",
    "shortCode": "ORL"
  }, {
    "name": "Penza Oblast",
    "shortCode": "PNZ"
  }, {
    "name": "Perm Krai",
    "shortCode": "PER"
  }, {
    "name": "Primorsky Krai",
    "shortCode": "PRI"
  }, {
    "name": "Pskov Oblast",
    "shortCode": "PSK"
  }, {
    "name": "Rostov Oblast",
    "shortCode": "ROS"
  }, {
    "name": "Ryazan Oblast",
    "shortCode": "RYA"
  }, {
    "name": "Saint Petersburg",
    "shortCode": "SPE"
  }, {
    "name": "Sakha (Yakutia) Republic",
    "shortCode": "SA"
  }, {
    "name": "Sakhalin Oblast",
    "shortCode": "SAK"
  }, {
    "name": "Samara Oblast",
    "shortCode": "SAM"
  }, {
    "name": "Saratov Oblast",
    "shortCode": "SAR"
  }, {
    "name": "Republic of North Ossetia-Alania",
    "shortCode": "NOA"
  }, {
    "name": "Smolensk Oblast",
    "shortCode": "SMO"
  }, {
    "name": "Stavropol Krai",
    "shortCode": "STA"
  }, {
    "name": "Sverdlovsk Oblast",
    "shortCode": "SVE"
  }, {
    "name": "Tambov Oblast",
    "shortCode": "TAM"
  }, {
    "name": "Republic of Tatarstan",
    "shortCode": "TA"
  }, {
    "name": "Tomsk Oblast",
    "shortCode": "TOM"
  }, {
    "name": "Tuva Republic",
    "shortCode": "TU"
  }, {
    "name": "Tula Oblast",
    "shortCode": "TUL"
  }, {
    "name": "Tver Oblast",
    "shortCode": "TVE"
  }, {
    "name": "Tyumen Oblast",
    "shortCode": "TYU"
  }, {
    "name": "Udmurt Republic",
    "shortCode": "UD"
  }, {
    "name": "Ulyanovsk Oblast",
    "shortCode": "ULY"
  }, {
    "name": "Vladimir Oblast",
    "shortCode": "VLA"
  }, {
    "name": "Volgograd Oblast",
    "shortCode": "VGG"
  }, {
    "name": "Vologda Oblast",
    "shortCode": "VLG"
  }, {
    "name": "Voronezh Oblast",
    "shortCode": "VOR"
  }, {
    "name": "Yamalo-Nenets Autonomous Okrug",
    "shortCode": "YAN"
  }, {
    "name": "Yaroslavl Oblast",
    "shortCode": "YAR"
  }, {
    "name": "Zabaykalsky Krai",
    "shortCode": "ZAB"
  }]
}, {
  "countryname": "Rwanda",
  "countryShortCode": "RW",
  "regions": [{
    "name": "Kigali",
    "shortCode": "01"
  }, {
    "name": "Eastern",
    "shortCode": "02"
  }, {
    "name": "Northern",
    "shortCode": "03"
  }, {
    "name": "Western",
    "shortCode": "04"
  }, {
    "name": "Southern",
    "shortCode": "05"
  }]
}, {
  "countryname": "Saint Barth??lemy",
  "countryShortCode": "BL",
  "regions": [{
    "name": "Au Vent",
    "shortCode": "02"
  }, {
    "name": "Sous le Vent",
    "shortCode": "01"
  }]
}, {
  "countryname": "Saint Helena, Ascension and Tristan da Cunha",
  "countryShortCode": "SH",
  "regions": [{
    "name": "Ascension",
    "shortCode": "AC"
  }, {
    "name": "Saint Helena",
    "shortCode": "HL"
  }, {
    "name": "Tristan da Cunha",
    "shortCode": "TA"
  }]
}, {
  "countryname": "Saint Kitts and Nevis",
  "countryShortCode": "KN",
  "regions": [{
    "name": "Saint Kitts",
    "shortCode": "K"
  }, {
    "name": "Nevis",
    "shortCode": "N"
  }]
}, {
  "countryname": "Saint Lucia",
  "countryShortCode": "LC",
  "regions": [{
    "name": "Anse-la-Raye",
    "shortCode": "01"
  }, {
    "name": "Canaries",
    "shortCode": "12"
  }, {
    "name": "Castries",
    "shortCode": "02"
  }, {
    "name": "Choiseul",
    "shortCode": "03"
  }, {
    "name": "Dennery",
    "shortCode": "05"
  }, {
    "name": "Gros Islet",
    "shortCode": "06"
  }, {
    "name": "Laborie",
    "shortCode": "07"
  }, {
    "name": "Micoud",
    "shortCode": "08"
  }, {
    "name": "Soufriere",
    "shortCode": "10"
  }, {
    "name": "Vieux Fort",
    "shortCode": "11"
  }]
}, {
  "countryname": "Saint Martin",
  "countryShortCode": "MF",
  "regions": [{
    "name": "Saint Martin"
  }]
}, {
  "countryname": "Saint Pierre and Miquelon",
  "countryShortCode": "PM",
  "regions": [{
    "name": "Miquelon"
  }, {
    "name": "Saint Pierre"
  }]
}, {
  "countryname": "Saint Vincent and the Grenadines",
  "countryShortCode": "VC",
  "regions": [{
    "name": "Charlotte",
    "shortCode": "01"
  }, {
    "name": "Grenadines",
    "shortCode": "06"
  }, {
    "name": "Saint Andrew",
    "shortCode": "02"
  }, {
    "name": "Saint David",
    "shortCode": "03"
  }, {
    "name": "Saint George",
    "shortCode": "04"
  }, {
    "name": "Saint Patrick",
    "shortCode": "05"
  }]
}, {
  "countryname": "Samoa",
  "countryShortCode": "WS",
  "regions": [{
    "name": "A'ana",
    "shortCode": "AA"
  }, {
    "name": "Aiga-i-le-Tai",
    "shortCode": "AL"
  }, {
    "name": "Atua",
    "shortCode": "AT"
  }, {
    "name": "Fa'asaleleaga",
    "shortCode": "FA"
  }, {
    "name": "Gaga'emauga",
    "shortCode": "GE"
  }, {
    "name": "Gagaifomauga",
    "shortCode": "GI"
  }, {
    "name": "Palauli",
    "shortCode": "PA"
  }, {
    "name": "Satupa'itea",
    "shortCode": "SA"
  }, {
    "name": "Tuamasaga",
    "shortCode": "TU"
  }, {
    "name": "Va'a-o-Fonoti",
    "shortCode": "VF"
  }, {
    "name": "Vaisigano",
    "shortCode": "VS"
  }]
}, {
  "countryname": "San Marino",
  "countryShortCode": "SM",
  "regions": [{
    "name": "Acquaviva",
    "shortCode": "01"
  }, {
    "name": "Borgo Maggiore",
    "shortCode": "06"
  }, {
    "name": "Chiesanuova",
    "shortCode": "02"
  }, {
    "name": "Domagnano",
    "shortCode": "03"
  }, {
    "name": "Faetano",
    "shortCode": "04"
  }, {
    "name": "Fiorentino",
    "shortCode": "05"
  }, {
    "name": "Montegiardino",
    "shortCode": "08"
  }, {
    "name": "San Marino",
    "shortCode": "07"
  }, {
    "name": "Serravalle",
    "shortCode": "09"
  }]
}, {
  "countryname": "Sao Tome and Principe",
  "countryShortCode": "ST",
  "regions": [{
    "name": "Principe",
    "shortCode": "P"
  }, {
    "name": "Sao Tome",
    "shortCode": "S"
  }]
}, {
  "countryname": "Saudi Arabia",
  "countryShortCode": "SA",
  "regions": [{
    "name": "'Asir",
    "shortCode": "14"
  }, {
    "name": "Al Bahah",
    "shortCode": "11"
  }, {
    "name": "Al Hudud ash Shamaliyah",
    "shortCode": "08"
  }, {
    "name": "Al Jawf",
    "shortCode": "12"
  }, {
    "name": "Al Madinah al Munawwarah",
    "shortCode": "03"
  }, {
    "name": "Al Qasim",
    "shortCode": "05"
  }, {
    "name": "Ar Riyad",
    "shortCode": "01"
  }, {
    "name": "Ash Sharqiyah",
    "shortCode": "04"
  }, {
    "name": "Ha'il",
    "shortCode": "06"
  }, {
    "name": "Jazan",
    "shortCode": "09"
  }, {
    "name": "Makkah al Mukarramah",
    "shortCode": "02"
  }, {
    "name": "Najran",
    "shortCode": "10"
  }, {
    "name": "Tabuk",
    "shortCode": "07"
  }]
}, {
  "countryname": "Senegal",
  "countryShortCode": "SN",
  "regions": [{
    "name": "Dakar",
    "shortCode": "DK"
  }, {
    "name": "Diourbel",
    "shortCode": "DB"
  }, {
    "name": "Fatick",
    "shortCode": "FK"
  }, {
    "name": "Kaffrine",
    "shortCode": "KA"
  }, {
    "name": "Kaolack",
    "shortCode": "KL"
  }, {
    "name": "Kedougou",
    "shortCode": "KE"
  }, {
    "name": "Kolda",
    "shortCode": "KD"
  }, {
    "name": "Louga",
    "shortCode": "LG"
  }, {
    "name": "Matam",
    "shortCode": "MT"
  }, {
    "name": "Saint-Louis",
    "shortCode": "SL"
  }, {
    "name": "Sedhiou",
    "shortCode": "SE"
  }, {
    "name": "Tambacounda",
    "shortCode": "TC"
  }, {
    "name": "Thies",
    "shortCode": "TH"
  }, {
    "name": "Ziguinchor",
    "shortCode": "ZG"
  }]
}, {
  "countryname": "Serbia",
  "countryShortCode": "RS",
  "regions": [{
    "name": "Beograd (Belgrade)",
    "shortCode": "00"
  }, {
    "name": "Borski",
    "shortCode": "14"
  }, {
    "name": "Brani??evski",
    "shortCode": "11"
  }, {
    "name": "Jablani??ki",
    "shortCode": "23"
  }, {
    "name": "Ju??noba??ki",
    "shortCode": "06"
  }, {
    "name": "Ju??nobanatski",
    "shortCode": "04"
  }, {
    "name": "Kolubarski",
    "shortCode": "09"
  }, {
    "name": "Kosovski",
    "shortCode": "25"
  }, {
    "name": "Kosovsko-Mitrova??ki",
    "shortCode": "28"
  }, {
    "name": "Kosovsko-Pomoravski",
    "shortCode": "29"
  }, {
    "name": "Ma??vanski",
    "shortCode": "08"
  }, {
    "name": "Moravi??ki",
    "shortCode": "17"
  }, {
    "name": "Ni??avski",
    "shortCode": "20"
  }, {
    "name": "P??injski",
    "shortCode": "24"
  }, {
    "name": "Pe??ki",
    "shortCode": "26"
  }, {
    "name": "Pirotski",
    "shortCode": "22"
  }, {
    "name": "Podunavski",
    "shortCode": "10"
  }, {
    "name": "Pomoravski",
    "shortCode": "13"
  }, {
    "name": "Prizrenski",
    "shortCode": "27"
  }, {
    "name": "Rasinski",
    "shortCode": "19"
  }, {
    "name": "Ra??ki",
    "shortCode": "18"
  }, {
    "name": "Severnoba??ki",
    "shortCode": "01"
  }, {
    "name": "Severnobanatski",
    "shortCode": "03"
  }, {
    "name": "Srednjebanatski",
    "shortCode": "02"
  }, {
    "name": "Sremski",
    "shortCode": "07"
  }, {
    "name": "??umadijski",
    "shortCode": "12"
  }, {
    "name": "Topli??ki",
    "shortCode": "21"
  }, {
    "name": "Zaje??arski",
    "shortCode": "15"
  }, {
    "name": "Zapadnoba??ki",
    "shortCode": "05"
  }, {
    "name": "Zlatiborski",
    "shortCode": "16"
  }]
}, {
  "countryname": "Seychelles",
  "countryShortCode": "SC",
  "regions": [{
    "name": "Anse aux Pins",
    "shortCode": "01"
  }, {
    "name": "Anse Boileau",
    "shortCode": "02"
  }, {
    "name": "Anse Etoile",
    "shortCode": "03"
  }, {
    "name": "Anse Royale",
    "shortCode": "05"
  }, {
    "name": "Anu Cap",
    "shortCode": "04"
  }, {
    "name": "Baie Lazare",
    "shortCode": "06"
  }, {
    "name": "Baie Sainte Anne",
    "shortCode": "07"
  }, {
    "name": "Beau Vallon",
    "shortCode": "08"
  }, {
    "name": "Bel Air",
    "shortCode": "09"
  }, {
    "name": "Bel Ombre",
    "shortCode": "10"
  }, {
    "name": "Cascade",
    "shortCode": "11"
  }, {
    "name": "Glacis",
    "shortCode": "12"
  }, {
    "name": "Grand'Anse Mahe",
    "shortCode": "13"
  }, {
    "name": "Grand'Anse Praslin",
    "shortCode": "14"
  }, {
    "name": "La Digue",
    "shortCode": "15"
  }, {
    "name": "La Riviere Anglaise",
    "shortCode": "16"
  }, {
    "name": "Les Mamelles",
    "shortCode": "24"
  }, {
    "name": "Mont Buxton",
    "shortCode": "17"
  }, {
    "name": "Mont Fleuri",
    "shortCode": "18"
  }, {
    "name": "Plaisance",
    "shortCode": "19"
  }, {
    "name": "Pointe La Rue",
    "shortCode": "20"
  }, {
    "name": "Port Glaud",
    "shortCode": "21"
  }, {
    "name": "Roche Caiman",
    "shortCode": "25"
  }, {
    "name": "Saint Louis",
    "shortCode": "22"
  }, {
    "name": "Takamaka",
    "shortCode": "23"
  }]
}, {
  "countryname": "Sierra Leone",
  "countryShortCode": "SL",
  "regions": [{
    "name": "Eastern",
    "shortCode": "E"
  }, {
    "name": "Northern",
    "shortCode": "N"
  }, {
    "name": "Southern",
    "shortCode": "S"
  }, {
    "name": "Western",
    "shortCode": "W"
  }]
}, {
  "countryname": "Singapore",
  "countryShortCode": "SG",
  "regions": [{
    "name": "Central Singapore",
    "shortCode": "01"
  }, {
    "name": "North East",
    "shortCode": "02"
  }, {
    "name": "North West",
    "shortCode": "03"
  }, {
    "name": "South East",
    "shortCode": "04"
  }, {
    "name": "South West",
    "shortCode": "05"
  }]
}, {
  "countryname": "Sint Maarten (Dutch part)",
  "countryShortCode": "SX",
  "regions": [{
    "name": "Sint Maarten"
  }]
}, {
  "countryname": "Slovakia",
  "countryShortCode": "SK",
  "regions": [{
    "name": "Banskobystricky",
    "shortCode": "BC"
  }, {
    "name": "Bratislavsky",
    "shortCode": "BL"
  }, {
    "name": "Kosicky",
    "shortCode": "KI"
  }, {
    "name": "Nitriansky",
    "shortCode": "NI"
  }, {
    "name": "Presovsky",
    "shortCode": "PV"
  }, {
    "name": "Trenciansky",
    "shortCode": "TC"
  }, {
    "name": "Trnavsky",
    "shortCode": "TA"
  }, {
    "name": "Zilinsky",
    "shortCode": "ZI"
  }]
}, {
  "countryname": "Slovenia",
  "countryShortCode": "SI",
  "regions": [{
    "name": "Ajdovscina",
    "shortCode": "001"
  }, {
    "name": "Apace",
    "shortCode": "195"
  }, {
    "name": "Beltinci",
    "shortCode": "002"
  }, {
    "name": "Benedikt",
    "shortCode": "148"
  }, {
    "name": "Bistrica ob Sotli",
    "shortCode": "149"
  }, {
    "name": "Bled",
    "shortCode": "003"
  }, {
    "name": "Bloke",
    "shortCode": "150"
  }, {
    "name": "Bohinj",
    "shortCode": "004"
  }, {
    "name": "Borovnica",
    "shortCode": "005"
  }, {
    "name": "Bovec",
    "shortCode": "006"
  }, {
    "name": "Braslovce",
    "shortCode": "151"
  }, {
    "name": "Brda",
    "shortCode": "007"
  }, {
    "name": "Brezice",
    "shortCode": "009"
  }, {
    "name": "Brezovica",
    "shortCode": "008"
  }, {
    "name": "Cankova",
    "shortCode": "152"
  }, {
    "name": "Celje",
    "shortCode": "011"
  }, {
    "name": "Cerklje na Gorenjskem",
    "shortCode": "012"
  }, {
    "name": "Cerknica",
    "shortCode": "013"
  }, {
    "name": "Cerkno",
    "shortCode": "014"
  }, {
    "name": "Cerkvenjak",
    "shortCode": "153"
  }, {
    "name": "Cirkulane",
    "shortCode": "196"
  }, {
    "name": "Crensovci",
    "shortCode": "015"
  }, {
    "name": "Crna na Koroskem",
    "shortCode": "016"
  }, {
    "name": "Crnomelj",
    "shortCode": "017"
  }, {
    "name": "Destrnik",
    "shortCode": "018"
  }, {
    "name": "Divaca",
    "shortCode": "019"
  }, {
    "name": "Dobje",
    "shortCode": "154"
  }, {
    "name": "Dobrepolje",
    "shortCode": "020"
  }, {
    "name": "Dobrna",
    "shortCode": "155"
  }, {
    "name": "Dobrova-Polhov Gradec",
    "shortCode": "021"
  }, {
    "name": "Dobrovnik",
    "shortCode": "156"
  }, {
    "name": "Dol pri Ljubljani",
    "shortCode": "022"
  }, {
    "name": "Dolenjske Toplice",
    "shortCode": "157"
  }, {
    "name": "Domzale",
    "shortCode": "023"
  }, {
    "name": "Dornava",
    "shortCode": "024"
  }, {
    "name": "Dravograd",
    "shortCode": "025"
  }, {
    "name": "Duplek",
    "shortCode": "026"
  }, {
    "name": "Gorenja Vas-Poljane",
    "shortCode": "027"
  }, {
    "name": "Gorisnica",
    "shortCode": "028"
  }, {
    "name": "Gorje",
    "shortCode": "207"
  }, {
    "name": "Gornja Radgona",
    "shortCode": "029"
  }, {
    "name": "Gornji Grad",
    "shortCode": "030"
  }, {
    "name": "Gornji Petrovci",
    "shortCode": "031"
  }, {
    "name": "Grad",
    "shortCode": "158"
  }, {
    "name": "Grosuplje",
    "shortCode": "032"
  }, {
    "name": "Hajdina",
    "shortCode": "159"
  }, {
    "name": "Hoce-Slivnica",
    "shortCode": "160"
  }, {
    "name": "Hodos",
    "shortCode": "161"
  }, {
    "name": "Horjul",
    "shortCode": "162"
  }, {
    "name": "Hrastnik",
    "shortCode": "034"
  }, {
    "name": "Hrpelje-Kozina",
    "shortCode": "035"
  }, {
    "name": "Idrija",
    "shortCode": "036"
  }, {
    "name": "Ig",
    "shortCode": "037"
  }, {
    "name": "Ilirska Bistrica",
    "shortCode": "038"
  }, {
    "name": "Ivancna Gorica",
    "shortCode": "039"
  }, {
    "name": "Izola",
    "shortCode": "040s"
  }, {
    "name": "Jesenice",
    "shortCode": "041"
  }, {
    "name": "Jursinci",
    "shortCode": "042"
  }, {
    "name": "Kamnik",
    "shortCode": "043"
  }, {
    "name": "Kanal",
    "shortCode": "044"
  }, {
    "name": "Kidricevo",
    "shortCode": "045"
  }, {
    "name": "Kobarid",
    "shortCode": "046"
  }, {
    "name": "Kobilje",
    "shortCode": "047"
  }, {
    "name": "Kocevje",
    "shortCode": "048"
  }, {
    "name": "Komen",
    "shortCode": "049"
  }, {
    "name": "Komenda",
    "shortCode": "164"
  }, {
    "name": "Koper",
    "shortCode": "050"
  }, {
    "name": "Kodanjevica na Krki",
    "shortCode": "197"
  }, {
    "name": "Kostel",
    "shortCode": "165"
  }, {
    "name": "Kozje",
    "shortCode": "051"
  }, {
    "name": "Kranj",
    "shortCode": "052"
  }, {
    "name": "Kranjska Gora",
    "shortCode": "053"
  }, {
    "name": "Krizevci",
    "shortCode": "166"
  }, {
    "name": "Krsko",
    "shortCode": "054"
  }, {
    "name": "Kungota",
    "shortCode": "055"
  }, {
    "name": "Kuzma",
    "shortCode": "056"
  }, {
    "name": "Lasko",
    "shortCode": "057"
  }, {
    "name": "Lenart",
    "shortCode": "058"
  }, {
    "name": "Lendava",
    "shortCode": "059"
  }, {
    "name": "Litija",
    "shortCode": "068"
  }, {
    "name": "Ljubljana",
    "shortCode": "061"
  }, {
    "name": "Ljubno",
    "shortCode": "062"
  }, {
    "name": "Ljutomer",
    "shortCode": "063"
  }, {
    "name": "Log-Dragomer",
    "shortCode": "208"
  }, {
    "name": "Logatec",
    "shortCode": "064"
  }, {
    "name": "Loska Dolina",
    "shortCode": "065"
  }, {
    "name": "Loski Potok",
    "shortCode": "066"
  }, {
    "name": "Lovrenc na Pohorju",
    "shortCode": "167"
  }, {
    "name": "Lukovica",
    "shortCode": "068"
  }, {
    "name": "Luce",
    "shortCode": "067"
  }, {
    "name": "Majsperk",
    "shortCode": "069"
  }, {
    "name": "Makole",
    "shortCode": "198"
  }, {
    "name": "Maribor",
    "shortCode": "070"
  }, {
    "name": "Markovci",
    "shortCode": "168"
  }, {
    "name": "Medvode",
    "shortCode": "071"
  }, {
    "name": "Menges",
    "shortCode": "072"
  }, {
    "name": "Metlika",
    "shortCode": "073"
  }, {
    "name": "Mezica",
    "shortCode": "074"
  }, {
    "name": "Miklavz na Dravskem Polju",
    "shortCode": "169"
  }, {
    "name": "Miren-Kostanjevica",
    "shortCode": "075"
  }, {
    "name": "Mirna",
    "shortCode": "212"
  }, {
    "name": "Mirna Pec",
    "shortCode": "170"
  }, {
    "name": "Mislinja",
    "shortCode": "076"
  }, {
    "name": "Mokronog-Trebelno",
    "shortCode": "199"
  }, {
    "name": "Moravce",
    "shortCode": "077"
  }, {
    "name": "Moravske Toplice",
    "shortCode": "078"
  }, {
    "name": "Mozirje",
    "shortCode": "079"
  }, {
    "name": "Murska Sobota",
    "shortCode": "080"
  }, {
    "name": "Naklo",
    "shortCode": "082"
  }, {
    "name": "Nazarje",
    "shortCode": "083"
  }, {
    "name": "Nova Gorica",
    "shortCode": "084"
  }, {
    "name": "Novo Mesto",
    "shortCode": "085"
  }, {
    "name": "Odranci",
    "shortCode": "086"
  }, {
    "name": "Ormoz",
    "shortCode": "087"
  }, {
    "name": "Osilnica",
    "shortCode": "088"
  }, {
    "name": "Pesnica",
    "shortCode": "089"
  }, {
    "name": "Piran",
    "shortCode": "090"
  }, {
    "name": "Pivka",
    "shortCode": "091"
  }, {
    "name": "Podcetrtek",
    "shortCode": "092"
  }, {
    "name": "Podlehnik",
    "shortCode": "172"
  }, {
    "name": "Podvelka",
    "shortCode": "093"
  }, {
    "name": "Poljcane",
    "shortCode": "200"
  }, {
    "name": "Postojna",
    "shortCode": "094"
  }, {
    "name": "Prebold",
    "shortCode": "174"
  }, {
    "name": "Preddvor",
    "shortCode": "095"
  }, {
    "name": "Prevalje",
    "shortCode": "175"
  }, {
    "name": "Ptuj",
    "shortCode": "096"
  }, {
    "name": "Race-Fram",
    "shortCode": "098"
  }, {
    "name": "Radece",
    "shortCode": "099"
  }, {
    "name": "Radenci",
    "shortCode": "100"
  }, {
    "name": "Radlje ob Dravi",
    "shortCode": "101"
  }, {
    "name": "Radovljica",
    "shortCode": "102"
  }, {
    "name": "Ravne na Koroskem",
    "shortCode": "103"
  }, {
    "name": "Razkrizje",
    "shortCode": "176"
  }, {
    "name": "Recica ob Savinji",
    "shortCode": "209"
  }, {
    "name": "Rence-Vogrsko",
    "shortCode": "201"
  }, {
    "name": "Ribnica",
    "shortCode": "104"
  }, {
    "name": "Ribnica na Poboriu",
    "shortCode": "177"
  }, {
    "name": "Rogaska Slatina",
    "shortCode": "106"
  }, {
    "name": "Rogasovci",
    "shortCode": "105"
  }, {
    "name": "Rogatec",
    "shortCode": "107"
  }, {
    "name": "Ruse",
    "shortCode": "108"
  }, {
    "name": "Salovci",
    "shortCode": "033"
  }, {
    "name": "Selnica ob Dravi",
    "shortCode": "178"
  }, {
    "name": "Semic",
    "shortCode": "109"
  }, {
    "name": "Sempeter-Vrtojba",
    "shortCode": "183"
  }, {
    "name": "Sencur",
    "shortCode": "117"
  }, {
    "name": "Sentilj",
    "shortCode": "118"
  }, {
    "name": "Sentjernej",
    "shortCode": "119"
  }, {
    "name": "Sentjur",
    "shortCode": "120"
  }, {
    "name": "Sentrupert",
    "shortCode": "211"
  }, {
    "name": "Sevnica",
    "shortCode": "110"
  }, {
    "name": "Sezana",
    "shortCode": "111"
  }, {
    "name": "Skocjan",
    "shortCode": "121"
  }, {
    "name": "Skofja Loka",
    "shortCode": "122"
  }, {
    "name": "Skofljica",
    "shortCode": "123"
  }, {
    "name": "Slovenj Gradec",
    "shortCode": "112"
  }, {
    "name": "Slovenska Bistrica",
    "shortCode": "113"
  }, {
    "name": "Slovenske Konjice",
    "shortCode": "114"
  }, {
    "name": "Smarje pri elsah",
    "shortCode": "124"
  }, {
    "name": "Smarjeske Toplice",
    "shortCode": "206"
  }, {
    "name": "Smartno ob Paki",
    "shortCode": "125"
  }, {
    "name": "Smartno pri Litiji",
    "shortCode": "194"
  }, {
    "name": "Sodrazica",
    "shortCode": "179"
  }, {
    "name": "Solcava",
    "shortCode": "180"
  }, {
    "name": "Sostanj",
    "shortCode": "126"
  }, {
    "name": "Sredisce ob Dravi",
    "shortCode": "202"
  }, {
    "name": "Starse",
    "shortCode": "115"
  }, {
    "name": "Store",
    "shortCode": "127"
  }, {
    "name": "Straza",
    "shortCode": "203"
  }, {
    "name": "Sveta Ana",
    "shortCode": "181"
  }, {
    "name": "Sveta Trojica v Slovenskih Goricah",
    "shortCode": "204"
  }, {
    "name": "Sveta Andraz v Slovenskih Goricah",
    "shortCode": "182"
  }, {
    "name": "Sveti Jurij",
    "shortCode": "116"
  }, {
    "name": "Sveti Jurij v Slovenskih Goricah",
    "shortCode": "210"
  }, {
    "name": "Sveti Tomaz",
    "shortCode": "205"
  }, {
    "name": "Tabor",
    "shortCode": "184"
  }, {
    "name": "Tisina",
    "shortCode": "128"
  }, {
    "name": "Tolmin",
    "shortCode": "128"
  }, {
    "name": "Trbovlje",
    "shortCode": "129"
  }, {
    "name": "Trebnje",
    "shortCode": "130"
  }, {
    "name": "Trnovska Vas",
    "shortCode": "185"
  }, {
    "name": "Trzin",
    "shortCode": "186"
  }, {
    "name": "Trzic",
    "shortCode": "131"
  }, {
    "name": "Turnisce",
    "shortCode": "132"
  }, {
    "name": "Velenje",
    "shortCode": "133"
  }, {
    "name": "Velika Polana",
    "shortCode": "187"
  }, {
    "name": "Velike Lasce",
    "shortCode": "134"
  }, {
    "name": "Verzej",
    "shortCode": "188"
  }, {
    "name": "Videm",
    "shortCode": "135"
  }, {
    "name": "Vipava",
    "shortCode": "136"
  }, {
    "name": "Vitanje",
    "shortCode": "137"
  }, {
    "name": "Vodice",
    "shortCode": "138"
  }, {
    "name": "Vojnik",
    "shortCode": "139"
  }, {
    "name": "Vransko",
    "shortCode": "189"
  }, {
    "name": "Vrhnika",
    "shortCode": "140"
  }, {
    "name": "Vuzenica",
    "shortCode": "141"
  }, {
    "name": "Zagorje ob Savi",
    "shortCode": "142"
  }, {
    "name": "Zavrc",
    "shortCode": "143"
  }, {
    "name": "Zrece",
    "shortCode": "144"
  }, {
    "name": "Zalec",
    "shortCode": "190"
  }, {
    "name": "Zelezniki",
    "shortCode": "146"
  }, {
    "name": "Zetale",
    "shortCode": "191"
  }, {
    "name": "Ziri",
    "shortCode": "147"
  }, {
    "name": "Zirovnica",
    "shortCode": "192"
  }, {
    "name": "Zuzemberk",
    "shortCode": "193"
  }]
}, {
  "countryname": "Solomon Islands",
  "countryShortCode": "SB",
  "regions": [{
    "name": "Central",
    "shortCode": "CE"
  }, {
    "name": "Choiseul",
    "shortCode": "CH"
  }, {
    "name": "Guadalcanal",
    "shortCode": "GU"
  }, {
    "name": "Honiara",
    "shortCode": "CT"
  }, {
    "name": "Isabel",
    "shortCode": "IS"
  }, {
    "name": "Makira-Ulawa",
    "shortCode": "MK"
  }, {
    "name": "Malaita",
    "shortCode": "ML"
  }, {
    "name": "Rennell and Bellona",
    "shortCode": "RB"
  }, {
    "name": "Temotu",
    "shortCode": "TE"
  }, {
    "name": "Western",
    "shortCode": "WE"
  }]
}, {
  "countryname": "Somalia",
  "countryShortCode": "SO",
  "regions": [{
    "name": "Awdal",
    "shortCode": "AW"
  }, {
    "name": "Bakool",
    "shortCode": "BK"
  }, {
    "name": "Banaadir",
    "shortCode": "BN"
  }, {
    "name": "Bari",
    "shortCode": "BR"
  }, {
    "name": "Bay",
    "shortCode": "BY"
  }, {
    "name": "Galguduud",
    "shortCode": "GA"
  }, {
    "name": "Gedo",
    "shortCode": "GE"
  }, {
    "name": "Hiiraan",
    "shortCode": "HI"
  }, {
    "name": "Jubbada Dhexe",
    "shortCode": "JD"
  }, {
    "name": "Jubbada Hoose",
    "shortCode": "JH"
  }, {
    "name": "Mudug",
    "shortCode": "MU"
  }, {
    "name": "Nugaal",
    "shortCode": "NU"
  }, {
    "name": "Sanaag",
    "shortCode": "SA"
  }, {
    "name": "Shabeellaha Dhexe",
    "shortCode": "SD"
  }, {
    "name": "Shabeellaha Hoose",
    "shortCode": "SH"
  }, {
    "name": "Sool",
    "shortCode": "SO"
  }, {
    "name": "Togdheer",
    "shortCode": "TO"
  }, {
    "name": "Woqooyi Galbeed",
    "shortCode": "WO"
  }]
}, {
  "countryname": "South Africa",
  "countryShortCode": "ZA",
  "regions": [{
    "name": "Eastern Cape",
    "shortCode": "EC"
  }, {
    "name": "Free State",
    "shortCode": "FS"
  }, {
    "name": "Gauteng",
    "shortCode": "GT"
  }, {
    "name": "KwaZulu-Natal",
    "shortCode": "NL"
  }, {
    "name": "Limpopo",
    "shortCode": "LP"
  }, {
    "name": "Mpumalanga",
    "shortCode": "MP"
  }, {
    "name": "Northern Cape",
    "shortCode": "NC"
  }, {
    "name": "North West",
    "shortCode": "NW"
  }, {
    "name": "Western Cape",
    "shortCode": "WC"
  }]
}, {
  "countryname": "South Georgia and South Sandwich Islands",
  "countryShortCode": "GS",
  "regions": [{
    "name": "Bird Island"
  }, {
    "name": "Bristol Island"
  }, {
    "name": "Clerke Rocks"
  }, {
    "name": "Montagu Island"
  }, {
    "name": "Saunders Island"
  }, {
    "name": "South Georgia"
  }, {
    "name": "Southern Thule"
  }, {
    "name": "Traversay Islands"
  }]
}, {
  "countryname": "South Sudan",
  "countryShortCode": "SS",
  "regions": [{
    "name": "Central Equatoria",
    "shortCode": "CE"
  }, {
    "name": "Eastern Equatoria",
    "shortCode": "EE"
  }, {
    "name": "Jonglei",
    "shortCode": "JG"
  }, {
    "name": "Lakes",
    "shortCode": "LK"
  }, {
    "name": "Northern Bahr el Ghazal",
    "shortCode": "BN"
  }, {
    "name": "Unity",
    "shortCode": "UY"
  }, {
    "name": "Upper Nile",
    "shortCode": "NU"
  }, {
    "name": "Warrap",
    "shortCode": "WR"
  }, {
    "name": "Western Bahr el Ghazal",
    "shortCode": "BW"
  }, {
    "name": "Western Equatoria",
    "shortCode": "EW"
  }]
}, {
  "countryname": "Spain",
  "countryShortCode": "ES",
  "regions": [{
    "name": "Albacete",
    "shortCode": "CM"
  }, {
    "name": "Alicante",
    "shortCode": "VC"
  }, {
    "name": "Almer??a",
    "shortCode": "AN"
  }, {
    "name": "Araba/??lava",
    "shortCode": "VI"
  }, {
    "name": "Asturias",
    "shortCode": "O"
  }, {
    "name": "??vila",
    "shortCode": "AV"
  }, {
    "name": "Badajoz",
    "shortCode": "BA"
  }, {
    "name": "Barcelona",
    "shortCode": "B"
  }, {
    "name": "Bizkaia",
    "shortCode": "BI"
  }, {
    "name": "Burgos",
    "shortCode": "BU"
  }, {
    "name": "C??ceres",
    "shortCode": "CC"
  }, {
    "name": "C??diz",
    "shortCode": "CA"
  }, {
    "name": "Cantabria",
    "shortCode": "S"
  }, {
    "name": "Castell??n",
    "shortCode": "CS"
  }, {
    "name": "Cueta",
    "shortCode": "CU"
  }, {
    "name": "Ciudad Real",
    "shortCode": "CR"
  }, {
    "name": "C??rdoba",
    "shortCode": "CO"
  }, {
    "name": "A Coru??a",
    "shortCode": "C"
  }, {
    "name": "Cuenca",
    "shortCode": "CU"
  }, {
    "name": "Gipuzkoa",
    "shortCode": "SS"
  }, {
    "name": "Girona",
    "shortCode": "GI"
  }, {
    "name": "Granada",
    "shortCode": "GR"
  }, {
    "name": "Guadalajara",
    "shortCode": "GU"
  }, {
    "name": "Huelva",
    "shortCode": "H"
  }, {
    "name": "Huesca",
    "shortCode": "HU"
  }, {
    "name": "Illes Balears",
    "shortCode": "PM"
  }, {
    "name": "Ja??n",
    "shortCode": "J"
  }, {
    "name": "Le??n",
    "shortCode": "LE"
  }, {
    "name": "Lleida",
    "shortCode": "L"
  }, {
    "name": "Lugo",
    "shortCode": "LU"
  }, {
    "name": "Madrid",
    "shortCode": "M"
  }, {
    "name": "M??laga",
    "shortCode": "MA"
  }, {
    "name": "Melilla",
    "shortCode": "ML"
  }, {
    "name": "Murcia",
    "shortCode": "MU"
  }, {
    "name": "Navarre",
    "shortCode": "NA"
  }, {
    "name": "Ourense",
    "shortCode": "OR"
  }, {
    "name": "Palencia",
    "shortCode": "P"
  }, {
    "name": "Las Palmas",
    "shortCode": "GC"
  }, {
    "name": "Pontevedra",
    "shortCode": "PO"
  }, {
    "name": "La Rioja",
    "shortCode": "LO"
  }, {
    "name": "Salamanca",
    "shortCode": "SA"
  }, {
    "name": "Santa Cruz de Tenerife",
    "shortCode": "TF"
  }, {
    "name": "Segovia",
    "shortCode": "SG"
  }, {
    "name": "Sevilla",
    "shortCode": "SE"
  }, {
    "name": "Soria",
    "shortCode": "SO"
  }, {
    "name": "Tarragona",
    "shortCode": "T"
  }, {
    "name": "Teruel",
    "shortCode": "TE"
  }, {
    "name": "Toledo",
    "shortCode": "TO"
  }, {
    "name": "Valencia",
    "shortCode": "V"
  }, {
    "name": "Valladolid",
    "shortCode": "VA"
  }, {
    "name": "Zamora",
    "shortCode": "ZA"
  }, {
    "name": "Zaragoza",
    "shortCode": "Z"
  }]
}, {
  "countryname": "Sri Lanka",
  "countryShortCode": "LK",
  "regions": [{
    "name": "Basnahira",
    "shortCode": "1"
  }, {
    "name": "Dakunu",
    "shortCode": "3"
  }, {
    "name": "Madhyama",
    "shortCode": "2"
  }, {
    "name": "Naegenahira",
    "shortCode": "5"
  }, {
    "name": "Sabaragamuwa",
    "shortCode": "9"
  }, {
    "name": "Uturu",
    "shortCode": "4"
  }, {
    "name": "Uturumaeda",
    "shortCode": "7"
  }, {
    "name": "Vayamba",
    "shortCode": "6"
  }, {
    "name": "Uva",
    "shortCode": "8"
  }]
}, {
  "countryname": "Sudan",
  "countryShortCode": "SD",
  "regions": [{
    "name": "Al Bahr al Ahmar",
    "shortCode": "RS"
  }, {
    "name": "Al Jazirah",
    "shortCode": "GZ"
  }, {
    "name": "Al Khartum",
    "shortCode": "KH"
  }, {
    "name": "Al Qadarif",
    "shortCode": "GD"
  }, {
    "name": "An Nil al Abyad",
    "shortCode": "NW"
  }, {
    "name": "An Nil al Azraq",
    "shortCode": "NB"
  }, {
    "name": "Ash Shamaliyah",
    "shortCode": "NO"
  }, {
    "name": "Gharb Darfur",
    "shortCode": "DW"
  }, {
    "name": "Gharb Kurdufan",
    "shortCode": "GK"
  }, {
    "name": "Janub Darfur",
    "shortCode": "DS"
  }, {
    "name": "Janub Kurdufan",
    "shortCode": "KS"
  }, {
    "name": "Kassala",
    "shortCode": "KA"
  }, {
    "name": "Nahr an Nil",
    "shortCode": "NR"
  }, {
    "name": "Shamal Darfur",
    "shortCode": "DN"
  }, {
    "name": "Sharq Darfur",
    "shortCode": "DE"
  }, {
    "name": "Shiamal Kurdufan",
    "shortCode": "KN"
  }, {
    "name": "Sinnar",
    "shortCode": "SI"
  }, {
    "name": "Wasat Darfur Zalinjay",
    "shortCode": "DC"
  }]
}, {
  "countryname": "Suriname",
  "countryShortCode": "SR",
  "regions": [{
    "name": "Brokopondo",
    "shortCode": "BR"
  }, {
    "name": "Commewijne",
    "shortCode": "CM"
  }, {
    "name": "Coronie",
    "shortCode": "CR"
  }, {
    "name": "Marowijne",
    "shortCode": "MA"
  }, {
    "name": "Nickerie",
    "shortCode": "NI"
  }, {
    "name": "Para",
    "shortCode": "PR"
  }, {
    "name": "Paramaribo",
    "shortCode": "PM"
  }, {
    "name": "Saramacca",
    "shortCode": "SA"
  }, {
    "name": "Sipaliwini",
    "shortCode": "SI"
  }, {
    "name": "Wanica",
    "shortCode": "WA"
  }]
}, {
  "countryname": "Swaziland",
  "countryShortCode": "SZ",
  "regions": [{
    "name": "Hhohho",
    "shortCode": "HH"
  }, {
    "name": "Lubombo",
    "shortCode": "LU"
  }, {
    "name": "Manzini",
    "shortCode": "MA"
  }, {
    "name": "Shiselweni",
    "shortCode": "SH"
  }]
}, {
  "countryname": "Sweden",
  "countryShortCode": "SE",
  "regions": [{
    "name": "Blekinge",
    "shortCode": "K"
  }, {
    "name": "Dalarna",
    "shortCode": "W"
  }, {
    "name": "G??vleborg",
    "shortCode": "X"
  }, {
    "name": "Gotland",
    "shortCode": "I"
  }, {
    "name": "Halland",
    "shortCode": "N"
  }, {
    "name": "J??mtland",
    "shortCode": "Z"
  }, {
    "name": "J??nk??ping",
    "shortCode": "F"
  }, {
    "name": "Kalmar",
    "shortCode": "H"
  }, {
    "name": "Kronoberg",
    "shortCode": "G"
  }, {
    "name": "Norrbotten",
    "shortCode": "BD"
  }, {
    "name": "??rebro",
    "shortCode": "T"
  }, {
    "name": "??sterg??tland",
    "shortCode": "E"
  }, {
    "name": "Sk??ne",
    "shortCode": "M"
  }, {
    "name": "S??dermanland",
    "shortCode": "D"
  }, {
    "name": "Stockholm",
    "shortCode": "AB"
  }, {
    "name": "Uppsala",
    "shortCode": "C"
  }, {
    "name": "V??rmland",
    "shortCode": "S"
  }, {
    "name": "V??sterbotten",
    "shortCode": "AC"
  }, {
    "name": "V??sternorrland",
    "shortCode": "Y"
  }, {
    "name": "V??stmanland",
    "shortCode": "U"
  }, {
    "name": "V??stra G??taland",
    "shortCode": "O"
  }]
}, {
  "countryname": "Switzerland",
  "countryShortCode": "CH",
  "regions": [{
    "name": "Aargau",
    "shortCode": "AG"
  }, {
    "name": "Appenzell Ausserrhoden",
    "shortCode": "AR"
  }, {
    "name": "Appenzell Innerhoden",
    "shortCode": "AI"
  }, {
    "name": "Basel-Landschaft",
    "shortCode": "BL"
  }, {
    "name": "Basel-Stadt",
    "shortCode": "BS"
  }, {
    "name": "Bern",
    "shortCode": "BE"
  }, {
    "name": "Fribourg",
    "shortCode": "FR"
  }, {
    "name": "Gen??ve",
    "shortCode": "GE"
  }, {
    "name": "Glarus",
    "shortCode": "GL"
  }, {
    "name": "Graub??nden",
    "shortCode": "GR"
  }, {
    "name": "Jura",
    "shortCode": "JU"
  }, {
    "name": "Luzern",
    "shortCode": "LU"
  }, {
    "name": "Neuch??tel",
    "shortCode": "NE"
  }, {
    "name": "Nidwalden",
    "shortCode": "NW"
  }, {
    "name": "Obwalden",
    "shortCode": "OW"
  }, {
    "name": "Sankt Gallen",
    "shortCode": "SG"
  }, {
    "name": "Schaffhausen",
    "shortCode": "SH"
  }, {
    "name": "Schwyz",
    "shortCode": "SZ"
  }, {
    "name": "Solothurn",
    "shortCode": "SO"
  }, {
    "name": "Thurgau",
    "shortCode": "TG"
  }, {
    "name": "Ticino",
    "shortCode": "TI"
  }, {
    "name": "Uri",
    "shortCode": "UR"
  }, {
    "name": "Valais",
    "shortCode": "VS"
  }, {
    "name": "Vaud",
    "shortCode": "VD"
  }, {
    "name": "Zug",
    "shortCode": "ZG"
  }, {
    "name": "Z??rich",
    "shortCode": "ZH"
  }]
}, {
  "countryname": "Syrian Arab Republic",
  "countryShortCode": "SY",
  "regions": [{
    "name": "Al Hasakah",
    "shortCode": "HA"
  }, {
    "name": "Al Ladhiqiyah",
    "shortCode": "LA"
  }, {
    "name": "Al Qunaytirah",
    "shortCode": "QU"
  }, {
    "name": "Ar Raqqah",
    "shortCode": "RA"
  }, {
    "name": "As Suwayda'",
    "shortCode": "SU"
  }, {
    "name": "Dar'a",
    "shortCode": "DR"
  }, {
    "name": "Dayr az Zawr",
    "shortCode": "DY"
  }, {
    "name": "Dimashq",
    "shortCode": "DI"
  }, {
    "name": "Halab",
    "shortCode": "HL"
  }, {
    "name": "Hamah",
    "shortCode": "HM"
  }, {
    "name": "Hims",
    "shortCode": "HI"
  }, {
    "name": "Idlib",
    "shortCode": "ID"
  }, {
    "name": "Rif Dimashq",
    "shortCode": "RD"
  }, {
    "name": "Tartus",
    "shortCode": "TA"
  }]
}, {
  "countryname": "Taiwan",
  "countryShortCode": "TW",
  "regions": [{
    "name": "Chang-hua",
    "shortCode": "CHA"
  }, {
    "name": "Chia-i",
    "shortCode": "CYQ"
  }, {
    "name": "Hsin-chu",
    "shortCode": "HSQ"
  }, {
    "name": "Hua-lien",
    "shortCode": "HUA"
  }, {
    "name": "Kao-hsiung",
    "shortCode": "KHH"
  }, {
    "name": "Keelung",
    "shortCode": "KEE"
  }, {
    "name": "Kinmen",
    "shortCode": "KIN"
  }, {
    "name": "Lienchiang",
    "shortCode": "LIE"
  }, {
    "name": "Miao-li",
    "shortCode": "MIA"
  }, {
    "name": "Nan-t'ou",
    "shortCode": "NAN"
  }, {
    "name": "P'eng-hu",
    "shortCode": "PEN"
  }, {
    "name": "New Taipei",
    "shortCode": "NWT"
  }, {
    "name": "P'ing-chung",
    "shortCode": "PIF"
  }, {
    "name": "T'ai-chung",
    "shortCode": "TXG"
  }, {
    "name": "T'ai-nan",
    "shortCode": "TNN"
  }, {
    "name": "T'ai-pei",
    "shortCode": "TPE"
  }, {
    "name": "T'ai-tung",
    "shortCode": "TTT"
  }, {
    "name": "T'ao-yuan",
    "shortCode": "TAO"
  }, {
    "name": "Yi-lan",
    "shortCode": "ILA"
  }, {
    "name": "Yun-lin",
    "shortCode": "YUN"
  }]
}, {
  "countryname": "Tajikistan",
  "countryShortCode": "TJ",
  "regions": [{
    "name": "Dushanbe",
    "shortCode": "DU"
  }, {
    "name": "K??histoni Badakhshon",
    "shortCode": "GB"
  }, {
    "name": "Khatlon",
    "shortCode": "KT"
  }, {
    "name": "Sughd",
    "shortCode": "SU"
  }]
}, {
  "countryname": "Tanzania, United Republic of",
  "countryShortCode": "TZ",
  "regions": [{
    "name": "Arusha",
    "shortCode": "01"
  }, {
    "name": "Coast",
    "shortCode": "19"
  }, {
    "name": "Dar es Salaam",
    "shortCode": "02"
  }, {
    "name": "Dodoma",
    "shortCode": "03"
  }, {
    "name": "Iringa",
    "shortCode": "04"
  }, {
    "name": "Kagera",
    "shortCode": "05"
  }, {
    "name": "Kigoma",
    "shortCode": "08"
  }, {
    "name": "Kilimanjaro",
    "shortCode": "09"
  }, {
    "name": "Lindi",
    "shortCode": "12"
  }, {
    "name": "Manyara",
    "shortCode": "26"
  }, {
    "name": "Mara",
    "shortCode": "13"
  }, {
    "name": "Mbeya",
    "shortCode": "14"
  }, {
    "name": "Morogoro",
    "shortCode": "16"
  }, {
    "name": "Mtwara",
    "shortCode": "17"
  }, {
    "name": "Mwanza",
    "shortCode": "18"
  }, {
    "name": "Pemba North",
    "shortCode": "06"
  }, {
    "name": "Pemba South",
    "shortCode": "10"
  }, {
    "name": "Rukwa",
    "shortCode": "20"
  }, {
    "name": "Ruvuma",
    "shortCode": "21"
  }, {
    "name": "Shinyanga",
    "shortCode": "22"
  }, {
    "name": "Singida",
    "shortCode": "23"
  }, {
    "name": "Tabora",
    "shortCode": "24"
  }, {
    "name": "Tanga",
    "shortCode": "25"
  }, {
    "name": "Zanzibar North",
    "shortCode": "07"
  }, {
    "name": "Zanzibar Central/South",
    "shortCode": "11"
  }, {
    "name": "Zanzibar Urban/West",
    "shortCode": "15"
  }]
}, {
  "countryname": "Thailand",
  "countryShortCode": "TH",
  "regions": [{
    "name": "Amnat Charoen",
    "shortCode": "37"
  }, {
    "name": "Ang Thong",
    "shortCode": "15"
  }, {
    "name": "Bueng Kan",
    "shortCode": "38"
  }, {
    "name": "Buri Ram",
    "shortCode": "31"
  }, {
    "name": "Chachoengsao",
    "shortCode": "24"
  }, {
    "name": "Chai Nat",
    "shortCode": "18"
  }, {
    "name": "Chaiyaphum",
    "shortCode": "36"
  }, {
    "name": "Chanthaburi",
    "shortCode": "22"
  }, {
    "name": "Chiang Mai",
    "shortCode": "50"
  }, {
    "name": "Chiang Rai",
    "shortCode": "57"
  }, {
    "name": "Chon Buri",
    "shortCode": "20"
  }, {
    "name": "Chumphon",
    "shortCode": "86"
  }, {
    "name": "Kalasin",
    "shortCode": "46"
  }, {
    "name": "Kamphaeng Phet",
    "shortCode": "62"
  }, {
    "name": "Kanchanaburi",
    "shortCode": "71"
  }, {
    "name": "Khon Kaen",
    "shortCode": "40"
  }, {
    "name": "Krabi",
    "shortCode": "81"
  }, {
    "name": "Krung Thep Mahanakhon (Bangkok)",
    "shortCode": "10"
  }, {
    "name": "Lampang",
    "shortCode": "52"
  }, {
    "name": "Lamphun",
    "shortCode": "51"
  }, {
    "name": "Loei",
    "shortCode": "42"
  }, {
    "name": "Lop Buri",
    "shortCode": "16"
  }, {
    "name": "Mae Hong Son",
    "shortCode": "58"
  }, {
    "name": "Maha Sarakham",
    "shortCode": "44"
  }, {
    "name": "Mukdahan",
    "shortCode": "49"
  }, {
    "name": "Nakhon Nayok",
    "shortCode": "26"
  }, {
    "name": "Nakhon Phathom",
    "shortCode": "73"
  }, {
    "name": "Nakhon Phanom",
    "shortCode": "48"
  }, {
    "name": "Nakhon Ratchasima",
    "shortCode": "30"
  }, {
    "name": "Nakhon Sawan",
    "shortCode": "60"
  }, {
    "name": "Nakhon Si Thammarat",
    "shortCode": "80"
  }, {
    "name": "Nan",
    "shortCode": "55"
  }, {
    "name": "Narathiwat",
    "shortCode": "96"
  }, {
    "name": "Nong Bua Lam Phu",
    "shortCode": "39"
  }, {
    "name": "Nong Khai",
    "shortCode": "43"
  }, {
    "name": "Nonthaburi",
    "shortCode": "12"
  }, {
    "name": "Pathum Thani",
    "shortCode": "13"
  }, {
    "name": "Pattani",
    "shortCode": "94"
  }, {
    "name": "Phangnga",
    "shortCode": "82"
  }, {
    "name": "Phatthalung",
    "shortCode": "93"
  }, {
    "name": "Phayao",
    "shortCode": "56"
  }, {
    "name": "Phetchabun",
    "shortCode": "76"
  }, {
    "name": "Phetchaburi",
    "shortCode": "76"
  }, {
    "name": "Phichit",
    "shortCode": "66"
  }, {
    "name": "Phitsanulok",
    "shortCode": "65"
  }, {
    "name": "Phra Nakhon Si Ayutthaya",
    "shortCode": "14"
  }, {
    "name": "Phrae",
    "shortCode": "54"
  }, {
    "name": "Phuket",
    "shortCode": "83"
  }, {
    "name": "Prachin Buri",
    "shortCode": "25"
  }, {
    "name": "Prachuap Khiri Khan",
    "shortCode": "77"
  }, {
    "name": "Ranong",
    "shortCode": "85"
  }, {
    "name": "Ratchaburi",
    "shortCode": "70"
  }, {
    "name": "Rayong",
    "shortCode": "21"
  }, {
    "name": "Roi Et",
    "shortCode": "45"
  }, {
    "name": "Sa Kaeo",
    "shortCode": "27"
  }, {
    "name": "Sakon Nakhon",
    "shortCode": "47"
  }, {
    "name": "Samut Prakan",
    "shortCode": "11"
  }, {
    "name": "Samut Sakhon",
    "shortCode": "74"
  }, {
    "name": "Samut Songkhram",
    "shortCode": "75"
  }, {
    "name": "Saraburi",
    "shortCode": "19"
  }, {
    "name": "Satun",
    "shortCode": "91"
  }, {
    "name": "Sing Buri",
    "shortCode": "17"
  }, {
    "name": "Si Sa ket",
    "shortCode": "33"
  }, {
    "name": "Songkhla",
    "shortCode": "90"
  }, {
    "name": "Sukhothai",
    "shortCode": "64"
  }, {
    "name": "Suphan Buri",
    "shortCode": "72"
  }, {
    "name": "Surat Thani",
    "shortCode": "84"
  }, {
    "name": "Surin",
    "shortCode": "32"
  }, {
    "name": "Tak",
    "shortCode": "63"
  }, {
    "name": "Trang",
    "shortCode": "92"
  }, {
    "name": "Trat",
    "shortCode": "23"
  }, {
    "name": "Ubon Ratchathani",
    "shortCode": "34"
  }, {
    "name": "Udon Thani",
    "shortCode": "41"
  }, {
    "name": "Uthai Thani",
    "shortCode": "61"
  }, {
    "name": "Uttaradit",
    "shortCode": "53"
  }, {
    "name": "Yala",
    "shortCode": "95"
  }, {
    "name": "Yasothon",
    "shortCode": "35"
  }]
}, {
  "countryname": "Timor-Leste",
  "countryShortCode": "TL",
  "regions": [{
    "name": "Aileu",
    "shortCode": "AL"
  }, {
    "name": "Ainaro",
    "shortCode": "AN"
  }, {
    "name": "Baucau",
    "shortCode": "BA"
  }, {
    "name": "Bobonaro",
    "shortCode": "BO"
  }, {
    "name": "Cova Lima",
    "shortCode": "CO"
  }, {
    "name": "Dili",
    "shortCode": "DI"
  }, {
    "name": "Ermera",
    "shortCode": "ER"
  }, {
    "name": "Lautem",
    "shortCode": "LA"
  }, {
    "name": "Liquica",
    "shortCode": "LI"
  }, {
    "name": "Manatuto",
    "shortCode": "MT"
  }, {
    "name": "Manufahi",
    "shortCode": "MF"
  }, {
    "name": "Oecussi",
    "shortCode": "OE"
  }, {
    "name": "Viqueque",
    "shortCode": "VI"
  }]
}, {
  "countryname": "Togo",
  "countryShortCode": "TG",
  "regions": [{
    "name": "Centre",
    "shortCode": "C"
  }, {
    "name": "Kara",
    "shortCode": "K"
  }, {
    "name": "Maritime",
    "shortCode": "M"
  }, {
    "name": "Plateaux",
    "shortCode": "P"
  }, {
    "name": "Savannes",
    "shortCode": "S"
  }]
}, {
  "countryname": "Tokelau",
  "countryShortCode": "TK",
  "regions": [{
    "name": "Atafu"
  }, {
    "name": "Fakaofo"
  }, {
    "name": "Nukunonu"
  }]
}, {
  "countryname": "Tonga",
  "countryShortCode": "TO",
  "regions": [{
    "name": "'Eua",
    "shortCode": "01"
  }, {
    "name": "Ha'apai",
    "shortCode": "02"
  }, {
    "name": "Niuas",
    "shortCode": "03"
  }, {
    "name": "Tongatapu",
    "shortCode": "04"
  }, {
    "name": "Vava'u",
    "shortCode": "05"
  }]
}, {
  "countryname": "Trinidad and Tobago",
  "countryShortCode": "TT",
  "regions": [{
    "name": "Arima",
    "shortCode": "ARI"
  }, {
    "name": "Chaguanas",
    "shortCode": "CHA"
  }, {
    "name": "Couva-Tabaquite-Talparo",
    "shortCode": "CTT"
  }, {
    "name": "Diefo Martin",
    "shortCode": "DMN"
  }, {
    "name": "Mayaro-Rio Claro",
    "shortCode": "MRC"
  }, {
    "name": "Penal-Debe",
    "shortCode": "PED"
  }, {
    "name": "Point Fortin",
    "shortCode": "PTF"
  }, {
    "name": "Port-of-Spain",
    "shortCode": "POS"
  }, {
    "name": "Princes Town",
    "shortCode": "PRT"
  }, {
    "name": "San Fernando",
    "shortCode": "SFO"
  }, {
    "name": "San Juan-Laventille",
    "shortCode": "SJL"
  }, {
    "name": "Sangre Grande",
    "shortCode": "SGE"
  }, {
    "name": "Siparia",
    "shortCode": "SIP"
  }, {
    "name": "Tobago",
    "shortCode": "TOB"
  }, {
    "name": "Tunapuna-Piarco",
    "shortCode": "TUP"
  }]
}, {
  "countryname": "Tunisia",
  "countryShortCode": "TN",
  "regions": [{
    "name": "Ariana",
    "shortCode": "12"
  }, {
    "name": "Beja",
    "shortCode": "31"
  }, {
    "name": "Ben Arous",
    "shortCode": "13"
  }, {
    "name": "Bizerte",
    "shortCode": "23"
  }, {
    "name": "Gabes",
    "shortCode": "81"
  }, {
    "name": "Gafsa",
    "shortCode": "71"
  }, {
    "name": "Jendouba",
    "shortCode": "32"
  }, {
    "name": "Kairouan",
    "shortCode": "41"
  }, {
    "name": "Kasserine",
    "shortCode": "42"
  }, {
    "name": "Kebili",
    "shortCode": "73"
  }, {
    "name": "Kef",
    "shortCode": "33"
  }, {
    "name": "Mahdia",
    "shortCode": "53"
  }, {
    "name": "Medenine",
    "shortCode": "82"
  }, {
    "name": "Monastir",
    "shortCode": "52"
  }, {
    "name": "Nabeul",
    "shortCode": "21"
  }, {
    "name": "Sfax",
    "shortCode": "61"
  }, {
    "name": "Sidi Bouzid",
    "shortCode": "43"
  }, {
    "name": "Siliana",
    "shortCode": "34"
  }, {
    "name": "Sousse",
    "shortCode": "51"
  }, {
    "name": "Tataouine",
    "shortCode": "83"
  }, {
    "name": "Tozeur",
    "shortCode": "72"
  }, {
    "name": "Tunis",
    "shortCode": "11"
  }, {
    "name": "Zaghouan",
    "shortCode": "22"
  }]
}, {
  "countryname": "Turkey",
  "countryShortCode": "TR",
  "regions": [{
    "name": "Adana",
    "shortCode": "01"
  }, {
    "name": "Adiyaman",
    "shortCode": "02"
  }, {
    "name": "Afyonkarahisar",
    "shortCode": "03"
  }, {
    "name": "Agri",
    "shortCode": "04"
  }, {
    "name": "Aksaray",
    "shortCode": "68"
  }, {
    "name": "Amasya",
    "shortCode": "05"
  }, {
    "name": "Ankara",
    "shortCode": "06"
  }, {
    "name": "Antalya",
    "shortCode": "07"
  }, {
    "name": "Ardahan",
    "shortCode": "75"
  }, {
    "name": "Artvin",
    "shortCode": "08"
  }, {
    "name": "Aydin",
    "shortCode": "09"
  }, {
    "name": "Balikesir",
    "shortCode": "10"
  }, {
    "name": "Bartin",
    "shortCode": "74"
  }, {
    "name": "Batman",
    "shortCode": "72"
  }, {
    "name": "Bayburt",
    "shortCode": "69"
  }, {
    "name": "Bilecik",
    "shortCode": "11"
  }, {
    "name": "Bingol",
    "shortCode": "12"
  }, {
    "name": "Bitlis",
    "shortCode": "13"
  }, {
    "name": "Bolu",
    "shortCode": "14"
  }, {
    "name": "Burdur",
    "shortCode": "15"
  }, {
    "name": "Bursa",
    "shortCode": "16"
  }, {
    "name": "Canakkale",
    "shortCode": "17"
  }, {
    "name": "Cankiri",
    "shortCode": "18"
  }, {
    "name": "Corum",
    "shortCode": "19"
  }, {
    "name": "Denizli",
    "shortCode": "20"
  }, {
    "name": "Diyarbakir",
    "shortCode": "21"
  }, {
    "name": "Duzce",
    "shortCode": "81"
  }, {
    "name": "Edirne",
    "shortCode": "22"
  }, {
    "name": "Elazig",
    "shortCode": "23"
  }, {
    "name": "Erzincan",
    "shortCode": "24"
  }, {
    "name": "Erzurum",
    "shortCode": "25"
  }, {
    "name": "Eskisehir",
    "shortCode": "26"
  }, {
    "name": "Gaziantep",
    "shortCode": "27"
  }, {
    "name": "Giresun",
    "shortCode": "28"
  }, {
    "name": "Gumushane",
    "shortCode": "29"
  }, {
    "name": "Hakkari",
    "shortCode": "30"
  }, {
    "name": "Hatay",
    "shortCode": "31"
  }, {
    "name": "Igdir",
    "shortCode": "76"
  }, {
    "name": "Isparta",
    "shortCode": "32"
  }, {
    "name": "Istanbul",
    "shortCode": "34"
  }, {
    "name": "Izmir",
    "shortCode": "35"
  }, {
    "name": "Kahramanmaras",
    "shortCode": "46"
  }, {
    "name": "Karabuk",
    "shortCode": "78"
  }, {
    "name": "Karaman",
    "shortCode": "70"
  }, {
    "name": "Kars",
    "shortCode": "36"
  }, {
    "name": "Kastamonu",
    "shortCode": "37"
  }, {
    "name": "Kayseri",
    "shortCode": "38"
  }, {
    "name": "Kilis",
    "shortCode": "79"
  }, {
    "name": "Kirikkale",
    "shortCode": "71"
  }, {
    "name": "Kirklareli",
    "shortCode": "39"
  }, {
    "name": "Kirsehir",
    "shortCode": "40"
  }, {
    "name": "Kocaeli",
    "shortCode": "41"
  }, {
    "name": "Konya",
    "shortCode": "42"
  }, {
    "name": "Kutahya",
    "shortCode": "43"
  }, {
    "name": "Malatya",
    "shortCode": "44"
  }, {
    "name": "Manisa",
    "shortCode": "45"
  }, {
    "name": "Mardin",
    "shortCode": "47"
  }, {
    "name": "Mersin",
    "shortCode": "33"
  }, {
    "name": "Mugla",
    "shortCode": "48"
  }, {
    "name": "Mus",
    "shortCode": "49"
  }, {
    "name": "Nevsehir",
    "shortCode": "50"
  }, {
    "name": "Nigde",
    "shortCode": "51"
  }, {
    "name": "Ordu",
    "shortCode": "52"
  }, {
    "name": "Osmaniye",
    "shortCode": "80"
  }, {
    "name": "Rize",
    "shortCode": "53"
  }, {
    "name": "Sakarya",
    "shortCode": "54"
  }, {
    "name": "Samsun",
    "shortCode": "55"
  }, {
    "name": "Sanliurfa",
    "shortCode": "63"
  }, {
    "name": "Siirt",
    "shortCode": "56"
  }, {
    "name": "Sinop",
    "shortCode": "57"
  }, {
    "name": "Sirnak",
    "shortCode": "73"
  }, {
    "name": "Sivas",
    "shortCode": "58"
  }, {
    "name": "Tekirdag",
    "shortCode": "59"
  }, {
    "name": "Tokat",
    "shortCode": "60"
  }, {
    "name": "Trabzon",
    "shortCode": "61"
  }, {
    "name": "Tunceli",
    "shortCode": "62"
  }, {
    "name": "Usak",
    "shortCode": "64"
  }, {
    "name": "Van",
    "shortCode": "65"
  }, {
    "name": "Yalova",
    "shortCode": "77"
  }, {
    "name": "Yozgat",
    "shortCode": "66"
  }, {
    "name": "Zonguldak",
    "shortCode": "67"
  }]
}, {
  "countryname": "Turkmenistan",
  "countryShortCode": "TM",
  "regions": [{
    "name": "Ahal",
    "shortCode": "A"
  }, {
    "name": "Asgabat",
    "shortCode": "S"
  }, {
    "name": "Balkan",
    "shortCode": "B"
  }, {
    "name": "Dashoguz",
    "shortCode": "D"
  }, {
    "name": "Lebap",
    "shortCode": "L"
  }, {
    "name": "Mary",
    "shortCode": "M"
  }]
}, {
  "countryname": "Turks and Caicos Islands",
  "countryShortCode": "TC",
  "regions": [{
    "name": "Turks and Caicos Islands"
  }]
}, {
  "countryname": "Tuvalu",
  "countryShortCode": "TV",
  "regions": [{
    "name": "Funafuti",
    "shortCode": "FUN"
  }, {
    "name": "Nanumanga",
    "shortCode": "NMG"
  }, {
    "name": "Nanumea",
    "shortCode": "NMA"
  }, {
    "name": "Niutao",
    "shortCode": "NIT"
  }, {
    "name": "Nui",
    "shortCode": "NUI"
  }, {
    "name": "Nukufetau",
    "shortCode": "NKF"
  }, {
    "name": "Nukulaelae",
    "shortCode": "NKL"
  }, {
    "name": "Vaitupu",
    "shortCode": "VAU"
  }]
}, {
  "countryname": "Uganda",
  "countryShortCode": "UG",
  "regions": [{
    "name": "Abim",
    "shortCode": "317"
  }, {
    "name": "Adjumani",
    "shortCode": "301"
  }, {
    "name": "Amolatar",
    "shortCode": "314"
  }, {
    "name": "Amuria",
    "shortCode": "216"
  }, {
    "name": "Amuru",
    "shortCode": "319"
  }, {
    "name": "Apac",
    "shortCode": "302"
  }, {
    "name": "Arua",
    "shortCode": "303"
  }, {
    "name": "Budaka",
    "shortCode": "217"
  }, {
    "name": "Bududa",
    "shortCode": "223"
  }, {
    "name": "Bugiri",
    "shortCode": "201"
  }, {
    "name": "Bukedea",
    "shortCode": "224"
  }, {
    "name": "Bukwa",
    "shortCode": "218"
  }, {
    "name": "Buliisa",
    "shortCode": "419"
  }, {
    "name": "Bundibugyo",
    "shortCode": "401"
  }, {
    "name": "Bushenyi",
    "shortCode": "402"
  }, {
    "name": "Busia",
    "shortCode": "202"
  }, {
    "name": "Butaleja",
    "shortCode": "219"
  }, {
    "name": "Dokolo",
    "shortCode": "318"
  }, {
    "name": "Gulu",
    "shortCode": "304"
  }, {
    "name": "Hoima",
    "shortCode": "403"
  }, {
    "name": "Ibanda",
    "shortCode": "416"
  }, {
    "name": "Iganga",
    "shortCode": "203"
  }, {
    "name": "Isingiro",
    "shortCode": "417"
  }, {
    "name": "Jinja",
    "shortCode": "204"
  }, {
    "name": "Kaabong",
    "shortCode": "315"
  }, {
    "name": "Kabale",
    "shortCode": "404"
  }, {
    "name": "Kabarole",
    "shortCode": "405"
  }, {
    "name": "Kaberamaido",
    "shortCode": "213"
  }, {
    "name": "Kalangala",
    "shortCode": "101"
  }, {
    "name": "Kaliro",
    "shortCode": "220"
  }, {
    "name": "Kampala",
    "shortCode": "102"
  }, {
    "name": "Kamuli",
    "shortCode": "205"
  }, {
    "name": "Kamwenge",
    "shortCode": "413"
  }, {
    "name": "Kanungu",
    "shortCode": "414"
  }, {
    "name": "Kapchorwa",
    "shortCode": "206"
  }, {
    "name": "Kasese",
    "shortCode": "406"
  }, {
    "name": "Katakwi",
    "shortCode": "207"
  }, {
    "name": "Kayunga",
    "shortCode": "112"
  }, {
    "name": "Kibaale",
    "shortCode": "407"
  }, {
    "name": "Kiboga",
    "shortCode": "103"
  }, {
    "name": "Kiruhura",
    "shortCode": "418"
  }, {
    "name": "Kisoro",
    "shortCode": "408"
  }, {
    "name": "Kitgum",
    "shortCode": "305"
  }, {
    "name": "Koboko",
    "shortCode": "316"
  }, {
    "name": "Kotido",
    "shortCode": "306"
  }, {
    "name": "Kumi",
    "shortCode": "208"
  }, {
    "name": "Kyenjojo",
    "shortCode": "415"
  }, {
    "name": "Lira",
    "shortCode": "307"
  }, {
    "name": "Luwero",
    "shortCode": "104"
  }, {
    "name": "Lyantonde",
    "shortCode": "116"
  }, {
    "name": "Manafwa",
    "shortCode": "221"
  }, {
    "name": "Maracha",
    "shortCode": "320"
  }, {
    "name": "Masaka",
    "shortCode": "105"
  }, {
    "name": "Masindi",
    "shortCode": "409"
  }, {
    "name": "Mayuge",
    "shortCode": "214"
  }, {
    "name": "Mbale",
    "shortCode": "209"
  }, {
    "name": "Mbarara",
    "shortCode": "410"
  }, {
    "name": "Mityana",
    "shortCode": "114"
  }, {
    "name": "Moroto",
    "shortCode": "308"
  }, {
    "name": "Moyo",
    "shortCode": "309"
  }, {
    "name": "Mpigi",
    "shortCode": "106"
  }, {
    "name": "Mubende",
    "shortCode": "107"
  }, {
    "name": "Mukono",
    "shortCode": "108"
  }, {
    "name": "Nakapiripirit",
    "shortCode": "311"
  }, {
    "name": "Nakaseke",
    "shortCode": "115"
  }, {
    "name": "Nakasongola",
    "shortCode": "109"
  }, {
    "name": "Namutumba",
    "shortCode": "222"
  }, {
    "name": "Nebbi",
    "shortCode": "310"
  }, {
    "name": "Ntungamo",
    "shortCode": "411"
  }, {
    "name": "Oyam",
    "shortCode": "321"
  }, {
    "name": "Pader",
    "shortCode": "312"
  }, {
    "name": "Pallisa",
    "shortCode": "210"
  }, {
    "name": "Rakai",
    "shortCode": "110"
  }, {
    "name": "Rukungiri",
    "shortCode": "412"
  }, {
    "name": "Sembabule",
    "shortCode": "111"
  }, {
    "name": "Sironko",
    "shortCode": "215"
  }, {
    "name": "Soroti",
    "shortCode": "211"
  }, {
    "name": "Tororo",
    "shortCode": "212"
  }, {
    "name": "Wakiso",
    "shortCode": "113"
  }, {
    "name": "Yumbe",
    "shortCode": "313"
  }]
}, {
  "countryname": "Ukraine",
  "countryShortCode": "UA",
  "regions": [{
    "name": "Cherkasy",
    "shortCode": "71"
  }, {
    "name": "Chernihiv",
    "shortCode": "74"
  }, {
    "name": "Chernivtsi",
    "shortCode": "77"
  }, {
    "name": "Dnipropetrovsk",
    "shortCode": "12"
  }, {
    "name": "Donetsk",
    "shortCode": "14"
  }, {
    "name": "Ivano-Frankivsk",
    "shortCode": "26"
  }, {
    "name": "Kharkiv",
    "shortCode": "63"
  }, {
    "name": "Kherson",
    "shortCode": "65"
  }, {
    "name": "Khmelnytskyi",
    "shortCode": "68"
  }, {
    "name": "Kiev",
    "shortCode": "32"
  }, {
    "name": "Kirovohrad",
    "shortCode": "35"
  }, {
    "name": "Luhansk",
    "shortCode": "09"
  }, {
    "name": "Lviv",
    "shortCode": "46"
  }, {
    "name": "Mykolaiv",
    "shortCode": "48"
  }, {
    "name": "Odessa",
    "shortCode": "51"
  }, {
    "name": "Poltava",
    "shortCode": "53"
  }, {
    "name": "Rivne",
    "shortCode": "56"
  }, {
    "name": "Sumy",
    "shortCode": "59"
  }, {
    "name": "Ternopil",
    "shortCode": "61"
  }, {
    "name": "Vinnytsia",
    "shortCode": "05"
  }, {
    "name": "Volyn",
    "shortCode": "07"
  }, {
    "name": "Zakarpattia",
    "shortCode": "21"
  }, {
    "name": "Zaporizhia",
    "shortCode": "23"
  }, {
    "name": "Zhytomyr",
    "shortCode": "18"
  }, {
    "name": "Avtonomna Respublika Krym",
    "shortCode": "43"
  }, {
    "name": "Ky??v",
    "shortCode": "30"
  }, {
    "name": "Sevastopol",
    "shortCode": "40"
  }]
}, {
  "countryname": "United Arab Emirates",
  "countryShortCode": "AE",
  "regions": [{
    "name": "Abu Dhabi",
    "shortCode": "AZ"
  }, {
    "name": "Ajman",
    "shortCode": "AJ"
  }, {
    "name": "Dubai",
    "shortCode": "DU"
  }, {
    "name": "Fujairah",
    "shortCode": "FU"
  }, {
    "name": "Ras al Khaimah",
    "shortCode": "RK"
  }, {
    "name": "Sharjah",
    "shortCode": "SH"
  }, {
    "name": "Umm Al Quwain",
    "shortCode": "UQ"
  }]
}, {
  "countryname": "United Kingdom",
  "countryShortCode": "GB",
  "regions": [{
    "name": "Avon",
    "shortCode": "AVN"
  }, {
    "name": "Bedfordshire",
    "shortCode": "BDF"
  }, {
    "name": "Berkshire",
    "shortCode": "BRK"
  }, {
    "name": "Bristol, City of",
    "shortCode": "COB"
  }, {
    "name": "Buckinghamshire",
    "shortCode": "BKM"
  }, {
    "name": "Cambridgeshire",
    "shortCode": "CAM"
  }, {
    "name": "Cheshire",
    "shortCode": "CHS"
  }, {
    "name": "Cleveland",
    "shortCode": "CLV"
  }, {
    "name": "Cornwall",
    "shortCode": "CON"
  }, {
    "name": "Cumbria",
    "shortCode": "CMA"
  }, {
    "name": "Derbyshire",
    "shortCode": "DBY"
  }, {
    "name": "Devon",
    "shortCode": "DEV"
  }, {
    "name": "Dorset",
    "shortCode": "DOR"
  }, {
    "name": "Durham",
    "shortCode": "DUR"
  }, {
    "name": "East Sussex",
    "shortCode": "SXE"
  }, {
    "name": "Essex",
    "shortCode": "ESS"
  }, {
    "name": "Gloucestershire",
    "shortCode": "GLS"
  }, {
    "name": "Greater London",
    "shortCode": "LND"
  }, {
    "name": "Greater Manchester",
    "shortCode": "GTM"
  }, {
    "name": "Hampshire",
    "shortCode": "HAM"
  }, {
    "name": "Hereford and Worcester",
    "shortCode": "HWR"
  }, {
    "name": "Herefordshire",
    "shortCode": "HEF"
  }, {
    "name": "Hertfordshire",
    "shortCode": "HRT"
  }, {
    "name": "Isle of Wight",
    "shortCode": "IOW"
  }, {
    "name": "Kent",
    "shortCode": "KEN"
  }, {
    "name": "Lancashire",
    "shortCode": "LAN"
  }, {
    "name": "Leicestershire",
    "shortCode": "LEI"
  }, {
    "name": "Lincolnshire",
    "shortCode": "LIN"
  }, {
    "name": "London",
    "shortCode": "LDN"
  }, {
    "name": "Merseyside",
    "shortCode": "MSY"
  }, {
    "name": "Middlesex",
    "shortCode": "MDX"
  }, {
    "name": "Norfolk",
    "shortCode": "NFK"
  }, {
    "name": "Northamptonshire",
    "shortCode": "NTH"
  }, {
    "name": "Northumberland",
    "shortCode": "NBL"
  }, {
    "name": "North Humberside",
    "shortCode": "NHM"
  }, {
    "name": "North Yorkshire",
    "shortCode": "NYK"
  }, {
    "name": "Nottinghamshire",
    "shortCode": "NTT"
  }, {
    "name": "Oxfordshire",
    "shortCode": "OXF"
  }, {
    "name": "Rutland",
    "shortCode": "RUT"
  }, {
    "name": "Shropshire",
    "shortCode": "SAL"
  }, {
    "name": "Somerset",
    "shortCode": "SOM"
  }, {
    "name": "South Humberside",
    "shortCode": "SHM"
  }, {
    "name": "South Yorkshire",
    "shortCode": "SYK"
  }, {
    "name": "Staffordshire",
    "shortCode": "STS"
  }, {
    "name": "Suffolk",
    "shortCode": "SFK"
  }, {
    "name": "Surrey",
    "shortCode": "SRY"
  }, {
    "name": "Tyne and Wear",
    "shortCode": "TWR"
  }, {
    "name": "Warwickshire",
    "shortCode": "WAR"
  }, {
    "name": "West Midlands",
    "shortCode": "WMD"
  }, {
    "name": "West Sussex",
    "shortCode": "SXW"
  }, {
    "name": "West Yorkshire",
    "shortCode": "WYK"
  }, {
    "name": "Wiltshire",
    "shortCode": "WIL"
  }, {
    "name": "Worcestershire",
    "shortCode": "WOR"
  }, {
    "name": "Antrim",
    "shortCode": "ANT"
  }, {
    "name": "Armagh",
    "shortCode": "ARM"
  }, {
    "name": "Belfast, City of",
    "shortCode": "BLF"
  }, {
    "name": "Down",
    "shortCode": "DOW"
  }, {
    "name": "Fermanagh",
    "shortCode": "FER"
  }, {
    "name": "Londonderry",
    "shortCode": "LDY"
  }, {
    "name": "Derry, City of",
    "shortCode": "DRY"
  }, {
    "name": "Tyrone",
    "shortCode": "TYR"
  }, {
    "name": "Aberdeen, City of",
    "shortCode": "AN"
  }, {
    "name": "Aberdeenshire",
    "shortCode": "ABD"
  }, {
    "name": "Angus (Forfarshire)",
    "shortCode": "ANS"
  }, {
    "name": "Argyll",
    "shortCode": "AGB"
  }, {
    "name": "Ayrshire",
    "shortCode": "ARG"
  }, {
    "name": "Banffshire",
    "shortCode": "BAN"
  }, {
    "name": "Berwickshire",
    "shortCode": "BEW"
  }, {
    "name": "Bute",
    "shortCode": "BUT"
  }, {
    "name": "Caithness",
    "shortCode": "CAI"
  }, {
    "name": "Clackmannanshire",
    "shortCode": "CLK"
  }, {
    "name": "Cromartyshire",
    "shortCode": "COC"
  }, {
    "name": "Dumfriesshire",
    "shortCode": "DFS"
  }, {
    "name": "Dunbartonshire (Dumbarton)",
    "shortCode": "DNB"
  }, {
    "name": "Dundee, City of",
    "shortCode": "DD"
  }, {
    "name": "East Lothian (Haddingtonshire)",
    "shortCode": "ELN"
  }, {
    "name": "Edinburgh, City of",
    "shortCode": "EB"
  }, {
    "name": "Fife",
    "shortCode": "FIF"
  }, {
    "name": "Glasgow, City of",
    "shortCode": "GLA"
  }, {
    "name": "Inverness-shire",
    "shortCode": "INV"
  }, {
    "name": "Kincardineshire",
    "shortCode": "KCD"
  }, {
    "name": "Kinross-shire",
    "shortCode": "KRS"
  }, {
    "name": "Kirkcudbrightshire",
    "shortCode": "KKD"
  }, {
    "name": "Lanarkshire",
    "shortCode": "LKS"
  }, {
    "name": "Midlothian (County of Edinburgh)",
    "shortCode": "MLN"
  }, {
    "name": "Moray (Elginshire)",
    "shortCode": "MOR"
  }, {
    "name": "Nairnshire",
    "shortCode": "NAI"
  }, {
    "name": "Orkney",
    "shortCode": "OKI"
  }, {
    "name": "Peeblesshire",
    "shortCode": "PEE"
  }, {
    "name": "Perthshire",
    "shortCode": "PER"
  }, {
    "name": "Renfrewshire",
    "shortCode": "RFW"
  }, {
    "name": "Ross and Cromarty",
    "shortCode": "ROC"
  }, {
    "name": "Ross-shire",
    "shortCode": "ROS"
  }, {
    "name": "Roxburghshire",
    "shortCode": "ROX"
  }, {
    "name": "Selkirkshire",
    "shortCode": "SEL"
  }, {
    "name": "Shetland (Zetland)",
    "shortCode": "SHI"
  }, {
    "name": "Stirlingshire",
    "shortCode": "STI"
  }, {
    "name": "Sutherland",
    "shortCode": "SUT"
  }, {
    "name": "West Lothian (Linlithgowshire)",
    "shortCode": "WLN"
  }, {
    "name": "Wigtownshire",
    "shortCode": "WIG"
  }, {
    "name": "Clwyd",
    "shortCode": "CWD"
  }, {
    "name": "Dyfed",
    "shortCode": "DFD"
  }, {
    "name": "Gwent",
    "shortCode": "GNT"
  }, {
    "name": "Gwynedd",
    "shortCode": "GWN"
  }, {
    "name": "Mid Glamorgan",
    "shortCode": "MGM"
  }, {
    "name": "Powys",
    "shortCode": "POW"
  }, {
    "name": "South Glamorgan",
    "shortCode": "SGM"
  }, {
    "name": "West Glamorgan",
    "shortCode": "WGM"
  }]
}, {
  "countryname": "United States",
  "countryShortCode": "US",
  "regions": [{
    "name": "Alabama",
    "shortCode": "AL"
  }, {
    "name": "Alaska",
    "shortCode": "AK"
  }, {
    "name": "American Samoa",
    "shortCode": "AS"
  }, {
    "name": "Arizona",
    "shortCode": "AZ"
  }, {
    "name": "Arkansas",
    "shortCode": "AR"
  }, {
    "name": "California",
    "shortCode": "CA"
  }, {
    "name": "Colorado",
    "shortCode": "CO"
  }, {
    "name": "Connecticut",
    "shortCode": "CT"
  }, {
    "name": "Delaware",
    "shortCode": "DE"
  }, {
    "name": "District of Columbia",
    "shortCode": "DC"
  }, {
    "name": "Micronesia",
    "shortCode": "FM"
  }, {
    "name": "Florida",
    "shortCode": "FL"
  }, {
    "name": "Georgia",
    "shortCode": "GA"
  }, {
    "name": "Guam",
    "shortCode": "GU"
  }, {
    "name": "Hawaii",
    "shortCode": "HI"
  }, {
    "name": "Idaho",
    "shortCode": "ID"
  }, {
    "name": "Illinois",
    "shortCode": "IL"
  }, {
    "name": "Indiana",
    "shortCode": "IN"
  }, {
    "name": "Iowa",
    "shortCode": "IA"
  }, {
    "name": "Kansas",
    "shortCode": "KS"
  }, {
    "name": "Kentucky",
    "shortCode": "KY"
  }, {
    "name": "Louisiana",
    "shortCode": "LA"
  }, {
    "name": "Maine",
    "shortCode": "ME"
  }, {
    "name": "Marshall Islands",
    "shortCode": "MH"
  }, {
    "name": "Maryland",
    "shortCode": "MD"
  }, {
    "name": "Massachusetts",
    "shortCode": "MA"
  }, {
    "name": "Michigan",
    "shortCode": "MI"
  }, {
    "name": "Minnesota",
    "shortCode": "MN"
  }, {
    "name": "Mississippi",
    "shortCode": "MS"
  }, {
    "name": "Missouri",
    "shortCode": "MO"
  }, {
    "name": "Montana",
    "shortCode": "MT"
  }, {
    "name": "Nebraska",
    "shortCode": "NE"
  }, {
    "name": "Nevada",
    "shortCode": "NV"
  }, {
    "name": "New Hampshire",
    "shortCode": "NH"
  }, {
    "name": "New Jersey",
    "shortCode": "NJ"
  }, {
    "name": "New Mexico",
    "shortCode": "NM"
  }, {
    "name": "New York",
    "shortCode": "NY"
  }, {
    "name": "North Carolina",
    "shortCode": "NC"
  }, {
    "name": "North Dakota",
    "shortCode": "ND"
  }, {
    "name": "Northern Mariana Islands",
    "shortCode": "MP"
  }, {
    "name": "Ohio",
    "shortCode": "OH"
  }, {
    "name": "Oklahoma",
    "shortCode": "OK"
  }, {
    "name": "Oregon",
    "shortCode": "OR"
  }, {
    "name": "Palau",
    "shortCode": "PW"
  }, {
    "name": "Pennsylvania",
    "shortCode": "PA"
  }, {
    "name": "Puerto Rico",
    "shortCode": "PR"
  }, {
    "name": "Rhode Island",
    "shortCode": "RI"
  }, {
    "name": "South Carolina",
    "shortCode": "SC"
  }, {
    "name": "South Dakota",
    "shortCode": "SD"
  }, {
    "name": "Tennessee",
    "shortCode": "TN"
  }, {
    "name": "Texas",
    "shortCode": "TX"
  }, {
    "name": "Utah",
    "shortCode": "UT"
  }, {
    "name": "Vermont",
    "shortCode": "VT"
  }, {
    "name": "Virgin Islands",
    "shortCode": "VI"
  }, {
    "name": "Virginia",
    "shortCode": "VA"
  }, {
    "name": "Washington",
    "shortCode": "WA"
  }, {
    "name": "West Virginia",
    "shortCode": "WV"
  }, {
    "name": "Wisconsin",
    "shortCode": "WI"
  }, {
    "name": "Wyoming",
    "shortCode": "WY"
  }, {
    "name": "Armed Forces Americas",
    "shortCode": "AA"
  }, {
    "name": "Armed Forces Europe, Canada, Africa and Middle East",
    "shortCode": "AE"
  }, {
    "name": "Armed Forces Pacific",
    "shortCode": "AP"
  }]
}, {
  "countryname": "United States Minor Outlying Islands",
  "countryShortCode": "UM",
  "regions": [{
    "name": "Baker Island",
    "shortCode": "81"
  }, {
    "name": "Howland Island",
    "shortCode": "84"
  }, {
    "name": "Jarvis Island",
    "shortCode": "86"
  }, {
    "name": "Johnston Atoll",
    "shortCode": "67"
  }, {
    "name": "Kingman Reef",
    "shortCode": "89"
  }, {
    "name": "Midway Islands",
    "shortCode": "71"
  }, {
    "name": "Navassa Island",
    "shortCode": "76"
  }, {
    "name": "Palmyra Atoll",
    "shortCode": "95"
  }, {
    "name": "Wake Island",
    "shortCode": "79"
  }, {
    "name": "Bajo Nuevo Bank",
    "shortCode": "BN"
  }, {
    "name": "Serranilla Bank",
    "shortCode": "SB"
  }]
}, {
  "countryname": "Uruguay",
  "countryShortCode": "UY",
  "regions": [{
    "name": "Artigas",
    "shortCode": "AR"
  }, {
    "name": "Canelones",
    "shortCode": "CA"
  }, {
    "name": "Cerro Largo",
    "shortCode": "CL"
  }, {
    "name": "Colonia",
    "shortCode": "CO"
  }, {
    "name": "Durazno",
    "shortCode": "DU"
  }, {
    "name": "Flores",
    "shortCode": "FS"
  }, {
    "name": "Florida",
    "shortCode": "FD"
  }, {
    "name": "Lavalleja",
    "shortCode": "LA"
  }, {
    "name": "Maldonado",
    "shortCode": "MA"
  }, {
    "name": "Montevideo",
    "shortCode": "MO"
  }, {
    "name": "Paysand??",
    "shortCode": "PA"
  }, {
    "name": "R??o Negro",
    "shortCode": "RN"
  }, {
    "name": "Rivera",
    "shortCode": "RV"
  }, {
    "name": "Rocha",
    "shortCode": "RO"
  }, {
    "name": "Salto",
    "shortCode": "SA"
  }, {
    "name": "San Jos??",
    "shortCode": "SJ"
  }, {
    "name": "Soriano",
    "shortCode": "SO"
  }, {
    "name": "Tacuaremb??",
    "shortCode": "TA"
  }, {
    "name": "Treinta y Tres",
    "shortCode": "TT"
  }]
}, {
  "countryname": "Uzbekistan",
  "countryShortCode": "UZ",
  "regions": [{
    "name": "Toshkent shahri",
    "shortCode": "TK"
  }, {
    "name": "Andijon",
    "shortCode": "AN"
  }, {
    "name": "Buxoro",
    "shortCode": "BU"
  }, {
    "name": "Farg???ona",
    "shortCode": "FA"
  }, {
    "name": "Jizzax",
    "shortCode": "JI"
  }, {
    "name": "Namangan",
    "shortCode": "NG"
  }, {
    "name": "Navoiy",
    "shortCode": "NW"
  }, {
    "name": "Qashqadaryo (Qarshi)",
    "shortCode": "QA"
  }, {
    "name": "Samarqand",
    "shortCode": "SA"
  }, {
    "name": "Sirdaryo (Guliston)",
    "shortCode": "SI"
  }, {
    "name": "Surxondaryo (Termiz)",
    "shortCode": "SU"
  }, {
    "name": "Toshkent wiloyati",
    "shortCode": "TO"
  }, {
    "name": "Xorazm (Urganch)",
    "shortCode": "XO"
  }, {
    "name": "Qoraqalpog???iston Respublikasi (Nukus)",
    "shortCode": "QR"
  }]
}, {
  "countryname": "Vanuatu",
  "countryShortCode": "VU",
  "regions": [{
    "name": "Malampa",
    "shortCode": "MAP"
  }, {
    "name": "P??nama",
    "shortCode": "PAM"
  }, {
    "name": "Sanma",
    "shortCode": "SAM"
  }, {
    "name": "Sh??fa",
    "shortCode": "SEE"
  }, {
    "name": "Taf??a",
    "shortCode": "TAE"
  }, {
    "name": "Torba",
    "shortCode": "TOB"
  }]
}, {
  "countryname": "Venezuela, Bolivarian Republic of",
  "countryShortCode": "VE",
  "regions": [{
    "name": "Dependencias Federales",
    "shortCode": "W"
  }, {
    "name": "Distrito Federal",
    "shortCode": "A"
  }, {
    "name": "Amazonas",
    "shortCode": "Z"
  }, {
    "name": "Anzo??tegui",
    "shortCode": "B"
  }, {
    "name": "Apure",
    "shortCode": "C"
  }, {
    "name": "Aragua",
    "shortCode": "D"
  }, {
    "name": "Barinas",
    "shortCode": "E"
  }, {
    "name": "Bol??var",
    "shortCode": "F"
  }, {
    "name": "Carabobo",
    "shortCode": "G"
  }, {
    "name": "Cojedes",
    "shortCode": "H"
  }, {
    "name": "Delta Amacuro",
    "shortCode": "Y"
  }, {
    "name": "Falc??n",
    "shortCode": "I"
  }, {
    "name": "Gu??rico",
    "shortCode": "J"
  }, {
    "name": "Lara",
    "shortCode": "K"
  }, {
    "name": "M??rida",
    "shortCode": "L"
  }, {
    "name": "Miranda",
    "shortCode": "M"
  }, {
    "name": "Monagas",
    "shortCode": "N"
  }, {
    "name": "Nueva Esparta",
    "shortCode": "O"
  }, {
    "name": "Portuguesa",
    "shortCode": "P"
  }, {
    "name": "Sucre",
    "shortCode": "R"
  }, {
    "name": "T??chira",
    "shortCode": "S"
  }, {
    "name": "Trujillo",
    "shortCode": "T"
  }, {
    "name": "Vargas",
    "shortCode": "X"
  }, {
    "name": "Yaracuy",
    "shortCode": "U"
  }, {
    "name": "Zulia",
    "shortCode": "V"
  }]
}, {
  "countryname": "Vietnam",
  "countryShortCode": "VN",
  "regions": [{
    "name": "?????ng Nai",
    "shortCode": "39"
  }, {
    "name": "?????ng Th??p",
    "shortCode": "45"
  }, {
    "name": "Gia Lai",
    "shortCode": "30"
  }, {
    "name": "H?? Giang",
    "shortCode": "03"
  }, {
    "name": "H?? Nam",
    "shortCode": "63"
  }, {
    "name": "H?? T??y",
    "shortCode": "15"
  }, {
    "name": "H?? T??nh",
    "shortCode": "23"
  }, {
    "name": "H???i D????ng",
    "shortCode": "61"
  }, {
    "name": "H???u Giang",
    "shortCode": "73"
  }, {
    "name": "H??a B??nh",
    "shortCode": "14"
  }, {
    "name": "H??ng Y??n",
    "shortCode": "66"
  }, {
    "name": "Kh??nh H??a",
    "shortCode": "34"
  }, {
    "name": "Ki??n Giang",
    "shortCode": "47"
  }, {
    "name": "Kon Tum",
    "shortCode": "28"
  }, {
    "name": "Lai Ch??u",
    "shortCode": "01"
  }, {
    "name": "L??m ?????ng",
    "shortCode": "35"
  }, {
    "name": "L???ng S??n",
    "shortCode": "09"
  }, {
    "name": "L??o Cai",
    "shortCode": "02"
  }, {
    "name": "Long An",
    "shortCode": "41"
  }, {
    "name": "Nam ?????nh",
    "shortCode": "67"
  }, {
    "name": "Ngh??? An",
    "shortCode": "22"
  }, {
    "name": "Ninh B??nh",
    "shortCode": "18"
  }, {
    "name": "Ninh Thu???n",
    "shortCode": "36"
  }, {
    "name": "Ph?? Th???",
    "shortCode": "68"
  }, {
    "name": "Ph?? Y??n",
    "shortCode": "32"
  }, {
    "name": "Qu???ng B??nh",
    "shortCode": "24"
  }, {
    "name": "Qu???ng Nam",
    "shortCode": "27"
  }, {
    "name": "Qu???ng Ng??i",
    "shortCode": "29"
  }, {
    "name": "Qu???ng Ninh",
    "shortCode": "13"
  }, {
    "name": "Qu???ng Tr???",
    "shortCode": "25"
  }, {
    "name": "S??c Tr??ng",
    "shortCode": "52"
  }, {
    "name": "S??n La",
    "shortCode": "05"
  }, {
    "name": "T??y Ninh",
    "shortCode": "37"
  }, {
    "name": "Th??i B??nh",
    "shortCode": "20"
  }, {
    "name": "Th??i Nguy??n",
    "shortCode": "69"
  }, {
    "name": "Thanh H??a",
    "shortCode": "21"
  }, {
    "name": "Th???a Thi??n???Hu???",
    "shortCode": "26"
  }, {
    "name": "Ti???n Giang",
    "shortCode": "46"
  }, {
    "name": "Tr?? Vinh",
    "shortCode": "51"
  }, {
    "name": "Tuy??n Quang",
    "shortCode": "07"
  }, {
    "name": "V??nh Long",
    "shortCode": "49"
  }, {
    "name": "V??nh Ph??c",
    "shortCode": "70"
  }, {
    "name": "Y??n B??i",
    "shortCode": "06"
  }, {
    "name": "C???n Th??",
    "shortCode": "CT"
  }, {
    "name": "???? N???ng",
    "shortCode": "DN"
  }, {
    "name": "H?? N???i",
    "shortCode": "HN"
  }, {
    "name": "H???i Ph??ng",
    "shortCode": "HP"
  }, {
    "name": "H??? Ch?? Minh (S??i G??n)",
    "shortCode": "SG"
  }]
}, {
  "countryname": "Virgin Islands, British",
  "countryShortCode": "VG",
  "regions": [{
    "name": "Anegada",
    "shortCode": "ANG"
  }, {
    "name": "Jost Van Dyke",
    "shortCode": "JVD"
  }, {
    "name": "Tortola",
    "shortCode": "TTA"
  }, {
    "name": "Virgin Gorda",
    "shortCode": "VGD"
  }]
}, {
  "countryname": "Virgin Islands, U.S.",
  "countryShortCode": "VI",
  "regions": [{
    "name": "St. Thomas",
    "shortCode": "STH"
  }, {
    "name": "St. John",
    "shortCode": "SJO"
  }, {
    "name": "St. Croix",
    "shortCode": "SCR"
  }]
}, {
  "countryname": "Wallis and Futuna",
  "countryShortCode": "WF",
  "regions": [{
    "name": "Alo",
    "shortCode": "ALO"
  }, {
    "name": "Sigave",
    "shortCode": "SIG"
  }, {
    "name": "Wallis",
    "shortCode": "WAL"
  }]
}, {
  "countryname": "Western Sahara",
  "countryShortCode": "EH",
  "regions": [{
    "name": "Es Smara",
    "shortCode": "ESM"
  }, {
    "name": "Boujdour",
    "shortCode": "BOD"
  }, {
    "name": "La??youne",
    "shortCode": "LAA"
  }, {
    "name": "Aousserd",
    "shortCode": "AOU"
  }, {
    "name": "Oued ed Dahab",
    "shortCode": "OUD"
  }]
}, {
  "countryname": "Yemen",
  "countryShortCode": "YE",
  "regions": [{
    "name": "Aby??n",
    "shortCode": "AB"
  }, {
    "name": "'Adan",
    "shortCode": "AD"
  }, {
    "name": "A??? ?????li'",
    "shortCode": "DA"
  }, {
    "name": "Al Bay?????'",
    "shortCode": "BA"
  }, {
    "name": "Al ???udaydah",
    "shortCode": "HU"
  }, {
    "name": "Al Jawf",
    "shortCode": "JA"
  }, {
    "name": "Al Mahrah",
    "shortCode": "MR"
  }, {
    "name": "Al Ma???w??t",
    "shortCode": "MW"
  }, {
    "name": "'Amr??n",
    "shortCode": "AM"
  }, {
    "name": "Dham??r",
    "shortCode": "DH"
  }, {
    "name": "???a???ramawt",
    "shortCode": "HD"
  }, {
    "name": "???ajjah",
    "shortCode": "HJ"
  }, {
    "name": "Ibb",
    "shortCode": "IB"
  }, {
    "name": "La???ij",
    "shortCode": "LA"
  }, {
    "name": "Ma'rib",
    "shortCode": "MA"
  }, {
    "name": "Raymah",
    "shortCode": "RA"
  }, {
    "name": "???????dah",
    "shortCode": "SD"
  }, {
    "name": "??an?????'",
    "shortCode": "SN"
  }, {
    "name": "Shabwah",
    "shortCode": "SH"
  }, {
    "name": "T?????izz",
    "shortCode": "TA"
  }]
}, {
  "countryname": "Zambia",
  "countryShortCode": "ZM",
  "regions": [{
    "name": "Central",
    "shortCode": "02"
  }, {
    "name": "Copperbelt",
    "shortCode": "08"
  }, {
    "name": "Eastern",
    "shortCode": "03"
  }, {
    "name": "Luapula",
    "shortCode": "04"
  }, {
    "name": "Lusaka",
    "shortCode": "09"
  }, {
    "name": "Northern",
    "shortCode": "05"
  }, {
    "name": "North-Western",
    "shortCode": "06"
  }, {
    "name": "Southern",
    "shortCode": "07"
  }, {
    "name": "Western",
    "shortCode": "01"
  }]
}, {
  "countryname": "Zimbabwe",
  "countryShortCode": "ZW",
  "regions": [{
    "name": "Bulawayo",
    "shortCode": "BU"
  }, {
    "name": "Harare",
    "shortCode": "HA"
  }, {
    "name": "Manicaland",
    "shortCode": "MA"
  }, {
    "name": "Mashonaland Central",
    "shortCode": "MC"
  }, {
    "name": "Mashonaland East",
    "shortCode": "ME"
  }, {
    "name": "Mashonaland West",
    "shortCode": "MW"
  }, {
    "name": "Masvingo",
    "shortCode": "MV"
  }, {
    "name": "Matabeleland North",
    "shortCode": "MN"
  }, {
    "name": "Matabeleland South",
    "shortCode": "MS"
  }, {
    "name": "Midlands",
    "shortCode": "MI"
  }]
}]);

/***/ }),

/***/ "./resources/js/src/helper/index.js":
/*!******************************************!*\
  !*** ./resources/js/src/helper/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toTitleCase": () => (/* binding */ toTitleCase),
/* harmony export */   "getDisplayedDuration": () => (/* binding */ getDisplayedDuration),
/* harmony export */   "formatMoney": () => (/* binding */ formatMoney)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var toTitleCase = function toTitleCase(sentence) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().words(sentence).map(function (word) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().capitalize(word);
  }).join(' ');
};
var getDisplayedDuration = function getDisplayedDuration(a, b) {
  var date1 = new Date(a);
  var date2 = new Date(b);
  var diffTime = Math.abs(date2 - date1);
  var diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  var diffMinutes = diffTime % (1000 * 60 * 60) * 60;
  return diffHours + 'h ' + diffMinutes + 'm';
};
var formatMoney = function formatMoney(amount) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";

  try {
    if (typeof amount === 'string') amount = parseFloat(amount);
    if (amount == null || isNaN(amount)) return "N/A";
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    var negativeSign = amount < 0 ? "-" : "";
    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e);
    return "N/A";
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".checkout[data-v-faa0c756] {\n  padding-top: 120px;\n}\n.checkout[data-v-faa0c756] .form-control {\n  margin-bottom: 0 !important;\n}\ninput[type=text][data-v-faa0c756] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\nlabel[data-v-faa0c756] {\n  margin-bottom: 10px;\n  display: block;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('d??j?? vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_faa0c756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_faa0c756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_faa0c756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/views/client/checkout/Checkout.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/client/checkout/Checkout.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkout_vue_vue_type_template_id_faa0c756_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=faa0c756&scoped=true& */ "./resources/js/src/views/client/checkout/Checkout.vue?vue&type=template&id=faa0c756&scoped=true&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/src/views/client/checkout/Checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _Checkout_vue_vue_type_style_index_0_id_faa0c756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true& */ "./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Checkout_vue_vue_type_template_id_faa0c756_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkout_vue_vue_type_template_id_faa0c756_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "faa0c756",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/client/checkout/Checkout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/client/checkout/Checkout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/client/checkout/Checkout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_faa0c756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=style&index=0&id=faa0c756&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/src/views/client/checkout/Checkout.vue?vue&type=template&id=faa0c756&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/client/checkout/Checkout.vue?vue&type=template&id=faa0c756&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_faa0c756_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_faa0c756_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_faa0c756_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=template&id=faa0c756&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=template&id=faa0c756&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=template&id=faa0c756&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/checkout/Checkout.vue?vue&type=template&id=faa0c756&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "checkout" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "9" } },
            [
              _c(
                "b-card",
                { staticClass: "p-4", attrs: { "no-body": "" } },
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
                        "section",
                        [
                          _c("h4", { staticClass: "mb-4" }, [
                            _vm._v("Billing Address")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-row",
                            { staticClass: "mb-0" },
                            [
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _c("i", { staticClass: "fas fa-user" }),
                                        _vm._v(
                                          "\n                    Full name\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          placeholder: "Enter your full name"
                                        },
                                        model: {
                                          value: _vm.form.txt_billing_fullname,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "txt_billing_fullname",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.txt_billing_fullname"
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
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _c("i", {
                                          staticClass: "fas fa-envelope mr-3"
                                        }),
                                        _vm._v(
                                          "\n                    Email\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          placeholder: "Enter your email"
                                        },
                                        model: {
                                          value: _vm.form.txt_billing_email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "txt_billing_email",
                                              $$v
                                            )
                                          },
                                          expression: "form.txt_billing_email"
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
                            "b-form-row",
                            { staticClass: "mb-0" },
                            [
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v(
                                          "\n                    Address\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          placeholder: "Enter your address"
                                        },
                                        model: {
                                          value: _vm.form.txt_inv_addr1,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "txt_inv_addr1",
                                              $$v
                                            )
                                          },
                                          expression: "form.txt_inv_addr1"
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
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v(
                                          "\n                    City\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          placeholder: "Enter your city"
                                        },
                                        model: {
                                          value: _vm.form.txt_bill_city,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "txt_bill_city",
                                              $$v
                                            )
                                          },
                                          expression: "form.txt_bill_city"
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
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v(
                                          "\n                    Country\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          options: _vm.regions,
                                          required: "",
                                          label: "countryname",
                                          reduce: function(country) {
                                            return country.countryShortCode
                                          },
                                          placeholder: "Enter your country",
                                          clearable: false
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
                                                        staticClass:
                                                          "vs__search",
                                                        attrs: {
                                                          required: !_vm.form
                                                            .txt_bill_country
                                                        }
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
                                          value: _vm.form.txt_bill_country,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "txt_bill_country",
                                              $$v
                                            )
                                          },
                                          expression: "form.txt_bill_country"
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
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v(
                                          "\n                    Postal code\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          placeholder: "Enter your postal code"
                                        },
                                        model: {
                                          value: _vm.form.zip_code,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "zip_code", $$v)
                                          },
                                          expression: "form.zip_code"
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
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "section",
                        [
                          _c("h4", { staticClass: "mb-4" }, [
                            _vm._v("Payment")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Card holder (name on card)")
                              ]),
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: { placeholder: "Eg: NGUYEN VAN A" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-group", [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Credit informations")
                            ]),
                            _vm._v(" "),
                            _c("div", { attrs: { id: "card-element" } }),
                            _vm._v(" "),
                            _vm.cardError
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.cardError))
                                ])
                              : _vm._e()
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "section",
                        { staticClass: "py-3" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "w-100",
                              attrs: {
                                type: "submit",
                                variant: "primary",
                                disabled: _vm.paymentProcessing
                              }
                            },
                            [
                              _vm._v(
                                "\n              Checkout\n              "
                              ),
                              _vm.paymentProcessing
                                ? _c("b-spinner", {
                                    attrs: { variant: "light", small: "" }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "3" } },
            [
              _c("b-card", { staticClass: "p-4", attrs: { "no-body": "" } }, [
                _c("h4", [_vm._v("Summary")]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex justify-content-between" }, [
                  _c("div", [_c("p", [_vm._v("Total")])]),
                  _vm._v(" "),
                  _vm.reservation
                    ? _c("div", [
                        _c("p", [
                          _vm._v(
                            _vm._s(_vm.formatMoney(_vm.reservation.price, 0)) +
                              " VND"
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
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