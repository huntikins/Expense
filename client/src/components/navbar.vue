<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand text-white" href="#">Expense.</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" v-model="username" type="username" placeholder="Username" aria-label="Username">
        <input class="form-control mr-sm-2" v-model="password" type="password" placeholder="Password" aria-label="Password">
        <button class="btn btn-outline-success my-2 my-sm-0" @click="submitLogin" type="submit">Sign in</button>
        <span v-if="message" id="message"><br><br>{{ message }}</span>
      </form>
      <button class="btn btn-outline-success my-2 my-sm-0" @click="testLogin">TEST</button>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    submitLogin: function(event) {
      event.preventDefault();
      if (!this.username) return (this.message = "You must enter a username.");
      if (!this.password) return (this.message = "You must enter a password.");
      const self = this;
      axios
        .post("/api/authentication/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          self.message = res.data;
        })
        .catch(err => console.error(err));
    },
    testLogin: function(event) {
      event.preventDefault();
      const self = this;
      self.$api
        .get('/api/authentication/test-login')
        .then(res => {
          console.log(res);
        })
        .catch(err => console.error(err));
    }
  },
  data() {
    return {
      username: "",
      password: "",
      message: ""
    };
  }
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
</style>
