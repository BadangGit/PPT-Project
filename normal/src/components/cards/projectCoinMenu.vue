<script setup lang="ts">
import projectCoin from "@/components/buttons/projectCoin.vue";
import selectedMenu from "@/components/cards/selectedMenu.vue";

import { projectItems } from "@/assets/data/projectCardData";

import { projectContentType } from "@/assets/data/types/projectCard";

import { ref } from "vue";

let coinCount = 6;

let coinItems: Array<projectContentType> = projectItems.slice(0, coinCount);

let selectedItemNum: number = 0;
let rerender = ref(0);

function changeSelectCoinNum(selected: number) {
  selectedItemNum = selected;

  rerender.value += 1;
}
</script>

<template>
  <div class="coinMenu">
    <projectCoin
      v-for="item in coinItems"
      :key="item.num"
      :projectItem="item"
      @click="changeSelectCoinNum(item.num)"
    ></projectCoin>
    <selectedMenu
      :key="rerender"
      :selectedItem="coinItems[selectedItemNum]"
    ></selectedMenu>
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
