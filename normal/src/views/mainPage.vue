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
  { name: "Preparation1", cardNum: 0, subText: "Preparation..." },
  { name: "Preparation2", cardNum: 1, subText: "Preparation..." },
  { name: "Preparation3", cardNum: 2, subText: "Preparation..." },
  { name: "Preparation4", cardNum: 3, subText: "Preparation..." },
  { name: "Preparation5", cardNum: 4, subText: "Preparation..." },
  { name: "Preparation6", cardNum: 5, subText: "Preparation..." },
  { name: "Preparation7", cardNum: 6, subText: "Preparation..." },
  { name: "Preparation8", cardNum: 7, subText: "Preparation..." },
  { name: "Preparation9", cardNum: 8, subText: "Preparation..." },
  { name: "Preparation10", cardNum: 9, subText: "Preparation..." },
  { name: "Preparation11", cardNum: 10, subText: "Preparation..." },
  { name: "Preparation12", cardNum: 11, subText: "Preparation..." },
  { name: "Preparation13", cardNum: 12, subText: "Preparation..." },
  { name: "Preparation14", cardNum: 13, subText: "Preparation..." },
  { name: "Preparation15", cardNum: 14, subText: "Preparation..." },
  { name: "Preparation16", cardNum: 15, subText: "Preparation..." },
  { name: "Preparation17", cardNum: 16, subText: "Preparation..." },
  { name: "Preparation18", cardNum: 17, subText: "Preparation..." },
];

let nowPageSimulCategories: Array<Categories> = [
  { name: "Preparation1", cardNum: 0, subText: "Preparation..." },
  { name: "Preparation2", cardNum: 1, subText: "Preparation..." },
  { name: "Preparation3", cardNum: 2, subText: "Preparation..." },
  { name: "Preparation4", cardNum: 3, subText: "Preparation..." },
  { name: "Preparation5", cardNum: 4, subText: "Preparation..." },
  { name: "Preparation6", cardNum: 5, subText: "Preparation..." },
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
        class="itemCard"
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
/* 전체 페이지 디자인 */
.main {
  min-height: 90vh;
}

/* pageNum 디자인 */
.pageNumGrid {
  display: flex;
  margin: auto;
  min-width: 1200px;
  margin-top: 15px;
  justify-content: center;
}

.pageNum {
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  width: 40px;

  justify-content: space-between;
  text-align: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.highlight {
  font-weight: 700;
}

/* card 디자인 */
.cardGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  margin: auto;
}

.itemCard {
  opacity: 0.6;
  transition: all 0.5s;
}

.itemCard:hover {
  opacity: 1;
}

/* arrow 디자인 */
.arrowGrid {
  width: 100%;
  min-width: 1200px;
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
  margin: 0px 30px 0px 30px;
}

.left img {
  float: left;
  transform: rotate(180deg);
}

.right img {
  float: right;
}
</style>
