<script setup lang="ts">
import StarCard from "@/components/cards/starCard.vue";

let items = 12;
let backgroundColorStyle = `#f1c5e6, #becde7 600px, #f1c5e6 1200px`;
</script>

<template>
  <div
    class="starPageGrid"
    :style="{
      backgroundImage: `repeating-linear-gradient(${backgroundColorStyle})`,
    }"
  >
    <div class="starCardGrid">
      <StarCard v-for="item in items" :key="item"></StarCard>
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
