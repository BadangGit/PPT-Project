<script setup lang="ts">
import projectCoinMenu from "@/components/cards/projectCoinMenu.vue";
</script>

<template>
  <div class="main">
    <div class="coinMenuGrid">
      <projectCoinMenu></projectCoinMenu>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: var(--main-background-color);
  width: 100vw;
  height: 100vh;
}

.coinMenuGrid {
  width: 1000px;
  height: 100%;

  display: flex;

  margin: auto;
}
</style>
