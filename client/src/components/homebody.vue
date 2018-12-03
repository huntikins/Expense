<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12 mb-1">
                            <i class="fas fa-4x fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <p>Just login to your account, add in a purchase or capture the receipt and edit the transaction later. Your transactions are tagged by categories that allow you to create a budget based on the categories you choose, set a monthly goal and see how much you have left to spend!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <h2 class="header">Join us!</h2>
                    <p>Sign up for free and get ready to watch your wallet reach to new hights!</p>
                    <router-link to="/create-account"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Create Account</button></router-link>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12 mb-1">
                            <i class="fas fa-4x fa-piggy-bank"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <p>By tracking your spending and sticking to the spending goals you create, you are taking the first step towards financial bliss! The money you save will continue to grow, alleviating financial stress and giving you a safety net for when your wallet gets tight.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style>
.header {
    font-weight: 600;
    font-size: 3rem;
}
.btn-outline-success{
  background-color: #163840;
  color: white;
}
.btn-outline-success:hover {
  color: #163840;
  background-color: #85F2A0;
}
</style>
