<script lang="ts"></script>

<template>
  <div class="template">
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
  </div>
</template>

<style>
* {
  font-family: "Inter";
}

.main-nav {
  margin: 0px;
  width: 100%;
  height: 77.5px;

  outline: solid 0.5px #cfcfcf;
}

.nav-title {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
  font-weight: 700;
}
</style>
