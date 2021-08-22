<template>
  <b-container class="checkout">
    <b-row>
      <b-col cols="9">
        <b-card no-body class="p-4">
          <b-form @submit.prevent="submit">
            <section>
              <h4 class="mb-4">Billing Address</h4>
              <b-form-row class="mb-0">
                <b-col>
                  <b-form-group>
                    <label for="">
                      <i class="fas fa-user"></i>
                      Full name
                    </label>
                    <b-form-input placeholder="Enter your full name"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <label for="">
                      <i class="fas fa-envelope mr-3"></i>
                      Email
                    </label>
                    <b-form-input placeholder="Enter your email"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row class="mb-0">
                <b-col>
                  <b-form-group>
                    <label for="">
                      Address
                    </label>
                    <b-form-input placeholder="Enter your address"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <label for="">
                      City
                    </label>
                    <b-form-input placeholder="Enter your city"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group>
                    <label for="">
                      Country
                    </label>
                    <b-form-input placeholder="Enter your country"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <label for="">
                      Postal code
                    </label>
                    <b-form-input placeholder="Enter your postal code"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </section>
            <section>
              <h4 class="mb-4">Payment</h4>
              <b-form-group>
                <label for="">Name on card</label>
                <b-form-input placeholder="Eg: NGUYEN VAN A"></b-form-input>
              </b-form-group>
              <b-form-group>
                <label for="">Credit card number</label>
                <b-form-input placeholder="Eg: 9704198526191432198"></b-form-input>
              </b-form-group>
              <b-form-row>
                <b-col cols="6">
                  <b-form-group>
                    <label for="">Exp. Date</label>
                    <b-form-input placeholder="MM/YY"></b-form-input>
                  </b-form-group> 
                </b-col>
                <b-col cols="6">
                  <b-form-group>
                    <label for="">CVC</label>
                    <b-form-input placeholder="Eg: 352"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </section>
            <section class="py-3">
              <b-button type="submit" variant="primary" class="w-100">Checkout</b-button>
            </section>
          </b-form>
          
        </b-card>
      </b-col>

      <b-col cols="3">
        <b-card no-body class="p-4">
          <h4>Booking Summary</h4>
          <hr>
          <div class="d-flex justity-content-between">
            <div>
              <p>Total</p>
            </div>
            <div>
              <p>{{ 100000 }} VND</p>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
	
</template>

<script>
import axios from '@/axios'
export default {
  data() {
    return {
      form: {
        txt_billing_fullname: '',
        txt_billing_email: '',
        txt_inv_addr1: '',
        txt_bill_city: '',
        txt_bill_country: '',
        txt_expire: ''
      }
    }
  },
  methods: {
    async submit() {
      try {
        let data = {
          reservation_id: 44,
          txt_billing_fullname: 'THINH NGUYEN'
        }
        let res = await axios.post('/api/reservations/checkout', data) 
      } catch (error) {
        console.error(error) 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  padding-top: 100px;
  &::v-deep .form-control {
    margin-bottom: 0 !important;
  }
}
input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}


</style>