<template>
  <div id="app">
    <navbar></navbar>
    <homebody></homebody>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

import homebody from './components/homebody.vue'

export default {
  name: 'app',
  components: {
    navbar,
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
