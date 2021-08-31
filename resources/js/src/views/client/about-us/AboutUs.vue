<template>
  <b-container fluid="" class="p-0">
    <div class="aboutUs__banner">
      <b-container>
        <b-row>
          <b-col md="5" sm="5" lg="5" xl="5">
            <h2>
              Explore the world and create your moments with Avia Airways
              <i class="far fa-plane-departure"></i>
            </h2>
          </b-col>
          <b-col class="container-img ml-auto" md="6" sm="6" lg="6" xl="6">
            <img class="w-100 img-fluid" src="../../../../../../public/images/logoBanner.png"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <b-row class="aboutUs__content my-5">
        <b-col md="4" sm="4" lg="4" xl="4">
          <img class="img-fluid w-100" src="../../../../../../public/images/AboutUsContent1.png"/>
        </b-col>
        <b-col md="1" sm="1" lg="1" xl="1"></b-col>
        <b-col md="7" sm="7" lg="7" xl="7">
          <h1>About Avia Airway</h1>
          <p>
            As the leading online travel company in Southeast Asia, Avia Airways meets a variety of travel requirements
            on the platform, helping customers have wonderful trips with their loved ones. Traveloka offers flight
            bookings, hotel rooms, train tickets*, flight + hotel packages*, attractions & activities*,
            telecommunications products*, airport transfers* and bus tickets outside *.
          </p>
          <p>
            * Only available in Vietnam
          </p>
        </b-col>
      </b-row>
      <b-row class="aboutUs__content my-5">
        <b-col md="7" sm="7" lg="7" xl="7">
          <p>
            With more than 100 domestic and international airline partners, Aiva offers more than 200,000 routes
            worldwide. Huge hotel room warehouse with many types of accommodation such as hotels, apartments, motels,
            homestays, villas and resorts. With Avia, customers have over 40 payment methods in Indonesia, Thailand,
            Vietnam, Malaysia, Singapore and the Philippines. In addition, Traveloka offers 24/7 customer support in the
            local language.
          </p>
        </b-col>
        <b-col md="1" sm="1" lg="1" xl="1"></b-col>
        <b-col md="4" sm="4" lg="4" xl="4">
          <img class="img-fluid w-100" src="../../../../../../public/images/AboutUsContent4.jpg"/>
        </b-col>
      </b-row>
      <b-row class="aboutUs__content my-5">
        <b-col md="4" sm="4" lg="4" xl="4">
          <img class="img-fluid w-100" src="../../../../../../public/images/AboutUsContent5.png"/>
        </b-col>
        <b-col md="1" sm="1" lg="1" xl="1"></b-col>
        <b-col md="7" sm="7" lg="7" xl="7">
          With over 10 million visits, the Avia Airline website is the most popular travel booking website in the region.
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h1 class="text-center py-5">We are present at</h1>
    </b-container>
    <iframe class="w-100" height="500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0970740567045!2d105.78010051451419!3d21.028801485998343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1630180518399!5m2!1svi!2s" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </b-container>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style lang="scss" scoped>
.aboutUs__banner {
  display: inline-block;
  color: #ffffff;
  padding: 50px 0;
  max-height: 300px;
  width: 100%;
  background-color: #1BA0E2;

  .container-img {
    max-height: 300px;
    overflow: hidden;
    align-items: center;
  }
}

.aboutUs__content {
  align-items: center;
}
</style>
