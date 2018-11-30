<template>
  <div class="content-frame">
    <navbar isLoggedIn="true"></navbar>
    <div id="main">
      <dashboardframe></dashboardframe>
    </div>
  </div>
</template>

<script>
import dashboardframe from './dashboardframe.vue'
import navbar from './navbar.vue'

export default {
  name: 'dashboard',
  components: {
    dashboardframe,
    navbar
  }
}
</script>

<style>


</style>

