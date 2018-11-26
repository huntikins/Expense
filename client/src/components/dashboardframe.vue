<template>
    <div class="container-fluid">
        <div class="row">
            <div id="greeting" class="col-12 pt-2">
                <h2 class="sub-title">Lets take a quick look at your expenses {{ name }}.</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <!--insert translog div here-->
            </div>
            <div class="col">
                <!--insert upcoming bills div here-->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <!--insert receiptdiv here-->
            </div>
            <div class="col">
                <!--insert budgetdiv here-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: "Elon"
    })
}
</script>

<style scoped>

</style>
