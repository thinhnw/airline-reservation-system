<template>
    <div>
        <div class="col-md-4" style="float:left;padding: 0 20px">
            <form>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefaultUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            </div>
                            <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">City</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault04">State</label>
                        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault05">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Submit form</button>
            </form>        </div>

        <div class="col-md-8" style="float:right;padding: 0 20px">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">code</th>
                    <th scope="col">name</th>
                    <th scope="col">cityName</th>
                    <th scope="col">countryName</th>
                    <th></th>
                </tr>
                </thead>
                <tbody v-for="(rs,index) in this.airports" :key="index">
                <tr>
                    <th scope="row">{{rs.code}}</th>
                    <td>{{rs.name}}</td>
                    <td>{{rs.cityName}}</td>
                    <td>{{rs.countryName}}</td>
                    <td>
                        <a :href="editData(rs.id)">Sửa</a>
                        <button @click="deleteData(rs.id)">Xóa</button>
                    </td>
                </tr>
                </tbody>

            </table>

        </div>
    </div>
</template>

<script>


import axios from "axios";

export default {
    name: "Airports",
    data(){
        return{
            airports:[],
        }
    },
    created() {
        let uri = '/api/airports';
        axios.get(uri).then(res => {
            this.airports.push(...res.data.airports)
        });
        console.log(this.airports)
    },
    methods:{
        editData(id){
            return `http://127.0.0.1:8000/api/airport/edit/${id}`
        },
        deleteData(id){
            let uri = `http://127.0.0.1:8000/api/airport/delete/${id}`;
            axios.delete(uri).then((rs) => {
                this.airports.splice(id, 1);
            });
        }
    }

}
</script>

<style scoped>

</style>
