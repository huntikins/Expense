<template>
    <table class="table table-hover">
        <tbody>
            <tr v-for="upcoming in upcomingBills">
                <th class="align-middle" scope="row">{{ upcoming.date }}</th>
                <td class="align-middle">{{ upcoming.title }}</td>
                <td class="align-middle">${{ upcoming.price }}</td>
                <td><button class="btn btn-outline-success my-2 my-sm-0">Paid</button></td>
            </tr>
        </tbody> 
    </table>
</template>

<script>
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
    }
}
</script>

<style>

</style>
