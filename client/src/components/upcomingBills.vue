<template>
    <table class="table table-hover">
        <tbody>
            <tr v-for="upcoming in upcomingBills">
                <th class="align-middle" scope="row">{{ upcoming.date }}</th>
                <td class="align-middle">{{ upcoming.title }}</td>
                <td class="align-middle">${{ upcoming.price }}</td>
                <td><button class="btn btn-outline-success my-2 my-sm-0"
                        @click.prevent="markAsPaid($event)"
                        :value="upcoming.id">Paid</button>
                </td>
            </tr>
        </tbody> 
    </table>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    data(){
        return {
            upcomingBills: []
        }
    },
    methods: {
        markAsPaid: function(event){
            const self = this;
            let transId = event.target.value
            console.log(transId)
            axios.put('/api/transactions/markPaid',
            {
                id: transId
            }).then(() => self.$router.push('/'));
        }
    },
    beforeCreate(){
        console.log("beforeCreate()")
        axios.get('/api/transactions').then(res => {
            this.upcomingBills = [];
            res.data.forEach(transaction => {
                if (transaction.isRecurring && !transaction.isPaid && transaction.isCurrent) {
                    this.upcomingBills.push({
                        date: transaction.date,
                        title: transaction.description,
                        price: transaction.amount,
                        id: transaction.id
                    });
                }
            });
        }).catch(err => console.error(err))
    }
}
</script>

<style>

</style>