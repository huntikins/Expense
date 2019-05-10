<template>
  <span>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" v-model="email" type="email" placeholder="email" aria-label="email">
      <input class="form-control mr-sm-2" v-model="password" type="password" placeholder="Password" aria-label="Password">
      <button
        :class="`btn btn-outline-success my-2 my-sm-0${
          isButtonHover ?
            isButtonActive ? ' active focus' : ' hover'
            :
            ''
        }`"
        @click="submitLogin"
        type="submit"
      >
        Sign in
      </button>
    </form>
    <span v-if="message" id="message" :class="hasSuccess ? 'success' : undefined">{{ message }}</span>
  </span>
</template>

<script>
import axios from 'axios';
import { setTimeout } from 'timers';

export default {
  props: ['isGuest'],
  data() {
    const { isGuest } = this.$props;
    return {
      email: "",
      password: "",
      message: "",
      isButtonHover: false,
      isButtonActive: false,
      hasSuccess: false
    };
  },
  methods: {
    submitLogin: function(event) {
      if (event) event.preventDefault();
      if (!this.email) return (this.message = "You must enter an email address.");
      if (!this.password) return (this.message = "You must enter a password.");
      const self = this;
      const apiCall = () => {
        return this.isGuest ?
          axios.post("/api/authentication/guest-login")
          :
          axios.post(
            "/api/authentication/login",
            {
              email: this.email,
              password: this.password
            }
          );          
      }
      apiCall()
        .then(res => {
          console.log(res);
          if (res.data && res.data.success) {
            self.message = 'Success! You are logged in.';
            self.hasSuccess = true;
            return self.$router.push('/dashboard');
          }
          self.message = res.data;
        })
        .catch(err => console.error(err));
    }
  },
  mounted() {
    if (!this.$props.isGuest) return null;
    setTimeout(() => {
      this.email = "nobody@fakemail.org";
      this.password = "xxxxxxxxxxx";
      setTimeout(() => {
        this.isButtonHover = true;
        setTimeout(() => {
          this.isButtonActive = true;
          setTimeout(() => {
            this.submitLogin();
          }, 600);
        }, 600);
      }, 600);
    }, 600);
  }
};
</script>

<style scoped>
#message {
  color: red;
}
#message.success {
  color:#85F2A0;
}
.btn-outline-success.hover {
    color: #163840;
    background-color: #85F2A0;
}
</style>