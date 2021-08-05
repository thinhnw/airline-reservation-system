<template>
  <b-container class="bv-example-row mainFindTicket">
    <b-row>
      <b-col md="3">
        <div class="Result mb-2">
          <p>
            <i class="fad fa-search-location"></i>&ensp;
            {{Result}}
          </p>
        </div>
        <form action="push" class="selectResult">
          <div class="mb-1">
            <b-button v-b-toggle.collapse-3 class=" w-100 text-left p-2 d-flex justify-content-between">
              Modify Search
              <p v-html="html"></p>
            </b-button>
            <b-collapse class="collapse-3" id="collapse-3">
              <p>From :</p>
              <b-form-select
                  v-model="selected"
                  :options="options1"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
              ></b-form-select>
              <p>To :</p>
              <b-form-select
                  v-model="selected2"
                  :options="options2"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
              ></b-form-select>
              <p>Trip type</p>
              <b-form-select
                  v-model="selected3"
                  :options="options3"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
              ></b-form-select>
              <p>Start when</p>
              <b-datepicker class="mb-3"></b-datepicker>
              <div>
                <p>Return when</p>
                <b-datepicker class="mb-3"></b-datepicker>
              </div>
              <p>Adults</p>
              <b-form-select
                  v-model="selected4"
                  :options="options4"
                  class="mb-3"
                  value-field="item"
                  text-field="amount"
                  disabled-field="notEnabled"
              ></b-form-select>
<!--              here not defoult-->
              <b-button v-on:click="evenDefoult($event)" class="w-100" variant="success">Search</b-button>
            </b-collapse>
          </div>
          <div class="mb-1">
            <b-button v-b-toggle.collapse-4 class=" w-100 text-left p-2  d-flex justify-content-between">
              Price :
              <p v-html="html"></p>
            </b-button>
            <b-collapse class="collapse-3" id="collapse-4">
              <div class="track-container">
                <span class="range-value min">{{ minValue}} {{dola}} </span> <span class="range-value max">{{ maxValue }}{{dola}}</span>
                <div class="track" ref="_vpcTrack"> </div>
                <div class="track-highlight" ref="trackHighlight"></div>
<!--                event evenDefoult-->
                <button v-on:click="evenDefoult($event)"  class="track-btn track1" ref="track1" ></button>
                <button v-on:click="evenDefoult($event)" class="track-btn track2" ref="track2"></button>
              </div>
            </b-collapse>
          </div>
          <div class="mb-1">
            <b-button v-b-toggle.collapse-5 class=" w-100 text-left p-2  d-flex justify-content-between ">
              Flight stops :
              <p v-html="html"></p>
            </b-button>
            <b-collapse class="collapse-3" id="collapse-5">
              <b-form-checkbox-group
                  v-model="selectedStop"
                  :options="optionsStop"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
              ></b-form-checkbox-group>
              <div class="mt-3">
                <p>Your Selected:</p>
                <strong>{{ selectedStop }}</strong>
              </div>
            </b-collapse>
          </div>
          <div class="mb-1">
            <b-button v-b-toggle.collapse-6 class=" w-100 text-left p-2  d-flex justify-content-between ">
              Flight Type :
              <p v-html="html"></p>
            </b-button>
            <b-collapse class="collapse-3" id="collapse-6">
              <b-form-checkbox-group
                  v-model="selectedFlight"
                  :options="optionsFlight"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
              ></b-form-checkbox-group>
              <div class="mt-3">
                <p>Your Selected:</p>
                <strong>{{ selectedFlight }}</strong>
              </div>
            </b-collapse>
          </div>
          <div class="mb-1">
            <b-button v-b-toggle.collapse-7 class=" w-100 text-left p-2  d-flex justify-content-between ">
              Air Line :
              <p v-html="html"></p>
            </b-button>
            <b-collapse class="collapse-3" id="collapse-7">
              <b-form-checkbox-group
                  v-model="selectedAirLine"
                  :options="optionsAirLine"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
              ></b-form-checkbox-group>
              <div class="mt-3">
                <p>Your Selected:</p>
                <strong>{{ selectedAirLine }}</strong>
              </div>
            </b-collapse>
          </div>
        </form>
      </b-col>

      <b-col md="9">
