<template>
  <div>
    <jumbotron></jumbotron>
    <homebody></homebody>
  </div>
</template>

<script>
import jumbotron from './jumbotron.vue'
import homebody from './homebody.vue'

export default {
  name: 'Home',
  components: {
    jumbotron,
    homebody
  }
}
</script>
