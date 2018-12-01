<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Transaction</th>
                <th scope="col">Ammount</th>
                <th scope="col">Date</th>
                <th scope="col">Receipt</th>
                <th v-if="update==true">Select</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="trans in transactions">
                <th scope="row">{{ trans.title }}</th>
                <td>{{ trans.price }}</td>
                <td>{{ trans.date }}</td>
                <td v-if="trans.receipt == true"><i class="fas fa-receipt"></i></td>
                <td v-else>none</td>
                <td v-if="update==true"><input type="checkbox"></td>
            </tr>
        </tbody> 
    </table>
</template>

<script>
import dashboardframe from './dashboardframe.vue'
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
    }
}
</script>

<style>

</style>
