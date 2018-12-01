<template>
  <div>
    <navbar isLoggedIn="false"></navbar>
    <jumbotron></jumbotron>
    <homebody></homebody>
  </div>
</template>

<script>
import navbar from './navbar.vue'
import jumbotron from './jumbotron.vue'
import homebody from './homebody.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    jumbotron,
    homebody,
    navbar
  },
  mounted() {
    const self = this;
    axios
      .get("/api/authentication/test-login")
      .then(res => {
        if (res.data.success === true) {
          self.$router.push('/dashboard');
        }
      }).catch(() => {});
  }
}
</script>
