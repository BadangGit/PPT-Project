<script lang="ts" setup>
import { useStore } from "vuex";
import { ref, watch } from "vue";

let pageNumCounts: number = 3;
let nowPageNum: number = ref(1);
let renderCount = ref(0);

const store = useStore();

function shiftPage(value) {
  store.dispatch("shiftPage", value);
  nowPageNum.value = store.state.nowPageNum;
}

watch(nowPageNum, () => {
  renderCount.value += 1;
});
</script>

<script lang="ts"></script>

<template>
  <div class="pageNumGrid" :key="renderCount">
    <div
      :class="nowPageNum == pageNumCount ? 'highlight' : ''"
      class="pageNum"
      v-for="pageNumCount in pageNumCounts"
      :key="pageNumCount"
      @click="shiftPage(pageNumCount)"
    >
      {{ pageNumCount }}
    </div>
  </div>
</template>

<style>
.pageNumGrid {
  display: flex;
}

.pageNum {
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 32px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.highlight {
  font-weight: 700;
}
</style>
