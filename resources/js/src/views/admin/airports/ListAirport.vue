<template>
    <div class="col-md-12 p-0" >
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
                    <button class="btn btn-outline-warning" @click="editData(rs.id)">Sửa</button>
                    <button class="btn btn-outline-warning" @click="deleteData(rs.id)">Xóa</button>
                </td>
            </tr>
            </tbody>
        </table>
        <paginate
            :page-count="rows"
            :page-range="pageRange"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'<<'"
            :next-text="'>>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
        >
        </paginate>
        {{created?listCreated():null}}
        {{updated?listUpdated():null}}

    </div>

</template>

<script>
import axios from "axios";
import Paginate from "vuejs-paginate";

export default {
    components:{
        Paginate
    },
    name: "ListAirport",
    props:['created','updated','shownForm'],
    data(){
        return{
            pageRange: 5,
            airports:[],
            rows:0
        }
    },
    created() {
        let uri = '/api/api-airport-paginate';
        axios.get(uri).then(res => {
            console.log(res)
            this.rows=res.data.airports.last_page;
            this.airports.push(...res.data.airports.data)
        });
    },
    methods:{
        clickCallback(pageNum){
            let uri = '/api/api-airport?page='+(pageNum);
            axios.get(uri).then(res => {
                this.airports=[];
                this.airports.push(...res.data.airports.data);
            });
        },
        deleteData(id){
            let uri = `http://127.0.0.1:8000/api/airport/delete/${id}`;
            axios.delete(uri).then(() => {
                this.airports.splice(this.airports.findIndex(airport => airport.id === id), 1)
                this.dataEdit.splice(this.airports.findIndex(airport => {
                    airport.id === this.dataEdit.id;
                }), 1)
            });
            this.$emit('setShown',false)

        },
        editData(id){
            let uri = `http://127.0.0.1:8000/api/airport/edit/${id}`;
            axios.get(uri).then(res=>{
                this.dataEdit={};
                this.dataEdit=res.data.airport;
                this.$emit('setDataEdit',this.dataEdit)
                console.log(res)
            })
            this.$emit('setShown',true)
        },
        listCreated(){
            if (this.created){
                let uri = '/api/api-airport';
                axios.get(uri).then(res => {
                    console.log(res)
                    this.rows=0;
                    this.airports=[];
                    this.rows=res.data.airports.last_page;
                    this.airports.push(...res.data.airports.data)
                    return this.$emit("resultCreate");

                });
            }
        },
        listUpdated(){
            if (this.updated){
                this.airports.splice(
                    this.airports.findIndex(
                        airport => airport.id === this.updated.id),
                    1,this.updated)
                return this.$emit("resultUpdate");
            }
        }
    },
}
</script>
<!--Sau khi update vẫn còn 1 lỗi là list sẽ auto nhảy về page 1 mà k ở lại page hiện tại đang sửa-->
<style scoped>
.pagination >>> li{
    border: 1px solid gray;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-size: 16px;
}
.pagination >>> .active{
    color: white;
    background-color: #ffc107;
}
</style>
