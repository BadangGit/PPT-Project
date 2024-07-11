<script setup lang="ts">
import { PropType } from "vue";

import { projectCardContentsType } from "@/assets/data/types/projectCard";

const props = defineProps({
  selectedItem: {
    type: Object as PropType<projectCardContentsType>,
    required: true,
  },
});
</script>

<template>
  <div class="selectedMenu">{{ props.selectedItem.title }}</div>
</template>

<style scoped>
.selectedMenu {
  --animation-delay: 1.7s;
}

.selectedMenu {
  width: 250px;
  height: 250px;

  border-radius: 100px;

  background-color: white;

  position: absolute;

  justify-self: center;
  align-self: center;
}
</style>
