<template>
    <div class="col-md-12 p-0">
        <b-table :items="customers"
                 :fields="fields"
                 responsive="sm">
            <template #cell(control)="row">
                <p>{{row.id}}</p>
                <i @click="row.toggleDetails" :class="row.detailsShowing ? 'fal fa-caret-up  mr-3' : 'fal fa-caret-down  mr-3' "  >
                </i>
                <i @click="editData(row.item.id)" class="far fa-edit btn-icon text-dark mr-3" ></i>
                <i @click="deleteData(row.item.id)" class="far fa-times-octagon btn-icon text-danger" ></i>
            </template>

            <template #row-details="row">
                <b-card>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Address:</b></b-col>
                        <b-col v-if="row.item.address!=null">{{ row.item.address }}</b-col>
                        <b-col v-else>Undefined</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Tel:</b></b-col>
                        <b-col  v-if="row.item.tel!=null">{{ row.item.tel }}</b-col>
                        <b-col v-else>Undefined</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>City:</b></b-col>
                        <b-col v-if="row.item.city!=null">{{ row.item.city }}</b-col>
                        <b-col v-else>Undefined</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>State:</b></b-col>
                        <b-col v-if="row.item.state!=null">{{ row.item.state }}</b-col>
                        <b-col v-else>Undefined</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Country:</b></b-col>
                        <b-col v-if="row.item.country!=null">{{ row.item.country }}</b-col>
                        <b-col v-else>Undefined</b-col>
                    </b-row>
                </b-card>
            </template>
        </b-table>
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
        {{ created ? listCreated() : null }}
        {{ updated ? listUpdated() : null }}
    </div>

</template>

<script>
import Paginate from "vuejs-paginate";
import axios from "axios";

export default {
    name: "ListUser",
    components: {
        Paginate
    },
    props: ['created', 'updated', 'showNav'],
    data() {
        return {
            customers: [],
            pageRange: 5,
            rows:0,
            fields: ['first_name', 'last_name', 'gender', 'email', 'control'],

        }
    },
    created() {
        let uri = '/api/api-customer';
        axios.get(uri).then(res => {
            console.log(res)
            this.rows = res.data.customers.last_page;
            this.customers.push(...res.data.customers.data)
            this.customers.shift();
        });
    },
    methods: {
        clickCallback(pageNum) {
            let uri = '/api/api-customer?page=' + (pageNum);
            axios.get(uri).then(res => {
                this.customers = [];
                this.customers.push(...res.data.customers.data);
            });
        },
        deleteData(id) {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    //Send Request to server
                    let uri = `/api/customer/delete/${id}`;
                    let uri_data = '/api/api-customer';
                    Promise.all([
                            axios.delete(uri).then(()=> {
                                this.$swal(
                                    'Deleted!',
                                    'User deleted successfully',
                                    'success'
                                )
                            }),
                            axios.get(uri_data).then(res => {
                                this.rows=res.data.customers.last_page;
                            })
                        ]
                    ).then(()=>{
                        this.customers.splice(this.customers.findIndex(customer => customer.id === id), 1)
                        this.dataEdit.splice(this.customers.findIndex(customer => {
                            customer.id === this.dataEdit.id;
                        }), 1)
                        this.$emit('setShowNav',false)
                    })


                }

            })
            this.$emit('setShowNav',false)

        },

        editData(id) {
            let uri = '/api/customer/edit/'+id;
            axios.get(uri).then(res => {
                this.dataEdit = {};
                this.dataEdit = res.data.customer;
                this.$emit('setDataEdit', this.dataEdit)
                console.log(res)
            })
            this.$emit('setShowNav',true)
        },
        listCreated() {
            if (this.created) {
                let uri = '/api/api-customer';
                axios.get(uri).then(res => {
                    console.log(res)
                    this.rows = 0;
                    this.customers = [];
                    this.rows = res.data.customers.last_page;
                    this.customers.push(...res.data.customers.data)
                    this.customers.shift();
                    return this.$emit("resultCreate");

                });
            }
        },
        listUpdated() {
            if (this.updated) {
                this.customers.splice(
                    this.customers.findIndex(
                        customer => customer.id === this.updated.id),
                    1, this.updated)
                return this.$emit("resultUpdate");
            }
        }
    }
}
</script>

<style scoped>
.pagination >>> li {
    border: 1px solid gray;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-size: 16px;
}

.pagination >>> .active {
    color: white;
    background-color: #ffc107;
}
</style>
