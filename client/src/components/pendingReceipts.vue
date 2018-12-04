<template>
  <div>
    <div v-show="receipts.length > 0">
      <table class="table table-hover">
        <tbody>
          <tr v-for="receipt in receipts">
            <td>{{ receipt.date }}</td>
            <td>{{ receipt.description }}</td>
            <td>
              <button class="btn btn-outline-success my-2 my-sm-0">Reconcile</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="receipts.length === 0">
      <p>No Pending Receipts</p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      receipts: []
    };
  },
  beforeCreate() {
    const self = this;
    axios.get("api/transactions").then(res => {
      console.log("transactions response: " + res.data);
      res.data.forEach(trans => {
        if (trans.hasReceipt) {
          self.receipts.push({
            date: trans.date,
            description: trans.desctiption
          });
        }
      });
    });
  }
};
</script>

<style>
</style>