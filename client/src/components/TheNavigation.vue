<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="nav-link" to="/about">Symphony</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/sheet/beginner">Beginner</router-link>
            <router-link class="nav-link" to="/sheet/intermediate">Intermediate</router-link>
            <router-link class="nav-link" to="/sheet/master">Master</router-link>
      </div>
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
            <router-link class="nav-link" to="/signin">SignUp</router-link>
            <router-link class="nav-link" to="/login">Login</router-link>

  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      sheet:[]
    }
  }

}
</script>