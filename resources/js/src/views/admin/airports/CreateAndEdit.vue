<template>
    <div class="box-CUD p-3">
        <form @submit.prevent="Object.keys(dataEdit).length!==0?updateData(dataEdit.id):createData()">
            <div class="d-flex justify-content-between mb-3">
                <div style="cursor: pointer" class="mb-2 btn-close" @click="cancel">
                    <i class="far fa-times"></i>
                </div>
                <div>
                    <h3>Airport</h3>
                </div>
            </div>
            <div class=" mb-3">
                <span>Name</span>
                <input name="name"
                       placeholder="Enter name airport"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.name"
                       type="text"
                       class="form-control"
                       required>
                <input name="name"
                       v-else placeholder="Enter name airport"
                       v-model="dataCreate.name"
                       type="text"
                       class="form-control"
                       required>
            </div>
            <div class=" mb-3">
                <label>City Name</label>
                <input name="cityname"
                       placeholder="Enter cityname"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.cityname"
                       type="text" class="form-control"
                       required>
                <input name="cityname"
                       v-else placeholder="Enter cityname"
                       v-model="dataCreate.cityname"
                       type="text" class="form-control"
                       required></div>
            <div class="d-flex justify-content-between">
                <div class="mb-3 w-50 mr-1">
                    <label>Code</label>
                    <input
                        id="code"
                        placeholder="Enter code airport"
                        name="code"
                        v-if="Object.keys(dataEdit).length!==0"
                        v-model="dataEdit.code"
                        type="text" class="form-control"
                        required>
                    <input name="code"
                           v-else placeholder="Enter code airport"
                           v-model="dataCreate.code"
                           type="text"
                           class="form-control"
                           required>
                </div>
                <div class=" mb-3 w-50 ml-1">
                    <label>City Code</label>
                    <input name="citycode"
                           placeholder="Enter city Code"
                           v-if="Object.keys(dataEdit).length!==0"
                           v-model="dataEdit.citycode"
                           type="text" class="form-control"
                           required>
                    <input name="citycode"
                           v-else placeholder="Enter city Code"
                           v-model="dataCreate.citycode"
                           type="text" class="form-control"
                           required>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="mb-3 w-50 mr-1">
                    <label>Country Code</label>
                    <input name="countrycode"
                           placeholder="Enter country code"
                           v-if="Object.keys(dataEdit).length!==0"
                           v-model="dataEdit.countrycode"
                           type="text"
                           class="form-control"
                           required>
                    <input name="countrycode"
                           v-else placeholder="Enter country code"
                           v-model="dataCreate.countrycode"
                           type="text" class="form-control"
                           required>
                </div>
                <div class="mb-3 w-50 ml-1">
                    <label>Time Zone</label>
                    <input name="timezone"
                           placeholder="Enter timezone"
                           v-if="Object.keys(dataEdit).length!==0"
                           v-model="dataEdit.timezone"
                           type="number"
                           class="form-control"
                           required>
                    <input name="timezone"
                           v-else placeholder="Enter timezone"
                           v-model="dataCreate.timezone"
                           type="number"
                           class="form-control"
                           required>
                </div>
            </div>
            <div class=" mb-3">
                <label>Country Name</label>
                <input name="countryname"
                       placeholder="Enter countryname"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.countryname"
                       type="text" class="form-control"
                       required>
                <input name="countryname"
                       v-else placeholder="Enter countryname"
                       v-model="dataCreate.countryname"
                       type="text"
                       class="form-control"
                       required>
            </div>
            <div class="d-flex justify-content-between">
                <div class=" mb-3 w-50 mr-1">
                    <label>Latitude</label>
                    <input name="lat"
                           placeholder="Enter latitude"
                           v-if="Object.keys(dataEdit).length!==0"
                           v-model="dataEdit.lat"
                           type="number"
                           step="any"
                           class="form-control"
                           required>
                    <input name="lat"
                           v-else placeholder="Enter latitude"
                           v-model="dataCreate.lat"
                           type="number"
                           step="any"
                           class="form-control"
                           required>
                </div>
                <div class=" mb-3 w-50 ml-1">
                    <label>Longitude</label>
                    <input name="lon"
                           placeholder="Enter longitude"
                           v-if="Object.keys(dataEdit).length!==0"
                           v-model="dataEdit.lon"
                           type="number"
                           step="any"
                           class="form-control"
                           required>
                    <input name="lon"
                           v-else
                           v-model="dataCreate.lon"
                           placeholder="Enter longitude"
                           type="number" step="any"
                           class="form-control"
                           required>
                </div>
            </div>
            <div class=" mb-3">
                <label>Number Airport</label>
                <input name="numairports"
                       placeholder="Enter number airport"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.numairports"
                       type="number"
                       min="1"
                       class="form-control"
                       required>
                <input name="numairports"
                       v-else placeholder="Enter number airport"
                       v-model="dataCreate.numairports"
                       type="number"
                       min="1"
                       class="form-control"
                       required>
            </div>
            <div class="">
                <button class="btn w-100 btn-warning rounded-0" type="submit" v-if="Object.keys(dataEdit).length!==0">
                    Update
                </button>
                <button class="btn w-100 btn-warning rounded-0" type="submit" v-else> Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
    name: "create_and_Edit",
    props: ['dataEdit', 'showNav'],
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
            let uri_cr = `/api/airport/save`;
            axios.post(uri_cr, this.dataCreate).then((response) => {
                console.log(response)
                this.$emit("created", JSON.parse(response.config.data));
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
            this.$emit('setShown', false)
        },
        updateData(id) {
            let uri_u = `/api/airport/update/${id}`;
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
            this.$emit('setShown', false)
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
