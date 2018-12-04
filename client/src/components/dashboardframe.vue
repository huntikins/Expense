<template>
    <div class="container">
        <!-- Modal -->
        <createBudgetModal></createBudgetModal>
        <createTransactionModal></createTransactionModal>
        <snapReceiptsModal></snapReceiptsModal>
        <div class="row">
            <div id="greeting" class="col-12 p-2">
                <h2 class="sub-title">Lets take a quick look at your expenses {{ userFirstname }}.</h2>
            </div>
        </div>
        <div class="row m-4">
            <div class="col-lg-6 col-sm-12 mb-4">
                <div class="col-12 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="text-white">Upcoming Bills</h1>
                        </div>
                        <div class="card-body">
                            <upcomingbills></upcomingbills>
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h1 class="text-white">Captured Receipts</h1>
                    </div>
                    <div class="card-body">
                      <pendingReceipts></pendingReceipts>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-outline-success my-2 my-sm-0"
                              data-toggle="modal"
                              data-target="#snapPicture"
                              >Capture Reciept
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h1 class="text-white">Monthly Budget</h1>
                    </div>
                    <div class="card-body">
                        <budgetdash></budgetdash>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#createBudget">Create Budget</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h1 class="text-white">Recent Transactions</h1>
                    </div>
                    <div class="card-body">
                        <translog></translog>
                        <!--insert translog div here-->
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#createTrans">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import budgetdash from "./budgetdash.vue";
import createBudgetModal from "./createBudgetModal.vue";
import translog from "./translog.vue";
import createTransactionModal from "./createTransactionModal.vue";
import upcomingbills from "./upcomingBills.vue";
import pendingReceipts from "./pendingReceipts.vue";
import snapReceiptsModal from './snapReceiptModal.vue';
export default {
  props: ["userFirstname"],
  components: {
    budgetdash,
    createBudgetModal,
    translog,
    createTransactionModal,
    upcomingbills,
    pendingReceipts,
    snapReceiptsModal
  },
  methods: {
    newBudget: function(event) {
      this.modal = true;
    },
    editTrans: function() {
      this.update = true;
    },
    pictureModal: function() {
      this.pictureModal = true;
    }
  }
};
</script>

<style scoped>
.card-header,
.card-footer {
  background-color: #163840;
}
.card {
  border: 1px solid #163840;
}
.trans {
  overflow-y: scroll;
  height: 200px;
}
.transInfo {
  padding: 0;
  margin: 0;
}
@media screen and (max-width: 767px) {
    .col-sm-12, .col-12 {
        position: relative;
        left: -25;
        right: 25;
        margin-left: 0 !important;
        padding-left: 0 !important;
        margin-right: 0 !important;
        padding-right: 0 !important;
    }
    .sub-title {
        padding-left: 10px;
        padding-right: 10px;
    }
    .card {
        margin: 0 !important;
        padding: 0 !important;
    }
    .container {
        margin: 0 !important;
        padding: 0 !important;
        overflow-x: hidden;
    }
}
</style>