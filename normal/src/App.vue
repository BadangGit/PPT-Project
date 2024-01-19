<script lang="ts" setup></script>

<template>
  <div class="app">
    <Transition name="slide-fade" mode="out-in">
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
  width: 100%;
  height: 100%;
}

/* slide-animation */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
