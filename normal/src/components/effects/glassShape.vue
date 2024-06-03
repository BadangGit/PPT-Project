<script setup>
import { ref } from "vue";
import {
  getRandomPos,
  getRandomSize,
  getRandomColor,
} from "@/assets/function/getRandomData";
import { getHexToHsl } from "@/assets/function/modType";

const pos = ref(getRandomPos(20, 20));
const size = ref(getRandomSize(150, 250));
const deg = ref(`${Math.floor(Math.random() * 360)}deg`);

const color = ref(getHexToHsl(getRandomColor()));
</script>

<template>
  <div class="glass"></div>
</template>

<style scoped lang="scss">
.glass {
  width: v-bind("size.width");
  height: v-bind("size.height");

  opacity: 1;

  background: v-bind("color");

  position: relative;

  left: v-bind("pos.left");
  top: v-bind("pos.top");

  transform: rotate(v-bind("deg"));

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid rgb(0, 0, 0);
}
</style>
