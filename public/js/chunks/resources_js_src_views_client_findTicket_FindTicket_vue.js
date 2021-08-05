"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_client_findTicket_FindTicket_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FindTicket",
  props: {
    trackHeight: {
      type: Number,
      deafult: 1
    }
  },
  data: function data() {
    return {
      checked: 'no',
      unchecked: 'yes',
      html: '<i class="far fa-plus"></i>',
      Result: ' 2 results found.',
      selected: 'Alaska, Hoa Kỳ',
      selected2: 'Alaska, Hoa Kỳ',
      selected3: 'One-way',
      selected4: '1',
      //ticket
      dataTicket: [{
        img: 'http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2019/01/1.png',
        FromTo: 'New York to Washington',
        AirLine: 'Major Airline',
        TripType: '1 PERSON(S)',
        price: '$950.00',
        takeOf: 'THU JUL 29, 2021 08:00 AM',
        landing: 'THU JUL 29, 2021 12:30 PM',
        FlightStop: '3 Stop',
        PlightType: 'Business',
        // đoạn này trong data trừ tgian takeOf - landing = total time
        totalTime: '4HOURS 30MINUTES'
      }, {
        img: 'http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2019/01/3-300x270.png',
        FromTo: 'New York to Washington',
        AirLine: 'UNITED AIRLINES',
        TripType: '1 PERSON(S)',
        price: '$1000.00',
        takeOf: 'THU JUL 29, 2021 08:00 AM',
        landing: 'THU JUL 29, 2021 04:00 PM',
        FlightStop: '1 Stop',
        PlightType: 'First Class',
        // đoạn này trong data trừ tgian takeOf - landing = total time
        totalTime: '8HOURS'
      }],
      //
      //selected stop
      selectedStop: [],
      optionsStop: [{
        item: 'All',
        name: 'All'
      }, {
        item: '1 Stop',
        name: '1 Stop'
      }, {
        item: '2 Stop',
        name: '2 Stop'
      }, {
        item: '3 Stop',
        name: '3 Stop'
      }, {
        item: 'Multi Stop',
        name: 'Multi Stop'
      }],
      //
      //plight type
      selectedFlight: [],
      optionsFlight: [{
        item: 'All',
        name: 'All'
      }, {
        item: 'Business',
        name: 'Business'
      }, {
        item: 'First class',
        name: 'First class'
      }, {
        item: 'Premium Economy',
        name: 'Premium Economy'
      }],
      //
      //plight type
      selectedAirLine: [],
      optionsAirLine: [{
        item: 'All',
        name: 'All'
      }, {
        item: 'Delta Airlines',
        name: 'Delta Airlines'
      }, {
        item: 'Major Airline',
        name: 'Major Airline'
      }, {
        item: 'United Airlines',
        name: 'United Airlines'
      }],
      //
      //price
      dola: '$',
      min: 0,
      max: 1000,
      minValue: 0,
      maxValue: 1000,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      },
      //**
      options1: [{
        item: 'Alaska, Hoa Kỳ',
        name: 'Alaska, Hoa Kỳ'
      }, {
        item: 'NewYork, Hoa Kỳ',
        name: 'NewYork, Hoa Kỳ'
      }, {
        item: 'Washington, Hoa Kỳ',
        name: 'Washington, Hoa Kỳ'
      }],
      options2: [{
        item: 'Alaska, Hoa Kỳ',
        name: 'Alaska, Hoa Kỳ'
      }, {
        item: 'NewYork, Hoa Kỳ',
        name: 'NewYork, Hoa Kỳ'
      }, {
        item: 'Washington, Hoa Kỳ',
        name: 'Washington, Hoa Kỳ'
      }],
      options3: [{
        item: 'One-way',
        name: 'One-way'
      }, {
        item: 'Round-Trip',
        name: 'Round-Trip'
      }],
      options4: [{
        item: '1',
        amount: '1'
      }, {
        item: '2',
        amount: '2'
      }, {
        item: '3',
        amount: '3'
      }, {
        item: '4',
        amount: '4'
      }, {
        item: '5',
        amount: '5'
      }, {
        item: '6',
        amount: '6'
      }, {
        item: '7',
        amount: '7'
      }, {
        item: '8',
        amount: '8'
      }, {
        item: '9',
        amount: '9'
      }, {
        item: '10',
        amount: '10'
      }]
    };
  },
  methods: {
    evenDefoult: function evenDefoult(e) {
      e.preventDefault();
    },
    // Collap(){
    //   this.html = "<i class=\"far fa-minus\"></i>"
    // },
    moveTrack: function moveTrack(track, ev) {
      var percentInPx = this.getPercentInPx();
      var trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      var clientX = ev.clientX;
      var moveDiff = clientX - trackX;
      var moveInPct = moveDiff / percentInPx; // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      var value = Math.round(moveInPct / this.percentPerStep) * this.step + this.min;

      if (track === 'track1') {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === 'track2') {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + '%';
      this.setTrackHightlight();
    },
    mousedown: function mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },
    touchstart: function touchstart(ev, track) {
      this.mousedown(ev, track);
    },
    mouseup: function mouseup() {
      if (!this.isDragging) return;
      this.isDragging = false;
    },
    touchend: function touchend(ev, track) {
      this.mouseup(ev, track);
    },
    mousemove: function mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },
    touchmove: function touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },
    valueToPercent: function valueToPercent(value) {
      return (value - this.min) / this.step * this.percentPerStep;
    },
    setTrackHightlight: function setTrackHightlight() {
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValue) + '%';
      this.$refs.trackHighlight.style.width = this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue) + '%';
    },
    getPercentInPx: function getPercentInPx() {
      var trackWidth = this.$refs._vpcTrack.offsetWidth;
      var oneStepInPx = trackWidth / this.totalSteps; // 1 percent in px

      var percentInPx = oneStepInPx / this.percentPerStep;
      return percentInPx;
    },
    setClickMove: function setClickMove(ev) {
      var track1Left = this.$refs.track1.getBoundingClientRect().left;
      var track2Left = this.$refs.track2.getBoundingClientRect().left; // console.log('track1Left', track1Left)

      if (ev.clientX < track1Left) {
        this.moveTrack('track1', ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack('track1', ev);
      } else {
        this.moveTrack('track2', ev);
      }
    }
  },
  mounted: function mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step; // percent the track button to be moved on each step

    this.percentPerStep = 100 / this.totalSteps; // console.log('percentPerStep', this.percentPerStep)
    // set track1 initilal

    document.querySelector('.track1').style.left = this.valueToPercent(this.minValue) + '%'; // track2 initial position

    document.querySelector('.track2').style.left = this.valueToPercent(this.maxValue) + '%'; // set initila track highlight

    this.setTrackHightlight();
    var self = this;
    ['mouseup', 'mousemove'].forEach(function (type) {
      document.body.addEventListener(type, function (ev) {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });
    ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach(function (type) {
      document.querySelector('.track1').addEventListener(type, function (ev) {
        ev.stopPropagation();
        self[type](ev, 'track1');
      });
      document.querySelector('.track2').addEventListener(type, function (ev) {
        ev.stopPropagation();
        self[type](ev, 'track2');
      });
    }); // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX

    document.querySelector('.track').addEventListener('click', function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });
    document.querySelector('.track-highlight').addEventListener('click', function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".mainFindTicket[data-v-4caca5b5] {\n  padding: 50px 0;\n}\n.mainFindTicket .Result[data-v-4caca5b5] {\n  background-color: #ffffff;\n  padding: 15px;\n  border-radius: 5px;\n}\n.mainFindTicket .Result i[data-v-4caca5b5] {\n  color: #FDB714;\n  font-size: 20px;\n}\n.mainFindTicket .selectResult span[data-v-4caca5b5] {\n  line-height: 24px;\n}\n.mainFindTicket .selectResult .btn-secondary[data-v-4caca5b5] {\n  padding: 15px !important;\n  color: #333333;\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n.mainFindTicket .selectResult button[data-v-4caca5b5]:focus {\n  box-shadow: none !important;\n  border: none !important;\n  outline: none !important;\n}\n.mainFindTicket .selectResult .collapse-3[data-v-4caca5b5] {\n  background-color: #ffffff;\n  padding: 20px 15px;\n}\n.mainFindTicket .selectResult .range-value[data-v-4caca5b5] {\n  position: absolute;\n  top: -2rem;\n}\n.mainFindTicket .selectResult .range-value.min[data-v-4caca5b5] {\n  left: 0;\n}\n.mainFindTicket .selectResult .range-value.max[data-v-4caca5b5] {\n  right: 0;\n}\n.mainFindTicket .selectResult .track-container[data-v-4caca5b5] {\n  margin-top: 50px;\n  width: 100%;\n  position: relative;\n  cursor: pointer;\n  height: 0.5rem;\n}\n.mainFindTicket .selectResult .track[data-v-4caca5b5],\n.mainFindTicket .selectResult .track-highlight[data-v-4caca5b5] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 0.5rem;\n}\n.mainFindTicket .selectResult .track[data-v-4caca5b5] {\n  background-color: #ddd;\n}\n.mainFindTicket .selectResult .track-highlight[data-v-4caca5b5] {\n  background-color: #01B7F2;\n  z-index: 2;\n}\n.mainFindTicket .selectResult .track-btn[data-v-4caca5b5] {\n  border-radius: 50px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  z-index: 2;\n  width: 1.5rem;\n  height: 1.5rem;\n  top: calc(-50% - 0.25rem);\n  margin-left: -1rem;\n  border: none;\n  background-color: black;\n  touch-action: pan-x;\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, background-color 0.3s ease;\n}\n.mainFindTicket .selectResult #collapse-6 .bv-no-focus-ring .custom-control-inline[data-v-4caca5b5] {\n  background-color: #333333;\n}\n.mainFindTicket .TicketList[data-v-4caca5b5] {\n  background-color: #ffffff;\n  padding: 16px;\n}\n.mainFindTicket .TicketList .text12px[data-v-4caca5b5] {\n  font-size: 10px;\n}\n.mainFindTicket .TicketList .boxin4[data-v-4caca5b5] {\n  background-color: #D9D9D9;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n.mainFindTicket .TicketList .boxin4[data-v-4caca5b5]:hover {\n  background-color: #FDB714;\n  cursor: pointer;\n}\n.mainFindTicket .TicketList .in4Flight[data-v-4caca5b5] {\n  border-top: 1px solid rgba(180, 180, 180, 0.3);\n}\n.mainFindTicket .TicketList .in4Flight .boxBookNow[data-v-4caca5b5] {\n  text-align: center !important;\n  justify-content: center !important;\n  display: flex !important;\n}\n.mainFindTicket .TicketList .in4Flight .boxBookNow .bookNow[data-v-4caca5b5] {\n  background-color: #D9D9D9;\n  padding: 5px 20px;\n}\n.mainFindTicket .TicketList .in4Flight .boxBookNow .bookNow[data-v-4caca5b5]:hover {\n  background-color: #98CE44;\n}\n.mainFindTicket .TicketList .in4Flight .text12px[data-v-4caca5b5] {\n  font-size: 12px;\n}\n.mainFindTicket .TicketList .in4Flight .smallText[data-v-4caca5b5] {\n  font-size: 12px;\n  padding: 0 5px;\n  color: #01b7f2;\n}\n.mainFindTicket .TicketList .in4Flight .col-md-3[data-v-4caca5b5] {\n  text-align: center;\n  padding: 10px 5px;\n  border-right: 1px solid rgba(180, 180, 180, 0.3);\n}\n.mainFindTicket .TicketList .in4Flight .icoinFly[data-v-4caca5b5] {\n  transform: rotate(-45deg);\n  color: #FDB714;\n}\n.mainFindTicket .TicketList .in4Flight .icoinLanding[data-v-4caca5b5] {\n  transform: rotate(45deg);\n  color: #FDB714;\n}\n.mainFindTicket .TicketList .in4Flight .fa-clock[data-v-4caca5b5] {\n  color: #FDB714;\n}\n.mainFindTicket p[data-v-4caca5b5] {\n  margin-bottom: 0;\n}\n.mainFindTicket label[data-v-4caca5b5] {\n  display: block !important;\n  cursor: pointer;\n}\n.mainFindTicket .noFlight[data-v-4caca5b5] {\n  background-color: #ffffff;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_style_index_0_id_4caca5b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_style_index_0_id_4caca5b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_style_index_0_id_4caca5b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/views/client/findTicket/FindTicket.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/client/findTicket/FindTicket.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FindTicket_vue_vue_type_template_id_4caca5b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true& */ "./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true&");
/* harmony import */ var _FindTicket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FindTicket.vue?vue&type=script&lang=js& */ "./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=script&lang=js&");
/* harmony import */ var _FindTicket_vue_vue_type_style_index_0_id_4caca5b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true& */ "./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _FindTicket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FindTicket_vue_vue_type_template_id_4caca5b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FindTicket_vue_vue_type_template_id_4caca5b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4caca5b5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/client/findTicket/FindTicket.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FindTicket.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_style_index_0_id_4caca5b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=style&index=0&id=4caca5b5&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_template_id_4caca5b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_template_id_4caca5b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FindTicket_vue_vue_type_template_id_4caca5b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/client/findTicket/FindTicket.vue?vue&type=template&id=4caca5b5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bv-example-row mainFindTicket" },
    [
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { md: "3" } }, [
            _c("div", { staticClass: "Result mb-2" }, [
              _c("p", [
                _c("i", { staticClass: "fad fa-search-location" }),
                _vm._v(" \n            " + _vm._s(_vm.Result) + "\n          ")
              ])
            ]),
            _vm._v(" "),
            _c(
              "form",
              { staticClass: "selectResult", attrs: { action: "push" } },
              [
                _c(
                  "div",
                  { staticClass: "mb-1" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.collapse-3",
                            modifiers: { "collapse-3": true }
                          }
                        ],
                        staticClass:
                          " w-100 text-left p-2 d-flex justify-content-between",
                        on: {
                          click: function($event) {
                            _vm.Collap == true ? true : false
                          }
                        }
                      },
                      [
                        _vm._v("\n              Modify Search\n              "),
                        _c("p", { domProps: { innerHTML: _vm._s(_vm.html) } })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        staticClass: "collapse-3",
                        attrs: { id: "collapse-3" }
                      },
                      [
                        _c("p", [_vm._v("From :")]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.options1,
                            "value-field": "item",
                            "text-field": "name",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selected,
                            callback: function($$v) {
                              _vm.selected = $$v
                            },
                            expression: "selected"
                          }
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v("To :")]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.options2,
                            "value-field": "item",
                            "text-field": "name",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selected2,
                            callback: function($$v) {
                              _vm.selected2 = $$v
                            },
                            expression: "selected2"
                          }
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v("Trip type")]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.options3,
                            "value-field": "item",
                            "text-field": "name",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selected3,
                            callback: function($$v) {
                              _vm.selected3 = $$v
                            },
                            expression: "selected3"
                          }
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v("Start when")]),
                        _vm._v(" "),
                        _c("b-datepicker", { staticClass: "mb-3" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("p", [_vm._v("Return when")]),
                            _vm._v(" "),
                            _c("b-datepicker", { staticClass: "mb-3" })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Adults")]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.options4,
                            "value-field": "item",
                            "text-field": "amount",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selected4,
                            callback: function($$v) {
                              _vm.selected4 = $$v
                            },
                            expression: "selected4"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "w-100",
                            attrs: { variant: "success" },
                            on: {
                              click: function($event) {
                                return _vm.evenDefoult($event)
                              }
                            }
                          },
                          [_vm._v("Search")]
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
                  { staticClass: "mb-1" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.collapse-4",
                            modifiers: { "collapse-4": true }
                          }
                        ],
                        staticClass:
                          " w-100 text-left p-2  d-flex justify-content-between",
                        on: { click: _vm.Collap }
                      },
                      [
                        _vm._v("\n              Price :\n              "),
                        _c("p", { domProps: { innerHTML: _vm._s(_vm.html) } })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        staticClass: "collapse-3",
                        attrs: { id: "collapse-4" }
                      },
                      [
                        _c("div", { staticClass: "track-container" }, [
                          _c("span", { staticClass: "range-value min" }, [
                            _vm._v(
                              _vm._s(_vm.minValue) +
                                " " +
                                _vm._s(_vm.dola) +
                                " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "range-value max" }, [
                            _vm._v(_vm._s(_vm.maxValue) + _vm._s(_vm.dola))
                          ]),
                          _vm._v(" "),
                          _c("div", { ref: "_vpcTrack", staticClass: "track" }),
                          _vm._v(" "),
                          _c("div", {
                            ref: "trackHighlight",
                            staticClass: "track-highlight"
                          }),
                          _vm._v(" "),
                          _c("button", {
                            ref: "track1",
                            staticClass: "track-btn track1",
                            on: {
                              click: function($event) {
                                return _vm.evenDefoult($event)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("button", {
                            ref: "track2",
                            staticClass: "track-btn track2",
                            on: {
                              click: function($event) {
                                return _vm.evenDefoult($event)
                              }
                            }
                          })
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mb-1" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.collapse-5",
                            modifiers: { "collapse-5": true }
                          }
                        ],
                        staticClass:
                          " w-100 text-left p-2  d-flex justify-content-between ",
                        on: { click: _vm.Collap }
                      },
                      [
                        _vm._v(
                          "\n              Flight stops :\n              "
                        ),
                        _c("p", { domProps: { innerHTML: _vm._s(_vm.html) } })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        staticClass: "collapse-3",
                        attrs: { id: "collapse-5" }
                      },
                      [
                        _c("b-form-checkbox-group", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.optionsStop,
                            "value-field": "item",
                            "text-field": "name",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selectedStop,
                            callback: function($$v) {
                              _vm.selectedStop = $$v
                            },
                            expression: "selectedStop"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "mt-3" }, [
                          _c("p", [_vm._v("Your Selected:")]),
                          _vm._v(" "),
                          _c("strong", [_vm._v(_vm._s(_vm.selectedStop))])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mb-1" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.collapse-6",
                            modifiers: { "collapse-6": true }
                          }
                        ],
                        staticClass:
                          " w-100 text-left p-2  d-flex justify-content-between ",
                        on: { click: _vm.Collap }
                      },
                      [
                        _vm._v("\n              Flight Type :\n              "),
                        _c("p", { domProps: { innerHTML: _vm._s(_vm.html) } })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        staticClass: "collapse-3",
                        attrs: { id: "collapse-6" }
                      },
                      [
                        _c("b-form-checkbox-group", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.optionsFlight,
                            "value-field": "item",
                            "text-field": "name",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selectedFlight,
                            callback: function($$v) {
                              _vm.selectedFlight = $$v
                            },
                            expression: "selectedFlight"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "mt-3" }, [
                          _c("p", [_vm._v("Your Selected:")]),
                          _vm._v(" "),
                          _c("strong", [_vm._v(_vm._s(_vm.selectedFlight))])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mb-1" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.collapse-7",
                            modifiers: { "collapse-7": true }
                          }
                        ],
                        staticClass:
                          " w-100 text-left p-2  d-flex justify-content-between ",
                        on: { click: _vm.Collap }
                      },
                      [
                        _vm._v("\n              Air Line :\n              "),
                        _c("p", { domProps: { innerHTML: _vm._s(_vm.html) } })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        staticClass: "collapse-3",
                        attrs: { id: "collapse-7" }
                      },
                      [
                        _c("b-form-checkbox-group", {
                          staticClass: "mb-3",
                          attrs: {
                            options: _vm.optionsAirLine,
                            "value-field": "item",
                            "text-field": "name",
                            "disabled-field": "notEnabled"
                          },
                          model: {
                            value: _vm.selectedAirLine,
                            callback: function($$v) {
                              _vm.selectedAirLine = $$v
                            },
                            expression: "selectedAirLine"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "mt-3" }, [
                          _c("p", [_vm._v("Your Selected:")]),
                          _vm._v(" "),
                          _c("strong", [_vm._v(_vm._s(_vm.selectedAirLine))])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "9" } },
            _vm._l(_vm.dataTicket, function(dataTick, index) {
              return _c(
                "div",
                { key: index, staticClass: "TicketList mb-3" },
                [
                  _c(
                    "b-row",
                    [
                      _c("b-col", { attrs: { md: "2" } }, [
                        _c("img", {
                          staticClass: "w-100 img-fluid",
                          attrs: { src: dataTick.img, alt: "" }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "10" } },
                        [
                          _c("b-row", { staticClass: "border-right pb-1" }, [
                            _c("div", [
                              _c("h4", [_vm._v(_vm._s(dataTick.FromTo))]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text10px" }, [
                                _vm._v(_vm._s(dataTick.AirLine))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("span", { staticClass: "boxin4" }, [
                                _vm._v(_vm._s(dataTick.FlightStop))
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "boxin4" }, [
                                _vm._v(_vm._s(dataTick.PlightType))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "in4Flight" },
                            [
                              _c("b-col", { attrs: { md: "3" } }, [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "far fa-plane icoinFly"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "smallText" }, [
                                    _vm._v("TAKE OFF")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text12px" }, [
                                    _vm._v(_vm._s(dataTick.takeOf))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { md: "3" } }, [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "far fa-plane icoinLanding"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "smallText" }, [
                                    _vm._v("LANDING")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text12px" }, [
                                    _vm._v(_vm._s(dataTick.landing))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { md: "3" } }, [
                                _c("div", [
                                  _c("i", { staticClass: "far fa-clock" }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "smallText" }, [
                                    _vm._v("TOTAL TIME")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text12px" }, [
                                    _vm._v(_vm._s(dataTick.totalTime))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  staticClass: "boxBookNow",
                                  attrs: { md: "3" }
                                },
                                [
                                  _c("b-button", { staticClass: "bookNow" }, [
                                    _vm._v(
                                      "\n                    Book Now\n                  "
                                    )
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
                    ],
                    1
                  )
                ],
                1
              )
            }),
            0
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