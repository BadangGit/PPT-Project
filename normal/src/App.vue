<script lang="ts"></script>

<template>
  <nav class="main-nav">
    <router-link class="nav-title" to="/"> Physics-Normal </router-link>
  </nav>

  <router-view></router-view>
</template>

<style>
* {
  font-family: "Inter";

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main-nav {
  margin: 0px;
  width: 100%;
  min-width: 1200px;
  height: 60px;
  cursor: default;

  outline: solid 0.5px #cfcfcf;
}

.nav-title {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
  font-weight: 700;
  color: inherit;

  text-decoration: none;
}
</style>
