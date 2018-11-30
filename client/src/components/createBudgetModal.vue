<template>
    <div class="modal fade" id="createBudget" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Budget</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <a aria-hidden="true">&times;</a>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <h5>What do you want to keep an eye on?</h5>
                                <form>
                                    <label class="sr-only" for="inlineFormCustomSelect">Preference</label>
                                    <select class="custom-select" id="inlineFormCustomSelect">
                                        <option ref="type" :key="category.id"
                                                v-for="category in categories">
                                                {{ category.name }}
                                        </option>
                                    </select>
                                </form>
                                <h5>Tell us how much you would like to spend</h5>
                                <form>
                                    <div class="form-group">
                                        <label for="formControlRange">${{ value }}</label>
                                        <input type="range" min="0" max="1000" step="10" v-model="value" class="form-control-range" id="formControlRange"> 
                                    </div>
                                </form>
                                <h5>Once you've made up your mind, click create</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="createBudget()">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import categories from '../App.vue'
import axios from 'axios'
export default {
    data:()=> ({
        value: 500,
        categories: [
            {
            name:'Rent/Mortgage',
            id: 1
            },
            {
            name:'Utilities',
            id: 2
            },
            {
            name:'Entertainment',
            id: 3
            },
            {
            name:'Misc. Food',
            id: 4
            },
            {
            name:'Groceries',
            id: 5
            },
            {
            name:'Gas',
            id: 6
            },
            {
            name:'Mobile',
            id: 7
            },
            {
            name:'Subscriptions',
            id: 8
            },
            {
            name:'Clothing',
            id: 9
            },
            {
            name:'Charity',
            id: 10
            },
            {
            name:'Leisure',
            id: 11
            },
            {
            name:'Health',
            id: 12
            },
            {
            name:'Credit Card/Loan',
            id: 13
            },
            {
            name:'Deposit',
            id: 14
            },
            {
            name:'Withdrawal',
            id: 15
            }
        ],
        errors: []
    }),
    methods: {
        total: function () {
            return this.value
        },
        createBudget: function(){
            axios.post('/api/budget',{
                categoryId: 500,
                ammount: 500
            }).then(response => {
                console.log(response)
            })
            .catch(e => {
                this.errors.push(e)
            })
        }

    }
}
</script>

<style>

</style>
