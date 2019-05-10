<template>
  <div>
    <navbar :is-logged-in="isLoggedIn" :user-email="userEmail" ></navbar>
    <jumbotron title="Sorry..." sub-title="The page you are looking for could not be found." />
    <router-link v-if="isLoggedIn" to="/dashboard">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Dashboard</button>
    </router-link>
    <router-link v-else to="/">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go Home</button>
    </router-link>
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
    navbar
  },
  data() {
    return {
      userEmail: '',
      isLoggedIn: false
    }
  },
  beforeCreate() {
    const self = this;
    axios
      .get('/api/authentication/user')
      .then(res => {
        console.log(res)
        self.userEmail = res.data.email || '';
        self.isLoggedIn = true;
      })
      .catch(err => console.log(err));
  }
}
</script>

<style>
.btn-outline-success{
  background-color: #163840;
  color: white;
}
.btn-outline-success:hover {
  color: #163840;
  background-color: #85F2A0;
}
</style>