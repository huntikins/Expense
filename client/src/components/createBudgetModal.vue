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
                                        <option :key="index + 1"
                                                v-for="(category, index) in categories">
                                                {{ category }}
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
                    <button type="button" class="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data:()=> ({
        value: 500,
        categories: ['Rent/Mortgage',
                    'Utilities',
                    'Subscriptions',
                    'Mobile',
                    'Gas',
                    'Groceries',
                    'Misc. Food',
                    'Entertainment',
                    'Clothing',
                    'Charity',
                    'Leisure',
                    'Health',
                    'Credit Card/Loan',
                    'Deposit',
                    'Withdrawal'
                    ]
    }),
    methods: {
        total: function () {
            return this.value
        }
    }
}
</script>

<style>

</style>
