<template>
    <table class="table table-hover">
        <tbody>
            <tr v-for="upcoming in upcomingBills">
                <th class="align-middle" scope="row">{{ upcoming.date }}</th>
                <td class="align-middle">{{ upcoming.title }}</td>
                <td class="align-middle">${{ upcoming.price }}</td>
                <td><button class="btn btn-outline-success my-2 my-sm-0"
                            @click.prevent="markAsPaid()">Paid</button></td>
            </tr>
        </tbody> 
    </table>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            upcomingBills: [
                {
                    date: "01/12/2019",
                    title: "KCPL",
                    price: "99.97"
                }
            ]
        }
    },
    methods: {
        markAsPaid: function(event){
            //do something
            //axios call to update
            //chage marked as paid to true
            //if marked as paid = true, then add 1 month onto date and set marked as paid to false
            //call getBills() function
        },
        getBills: function(){
            axios.get('/api/transactions').then(res => {
                this.upcomingBills = []
                res.data.forEach(transaction => {
                    if (transaction.isRecurring == true){
                        this.upcomingBills.push({
                            date: transaction.date,
                            title: transaction.description,
                            price: transaction.amount
                        })
                    }
                })
            }).catch(err => console.error(err))
        }
    },
    beforeCreate(){
        getBills()
    }
}
</script>

<style>

</style>
