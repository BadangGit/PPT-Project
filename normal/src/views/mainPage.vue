<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
import DarkModeButton from "@/components/buttons/darkModeButton.vue";

import { cardItemCategories } from "@/assets/data/types/cardItem";
import { mainPageCardContents } from "@/assets/data/cardItemData";

import { useStore } from "vuex";
import { ref, watch } from "vue";

const store = useStore();

let nowPageSimulCategories: Array<cardItemCategories> = [];
let pageNumCounts: number = 3;
let nowPageDarkMode = store.state.IsDarkMode;
let nowPageNum = ref(1);
let renderCount = ref(0);

for (let i = 0; i < 6; i++) {
  nowPageSimulCategories.push(mainPageCardContents[i]);
}

async function cardAnimation() {
  const cardItem = document.querySelector("#cardItemGrid") as HTMLElement;
  let keyframes = [
    { transform: "translateX(20px)", opacity: 0.2 },
    { transform: "translateX(0px)", opacity: 1 },
  ];
  const options = {
    duration: 600,
  };

  cardItem.animate(keyframes, options);
}

function shiftPage(where: number) {
  cardAnimation();
  store.dispatch("shiftPage", where);
  nowPageNum.value = store.state.nowPageNum;
  nowPageSimulCategories = [];

  const markupCardCount: number = 6;
  const markupCardNum: number = (nowPageNum.value - 1) * markupCardCount;

  for (let i = markupCardNum; i < markupCardNum + markupCardCount; i++) {
    nowPageSimulCategories.push(mainPageCardContents[i]);
  }
}

function shiftDarkMode() {
  if (store.state.IsDarkMode == true) {
    store.dispatch("shiftDarkMode", false);
  } else {
    store.dispatch("shiftDarkMode", true);
  }
  nowPageDarkMode = store.state.IsDarkMode;
  renderCount.value += 1;
}

function arrowShiftPage(max: number, plusOrMinus: number) {
  if (nowPageNum.value != max) {
    shiftPage(nowPageNum.value + plusOrMinus);
  }
}

watch(nowPageNum, () => {
  async function pageAnimation() {
    renderCount.value += 1;
  }
});
</script>

<script lang="ts">
export default {
  name: "mainPage",
};
</script>

<template>
  <div class="main" :class="`darkMode${nowPageDarkMode}`" :key="renderCount">
    <div class="subButtonsGrid">
      <DarkModeButton
        class="darkModeButton"
        @click="shiftDarkMode"
      ></DarkModeButton>
    </div>

    <div class="arrowGrid">
      <a @click="arrowShiftPage(1, -1)" class="left">
        <img src="../assets/arrow-icon.png" />
      </a>
      <a @click="arrowShiftPage(3, 1)" class="right">
        <img src="../assets/arrow-icon.png" />
      </a>
    </div>

    <div class="mainItemGrid">
      <div class="cardGrid" id="cardItemGrid">
        <ItemCard
          class="itemCard"
          v-for="simulCategory in nowPageSimulCategories"
          :key="simulCategory.cardNum"
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
  </div>
</template>

<style>
/* Page design */
.main {
  height: 100vh;
  background-color: #f3f3f3;
}

.mainItemGrid {
  height: 90vh;
}

/* pageNum design */
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

/* card design */
.mainItemGrid {
  text-align: center;
}

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

/* arrow design */
.arrowGrid {
  width: 100vw;
  min-width: 1200px;
  display: inline-block;
  position: absolute;
  top: calc(50% - 26.76px);
  transform: translate(0%, -35%);
}

.arrowGrid a {
  cursor: pointer;
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

/* darkMode design */
.darkModetrue {
  background-color: #1d1d1d;
  color: white;

  .arrowGrid img {
    filter: invert(100%);
  }

  .itemCard {
    opacity: 1;
  }

  .e-card {
    box-shadow: 0px 8px 28px -9px rgb(255, 255, 255);
  }

  .wave {
    background: linear-gradient(744deg, #c476fc, #9585ff 60%, #45ebf7);
  }
}

/* subButtons design */
.subButtonsGrid {
  width: 100vw;
  height: 10vh;
  display: flex;

  align-items: center;
  justify-content: flex-end;
}

.darkModeButton {
  margin-right: 25px;
}
</style>
