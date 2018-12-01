<template>
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" v-model="email" type="email" placeholder="email" aria-label="email">
        <input class="form-control mr-sm-2" v-model="password" type="password" placeholder="Password" aria-label="Password">
        <button class="btn btn-outline-success my-2 my-sm-0" @click="submitLogin" type="submit">Sign in</button>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="testLogin">TEST</button>
        <span v-if="message" id="message"><br>{{ message }}</span>
    </form>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    submitLogin: function(event) {
      event.preventDefault();
      if (!this.email) return (this.message = "You must enter an email address.");
      if (!this.password) return (this.message = "You must enter a password.");
      const self = this;
      axios
        .post("/api/authentication/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data === true) {
            self.$router.push('/dashboard');
          }
          self.message = res.data;
        })
        .catch(err => console.error(err));
    },
    testLogin: function(event) {
      event.preventDefault();
      const self = this;
      axios
        .post("/api/budget", {
          categoryId: 1,
          amount: 200.2
        })
        .then(res => {
          console.log(res);
          if (res.data === true) {
            self.$router.push('/');
          }
          self.message = res.data;
        })
        .catch(err => console.error(err));
    }
  },
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  }
};
</script>

<style scoped>
#message {
    color: red;
}
</style>