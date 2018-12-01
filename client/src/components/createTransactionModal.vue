<template>
     <div class="modal fade" id="createTrans" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Transaction</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <a aria-hidden="true">&times;</a>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <h5>Tell us a bit about your transaction</h5>
                                <form>
                                    <div class="form-group text-left">
                                        <input type="text" class="form-control my-1" id="transTitle" aria-describedby="transactionTitle" placeholder="Where did you spend your money?">
                                        <select class="custom-select my-1" id="inlineFormCustomSelect">
                                            <option selected>What did you spend your money on?</option>
                                            <option :key="category.id"
                                                    v-for="category in categories">
                                                    {{ category.name }}
                                            </option>
                                        </select>
                                        <h6 class="my-2">Transaction date: </h6>
                                        <date-dropdown id="date-drop" default="2018-01-01" v-model="selectedDate" class="my-1"/>
                                        <div class="form-check my-2">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">Is this a recurring transaction?</label>
                                        </div>
                                        <label for="receiptUpload" class="my-2">Would you like to attatch a receipt?*</label>
                                        <input type="file" class="form-control-file" id="receiptUpload">
                                        <small class="my-3">*Receipt can always be uploaded later and is not required</small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click.prevent="" data-dismiss="modal">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DateDropdown from 'vue-date-dropdown'
export default {
    components: {
        DateDropdown
    },
    data () {
        return {
            selectedDate: '',
        }
    }
}
</script>

<style>

</style>
