<script setup>
import { ref } from "vue";
import {
  getRandomPos,
  getRandomSize,
  getRandomColor,
} from "@/assets/function/getRandomData";

const pos = ref(getRandomPos(screen.width, screen.height));
const size = ref(getRandomSize(150, 250));
const color = ref(getRandomColor());
</script>

<template>
  <div class="glass"></div>
</template>

<style scoped lang="scss">
.glass {
  width: v-bind("size.width");
  height: v-bind("size.height");

  opacity: 0.3;

  background-color: v-bind("color");

  position: absolute;

  left: v-bind("pos.left");
  top: v-bind("pos.top");

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.9px);
  border: 1px solid rgba(255, 255, 255, 1);
}
</style>
