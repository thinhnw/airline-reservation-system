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
                    <b-form-input 
                      v-model="form.txt_billing_fullname"
                      placeholder="Enter your full name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <label for="">
                      <i class="fas fa-envelope mr-3"></i>
                      Email
                    </label>
                    <b-form-input 
                      v-model="form.txt_billing_email"
                      placeholder="Enter your email"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row class="mb-0">
                <b-col>
                  <b-form-group>
                    <label for="">
                      Address
                    </label>
                    <b-form-input 
                      v-model="form.txt_inv_addr1"
                      placeholder="Enter your address"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <label for="">
                      City
                    </label>
                    <b-form-input 
                      v-model="form.txt_bill_city"
                      placeholder="Enter your city"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group>
                    <label for="">
                      Country
                    </label>
                    <b-form-input 
                      v-model="form.txt_bill_country"
                      placeholder="Enter your country"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <label for="">
                      Postal code
                    </label>
                    <b-form-input 
                      v-model="form.zip_code"
                      placeholder="Enter your postal code"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </section>
            <section>
              <h4 class="mb-4">Payment</h4>
              <b-form-group>
                <label for="">Card holder (name on card)</label>
                <b-form-input placeholder="Eg: NGUYEN VAN A"></b-form-input>
              </b-form-group>
              <b-form-group>
                <label for="">Credit informations</label>
                <div id="card-element"></div>
                <small class="text-danger" v-if="cardError">{{ cardError }}</small>
              </b-form-group>
            </section>
            <section class="py-3">
              <b-button type="submit" variant="primary" class="w-100" :disabled="paymentProcessing">
                Checkout
                <b-spinner variant="light" small v-if="paymentProcessing"></b-spinner>
              </b-button>
            </section>
          </b-form>
          
        </b-card>
      </b-col>

      <b-col cols="3">
        <b-card no-body class="p-4">
          <h4>Summary</h4>
          <hr>
          <div class="d-flex justify-content-between">
            <div>
              <p>Total</p>
            </div>
            <div v-if="reservation">
              <p>{{ formatMoney(reservation.price, 0) }} VND</p>
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
import { formatMoney } from '@/helper'
export default {
  data() {
    return {
      stripe: {},
      cardElement: {},
      paymentProcessing: false,
      // form: {
      //   reservation_id: '',
      //   txt_billing_fullname: '',
      //   txt_billing_email: '',
      //   txt_inv_addr1: '',
      //   txt_bill_city: '',
      //   txt_bill_country: '',
      //   txt_expire: '',
      //   zip_code: ''
      // },
      form: {
        reservation_id: '53',
        txt_billing_fullname: 'NGUYEN VINH THINH',
        txt_billing_email: 'nvt0412@gmail.com',
        txt_inv_addr1: '502 LD',
        txt_bill_city: 'Hanoi',
        txt_bill_country: 'VN',
        txt_expire: '',
        zip_code: ''
      },
      reservation: null,
      cardError: '',
    }
  },
  methods: {
    formatMoney,
    async fetchProduct() {
      let id = this.$route.query.reservation_id
      if (!id) this.$router.push('home')
      try {
        const { data } = await axios.get('/api/reservations/' + id)
        this.reservation = data.reservation
        this.form.reservation_id = id
      } catch (error) {
        console.log(error)
        this.$router.push({ name: 'home' })
        return
      }
    },
    async processPayment() {
      this.paymentProcessing = true
      const { paymentMethod, error } = await this.stripe.createPaymentMethod(
        'card', this.cardElement, {
            billing_details: {
              name: this.form.txt_billing_fullname ,
              email: this.form.txt_billing_email,
              address: {
                line1: this.form.txt_inv_addr1,
                city: this.form.txt_bill_city,
                country: this.form.txt_bill_country,
                postal_code: this.form.zip_code,
              }
            }
        }
      )
      if (error) {
        this.paymentProcessing = false
        // alert(error.message)
        this.cardError = error.message
        return
      }

      this.form.payment_method_id = paymentMethod.id
      this.form.amount = this.reservation.price
      try {
        let res = await axios.post('/api/reservations/checkout', this.form)
      } catch (error) {
        console.error(error) 
        this.cardError = error.message
      } finally {
        this.paymentProcessing = false
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
    },
  },
  async mounted() {
    this.fetchProduct()
    console.log(process.env.MIX_STRIPE_KEY)
    this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY)
    const elements = this.stripe.elements()
    this.cardElement = elements.create('card', {
      classes: {
        base: 'form-control py-2'
      }
    })
    this.cardElement.mount('#card-element')
    this.cardElement.on('change', () => {
      this.cardError = ''
    })
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  padding-top: 120px;
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