<!--        No available flights-->
<!--        <div class="noFlight p-3">-->
<!--          <p>No available flights</p>-->
<!--          <p>Please confirm your search fields such as From, To, When, etc in sidebar.</p>-->
<!--        </div>-->
        <div class="TicketList mb-3" :key="index" v-for="(dataTick , index) in dataTicket">
          <b-row>
            <b-col md="2">
              <img class="w-100 img-fluid" :src="dataTick.img" alt="">
            </b-col>
            <b-col md="10">
              <b-row class="border-right pb-1">
                <div>
                  <h4>{{dataTick.FromTo}}</h4>
                  <p class="text10px">{{dataTick.AirLine}}</p>
                </div>
                <div>
                  <span class="boxin4">{{dataTick.FlightStop}}</span>
                  <span class="boxin4">{{dataTick.PlightType}}</span>
                </div>
              </b-row>
              <b-row class="in4Flight">
                <b-col md="3">
                  <div>
                    <i class="far fa-plane icoinFly"></i>
                    <span class="smallText">TAKE OFF</span>
                    <p class="text12px">{{dataTick.takeOf}}</p>
                  </div>
                </b-col>
                <b-col md="3">
                  <div>
                    <i class="far fa-plane icoinLanding"></i>
                    <span class="smallText">LANDING</span>
                    <p class="text12px">{{dataTick.landing}}</p>
                  </div>
                </b-col>
                <b-col md="3">
                  <div>
                    <i class="far fa-clock"></i>
                    <span class="smallText">TOTAL TIME</span>
                    <p class="text12px">{{dataTick.totalTime}}</p>
                  </div>
                </b-col>
                <b-col md="3" class="boxBookNow">
                  <b-button class="bookNow">
                    Book Now
                  </b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: "FindTicket",
  props: {
    trackHeight: {
      type: Number,
      deafult: 1
    }
  },
  data() {
    return {
      checked : 'no',
      unchecked : 'yes',
      html: '<i class="far fa-plus"></i>',
      Result: ' 2 results found.',
      selected: 'Alaska, Hoa Kỳ',
      selected2: 'Alaska, Hoa Kỳ',
      selected3: 'One-way',
      selected4: '1',
      //ticket
      dataTicket :
        [
          { img : 'http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2019/01/1.png',
            FromTo : 'New York to Washington',
            AirLine : 'Major Airline',
            TripType : '1 PERSON(S)',
            price : '$950.00',
            takeOf : 'THU JUL 29, 2021 08:00 AM',
            landing : 'THU JUL 29, 2021 12:30 PM',
            FlightStop : '3 Stop',
            PlightType : 'Business',
            // đoạn này trong data trừ tgian takeOf - landing = total time
            totalTime : '4HOURS 30MINUTES'
          },
          { img : 'http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2019/01/3-300x270.png',
            FromTo : 'New York to Washington',
            AirLine : 'UNITED AIRLINES',
            TripType : '1 PERSON(S)',
            price : '$1000.00',
            takeOf : 'THU JUL 29, 2021 08:00 AM',
            landing : 'THU JUL 29, 2021 04:00 PM',
            FlightStop : '1 Stop',
            PlightType : 'First Class',
            // đoạn này trong data trừ tgian takeOf - landing = total time
            totalTime : '8HOURS'
          },

        ],
      //
      //selected stop
      selectedStop: [],
      optionsStop: [
        { item: 'All', name: 'All' },
        { item: '1 Stop', name: '1 Stop' },
        { item: '2 Stop', name: '2 Stop' },
        { item: '3 Stop', name: '3 Stop'},
        { item: 'Multi Stop', name: 'Multi Stop'},
      ],
      //
      //plight type
      selectedFlight: [],
      optionsFlight: [
        { item: 'All', name: 'All' },
        { item: 'Business', name: 'Business' },
        { item: 'First class', name: 'First class'},
        { item: 'Premium Economy', name: 'Premium Economy'},
      ],
      //
      //plight type
      selectedAirLine: [],
      optionsAirLine: [
        { item: 'All', name: 'All' },
        { item: 'Delta Airlines', name: 'Delta Airlines' },
        { item: 'Major Airline', name: 'Major Airline'},
        { item: 'United Airlines', name: 'United Airlines'},
      ],
      //
      //price
      dola: '$',
      min: 0,
      max: 1000 ,
      minValue: 0 ,
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
      options1: [
        {item: 'Alaska, Hoa Kỳ', name: 'Alaska, Hoa Kỳ'},
        {item: 'NewYork, Hoa Kỳ', name: 'NewYork, Hoa Kỳ'},
        {item: 'Washington, Hoa Kỳ', name: 'Washington, Hoa Kỳ'}
      ],
      options2: [
        {item: 'Alaska, Hoa Kỳ', name: 'Alaska, Hoa Kỳ'},
        {item: 'NewYork, Hoa Kỳ', name: 'NewYork, Hoa Kỳ'},
        {item: 'Washington, Hoa Kỳ', name: 'Washington, Hoa Kỳ'}
      ],
      options3: [
        {item: 'One-way', name: 'One-way'},
        {item: 'Round-Trip', name: 'Round-Trip'}
      ],
      options4: [
        {item: '1', amount: '1'},
        {item: '2', amount: '2'},
        {item: '3', amount: '3'},
        {item: '4', amount: '4'},
        {item: '5', amount: '5'},
        {item: '6', amount: '6'},
        {item: '7', amount: '7'},
        {item: '8', amount: '8'},
        {item: '9', amount: '9'},
        {item: '10', amount: '10'},
      ]
    }
  },
  methods: {
    evenDefoult (e) {
      e.preventDefault()
    },
    // Collap(){
    //   this.html = "<i class=\"far fa-minus\"></i>"
    // },
    moveTrack(track, ev){

      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX-trackX;

      let moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if(moveInPct<1 || moveInPct>100) return;
      let value = ( Math.round(moveInPct / this.percentPerStep) * this.step ) + this.min;
      if(track==='track1'){
        if(value >= (this.maxValue - this.step)) return;
        this.minValue = value;
      }

      if(track==='track2'){
        if(value <= (this.minValue + this.step)) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + '%';
      this.setTrackHightlight()

    },
    mousedown(ev, track){

      if(this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track){
      this.mousedown(ev, track)
    },

    mouseup(){
      if(!this.isDragging) return;
      this.isDragging = false
    },

    touchend(ev, track){
      this.mouseup(ev, track)
    },

    mousemove(ev, track){
      if(!this.isDragging) return;
      this.moveTrack(track, ev)
    },

    touchmove(ev, track){
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent(value){
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight(){
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValue) + '%'
      this.$refs.trackHighlight.style.width = (this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue)) + '%'
    },

    getPercentInPx(){
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev){
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if(ev.clientX < track1Left){
        this.moveTrack('track1', ev)
      }else if((ev.clientX - track1Left) < (track2Left - ev.clientX) ){
        this.moveTrack('track1', ev)
      }else{
        this.moveTrack('track2', ev)
      }
    }
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector('.track1').style.left = this.valueToPercent(this.minValue) + '%'
    // track2 initial position
    document.querySelector('.track2').style.left = this.valueToPercent(this.maxValue) + '%'
    // set initila track highlight
    this.setTrackHightlight()

    var self = this;

    ['mouseup', 'mousemove'].forEach( type => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if(self.isDragging && self.pos.curTrack){
          self[type](ev, self.pos.curTrack)
        }
      })
    });

    ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach( type => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track2')
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector('.track').addEventListener('click', function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev)

    })

    document.querySelector('.track-highlight').addEventListener('click', function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev)

    })
  }
}

