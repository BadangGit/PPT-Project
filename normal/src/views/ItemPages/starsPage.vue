<script setup lang="ts">
import StarCard from "@/components/cards/starCard.vue";
import { gradientColor } from "@/assets/data/types/starCard";

function getRandomColor() {
  let randomColor = "";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.round(Math.random() * 0xf).toString(16);
  }

  return "#" + randomColor;
}

let items: number = 12;
let backgroundColorStyle = ["#f1c5e6", "#becde7"];
let randomColor: Array<gradientColor> = [];

for (let i = 0; i <= items; i++) {
  randomColor.push([getRandomColor(), getRandomColor()]);
}
</script>

<template>
  <div
    class="starPageGrid"
    :style="{
      backgroundImage: `repeating-linear-gradient(${backgroundColorStyle[0]}, ${backgroundColorStyle[1]} 600px, ${backgroundColorStyle[0]} 1200px)`,
    }"
  >
    <div class="starCardGrid">
      <StarCard
        v-for="item in items"
        :key="item"
        :randomColor="randomColor[item]"
      ></StarCard>
    </div>
  </div>
</template>

<style>
.starPageGrid {
  width: 100%;
  height: auto;
  margin: auto;
}

.starCardGrid {
  width: 1400px;
  height: 100%;

  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
