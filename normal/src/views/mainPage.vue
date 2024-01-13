<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
import { useStore } from "vuex";
import { ref, watch } from "vue";

const store = useStore();

type Categories = {
  name: string;
  cardNum: number;
};

const simulCategories: Array<Categories> = [
  { name: "Throwing a Ball Up", cardNum: 0 },
  { name: "Spinning a Yo-Yo", cardNum: 1 },
  { name: "Swinging Pendulum", cardNum: 2 },
  { name: "Pushing a Car", cardNum: 3 },
  { name: "Blowing Bubbles", cardNum: 4 },
  { name: "Feeling Hot or Cold", cardNum: 5 },
  { name: "Looking in a Mirror", cardNum: 6 },
  { name: "Turning on a Light Bulb", cardNum: 7 },
  { name: "Playing with Magnets", cardNum: 8 },
  { name: "Listening to Music", cardNum: 9 },
  { name: "Running on a Treadmill", cardNum: 10 },
  { name: "Bouncing a Ball", cardNum: 11 },
  { name: "Glow-in-the-Dark Stars", cardNum: 12 },
  { name: "Seeing a Rainbow", cardNum: 13 },
  { name: "Using a Flashlight", cardNum: 14 },
  { name: "Using a Microwave", cardNum: 15 },
  { name: "Playing with Playdough", cardNum: 16 },
  { name: "Seeing the Moon", cardNum: 17 },
];

let nowPageSimulCategories: Array<Categories> = [
  { name: "Throwing a Ball Up", cardNum: 0 },
  { name: "Spinning a Yo-Yo", cardNum: 1 },
  { name: "Swinging Pendulum", cardNum: 2 },
  { name: "Pushing a Car", cardNum: 3 },
  { name: "Blowing Bubbles", cardNum: 4 },
  { name: "Feeling Hot or Cold", cardNum: 5 },
];

let pageNumCounts: number = 3;
let nowPageNum = ref(1);
let renderCount = ref(0);

function shiftPage(value: number) {
  store.dispatch("shiftPage", value);
  nowPageNum.value = store.state.nowPageNum;
  nowPageSimulCategories = [];

  const markupCardCount: number = 6;
  const markupCardNum: number = (nowPageNum.value - 1) * markupCardCount;

  for (let i = markupCardNum; i < markupCardNum + markupCardCount; i++) {
    nowPageSimulCategories.push(simulCategories[i]);
  }
}

watch(nowPageNum, () => {
  renderCount.value += 1;
});
</script>

<script lang="ts">
export default {
  name: "mainPage",
};
</script>

<template>
  <div class="main" :key="renderCount">
    <div class="arrowGrid">
      <a class="left"><img src="../assets/arrow-icon.png" /></a>
      <a class="right"><img src="../assets/arrow-icon.png" /></a>
    </div>
    <ItemCard
      v-for="simulCategory in nowPageSimulCategories"
      :key="simulCategory.name"
      :simul-category="simulCategory"
    >
    </ItemCard>

    <div class="pageNumGrid">
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
  </div>
</template>

<style>
.main {
  min-height: 90vh;
}

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

.arrowGrid {
  width: 100%;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(0%, -35%);
}

.arrowGrid img {
  width: 80px;
}

.left img {
  float: left;
  transform: rotate(180deg);
}

.right img {
  float: right;
}
</style>
