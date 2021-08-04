<template>
    <div class="col-md-4" style="float:right;padding: 0 20px" v-if="shownForm">
        <form @submit.prevent="Object.keys(dataEdit).length!==0?updateData(dataEdit.id):createData()" >
            <div class="col-md-2">
                <label class="form-label">Code</label>
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
            <div class="col-md-9">
                <label class="form-label">Name</label>
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
            <div class="col-md-2">
                <label  class="form-label">City Code</label>
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
            <div class="col-md-9">
                <label  class="form-label">City Name</label>
                <input name="cityName"
                       v-if="Object.keys(dataEdit).length!==0"
                       v-model="dataEdit.cityName"
                       type="text" class="form-control"
                       required>
                <input name="cityName"
                       v-else placeholder="cityName"
                       v-model="dataCreate.cityName"
                       type="text" class="form-control"
                       required>

            </div>
            <div class="col-md-3">
                <label  class="form-label">Country Code</label>
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
            <div class="col-md-8">
                <label class="form-label">Country Name</label>
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

            <div class="col-md-3">
                <label  class="form-label">Time Zone</label>
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
            <div class="col-md-2">
                <label  class="form-label">Latitude</label>
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
            <div class="col-md-2">
                <label  class="form-label">Longitude</label>
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
            <div class="col-md-3">
                <label  class="form-label">Number Airport</label>
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

            <div class="col-12">
                <button class="btn btn-primary" type="submit" v-if="Object.keys(dataEdit).length!==0"> Update </button>
                <button class="btn btn-primary" type="submit" v-else > Add </button>
                <button  class="btn btn-danger" type="button" @click="cancel()">Cancel</button>

            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "create_and_Edit",
    props:['dataEdit','shownForm'],
    data(){
        return{
            dataCreate: {},
        }
    },
    methods:{
        cancel(){
            this.$emit('updateDataEdit')
            this.dataCreate={}
            this.$emit('setShown',false)
        },
        createData(){
            let uri_cr = `http://127.0.0.1:8000/api/airport/save`;
            axios.post(uri_cr,this.dataCreate).then((response) => {
                console.log(response)
                this.$emit("created",JSON.parse(response.config.data));
            });
            this.dataCreate={}
        },
        updateData(id){
            let uri_u = `http://127.0.0.1:8000/api/airport/update/${id}`;
            axios.post(uri_u,this.dataEdit).then((response) => {
                console.log(response)
                this.$emit("updated",JSON.parse(response.config.data));
            });
            this.$emit('updateDataEdit')
        },
    },

}
</script>

<style scoped>

</style>
