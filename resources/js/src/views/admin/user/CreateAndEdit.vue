<template>
    <div class="box-createAndEdit py-3" v-show="shownForm">
        <form
            @submit.prevent="
            Object.keys(dataEdit).length!==0 ?
            updateData(dataEdit.id) :
            createData()">
            <div>
                <button class="btn btn-danger mb-3 float-right" type="button" @click="cancel()">X</button>
                <div>
                    <label class="form-label">First Name</label>
                    <input name="first_name"
                           v-if="Object.keys(dataEdit).length!==0"
                           v-model="dataEdit.first_name"
                           type="text" class="form-control"
                           required>
                    <input name="first_name"
                           v-else placeholder="First Name"
                           v-model="dataCreate.first_name"
                           type="text"
                           class="form-control"
                           required>
                </div>
            </div>
            <div>
                <label class="form-label">Last Name</label>
                <input name="last_name"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.last_name"
                       type="text"
                       class="form-control"
                       required>
                <input name="last_name"
                       v-else placeholder="Last Name"
                       v-model="dataCreate.last_name"
                       type="text"
                       class="form-control"
                       required>

            </div>
            <div>
                <label class="form-label">Gender</label>
                <input name="gender"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.gender"
                       type="text" class="form-control"
                       required>
                <input name="gender"
                       v-else placeholder="Gender"
                       v-model="dataCreate.gender"
                       type="text" class="form-control"
                       required>

            </div>
            <div>
                <label class="form-label">Email</label>
                <input name="email"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.email"
                       type="email" class="form-control"
                       required>
                <input name="email"
                       v-else placeholder="Email"
                       v-model="dataCreate.email"
                       type="email" class="form-control"
                       required>
            </div>
            <div >
                <label class="form-label" v-if="Object.keys(dataEdit).length===0">Password</label>
                <input name="password"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.password"
                       type="password" class="form-control" min="6"
                       style="display:none"
                       required>
                <input name="password"
                       v-else placeholder="Password"
                       v-model="dataCreate.password"
                       type="password" class="form-control" min="6"
                       required>
            </div>

            <div class="mt-3">
                <button class="btn btn-primary" type="submit" v-if="Object.keys(dataEdit).length!==0"> Update</button>
                <button class="btn btn-primary" type="submit" v-else> Add</button>
            </div>
        </form>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name: "CreateAndEdit",
    props: ['dataEdit', 'shownForm'],
    data() {
        return {
            dataCreate: {},
        }
    },
    methods: {
        cancel() {
            this.$emit('updateDataEdit')
            this.dataCreate = {}
            this.$emit('setShown', false)
        },
        createData() {
            console.log(this.dataCreate);
            let uri_cr = `http://127.0.0.1:8000/api/customer/save`;
            axios.post(uri_cr, this.dataCreate).then((response) => {
                console.log(response)
                this.$emit("created", JSON.parse(response.config.data));
                this.$emit("resultCreate");
            });
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Created',
            });
            this.dataCreate = {}
        },
        updateData(id) {
            let uri_u = `http://127.0.0.1:8000/api/customer/update/${id}`;
            axios.post(uri_u, this.dataEdit).then((response) => {
                console.log(response)
                this.$emit("updated", JSON.parse(response.config.data));
            });
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Updated',
            });
            this.$emit('updateDataEdit')
        },
    },
}
</script>

<style scoped>
.box-createAndEdit {
    position: fixed;
    width: 500px;
    padding: 20px;
    margin-top: 38px;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    box-shadow: -5px 0 10px 5px rgba(0, 0, 0, 0.63);
}

</style>
