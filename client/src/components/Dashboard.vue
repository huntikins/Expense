<template>
  <div class="content-frame">
    <navbar isLoggedIn="true" :userEmail="userEmail"></navbar>
    <div id="main">
      <dashboardframe :userFirstname="userFirstname"></dashboardframe>
    </div>
  </div>
</template>

<script>
import dashboardframe from './dashboardframe.vue'
import navbar from './navbar.vue'
import axios from 'axios'

export default {
  name: 'dashboard',
  components: {
    dashboardframe,
    navbar
  },
  data() {
    return {
      userFirstname: '',
      userEmail: ''
    }
  },
  beforeCreate() {
    const self = this;
    axios
      .get('/api/authentication/user')
      .then(res => {
        self.userEmail = res.data.email || '';
        self.userFirstname = res.data.firstname || '';
      });
  }
}
</script>

<style>


</style>

