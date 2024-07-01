<script lang="ts" setup></script>

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style>
:root {
  --old-main-background-color: #f3f3f3;
  --darkMode-background-color: #1d1d1d;
}

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
