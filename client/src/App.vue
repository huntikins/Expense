<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
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
.bg-dark {
  background-color: #163840 !important;
}
</style>
