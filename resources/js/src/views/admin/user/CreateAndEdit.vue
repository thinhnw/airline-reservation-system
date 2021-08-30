<template>
    <div class="box-CUD p-3">
        <form
            @submit.prevent="
            Object.keys(dataEdit).length!==0 ?
            updateData(dataEdit.id) :
            createData()">
            <div class="d-flex justify-content-between mb-3">
                <div style="cursor: pointer" class="mb-2 btn-close" @click="cancel">
                    <i class="far fa-times"></i>
                </div>
                <div>
                    <h3>Add User</h3>
                </div>
            </div>
            <div class=" mb-3">
                <span>First Name</span>
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
            <div class=" mb-3">
                <label>Last Name</label>
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
            <div class=" mb-3">
                <label>Gender</label>
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
            <div class=" mb-3">
                <label>Email</label>
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
            <div class=" mb-3">
                <label v-if="Object.keys(dataEdit).length===0">Password</label>
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
                <button class="btn w-100 btn-warning rounded-0" type="submit" v-if="Object.keys(dataEdit).length!==0"> Update</button>
                <button class="btn w-100 btn-warning rounded-0" type="submit" v-else> Add</button>
            </div>
        </form>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name: "CreateAndEdit",
    props: ['dataEdit', 'shownNav'],
    data() {
        return {
            dataCreate: {},
        }
    },
    methods: {
        cancel() {
            this.$emit('updateDataEdit')
            this.dataCreate = {}
            this.$emit('setShowNav', false)
        },
        createData() {
            let uri_cr = `/api/customer/save`;
            axios.post(uri_cr, this.dataCreate).then((response) => {
                console.log(response)
                this.$emit("created", JSON.parse(response.config.data));
            }).then(()=>{
                this.cancel();
            })
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Created',
            });
        },
        updateData(id) {
            let uri_u = `/api/customer/update/${id}`;
            axios.post(uri_u, this.dataEdit).then((response) => {
                console.log(response)
                this.$emit("updated", JSON.parse(response.config.data));
            }).then(()=>{
                this.cancel();
            })
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Updated',
            });
        },
    },
}
</script>

<style lang="scss" scoped>

.layoutForm {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
}

.box-CUD {
    z-index: 9999;
    position: fixed;
    width: 600px;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
}

</style>
