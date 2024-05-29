<script setup>
import { ref } from "vue";
import { getRandomPos, getRandomSize } from "@/assets/function/getRandomData";

const pos = ref(getRandomPos(screen.width, screen.height));
const size = ref(getRandomSize(150, 250));
</script>

<template>
  <div class="glass"></div>
</template>

<style scoped lang="scss">
.glass {
  width: v-bind("size.width");
  height: v-bind("size.height");

  background-color: red;

  position: absolute;

  left: v-bind("pos.left");
  top: v-bind("pos.top");
}
</style>
