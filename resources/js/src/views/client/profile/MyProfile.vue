<template>

	<div class="p-4">
        <div v-if="!isEdit">
            <div class="d-flex align-items-center justify-content-between mb-5">
                <div class="d-flex align-items-center">
                    <b-avatar variant="secondary" size="lg" class="mr-3"></b-avatar>
                    <div class="text-center">
                        <h4>
                            {{ userInfo.first_name }} {{ userInfo.last_name }}
                        </h4>
                    </div>
                </div>
                <div>
                    <i class="fas fa-star text-warning"></i>
                    Your skymiles: {{ userInfo.skymiles }}
                </div>
            </div>
            <div class="border-bottom mb-3">
                <h5>Contact Informations</h5>
                <b-row>
                    <b-col>
                        <label for="">Email</label>
                        <p>{{ userInfo.email }}</p>
                    </b-col>
                    <b-col>
                        <label for="">Phone Number</label>
                        <p>{{ userInfo.tel }}</p>
                    </b-col>
                </b-row>
            </div>
            <div>
                <h5>Address</h5>
                <b-row>
                    <b-col>
                        <label for="">Street</label>
                    </b-col>
                    <b-col>
                        <label for="">City</label>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <label for="">Country</label>
                    </b-col>
                    <b-col>
                        <label for="">Postal Code</label>
                    </b-col>
                </b-row>
            </div>
            <b-button @click="toggleEdit" variant="outline-warning" squared >Edit Your Profile</b-button>
        </div>
        <div v-else>
            <b-form @submit.prevent="checkUserPassword(userInfo.id)" @reset="onReset" v-if="showCheckPass"  class="formStyle">
                <b-form-group id="input-group-2" label="Please enter your password:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="userPassword"
                        placeholder="Enter password"
                        required
                        type="password"
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
            <b-form @submit.prevent="onSubmit(userInfo.id)" @reset="onReset" v-if="!showCheckPass"  class="formStyle">

                <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.firstName"
                        placeholder="Enter first name"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.lastName"
                        placeholder="Enter last name"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Street:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.street"
                        placeholder="Enter your street"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="City:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.city"
                        placeholder="Enter your city"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Country:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.country"
                        placeholder="Enter your country"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.password"
                        placeholder="Enter password"
                        required
                        type="password"
                    ></b-form-input>
                </b-form-group>



                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                        v-model="selected"
                        :options="checked"
                        class="mb-3"
                        value-field="item"
                        text-field="name"

                    ></b-form-radio-group>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </div>
	</div>


</template>

<script>
import { mapGetters } from 'vuex'
import axios from "axios";
export default {
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo'
		})
	},
    data() {
        return {
            form: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                city:'',
                country:'',
                street:'',
            },
            checked: [
                { item: 'male', name: 'Male' },
                { item: 'female', name: 'Female' },
            ],
            selected:'',
            userPassword:'',
            showCheckPass:true,
            isEdit:false

        }
    },
    created() {
        let uri = `/api/customer/findUser/${this.userInfo.id}`;
        axios.get(uri).then(res => {
            this.form.email=res.data.customer.email;
            this.form.firstName=res.data.customer.first_name;
            this.form.lastName=res.data.customer.last_name;
            this.selected=res.data.customer.gender.toLowerCase();
            this.form.password=res.data.customer.password;
            this.form.city=res.data.customer.city;
            this.form.country=res.data.customer.country;
            this.form.street=res.data.customer.address;
        });
    },
    methods: {
        checkUserPassword(id){
            let uri = `/api/customer/checkPass/${id}`;
            const myPromise=new Promise(resolve=>{
                axios.post(uri, {password: this.userPassword}).then(res => {
                    resolve(res.data.result)
                })
            });
            myPromise.then((value)=>{
                if (value){
                    this.showCheckPass=false
                }
                else{
                    this.$swal({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'error',
                        title: 'Error',
                        text: 'Please check your password!',
                    });
                }
            })
        },
        onSubmit(id) {
            let result=false;
            let password= this.form.password
            let uri = `/api/customer/checkPass/${id}`;
            if (password.length<6) {
                this.$swal({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'error',
                    title: 'Password must be 6 digits',
                });
            }else{
                const myPromise=new Promise(resolve=>{
                    axios.post(uri, {password: password}).then(res => {
                        resolve(res.data.result)
                    })
                });
                myPromise.then((value)=>{
                    result=value;
                    if (!result){
                        const data = {
                            email: this.form.email,
                            first_name: this.form.firstName,
                            last_name: this.form.lastName,
                            password: this.form.password,
                            gender: this.selected,
                            address:this.form.street,
                            city:this.form.city,
                            country:this.form.country
                        };
                        let uri_u = `/api/customer/update/${id}`;
                        axios.post(uri_u, data).then(() => {
                            this.$swal({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                icon: 'success',
                                title: 'Success',
                            });
                            this.$router.push({name:'home'})
                        });
                    }else {

                        this.$swal({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            icon: 'error',
                            title: 'The password must be different from the old password',
                        });
                    }

                })
            }
        },
        onReset() {
            this.isEdit=!this.isEdit
        },
        toggleEdit(){
            this.isEdit=!this.isEdit
        }
    }

}
</script>

<style>
 .swal2-container{
     top: 72px !important;
 }
</style>
