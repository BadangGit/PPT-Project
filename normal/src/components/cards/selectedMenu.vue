<script setup lang="ts">
import { PropType } from "vue";

import { projectContentType } from "@/assets/data/types/projectCard";

const props = defineProps({
  selectedItem: {
    type: Object as PropType<projectContentType>,
    required: true,
  },
});
</script>

<template>
  <div class="selectedMenu">
    {{ props.selectedItem.title }}
  </div>
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

  animation-name: selectedMenu;
  animation-duration: 1s;
  animation-delay: var(--animation-delay);
  animation-fill-mode: forwards;

  opacity: 0;
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
