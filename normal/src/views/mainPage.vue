<script lang="ts" setup>
import projectCard from "@/components/cards/projectCard.vue";
import DarkModeButton from "@/components/buttons/darkModeButton.vue";

import { projectCardContentsType } from "@/assets/data/types/projectCard";
import { projectCardList } from "@/assets/data/projectCardData";

import { useStore } from "vuex";
import { ref, watch } from "vue";
import { ref } from "vue";

const store = useStore();

const markupCardCount: number = 6;
const pageNumCounts: number = 3;

let activeProjectCardLists: Array<projectCardContentsType> = [];
let activePageDarkMode = store.state.IsDarkMode;
let activePageNum = ref(1);
let renderCount = ref(0);

for (let i = 0; i < 6; i++) {
  activeProjectCardLists.push(projectCardList[i]);
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
  activePageNum.value = store.state.activePageNum;
  activeProjectCardLists = [];

  const markupCardNum: number = (activePageNum.value - 1) * markupCardCount;
  // 현재 페이지에 띄울 카드의 번호

  for (let i = markupCardNum; i < markupCardNum + markupCardCount; i++) {
    activeProjectCardLists.push(projectCardList[i]);
  }
}

function shiftDarkMode() {
  if (store.state.IsDarkMode) {
    store.dispatch("shiftDarkMode", false);
  } else {
    store.dispatch("shiftDarkMode", true);
  }
  activePageDarkMode = store.state.IsDarkMode;
  renderCount.value += 1; // 페이지 재렌더링
}

function arrowShiftPage(maxmin: number, plusOrMinus: number) {
  if (activePageNum.value != maxmin) {
    // 첫 or 마지막 페이지가 아닌경우
    shiftPage(activePageNum.value + plusOrMinus);
    // 현재 페이지 바꾸기
  }
}

watch(activePageNum, () => {
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
  <div class="main" :class="`darkMode${activePageDarkMode}`" :key="renderCount">
    <div class="subButtonsGrid">
      <DarkModeButton
        class="darkModeButton"
        @click="shiftDarkMode"
      ></DarkModeButton>
    </div>

    <div class="arrowButtonGrid">
      <a @click="arrowShiftPage(1, -1)" class="left">
        <img src="../assets/arrow-icon.png" />
      </a>
      <a @click="arrowShiftPage(3, 1)" class="right">
        <img src="../assets/arrow-icon.png" />
      </a>
    </div>

    <div class="mainPageGrid">
      <div class="projectCardGrid" id="cardItemGrid">
        <projectCard
          class="projectCard"
          v-for="activeProjectCardList in activeProjectCardLists"
          :key="activeProjectCardList.num"
          :active-project-card-list="activeProjectCardList"
        >
        </projectCard>
      </div>

      <div class="pageNumGrid">
        <div
          :class="activePageNum == pageNumCount ? 'highlight' : ''"
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

.mainPageGrid {
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
.mainPageGrid {
  text-align: center;
}

.projectCardGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  margin: auto;
}

.projectCard {
  opacity: 0.6;
  transition: opacity 0.6s;
  transition: bottom 0.3s, left 0.3s;
  bottom: 0px;
  left: 0px;
}

.projectCard:hover {
  opacity: 1;
  bottom: 3px;
  left: 3px;
}

/* arrow design */
.arrowButtonGrid {
  width: 100vw;
  min-width: 1200px;
  display: inline-block;
  position: absolute;
  top: calc(50% - 26.76px);
  transform: translate(0%, -35%);
}

.arrowButtonGrid a {
  cursor: pointer;
}

.arrowButtonGrid img {
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

  .arrowButtonGrid img {
    filter: invert(100%);
  }

  .projectCard {
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
@/assets/data/mainPageData@/assets/data/types/projectCardList@/assets/data/types/projectCard@/assets/data/projectCardData
