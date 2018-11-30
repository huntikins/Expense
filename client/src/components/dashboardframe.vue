<template>
  <div class="container">
    <!-- Modal -->
    <createBudgetModal></createBudgetModal>
    <div class="row">
      <div id="greeting" class="col-12 p-2">
        <h2 class="sub-title">Lets take a quick look at your expenses {{ name }}.</h2>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-lg-6 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h1 class="text-white">Recent Transactions</h1>
          </div>
          <div class="card-body">
            <!--insert translog div here-->
          </div>
          <div class="card-footer">
            <button class="btn btn-outline-success my-2 my-sm-0">Create Transaction</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h1 class="text-white">Upcoming Bills</h1>
          </div>
          <div class="card-body">
            <h1>Nothing yet!</h1>
          </div>
          <div class="card-footer"></div>
        </div>
        <div class="row m-4">
            <div class="col-lg-6 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h1 class="text-white">Recent Transactions</h1>
                    </div>
                    <div class="card-body">
                        <translog></translog>
                        <!--insert translog div here-->
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-outline-success my-2 my-sm-0 float-left">Create Transaction</button>
                        <button class="btn btn-outline-success my-2 my-sm-0">Delete Transaction</button>
                        <button class="btn btn-outline-success my-2 my-sm-0 float-right" @click="editTrans">Edit Transaction</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h1 class="text-white">Upcoming Bills</h1>
                    </div>
                    <div class="card-body">
                        <h1>Nothing yet!</h1>
                    </div>
                    <div class="card-footer">
                    </div>
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
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              data-toggle="modal"
              data-target="#createBudget"
            >Create Budget</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import budgetdash from './budgetdash.vue'
import createBudgetModal from './createBudgetModal.vue'
import translog from './translog.vue'
export default {
    data: () => ({
        name: "Elon",
    }),
    components: {
        budgetdash,
        createBudgetModal,
        translog
    },
    methods: {
        newBudget: function(event){
            this.modal = true  
        }
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
</style>
