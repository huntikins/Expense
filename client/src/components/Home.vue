<template>
  <div>
    <navbar></navbar>
    <jumbotron></jumbotron>
    <homebody></homebody>
  </div>
</template>

<script>
import navbar from './navbar.vue'
import jumbotron from './jumbotron.vue'
import homebody from './homebody.vue'

export default {
  name: 'Home',
  components: {
    jumbotron,
    homebody,
    navbar
  }
}
</script>
