<template>
    <div>
      <navbar></navbar>
        <jumbotron title="Join us!"></jumbotron>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input class="form-control" id="username" v-model="username" placeholder="Create a username..." required>
                </div>
                <div class="form-group">
                    <label for="passsword">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Create a password..." required>
                </div>
                <button @click="submitNewUser" type="submit" class="btn btn-outline-success my-2 my-sm-0">Submit</button>
                <p v-if="message" id="message">{{ message }}</p>
            </form>
        </div>
    </div>
</template>

<script>
// Vue script
import jumbotron from "./jumbotron.vue";
import axios from "axios";
import navbar from './navbar.vue'

export default {
  components: {
    jumbotron,
    navbar
  },
  methods: {
    submitNewUser: function(event) {
      event.preventDefault();
      if (!this.username) return (this.message = "You must enter a username.");
      if (!this.password) return (this.message = "You must create a password.");
      const self = this;
      axios
        .post("/api/authentication/signup", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          self.message = res.data;
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

<style scoped>
#message {
  margin-top: 8px;
  color: red;
}
</style>