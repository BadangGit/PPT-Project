<script setup lang="ts">
import projectCoin from "@/components/buttons/projectCoin.vue";
import selectedMenu from "@/components/cards/selectedMenu.vue";

import { projectItems } from "@/assets/data/projectCardData";

import { projectContentType } from "@/assets/data/types/projectCard";

import { useStore } from "vuex";

const store = useStore();

let coinCount = 6;

let coinItems: Array<projectContentType> = projectItems.slice(0, coinCount);

function dispatchSelectedItem(num: number) {
  store.dispatch("selectItem", num);
}
</script>

<template>
  <div class="coinMenu">
    <projectCoin
      v-for="item in coinItems"
      :key="item.num"
      :projectItem="item"
      @click="dispatchSelectedItem(item.num)"
    ></projectCoin>
    <selectedMenu
      :selectedItem="coinItems[store.state.selectedItemNum]"
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
