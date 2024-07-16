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
</script>

<template>
  <div class="boardGrid">
    <div class="board" v-for="item in items" :key="item.num">
      {{ item.title }}
    </div>

    {{ props.selectedItem.title }}
  </div>
</template>

<style></style>
