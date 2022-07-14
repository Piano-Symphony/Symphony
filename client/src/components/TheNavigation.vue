<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Symphony</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <a class="nav-link" href="#">Begginer</a>
        <a class="nav-link" href="#">Intermediaire</a>
        <a class="nav-link" href="#">Master</a>
      </div>
    </div>
                <router-link class="nav-link" to="/signin">SignUp</router-link>

            <router-link class="nav-link" to="/login">Login</router-link>

  </div>
</nav>
</template>

<script>
export default {}
</script>