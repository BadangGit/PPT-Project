<script setup lang="ts">
import projectCoin from "@/components/buttons/projectCoin.vue";
import { projectItems } from "@/assets/data/projectCardData";
import { projectCardContentsType } from "@/assets/data/types/projectCard";

const CoinCount = 6;

let coinItems: Array<projectCardContentsType> = projectItems.slice(
  0,
  CoinCount
);
</script>

<template>
  <div class="coinMenu">
    <projectCoin
      v-for="item in coinItems"
      :key="item.num"
      :projectItem="item"
    ></projectCoin>
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
