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
  { name: "Stars", cardNum: 0, subText: "When falling down" },
  { name: "Preparing", cardNum: 1, subText: "wait for update" },
  { name: "Preparing", cardNum: 2, subText: "wait for update" },
  { name: "Preparing", cardNum: 3, subText: "wait for update" },
  { name: "Preparing", cardNum: 4, subText: "wait for update" },
  { name: "Preparing", cardNum: 5, subText: "wait for update" },
  { name: "Preparing", cardNum: 6, subText: "wait for update" },
  { name: "Preparing", cardNum: 7, subText: "wait for update" },
  { name: "Preparing", cardNum: 8, subText: "wait for update" },
  { name: "Preparing", cardNum: 9, subText: "wait for update" },
  { name: "Preparing", cardNum: 10, subText: "wait for update" },
  { name: "Preparing", cardNum: 11, subText: "wait for update" },
  { name: "Preparing", cardNum: 12, subText: "wait for update" },
  { name: "Preparing", cardNum: 13, subText: "wait for update" },
  { name: "Preparing", cardNum: 14, subText: "wait for update" },
  { name: "Preparing", cardNum: 15, subText: "wait for update" },
  { name: "Preparing", cardNum: 16, subText: "wait for update" },
  { name: "Preparing", cardNum: 17, subText: "wait for update" },
];

let nowPageSimulCategories: Array<Categories> = [];
let pageNumCounts: number = 3;
let nowPageNum = ref(1);
let renderCount = ref(0);

for (let i = 0; i < 6; i++) {
  nowPageSimulCategories.push(simulCategories[i]);
}

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
        :class="`itemCard num${simulCategory.cardNum}`"
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
  transition: opacity 0.6s;
  transition: bottom 0.3s, left 0.3s;
  bottom: 0px;
  left: 0px;
}

.itemCard:hover {
  opacity: 1;
  bottom: 3px;
  left: 3px;
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
