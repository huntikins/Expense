<template>
     <div class="modal fade" ref='createTransModal' id="createTrans" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Transaction</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <a aria-hidden="true">&times;</a>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <h5>Tell us a bit about your transaction</h5>
                                <form>
                                    <div class="form-group text-left">
                                        <input type="text" v-model="amount" class="form-control my-1" placeholder="Enter transaction amount">
                                        <input type="text" v-model="description" class="form-control my-1" id="transTitle" aria-describedby="transactionTitle" placeholder="Where did you spend your money?">
                                        <select v-model="selectedCategoryId" class="custom-select my-1" id="inlineFormCustomSelect">
                                            <option disabled value='0'>What did you spend your money on?</option>
                                            <option :key="category.id"
                                                    v-for="category in categories"
                                                    :value="category.id">
                                                    {{ category.name }}
                                            </option>
                                        </select>
                                        <h6 class="my-2">Transaction date: </h6>
                                        <date-dropdown id="date-drop" default="2018-01-01" v-model="selectedDate" class="my-1"/>
                                        <div class="form-check my-2">
                                            <input v-model="isRecurring" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">Is this a recurring transaction?</label>
                                        </div>
                                        <label for="receiptUpload" class="my-2">Would you like to attatch a receipt?*</label>
                                        <input type="file" class="form-control-file" id="receiptUpload">
                                        <small class="my-3">*Receipt can always be uploaded later and is not required</small>
                                        <p id="message">{{ message }}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click.prevent="test">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DateDropdown from 'vue-date-dropdown'
export default {
    components: {
        DateDropdown
    },
    data () {
        return {
            description: null,
            selectedCategoryId: null,
            selectedDate: null,
            isRecurring: false,
            amount: null,
            message: null,
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
        }
    },
    methods: {
        test(event) {
            event.preventDefault();
            console.log(this.description);
            console.log(this.isRecurring);
            console.log(this.selectedCategoryId);
            console.log(this.selectedDate);
            console.log(this.amount)
            const parsedAmount = parseFloat(this.amount);
            if (this.amount && parsedAmount.toString !== parsedAmount) return this.message = "Invalid dollar amount";
            if (this.amount && this.amount.indexOf('.') > -1 && this.amount.indexOf('.') < this.amount.length - 3) return this.message = "Invalid dollar amount";
            this.$refs.createTransModal.hide();
        
        // createTrans: function(event) {
        //     axios.post("/api/transaction", {
        //         description: document.getElementById('transTitle').innerHTML,
        //         amount: "ADD THIS IN - forgot to add option for this on modal",
        //         categoryId: document.getElementById('catSelect').selectedIndex +1,
        //         date: this.selectedDate,
        //         isReconciled: "ADD THIS IN",
        //         isRecurring: document.getElementById("defaultCheck1").checked,
        //         imageUrl: "ADD THIS IN",
        //         dueDate: this.selectedDate, //add in moment() conversion to add a month
        //         hasReceipt: "if above option = false so is this"
        //     }).then(res => {
        //         console.log(res);
        //         if (res.data === true) {
        //             this.$router.push('/');
        //         }
        //     }).catch(err => console.error(err));

        }
    }
}
</script>

<style>
#message {
    color: red;
}
</style>
