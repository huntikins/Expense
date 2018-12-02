<template>
    <div>
        <navbar></navbar>
        <jumbotron title="Join us!"></jumbotron>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="firstname">First name</label>
                    <input class="form-control" id="firstname" v-model="firstname" placeholder="Enter your first name..." required>
                </div>
                  <div class="form-group">
                    <label for="lastname">Last name</label>
                    <input class="form-control" id="lastname" v-model="lastname" placeholder="Enter your last name..." required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" id="email" v-model="email" placeholder="Enter your email..." required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Create a password..." required>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" placeholder="Confirm password..." required>
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
      if (!this.email) return (this.message = "You must enter an email address.");
      if (!this.password) return (this.message = "You must create a password.");
      if (this.password !== this.confirmPassword) return this.message = "Your passwords did not match."
      if (!this.firstname || !this.lastname) return (this.message = "Please provide a first and last name.");
      const self = this;
      axios
        .post("/api/authentication/signup", {
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname
        })
        .then(res => {
          self.message = res.data;
        })
        .catch(err => console.error(err));
    }
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      firstname: "",
      lastname: ""
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