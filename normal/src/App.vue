<script lang="ts" setup></script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  font-family: "Inter";

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

* ::-webkit-scrollbar {
  display: none;
}

.app {
  width: 100vw;
  height: 100vh;
}
</style>
