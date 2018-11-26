<template>
  <div>
    <div id="leftNav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <a href="#">Transactions</a>
      <a href="#">Budgets</a>
    </div>
    <button @click="openNav">open</button>
    <div id="main">
      <dashboard_frame></dashboard_frame>
    </div>
  </div>
</template>

<script>
import dashboard_frame from './dashboard_frame.vue'
//import homebody from './homebody.vue'

export default {
  name: 'Home',
  components: {
    dashboard_frame
  },
  methods: {
    openNav: function() {
      document.getElementById("leftNav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
    closeNav: function() {
      document.getElementById("leftNav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  }
}
</script>

<style>
.sidenav {
    height: 100%; 
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden; 
    padding-top: 60px;
    transition: 0.5s;
}
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}
.sidenav a:hover {
    color: #f1f1f1;
}
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
#main {
    transition: margin-left .5s;
    padding: 20px;
}
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
</style>

