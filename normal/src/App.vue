<script lang="ts" setup></script>

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
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
.fade-enter-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.4;
}
</style>
