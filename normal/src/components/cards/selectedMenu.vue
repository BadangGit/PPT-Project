<script setup lang="ts">
import { PropType } from "vue";

import { projectContentType } from "@/assets/data/types/projectCard";

import baseButton from "@/components/buttons/baseButton.vue";
import itemsBoard from "@/components/cards/itemsBoard.vue";

const props = defineProps({
  selectedItem: {
    type: Object as PropType<projectContentType>,
    required: true,
  },
});
</script>

<template>
  <div class="selectedMenu">
    <itemsBoard :selectedItem="props.selectedItem"></itemsBoard>
    <router-link class="arrowButton" :to="props.selectedItem.src">
      <baseButton></baseButton>
    </router-link>
  </div>
</template>

<style scoped>
.selectedMenu {
  --animation-delay: 1.4s;
}

.selectedMenu {
  width: 250px;
  height: 250px;

  border-radius: 100px;

  background-color: white;

  display: grid;
  position: absolute;

  justify-self: center;
  align-self: center;

  animation-name: selectedMenu;
  animation-duration: 1s;
  animation-delay: var(--animation-delay);
  animation-fill-mode: forwards;

  opacity: 0;
}

.arrowButton {
  display: flex;

  width: 70px;
  height: 70px;

  justify-self: center;
  margin-top: 150px;
}

@keyframes selectedMenu {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
