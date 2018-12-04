<template>
    <table class="table table-hover">
        <tbody>
            <tr v-for="upcoming in upcomingBills">
                <th class="align-middle" scope="row">{{ upcoming.date }}</th>
                <td class="align-middle">{{ upcoming.title }}</td>
                <td class="align-middle">${{ upcoming.price }}</td>
                <td><button class="btn btn-outline-success my-2 my-sm-0"
                            @click.prevent="markAsPaid($event)"
                            :value="upcoming.id">Paid</button></td>
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
            let transId = event.target.transaction
            axios.put('/api/transactions/',
            {
                where: {
                    id: transId
                }
            },
            {
                isPaid: true
            }).then( res => {
                axios
                .get('/api/transactions/',{
                    where: {
                        id: transId
                    }
                }).then(res=>{
                    moment.addRealMonth = function addRealMonth(d) {
                        let fm = moment(d).add(1, 'M');
                        let fmEnd = moment(fm).endOf('month');
                        return d.date() != fm.date() && fm.isSame(fmEnd.format('DD.MM.YYY')) ? fm.add(1, 'd') : fm;  
                    }
                    let nextMonth = moment.addRealMonth(moment());
                    let newDate = nextMonth.format('DD.MM.YYYY');
                    axios.post('/api/transactions',{
                        description: res.data.description,
                        isRecurring: true,
                        categoryId: res.data.categoryId,
                        date: this.newDate,
                        amount: res.data.amount,
                        imgURL: res.data.imgURL,
                        isPaid: false,
                    }).then(res =>{
                        getBills()
                    }).catch(err => console.error(err))
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
        },
        getBills: function(){
            axios.get('/api/transactions').then(res => {
                this.upcomingBills = []
                res.data.forEach(transaction => {
                    if (transaction.isRecurring == true && transaction.isPaid == false || null){
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
        axios.get('/api/transactions').then(res => {
                this.upcomingBills = []
                res.data.forEach(transaction => {
                    if (transaction.isRecurring == true){
                        this.upcomingBills.push({
                            date: transaction.date,
                            title: transaction.description,
                            price: transaction.amount,
                            id: transaction.id
                        })
                    }
                })
            }).catch(err => console.error(err))
    }
}
</script>

<style>

</style>
