<template>
    <div class="col-md-4 box-CUD py-3" v-show="shownForm">
        <form @submit.prevent="Object.keys(dataEdit).length!==0?updateData(dataEdit.id):createData()">
            <button class="btn btn-danger mb-3 float-right" type="button" @click="cancel()">X</button>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Code</span>
                <input name="code"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.code"
                       type="text" class="form-control"
                       required>
                <input name="code"
                       v-else placeholder="Code"
                       v-model="dataCreate.code"
                       type="text"
                       class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">name</span>
                <input name="name"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.name"
                       type="text"
                       class="form-control"
                       required>
                <input name="name"
                       v-else placeholder="Name"
                       v-model="dataCreate.name"
                       type="text"
                       class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">City Code</span>
                <input name="cityCode"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.cityCode"
                       type="text" class="form-control"
                       required>
                <input name="cityCode"
                       v-else placeholder="City Code"
                       v-model="dataCreate.cityCode"
                       type="text" class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon10">City Name</span>
                <label class="form-label"></label>
                <input name="cityName"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.cityName"
                       type="text" class="form-control"
                       required>
                <input name="cityName"
                       v-else placeholder="cityName"
                       v-model="dataCreate.cityName"
                       type="text" class="form-control"
                       required>            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon4">Country Code</span>
                <input name="countryCode"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.countryCode"
                       type="text"
                       class="form-control"
                       required>
                <input name="countryCode"
                       v-else placeholder="countryCode"
                       v-model="dataCreate.countryCode"
                       type="text" class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon5">Country Name</span>
                <input name="countryName"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.countryName"
                       type="text" class="form-control"
                       required>
                <input name="countryName"
                       v-else placeholder="countryName"
                       v-model="dataCreate.countryName"
                       type="text"
                       class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon6">Time Zone</span>
                <input name="timezone"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.timezone"
                       type="number"
                       class="form-control"
                       required>
                <input name="timezone"
                       v-else placeholder="timezone"
                       v-model="dataCreate.timezone"
                       type="number"
                       class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon7">Latitude</span>
                <input name="lat"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.lat"
                       type="number"
                       step="any"
                       class="form-control"
                       required>
                <input name="lat"
                       v-else placeholder="lat"
                       v-model="dataCreate.lat"
                       type="number"
                       step="any"
                       class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon8">Longitude</span>
                <input name="lon"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.lon"
                       type="number"
                       step="any"
                       class="form-control"
                       required>
                <input name="lon"
                       v-else
                       v-model="dataCreate.lon"
                       placeholder="lon"
                       type="number" step="any"
                       class="form-control"
                       required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon9">Number Airport</span>
                <input name="numAirports"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.numAirports"
                       type="number"
                       min="1"
                       class="form-control"
                       required>
                <input name="numAirports"
                       v-else placeholder="numAirports"
                       v-model="dataCreate.numAirports"
                       type="number"
                       min="1"
                       class="form-control"
                       required>
            </div>
            <div class="">
                <button class="btn btn-primary" type="submit" v-if="Object.keys(dataEdit).length!==0"> Update</button>
                <button class="btn btn-primary" type="submit" v-else> Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "create_and_Edit",
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
            let uri_cr = `http://127.0.0.1:8000/api/airport/save`;
            axios.post(uri_cr, this.dataCreate).then((response) => {
                console.log(response)
                this.$emit("created", JSON.parse(response.config.data));
            });
            this.dataCreate = {}
        },
        updateData(id) {
            let uri_u = `http://127.0.0.1:8000/api/airport/update/${id}`;
            axios.post(uri_u, this.dataEdit).then((response) => {
                console.log(response)
                this.$emit("updated", JSON.parse(response.config.data));
            });
            this.$emit('updateDataEdit')
        },
    },

}
</script>

<style scoped>
.box-CUD {
    position: absolute;
    width: 500px;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    box-shadow: -5px 0 10px 5px rgba(0, 0, 0, 0.63);
}
</style>
