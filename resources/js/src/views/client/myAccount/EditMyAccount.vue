<template>
  <div>
    <b-container>
      <b-col>
        <label class="labelClose" for="checkboxEditInfor"><i class="far fa-times-circle"></i></label>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter your name !"
                required
            ></b-form-input>
          </b-form-group>
          <b-form-group
              id="input-group-1"
              label="Phone number:"
              label-for="input-1"
              description="We'll never share your phone number with anyone else."
          >
            <vue-tel-input v-model="form.phone"></vue-tel-input>
          </b-form-group>
          <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
          >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter your email !"
                required
            ></b-form-input>
          </b-form-group>

          <b-button class="mr-1" type="submit" variant="primary">Change</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "EditMyAccount",
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.phone=''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .labelClose{
    text-align: right;
    font-size: 22px;
    color: red;
    transform: translateX(30px);
  }
</style>