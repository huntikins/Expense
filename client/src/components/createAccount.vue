<template>
    <div>
        <jumbotron title="Join us!"></jumbotron>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="username">Email address</label>
                    <input class="form-control" id="username" placeholder="Create a username...">
                </div>
                <div class="form-group">
                    <label for="passsword">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Create a password...">
                </div>
                <button id="submit-create-account" type="submit" class="btn btn-outline-success my-2 my-sm-0" @click="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
// Vue script
import jumbotron from './jumbotron.vue'

export default {
    components: {
        jumbotron
    },
    methods: {
        submit: event => {
            event.preventDefault();
        }
    }
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