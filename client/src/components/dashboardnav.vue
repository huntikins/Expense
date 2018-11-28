<template>
    <nav class="navbar navbar-light bg-dark">
      <div id="leftNav" class="sidenav bg-dark">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <a class="text-white brand">Expense.</a>
        <hr class="text-white">
        <a href="#">Transactions</a>
        <a href="#">Budgets</a>
      </div>
      <button class="btn btn-menu navbar-toggler" @click="openNav"><span class="navbar-toggler-icon"></span></button>
      <div class="logout">
        <button class="btn btn-outline-success my-2 my-sm-0">Sign Out</button>
      </div>
    </nav>
</template>

<script>
export default {
    methods: {
        openNav: function() {
        document.getElementById("leftNav").style.width = "250px";
        },
        closeNav: function() {
        document.getElementById("leftNav").style.width = "0";
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
    background-color: #163840;
    overflow-x: hidden; 
    padding-top: 60px;
    transition: 0.5s;
    border-right: 1px solid #2f3439;
}
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #f1f1f1;
    display: block;
    transition: 0.3s;
}
.sidenav a:hover {
    color: #85F2A0;
}
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
.sidenav .brand {
  position: absolute;
  top: 5px;;
  right: 115px;
  font-size: 30px;

}
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
.navbar {
    background-color: #163840;
    height: 56px;
}
.btn-menu {
  float: left;
  background-color: transparent;
  
} 
.btn-menu:focus, .btn-menu:active {
  box-shadow: none;
  outline: none !important;
}
.logout {
  float: right;
}
</style>
