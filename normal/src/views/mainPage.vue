<script lang="ts" setup>
import ProjectCard from "@/components/cards/projectCard.vue";
import DarkModeButton from "@/components/buttons/darkModeButton.vue";

import { projectCardContentsType } from "@/assets/data/types/projectCard";
import { projectCardList } from "@/assets/data/projectCardData";

import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const MARKUP_CARD_COUNT: number = 6;
const PAGENUM_COUNT: number = 3;

let activeProjectCardLists: Array<projectCardContentsType> = [];
let activePageDarkMode = store.state.IsDarkMode;
let activePageNum = ref(1);
let renderCount = ref(0);

for (let i = 0; i < 6; i++) {
  activeProjectCardLists.push(projectCardList[i]);
}

async function cardAnimation() {
  let cardItem = document.querySelector("#cardItemGrid") as HTMLElement;
  let keyframes = [
    { transform: "translateX(20px)", opacity: 0.2 },
    { transform: "translateX(0px)", opacity: 1 },
  ];
  const OPTIONS = {
    duration: 600,
  };

  cardItem.animate(keyframes, OPTIONS);
}

function shiftPage(where: number) {
  cardAnimation();
  store.dispatch("shiftPage", where);
  activePageNum.value = store.state.activePageNum;
  activeProjectCardLists = [];

  const MARKUP_CARD_NUM: number = (activePageNum.value - 1) * MARKUP_CARD_COUNT;

  for (let i = MARKUP_CARD_NUM; i < MARKUP_CARD_NUM + MARKUP_CARD_COUNT; i++) {
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
  renderCount.value += 1;
}

function arrowShiftPage(maxmin: number, plusOrMinus: number) {
  if (activePageNum.value != maxmin) {
    shiftPage(activePageNum.value + plusOrMinus);
  }
}
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
        <img src="http://localhost:8080/icons/buttons/arrow-button.png" />
      </a>
      <a @click="arrowShiftPage(3, 1)" class="right">
        <img src="http://localhost:8080/icons/buttons/arrow-button.png" />
      </a>
    </div>

    <div class="mainPageGrid">
      <div class="projectCardGrid" id="cardItemGrid">
        <ProjectCard
          v-for="activeProjectCardList in activeProjectCardLists"
          :key="activeProjectCardList.num"
          :active-project-card-list="activeProjectCardList"
          :style="{ position: 'relative' }"
        >
        </ProjectCard>
      </div>

      <div class="pageNumGrid">
        <div
          :class="activePageNum == pageNumCount ? 'highlight' : ''"
          class="pageNum"
          v-for="pageNumCount in PAGENUM_COUNT"
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
  background-color: var(--main-background-color);
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
  background-color: var(--darkMode-background-color);
  color: white;

  .arrowButtonGrid img {
    filter: invert(100%);
  }

  .e-card {
    box-shadow: 0px 8px 28px -9px rgb(255, 255, 255);
  }

  .wave {
    background: linear-gradient(744deg, #c476fc, #9585ff 60%, #45ebf7);
  }

  .progressGrid {
    background-color: var(--darkMode-background-color);
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
