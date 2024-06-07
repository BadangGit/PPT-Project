<script setup>
import { getFigure } from "@/assets/function/generateGlass";

let test = getFigure();

let items = test.isFigureSquare ? 4 : 3;

console.log(test.dotPos);
</script>

<template>
  <div class="glassGrid">
    <div
      class="glassDot"
      v-for="(item, i) in items"
      :key="item"
      :style="{
        left: `${test.dotPos[i].left}px`,
        top: `${test.dotPos[i].top}px`,
      }"
    ></div>
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
