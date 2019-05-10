<template>
  <div>
    <navbar :is-logged-in="false" :is-guest="isGuest" ></navbar>
    <jumbotron></jumbotron>
    <homebody :is-guest="isGuest"></homebody>
  </div>
</template>

<script>
import navbar from './navbar.vue'
import jumbotron from './jumbotron.vue'
import homebody from './homebody.vue'
import axios from 'axios'

export default {
  props: ['isGuest'],
  name: 'Home',
  components: {
    jumbotron,
    homebody,
    navbar
  },
  methods: {
    testLogin() {
      const self = this;
      axios
        .get("/api/authentication/test-login")
        .then(res => {
          if (res.data.success === true) {
            self.$router.push('/dashboard');
          }
        }).catch(() => {});
    },
  },
  mounted() {
    if (!this.$props.isGuest) {
      this.testLogin();
    }
  }
}
</script>
