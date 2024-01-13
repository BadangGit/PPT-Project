<script lang="ts" setup>
import { useStore } from "vuex";

let pageNumCounts: number = 3;

const store = useStore();

function shiftPage(value) {
  store.dispatch("shiftPage", value);
}
</script>

<script lang="ts"></script>

<template>
  <div class="pageNumGrid">
    <div
      :class="nowPageNum == pageNumCount ? 'highlight' : ''"
      v-for="pageNumCount in pageNumCounts"
      :key="pageNumCount"
      @click="shiftPage(pageNumCount)"
    >
      {{ pageNumCount }}
    </div>

    <div>현재 페이지 {{ this.$store.state.nowPageNum }}</div>
  </div>
</template>

<style>
.pageNumGrid {
  display: flex;
}

.highlight {
  font-weight: 700;
}
</style>
