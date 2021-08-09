<template>
    <div id="home-component">
        <div class="banner">
            <b-container class="h-100 px-0">
                <b-row class="h-100">
                    <b-col class="d-flex align-items-center h-100 ">
                        <div class="w-100">
                            <b-form @submit="onSubmit(userInfo.id)" @reset="onReset" v-if="show" class="formStyle">

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

                                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                                    <b-form-input
                                        id="input-2"
                                        v-model="form.password"
                                        placeholder="Enter password"
                                        required
                                        type="password"
                                    ></b-form-input>
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
                                        placeholder="Enter email"
                                        required
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
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
    name: "UserEditInformation",
    data() {
        return {
            form: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
            },
            checked: [
                { item: 'male', name: 'Male' },
                { item: 'female', name: 'Female' },
            ],
            selected:'',
            show: true
        }
    },
    computed: {
        ...mapGetters({
            userInfo: 'auth/userInfo',
        }),

    },
    created() {
        let uri = `/api/customer/findUser/${this.userInfo.id}`;
        axios.get(uri).then(res => {
            this.form.email=res.data.customer.email;
            this.form.firstName=res.data.customer.first_name;
            this.form.lastName=res.data.customer.last_name;
            this.selected=res.data.customer.gender.toLowerCase();
            this.form.password=res.data.customer.password;
        });
    },
    methods: {

        onSubmit(id) {
            const data={
                email:this.form.email,
                first_name: this.form.firstName,
                last_name:this.form.lastName,
                password:this.form.password,
                gender:this.selected
            };
            let uri_u = `http://127.0.0.1:8000/api/customer/update/${id}`;
            axios.post(uri_u ,data).then((response) => {
                this.$router.push({name: 'home'});
            });


        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
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

<style scoped lang="scss">
.banner {
    background: url(/images/bgbigben.jpg) rgba(0, 0, 0, 0.3);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    width: 100%;
    height: 800px;
}
.main-tabs {

    &::v-deep .nav-tabs {
        .nav-link {
            border: initial;
            border-radius: initial;
            color: white;
        }
        .nav-link.active {
            color: black;
        }
        .nav-link:not(.active) {
            background: var(--blue);
        }
        .nav-item:first-child {
            .nav-link {
                border-top-left-radius: 10px;
            }
        }
        .nav-item:last-child {
            .nav-link {
                border-top-right-radius: 10px;
            }
        }
    }
}
.form-card {
    border: initial;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}
.formStyle{
    background-color: white;
    border-radius: 10px;
    padding: 20px;
}
</style>
