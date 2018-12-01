<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand text-white" href="#">Expense.</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <span v-if="isLoggedIn === 'true'">
      <logout-form :userEmail="userEmail"></logout-form>
    </span>
    <span v-else>
      <login-form></login-form>
    </span>
    </div>
  </nav>
</template>

<script>
import loginForm from './loginForm';
import logoutForm from './logoutForm';

export default {
  components: {
    loginForm,
    logoutForm
  },
  props: ['isLoggedIn', 'userEmail']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-outline-success {
  color: #85f2a0;
}
.btn-outline-success:hover {
  color: #163840;
  background-color: #85f2a0;
}

#message {
  color: red;
}
.text-white {
    color: #f1f1f1 !important;
}
</style>
