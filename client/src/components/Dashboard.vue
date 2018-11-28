<template>
  <div class="content-frame">
    <dashboardnav></dashboardnav>
    <div id="main">
      <dashboardframe></dashboardframe>
    </div>
  </div>
</template>

<script>
import dashboardframe from './dashboardframe.vue'
import dashboardnav from './dashboardnav.vue'

export default {
  name: 'dashboard',
  components: {
    dashboardframe,
    dashboardnav
  }
}
</script>

<style>


</style>

