<template>
  <div>
    <reconcile-receipt-modal :transaction="chosenTransaction"></reconcile-receipt-modal>
    <div v-show="receipts.length > 0">
      <table class="table table-hover">
        <tbody>
          <tr v-for="(receipt, index) in receipts">
            <td>{{ receipt.date }}</td>
            <td>{{ receipt.description }}</td>
            <td>
              <button class="btn btn-outline-success my-2 my-sm-0" @click="grabChosenReceipt" :receiptIndex="index" data-toggle="modal" data-target="#reconcileReceipt">Reconcile</button>
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
import reconcileReceiptModal from './reconcileReceiptModal.vue'

export default {
  data() {
    return {
      receipts: [],
      chosenTransaction: {}
    };
  },
  components: {
    reconcileReceiptModal
  },
  methods: {
    grabChosenReceipt(event) {
      const chosenReceiptIndex = parseInt(event.currentTarget.getAttribute('receiptIndex'));
      this.chosenTransaction = this.receipts[chosenReceiptIndex];
    }
  },
  beforeCreate() {
    const self = this;
    axios.get("api/transactions").then(res => {
      // console.log("transactions response: " + res.data);
      res.data.forEach(trans => {
        if (trans.hasReceipt && !trans.isReconciled) {
          self.receipts.push({
            date: trans.date,
            description: trans.description,
            id: trans.id,
            imageUrl: trans.imageUrl
          });
        }
      });
    });
  }
};
</script>

<style>
</style>