<template>
    <div>
        <div class="d-flex justify-content-between mb-3">
            <h2>AIRPORTS</h2>
            <b-button variant="outline-warning" squared class="py-1" @click="showNav = !showNav">
                Add airport
                <i class="ml-1 fal fa-plus"></i>
            </b-button>
        </div>
        <div>
            <ListAirport
                @setDataEdit="setDataEdit"
                :created="created"
                :updated="updated "
                :showNav="showNav"
                @resultUpdate="resultUpdate"
                @resultCreate="resultCreate"
                @setShowNav="setShowNav"
            />

            <div class="layoutForm" @click="cancel" v-if="showNav"></div>
            <transition name="appear">
                <CreateAndEdit
                    v-if="showNav"
                    :showNav="showNav"
                    :dataEdit="dataEdit"
                    @updated="listUpdated"
                    @setShowNav="setShowNav"
                    @updateDataEdit="updateDataEdit"
                    @created="listCreated"
                ></CreateAndEdit>
            </transition>
        </div>
    </div>
</template>

<script>
import ListAirport from "./ListAirport";
import CreateAndEdit from "./CreateAndEdit";

export default {
    name: "Airports",
    components: {
        CreateAndEdit,
        ListAirport
    },
    data() {
        return {
            dataEdit: "",
            updated: "",
            created: "",
            showNav: false,
        }
    },
    methods: {
        cancel() {
            this.dataEdit = {}
            this.showNav = false;
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
            return this.created = false;
        },
        setShowNav(res) {
            return this.showNav = res
        },
        updateDataEdit() {
            return this.dataEdit = "";
        }
    }
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
