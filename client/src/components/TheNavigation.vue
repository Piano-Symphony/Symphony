<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="nav-link" to="/about">
            <img src="https://cdn.iconscout.com/icon/free/png-64/symfony-3772408-3151536.png">
    </router-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/"><i class="fa fa-fw fa-home"></i> Home</router-link>
            <router-link class="nav-link" to="/sheet/beginner"><i class="fa fa-folder"></i> Beginner</router-link>
            <router-link class="nav-link" to="/sheet/intermediate"><i class="fa fa-folder"></i> Intermediate</router-link>
            <router-link class="nav-link" to="/sheet/master"><i class="fa fa-folder"></i> Master </router-link>
      </div>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>

            <router-link class="nav-link" to="/signin"><i class="fa fa-hdd-o" style="font-size:24px"></i>  SignUp</router-link>
            <router-link class="nav-link" to="/login"><i class="fa fa-fw fa-user"></i> Login </router-link>
  </div>
</nav>
      <div class="background" :class="{ otherColor: isSignIn }">

  </div>
</template>

<script>

import { searchApi } from '../api/search';
import Sheets from "../interface/sheet";


export default {
  data() {
    return {
      search: ''
    }
  },
  search: {
    filteredSheets () {
      return this.sheet.filter(s => s.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style>
.background {
  height: 5vh;
  width: 5vw;
  background-color: #ffffff;
}

.otherColor {
  background-color: #d4d4d4; 
}
</style>