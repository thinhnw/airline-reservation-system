<template>
    <div>
        <button class="btn btn-outline-warning" @click="shownForm()">{{shown?'Close':'Add Airport +'}}</button>
        <div>
        <ListAirport
            @setDataEdit="setDataEdit"
            :created="created"
            :updated="updated "
            :shownForm="shown"
            @resultUpdate="resultUpdate"
            @resultCreate="resultCreate"
            @setShown="setShown"
        />
        <CreateAndEdit
            :dataEdit="dataEdit"
            @updated="listUpdated"
            :shownForm="shown"
            @setShown="setShown"
            @updateDataEdit="updateDataEdit"
            @created="listCreated"/>
        </div>
    </div>
</template>

<script>
import ListAirport from './ListAirport.vue'
import CreateAndEdit from './CreateAndEdit.vue'

import axios from "axios";

export default {
    name: "Airports",
    components: {
        ListAirport, CreateAndEdit
    },
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
