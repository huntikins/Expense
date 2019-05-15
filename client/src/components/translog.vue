<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Transaction</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Receipt</th>
                <!-- <th v-if="update==true">Select</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="trans in transactions" :key="trans.id">
                <th scope="row">{{ trans.title }}</th>
                <td>{{ trans.price }}</td>
                <td>{{ trans.date }}</td>
                <td>
                    <!-- https://stackoverflow.com/questions/15551779/open-link-in-new-tab-or-window -->
                    <a v-if="trans.receipt == true" :href="trans.receiptUrl" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-receipt"></i>
                    </a>
                    <span v-else>none</span>
                </td>
                <!-- <td v-if="update==true"><input type="checkbox"></td> -->
            </tr>
        </tbody> 
    </table>
</template>

<script>
import dashboardframe from './dashboardframe.vue'
import axios from 'axios'

export default {
    update: false,
    data(){
        return {
            transactions: [
            {
                title: "Barnes & Noble",
                price: 44.97,
                date: "11/29/18",
                receipt: true,
                receiptUrl: null
            },
            {
                title: "Amazon",
                price: 12.43,
                date: "11/21/18",
                receipt: false,
                receiptUrl: null
            },
            {
                title: "KCPL",
                price: 164.13,
                date: "11/01/18",
                receipt: false,
                receiptUrl: null
            },
            {
                title: "Starbucks",
                price: 4.90,
                date: "11/29/18",
                receipt: true,
                receiptUrl: null
            },
            {
                title: "Barnes & Noble",
                price: 44.97,
                date: "11/29/18",
                receipt: true,
                receiptUrl: null
            }]
        }
    },
    beforeCreate() {
        const self = this;
        axios
            .get('/api/transactions')
            .then(res => {
                console.log(res)
                self.transactions = [];
                res.data.forEach(transaction => {
                    self.transactions.push({
                        title: transaction.description,
                        price: transaction.amount,
                        date: transaction.date,
                        receipt: transaction.hasReceipt,
                        receiptUrl: transaction.imageUrl
                    });
                });
            });
    }
}
</script>

<style>
@media screen and (max-width: 767px) {
    table {
        display: block;
        overflow: scroll;
    }
    
}
</style>
