<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Transaction</th>
                <th scope="col">Ammount</th>
                <th scope="col">Date</th>
                <th scope="col">Receipt</th>
                <!-- <th v-if="update==true">Select</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="trans in transactions">
                <th scope="row">{{ trans.title }}</th>
                <td>{{ trans.price }}</td>
                <td>{{ trans.date }}</td>
                <td>
                    <span v-if="trans.receipt == true"><i class="fas fa-receipt"></i></span>
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
            },
            {
                title: "Amazon",
                price: 12.43,
                date: "11/21/18",
                receipt: false,
            },
            {
                title: "KCPL",
                price: 164.13,
                date: "11/01/18",
                receipt: false,
            },
            {
                title: "Starbucks",
                price: 4.90,
                date: "11/29/18",
                receipt: true,
            },
            {
                title: "Barnes & Noble",
                price: 44.97,
                date: "11/29/18",
                receipt: true,
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
                        receipt: transaction.hasReceipt
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
