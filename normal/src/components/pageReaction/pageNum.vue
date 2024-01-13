<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  nowPageNum: {
    type: Number,
  },
});

let pageNumCounts: number = 3;
</script>

<template>
  <div class="pageNumGrid">
    <div
      :class="props.nowPageNum == pageNumCount ? 'highlight' : ''"
      v-for="pageNumCount in pageNumCounts"
      :key="pageNumCount"
    >
      {{ pageNumCount }}
    </div>
  </div>
</template>

<style>
.highlight {
  font-weight: 700;
}
</style>
