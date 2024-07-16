<script setup lang="ts">
import { PropType } from "vue";

import { projectContentType } from "@/assets/data/types/projectCard";

import { projectItems } from "@/assets/data/projectCardData";

const props = defineProps({
  selectedItem: {
    type: Object as PropType<projectContentType>,
    required: true,
  },
});

const items = projectItems.slice(0, 6);

console.log(props);
</script>

<template>
  <div class="boardGrid">
    <div class="board" v-for="item in items" :key="item.num">
      {{ item.title }}
    </div>
  </div>
</template>

<style>
.boardGrid {
  height: 150px;
  width: 200px;
}

.board {
  height: 25px;
  width: 200px;

  background-color: red;

  position: absolute;
}

.boardGrid:hover .board {
}
</style>
