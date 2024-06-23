<script setup lang="ts"></script>

<template>
  <div class="cloud">
    <div class="underBall"></div>
  </div>
</template>

<style scoped>
.cloud {
  border: 2px solid black;
}

.underBall {
  width: 200px;
  height: 80px;

  border-radius: 40px;

  background: var(--cloud-gradient-color);
}
</style>
