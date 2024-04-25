<script setup lang="ts">
import StarCard from "@/components/cards/starCard.vue";
import { useStore } from "vuex";

const store = useStore();

let nowBackgroundColor = store.state.background_color;

let items = 48;
let backgroundColorStyle = `${nowBackgroundColor[0]}, ${nowBackgroundColor[1]} 10%, ${nowBackgroundColor[0]} 20%`;
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
