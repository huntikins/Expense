<template>
  <div id="app">
    <navbar></navbar>
    <jumbotron></jumbotron>
    <homebody></homebody>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import jumbotron from './components/jumbotron.vue'
import homebody from './components/homebody.vue'

export default {
  name: 'app',
  components: {
    navbar,
    jumbotron,
    homebody
  }
}
</script>

<style>
#app {
  font-family: 'Rokkitt', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #163840;
}

</style>
