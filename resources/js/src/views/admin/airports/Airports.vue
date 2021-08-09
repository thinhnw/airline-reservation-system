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
        <Create_and_Edit
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


import ListAirport from "./ListAirport";
import Create_and_Edit from "./Create_and_edit";

export default {
    name: "Airports",
    components:{
        Create_and_Edit,
        ListAirport
    },
    data(){
        return{
            dataEdit:"",
            updated:"",
            created:"",
            shown:false,
        }
    },
    methods:{
        setDataEdit(data){
             this.dataEdit=data;
        },
        listUpdated(res){
            return this.updated=res;
        },
        listCreated(res){
            return this.created=res;
        },
        resultUpdate(){
            return this.updated=false;
        },
        resultCreate(){
            return this.created=false;
        },
        shownForm(){
            return this.shown=!this.shown;
        },
        setShown(res){
          return this.shown=res
        },
        updateDataEdit(){
            return this.dataEdit="";
        }
    }



}
</script>

<style scoped>

</style>
