<script setup lang="ts">
import { projectCardList } from "@/assets/data/projectCardData";
import itemCoin from "@/components/cards/itemCoin.vue";

let items = projectCardList;
</script>

<template>
  <div class="main">
    <div class="coinMenuGrid">
      <itemCoin
        class="coinGrid"
        v-for="item in items"
        :key="item.num"
        :projectItem="item"
      ></itemCoin>
    </div>
  </div>
</template>

<style scoped>
.main {
  --coin-size: 170px;
}

.main {
  background-color: var(--main-background-color);
  width: 100vw;
  height: 100vh;
}

.coinMenuGrid {
  width: 1000px;
  height: 800px;

  display: flex;
  position: relative;

  margin: auto;
}

.coinGrid {
  width: var(--coin-size);
  height: var(--coin-size);

  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
