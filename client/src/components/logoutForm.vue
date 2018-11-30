<template>
    <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" @click="logout" type="submit">Sign out</button>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="testLogin">TEST</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
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