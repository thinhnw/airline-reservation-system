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
                <label for="">Credit Informations</label>
                <div id="card-element"></div>
              </b-form-group>
            </section>
            <section class="py-3">
              <b-button type="submit" variant="primary" class="w-100" :disabled="payamentProcessing">Checkout</b-button>
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
import { loadStripe } from '@stripe/stripe-js'
import axios from '@/axios'
export default {
  data() {
    return {
      stripe: {},
      cardElement: {},
      payamentProcessing: false,
      form: {
        reservation_id: '',
        txt_billing_fullname: '',
        txt_billing_email: '',
        txt_inv_addr1: '',
        txt_bill_city: '',
        txt_bill_country: '',
        txt_expire: ''
      },
      reservation: null
    }
  },
  methods: {
    async fetchProduct() {
      let id = this.$route.query.reservation_id
      if (!id) this.$router.push('home')
      const { data, error } = await axios.get('/api/reservations/' + id)
      if (error) {
        console.error(error)
        return
      }
      this.reservation = data.reservation
      this.form.reservation_id = id
    },
    async processPayment() {
      this.paymentProcessing = true

      const { paymentMethod, error } = await this.stripe.createPaymentMethod(
        'card', this.cardElement, {
            billing_details: {
              name: this.form.txt_billing_fullname || 'NGUYEN VAN A',
              email: this.form.txt_billing_email || 'nvt0412@gmail.com',
              address: {
                line1: this.form.txt_inv_addr1 || 'Street 1',
                city: this.form.txt_bill_city || 'Hanoi',
                state: this.form.txt_bill_state || 'Hoang Mai',
                postal_code: this.form.zip_code,
              }
            }
        }
      )
      if (error) {
        this.payamentProcessing = false
        alert(error)
        return
      }

      this.form.payment_method_id = paymentMethod.id
      this.form.amount = this.reservation.price
      try {
        let res = await axios.post('/api/reservations/checkout', this.form)
      } catch (error) {
        console.error(error) 
      } finally {
        this.payamentProcessing = false
      }

    },
    async submit() {
      this.processPayment()
      return
      try {
        let data = {
          reservation_id: 25,
          txt_billing_fullname: 'THINH NGUYEN'
        }
        let res = await axios.post('/api/reservations/checkout', data) 
        window.location.href = res.data.url
      } catch (error) {
        console.error(error) 
      }
    }
  },
  async mounted() {
    await this.fetchProduct()
    console.log(process.env.MIX_STRIPE_KEY)
    this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY)
    const elements = this.stripe.elements()
    this.cardElement = elements.create('card', {
      classes: {
        base: 'form-control py-2'
      }
    })
    this.cardElement.mount('#card-element')
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