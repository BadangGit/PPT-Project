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
  {
    name: "Throwing a Ball Up",
    cardNum: 0,
    subText: "Explore how a ball moves when thrown into the air.",
  },
  {
    name: "Spinning a Yo-Yo",
    cardNum: 1,
    subText: "Understand how a yo-yo moves in a circular motion.",
  },
  {
    name: "Swinging Pendulum",
    cardNum: 2,
    subText: "Observe the back-and-forth motion of a swinging pendulum.",
  },
  {
    name: "Pushing a Car",
    cardNum: 3,
    subText: "Apply force to make a car move and stop.",
  },
  {
    name: "Blowing Bubbles",
    cardNum: 4,
    subText: "Study the flow of liquids, like soap bubbles in the air.",
  },
  {
    name: "Feeling Hot or Cold",
    cardNum: 5,
    subText: "Explore the transfer of heat and temperature changes.",
  },
  {
    name: "Looking in a Mirror",
    cardNum: 6,
    subText: "Understand how light reflects off surfaces.",
  },
  {
    name: "Turning on a Light Bulb",
    cardNum: 7,
    subText: "Explain the flow of electricity in a simple circuit.",
  },
  {
    name: "Playing with Magnets",
    cardNum: 8,
    subText: "Investigate the attraction and repulsion of magnets.",
  },
  {
    name: "Listening to Music",
    cardNum: 9,
    subText: "Explore how sound waves travel through the air.",
  },
  {
    name: "Running on a Treadmill",
    cardNum: 10,
    subText: "Understand motion and energy transfer.",
  },
  {
    name: "Bouncing a Ball",
    cardNum: 11,
    subText: "Explore elasticity and the way balls behave when they bounce.",
  },
  {
    name: "Glow-in-the-Dark Stars",
    cardNum: 12,
    subText: "Learn about phosphorescence and light emission.",
  },
  {
    name: "Seeing a Rainbow",
    cardNum: 13,
    subText:
      "Understand how light is refracted and dispersed in water droplets.",
  },
  {
    name: "Using a Flashlight",
    cardNum: 14,
    subText: "Explore how light is produced and travels.",
  },
  {
    name: "Using a Microwave",
    cardNum: 15,
    subText: "Study electromagnetic waves and their heating effects.",
  },
  {
    name: "Playing with Playdough",
    cardNum: 16,
    subText: "Understand the deformation and elasticity of materials.",
  },
  {
    name: "Seeing the Moon",
    cardNum: 17,
    subText: "Explore gravitational forces and celestial bodies.",
  },
];

let nowPageSimulCategories: Array<Categories> = [
  {
    name: "Throwing a Ball Up",
    cardNum: 0,
    subText: "Explore how a ball moves when thrown into the air.",
  },
  {
    name: "Spinning a Yo-Yo",
    cardNum: 1,
    subText: "Understand how a yo-yo moves in a circular motion.",
  },
  {
    name: "Swinging Pendulum",
    cardNum: 2,
    subText: "Observe the back-and-forth motion of a swinging pendulum.",
  },
  {
    name: "Pushing a Car",
    cardNum: 3,
    subText: "Apply force to make a car move and stop.",
  },
  {
    name: "Blowing Bubbles",
    cardNum: 4,
    subText: "Study the flow of liquids, like soap bubbles in the air.",
  },
  {
    name: "Feeling Hot or Cold",
    cardNum: 5,
    subText: "Explore the transfer of heat and temperature changes.",
  },
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
