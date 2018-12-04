<template>
  <div>
    <tr>
      <td>{{ pendingTrans.date }}</td>
      <td>{{ pendingTrans.description }}</td>
      <td>
        <button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal">Reconcile</button>
      </td>
    </tr>
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Reconcile Receipt</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <a aria-hidden="true">&times;</a>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <h5>Fill in the missing details of this transaction</h5>
                  <form>
                    <div class="form-group text-left">
                      <input
                        type="text"
                        v-model="amount"
                        class="form-control my-1"
                        placeholder="Enter transaction amount"
                      >
                      <input
                        type="text"
                        v-model="pendingTrans.image"
                        class="form-control my-1"
                        id="transTitle"
                        aria-describedby="transactionTitle"
                        placeholder="Where did you spend your money?"
                      >
                      <select
                        v-model="selectedCategoryId"
                        class="custom-select my-1"
                        id="inlineFormCustomSelect"
                      >
                        <option disabled value="0">What did you spend your money on?</option>
                        <option
                          :key="category.id"
                          v-for="category in categories"
                          :value="category.id"
                        >{{ category.name }}</option>
                      </select>
                      <h6 class="my-2">Transaction date:</h6>
                      <date-dropdown
                        id="date-drop"
                        default="2018-01-01"
                        v-model="selectedDate"
                        class="my-1"
                      />
                      <img v-bind:src="pendingTrans.image" alt="receipt image">
                    </div>
                  </form>

                  <div class="modal-footer"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  props: {
    pendingTrans: {
      type: Object
    }
  },
  data() {
    return {
      amount: null,
      description: null,
      selectedDate: null,
      categories: [
        {
          name: "Rent/Mortgage",
          id: 1
        },
        {
          name: "Utilities",
          id: 2
        },
        {
          name: "Entertainment",
          id: 3
        },
        {
          name: "Misc. Food",
          id: 4
        },
        {
          name: "Groceries",
          id: 5
        },
        {
          name: "Gas",
          id: 6
        },
        {
          name: "Mobile",
          id: 7
        },
        {
          name: "Subscriptions",
          id: 8
        },
        {
          name: "Clothing",
          id: 9
        },
        {
          name: "Charity",
          id: 10
        },
        {
          name: "Leisure",
          id: 11
        },
        {
          name: "Health",
          id: 12
        },
        {
          name: "Credit Card/Loan",
          id: 13
        },
        {
          name: "Deposit",
          id: 14
        },
        {
          name: "Withdrawal",
          id: 15
        }
      ]
    };
  },
  beforeCreate() {
    const self = this;
    axios.get("api/transactions").then(res => {
      console.log("transactions response: " + res.data);
      res.data.forEach(trans => {
        if (trans.hasReceipt) {
          self.receipts.push({
            id: trans.id,
            date: trans.date,
            description: trans.description,
            image: trans.imageURL
          });
        }
      });
    });
  }
};
</script>

<style>
</style>