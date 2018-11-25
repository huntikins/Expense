<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand text-white" href="/">Expense.</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username">
          <input class="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password">
          <router-link id="login" class="btn btn-outline-success my-2 my-sm-0" to="/dashboard">Sign In</router-link>
        </form>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
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
.btn-outline-success{
  color: #85F2A0;
}
.btn-outline-success:hover {
  color: #163840;
  background-color: #85F2A0;
}

</style>
