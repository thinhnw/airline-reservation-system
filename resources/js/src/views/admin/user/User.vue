<template>
    <div>
        <div class="d-flex justify-content-between mb-3">
            <h2>Users</h2>
            <b-button variant="outline-warning" squared class="py-1" @click="showNavUser = !showNavUser">
                Add Users
                <i class="ml-1 fal fa-plus"></i>
            </b-button>
        </div>
        <ListUser
            @setDataEdit="setDataEdit"
            :created="created"
            :updated="updated "
            :showNavUser="showNavUser"
            @resultUpdate="resultUpdate"
            @resultCreate="resultCreate"
            @setShowNavUser= "setShowNavUser"
        />
        <div class="layoutForm" @click="cancel" v-show="showNavUser"></div>
        <transition name="appear">
            <CreateAndEdit
                v-if="showNavUser"
                :showNavUser="showNavUser"
                :dataEdit="dataEdit"
                @updated="listUpdated"
                @setShowNavUser= "setShowNavUser"
                @updateDataEdit="updateDataEdit"
                @created="listCreated"
            />
        </transition>
    </div>
</template>

<script>

import ListUser from "./ListUser";
import CreateAndEdit from "./CreateAndEdit";

export default {

    name: "User",
    components: {CreateAndEdit, ListUser},
    data() {
        return {
            dataEdit: "",
            updated: "",
            created: "",
            shown: false,
            showNavUser: false
        }
    },
    methods: {
        cancel() {
            this.dataEdit = {}
            this.showNavUser = false;
        },
        setDataEdit(data) {
            this.dataEdit = data;
        },
        listUpdated(res) {
            return this.updated = res;
        },
        listCreated(res) {
            return this.created = res;
        },
        resultUpdate() {
            return this.updated = false;
        },
        resultCreate() {
            this.shownForm();
            return this.created = false;
        },
        shownForm() {
            this.dataEdit = "";
            return this.shown = !this.shown;
        },
        setShown(res) {
            return this.shown = res
        },
        setShowNavUser(res) {
            return this.showNavUser = res
        },
        updateDataEdit() {
            this.shownForm();
            return this.dataEdit = "";
        }
    }
}
</script>

<style scoped>
.layoutForm {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
}
.appear-enter-active {
    animation: appear-in 0.3s linear;
}
.appear-leave-active {
    animation: appear-out 0.3s linear;
}
@keyframes appear-in {
    0% {
        transform: translate(100%)
    }
    30% {
        transform: translate(60%)
    }
    60%{
        transform: translate(30%)
    }
    100% {
        transform: translate(0)
    }
}
@keyframes appear-out{
    0% {
        transform: translate(0)
    }
    30% {
        transform: translate(30%)
    }
    60%{
        transform: translate(60%)
    }
    100% {
        transform: translate(100%)

    }
}
</style>
