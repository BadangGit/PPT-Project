<script lang="ts" setup></script>

<template>
  <div class="app">
    <Transition name="fade" mode="out-in">
      <router-view></router-view>
    </Transition>
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

/* fade-animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.4;
}
</style>
