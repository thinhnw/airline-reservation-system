<template>
    <div>
        <button class="btn btn-outline-warning" @click="shownForm()">Add User +</button>
        <ListUser
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
            @created="listCreated"
        />

    </div>
</template>

<script>

import ListUser from "./ListUser";
import CreateAndEdit from "./CreateAndEdit";
export default {
    name: "User",
    components: {CreateAndEdit, ListUser},
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
