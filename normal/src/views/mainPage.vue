<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
import { useStore } from "vuex";
import { ref, watch } from "vue";

const store = useStore();

type Categories = {
  name: string;
  cardNum: number;
  subText: string;
};

const simulCategories: Array<Categories> = [
  { name: "Preparation 1", cardNum: 0, subText: "Preparation..." },
  { name: "Preparation 2", cardNum: 1, subText: "Preparation..." },
  { name: "Preparation 3", cardNum: 2, subText: "Preparation..." },
  { name: "Preparation 4", cardNum: 3, subText: "Preparation..." },
  { name: "Preparation 5", cardNum: 4, subText: "Preparation..." },
  { name: "Preparation 6", cardNum: 5, subText: "Preparation..." },
  { name: "Preparation 7", cardNum: 6, subText: "Preparation..." },
  { name: "Preparation 8", cardNum: 7, subText: "Preparation..." },
  { name: "Preparation 9", cardNum: 8, subText: "Preparation..." },
  { name: "Preparation 10", cardNum: 9, subText: "Preparation..." },
  { name: "Preparation 11", cardNum: 10, subText: "Preparation..." },
  { name: "Preparation 12", cardNum: 11, subText: "Preparation..." },
  { name: "Preparation 13", cardNum: 12, subText: "Preparation..." },
  { name: "Preparation 14", cardNum: 13, subText: "Preparation..." },
  { name: "Preparation 15", cardNum: 14, subText: "Preparation..." },
  { name: "Preparation 16", cardNum: 15, subText: "Preparation..." },
  { name: "Preparation 17", cardNum: 16, subText: "Preparation..." },
  { name: "Preparation 18", cardNum: 17, subText: "Preparation..." },
];

let nowPageSimulCategories: Array<Categories> = [
  { name: "Preparation 1", cardNum: 0, subText: "Preparation..." },
  { name: "Preparation 2", cardNum: 1, subText: "Preparation..." },
  { name: "Preparation 3", cardNum: 2, subText: "Preparation..." },
  { name: "Preparation 4", cardNum: 3, subText: "Preparation..." },
  { name: "Preparation 5", cardNum: 4, subText: "Preparation..." },
  { name: "Preparation 6", cardNum: 5, subText: "Preparation..." },
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

function arrowShiftPage(max: number, plusOrMinus: number) {
  if (nowPageNum.value != max) {
    shiftPage(nowPageNum.value + plusOrMinus);
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
      <a @click="arrowShiftPage(1, -1)" class="left"
        ><img src="../assets/arrow-icon.png"
      /></a>
      <a @click="arrowShiftPage(3, 1)" class="right"
        ><img src="../assets/arrow-icon.png"
      /></a>
    </div>

    <div class="cardGrid">
      <ItemCard
        v-for="simulCategory in nowPageSimulCategories"
        :key="simulCategory.name"
        :simul-category="simulCategory"
      >
      </ItemCard>
    </div>

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
  justify-content: space-between;
  margin: auto;
  max-width: 122px;
}

.pageNum {
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.highlight {
  font-weight: 700;
}

.cardGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1400px;
  margin: auto;
}

.arrowGrid {
  width: 100%;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(0%, -35%);
}

.arrowGrid a {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.arrowGrid img {
  width: 28px;
  margin: 0px 60px 0px 60px;
}

.left img {
  float: left;
  transform: rotate(180deg);
}

.right img {
  float: right;
}
</style>
