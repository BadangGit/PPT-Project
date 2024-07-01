<script setup lang="ts">
import projectCoin from "@/components/buttons/projectCoin.vue";
</script>

<template>
  <div class="rotateBar">
    <projectCoin></projectCoin>
  </div>
</template>

<style scoped>
.rotateBar {
  --rotate-time: 2s;
}

.rotateBar {
  width: 400px;
  height: 800px;

  display: grid;
  position: relative;

  margin: auto;

  animation-name: rotateCoin;
  animation-duration: var(--rotate-time);
  animation-timing-function: ease-out;
}

@keyframes rotateCoin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