</script>

<style lang="scss" scoped>
.mainFindTicket{
  padding: 50px 0;
  .Result{
    background-color: #ffffff;
    padding: 15px;
    border-radius: 5px;
    i{
      color: #FDB714;
      font-size: 20px;
    }
  }
  .selectResult{
      .mb-1{
          #collapse-7{
              .mb-3{
                  .custom-control-inline{
                      display: block !important;
                  }
                  .custom-control{
                      display: block !important;
                  }
              }
          }
      }
    span{
      line-height: 24px;
    }
    .btn-secondary {
      padding: 15px !important;
      color: #333333;
      background-color: #ffffff;
      border-color: #ffffff;
    }
    button:focus{
      box-shadow: none !important;
      border: none !important;
      outline: none !important;
    }
    .collapse-3 {
      background-color: #ffffff;
      padding: 20px 15px;
    }
    .range-value{
      position: absolute;
      top: -2rem;
    }
    .range-value.min{
      left: 0;
    }
    .range-value.max{
      right: 0;
    }
    .track-container{
      margin-top: 50px;
      width: 100%;
      position: relative;
      cursor: pointer;
      height: 0.5rem;
    }
    .track,
    .track-highlight {
      display: block;
      position: absolute;
      width: 100%;
      height: 0.5rem;
    }
    .track{
      background-color: #ddd;
    }
    .track-highlight{
      background-color: #01B7F2;
      z-index: 2;
    }
    .track-btn{
      border-radius: 50px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      cursor: pointer;
      display: block;
      position: absolute;
      z-index: 2;
      width: 1.5rem;
      height: 1.5rem;
      top: calc(-50% - 0.25rem);
      margin-left: -1rem;
      border: none;
      background-color: black;
      -ms-touch-action: pan-x;
      touch-action: pan-x;
      transition: box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
      transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease;
      transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
    }
    #collapse-6{
      .bv-no-focus-ring{
        .custom-control-inline {
          background-color: #333333;
        }
      }
    }
  }
  .TicketList{
    background-color: #ffffff;
    padding: 16px;
    .text12px{
      font-size: 10px;
    }
    .boxin4{
      background-color: #D9D9D9;
      color: #ffffff;
      font-size: 12px;
      padding: 5px 10px;
      margin-left: 10px;
      &:hover{
        background-color: #FDB714;
        cursor: pointer;
      }
    }
    .in4Flight{
      border-top: 1px solid rgba(180,180,180, 0.3);
      .boxBookNow{
        text-align: center !important;
        justify-content: center !important;
        display: flex !important;
        .bookNow{
          background-color: #D9D9D9;
          padding: 5px 20px;
          &:hover{
            background-color: #98CE44;
          }
        }
      }
      .text12px{
        font-size: 12px;
      }
      .smallText{
        font-size: 12px;
        padding: 0 5px;
        color: #01b7f2;
      }
      .col-md-3{
        text-align: center;
        padding: 10px 5px;
        border-right: 1px solid rgba(180,180,180, 0.3);
      }
      .icoinFly{
        transform: rotate(-45deg);
        color: #FDB714;
      }
      .icoinLanding{
        transform: rotate(45deg);
        color: #FDB714;
      }
      .fa-clock{
        color: #FDB714;
      }
    }
  }
  p{
    margin-bottom: 0;
  }
  label{
    display: block !important;
    cursor: pointer;
  }
  .noFlight{
    background-color: #ffffff;
  }
    .custom-control-inline{
        display: block !important;
    }
    .custom-control{
        display: block !important;
    }
}

</style>
