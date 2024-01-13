<script lang="ts"></script>

<template>
  <nav class="main-nav">
    <router-link
      class="nav-title"
      style="text-decoration: none; color: inherit"
      to="/"
    >
      Physics-normal
    </router-link>
  </nav>

  <router-view></router-view>
</template>

<style>
* {
  font-family: "Inter";
}

.main-nav {
  width: 100%;
  height: 77.5px;

  background-color: antiquewhite;
}

.nav-title {
  display: flex;
  text-align: center;
  justify-content: center;

  font-size: 32px;
  font-weight: 700;
}
</style>
