<script setup></script>

<template>
  <div class="glassGrid">
    <div class="glassDot" v-for="item in items" :key="item" :style="{}"></div>
  </div>
</template>

<style scoped lang="scss">
.glassGrid {
  width: 100vw;
  height: 100vh;
}

.glassDot {
  position: absolute;
  width: 10px;
  height: 10px;

  background-color: red;
}
</style>
