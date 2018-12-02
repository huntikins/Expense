<template>
    <form class="form-inline my-2 my-lg-0">
        <span id="email">{{ userEmail }}</span>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="logout" type="submit">Sign out</button>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="testLogin">TEST</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
  props: ['userEmail'],
  methods: {
    logout: function(event) {
      event.preventDefault();
      const self = this;
      axios
        .post("/api/authentication/logout")
        .then(res => {
          console.log(res);
          if (res.data === true) {
            self.$router.push('/');
          }
          self.message = res.data;
        })
        .catch(err => console.error(err));
    },
    testLogin: function(event) {
      event.preventDefault();
      const self = this;
      axios
        .get("/api/budget/category-totals")
        .then(res => {
          console.log(res);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>
#email {
    color:#85F2A0;
    padding-right: 7px;
}
</style>