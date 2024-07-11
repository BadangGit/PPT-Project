<script setup lang="ts">
import projectCoin from "@/components/buttons/projectCoin.vue";
import selectedCoin from "@/components/cards/selectedCoin.vue";

import { projectItems } from "@/assets/data/projectCardData";

import { projectCardContentsType } from "@/assets/data/types/projectCard";

let coinCount = 6;

let coinItems: Array<projectCardContentsType> = projectItems.slice(
  0,
  coinCount
);
</script>

<template>
  <div class="coinMenu">
    <projectCoin v-for="item in coinItems" :key="item.num" :projectItem="item">
    </projectCoin>
    <selectedCoin></selectedCoin>
  </div>
</template>

<style scoped>
.coinMenu {
  --coin-size: 180px;
}

.coinMenu {
  width: 800px;
  height: 800px;

  position: absolute;
  display: grid;

  justify-self: center;
  align-self: center;
}
</style>
