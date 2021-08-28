<template>
  <b-container fluid="" class="p-0">
    <div class="ContactUs__banner">
      <h2 class="font-weight-bold">Contact us</h2>
      <h4>Chúng tôi luôn sẵn sàng hỗ trợ, dù bạn ở bất cứ nơi đâu!</h4>
    </div>
    <b-container class="py-5">
      <b-row>
        <b-col col md="4" xl="4" xs="4" sm="4">
          <b-card>
            <h5 class="font-weight-bold">Customer support</h5>
            <form action="">
              <b-form-group id="input-group-3" label="Product:" label-for="input-3" class="pt-3">
                <b-form-select
                    id="input-3"
                    v-model="form.selectOne"
                    :options="selectOne"
                    required
                ></b-form-select>

                <label class="pt-3">Your name :</label>
                <b-form-input name="NameCustomer" type="password" id="NameCustomer" placeholder="Nguyen Van A" required></b-form-input>

                <label class="pt-3">Your email :</label>
                <b-form-input name="EmailCustomer" type="email" id="EmailCustomer" placeholder="yourEmail@gmail.com" required></b-form-input>

                <label class="pt-3">Please share your concerns :</label>
                <b-form-textarea
                    id="textarea"
                    placeholder="State your concerns..."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                <b-form-text>
                  The more specific the information, the better we will assist you.
                </b-form-text>
                <b-button class="w-100 mt-3" type="submit" variant="warning">Submit</b-button>
              </b-form-group>
            </form>
          </b-card>
        </b-col>
        <b-col class="text-center align-items-center" col md="8" xl="8" xs="8" sm="8">
          <img src="../../../../../../public/images/contactUsImg1.png" alt="">
          <h4 class="w-75 m-auto p-2 text-secondary">
            For faster support, please submit your request via the following form.
          </h4>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return{
      form :{
        selectOne: null,
      },
      selectOne: [{ text: 'Select Product', value: null }, 'Chuyến bay phổ thông', 'Chuyến bay thương gia', 'Flight + hotels', 'khác...'],
      show: true
    }
  }
}
</script>

<style scoped>
  .ContactUs__banner{
    background-image: linear-gradient(
        -180deg
        , #1BA0E2 0%, #007CE8 100%);
    color: #ffffff;
    padding: 50px 0;
    align-items: center;
    text-align: center;
  }
</style>
