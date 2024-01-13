<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
import PageNum from "@/components/pageReaction/pageNum.vue";
</script>

<script lang="ts">
export default {
  name: "mainPage",
};

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

let nowPageSimulCategories: Array<Categories> = [];
let nowPageNum: number = 1;

const markupCardCount: number = 6;
const markupCardNum: number = (nowPageNum - 1) * markupCardCount;

for (let i = markupCardNum; i < markupCardNum + markupCardCount; i++) {
  nowPageSimulCategories.push(simulCategories[i]);
}
</script>

<template>
  <div>asdf</div>

  <ItemCard
    v-for="simulCategory in nowPageSimulCategories"
    :key="simulCategory.name"
    :simul-category="simulCategory"
  >
  </ItemCard>

  <PageNum></PageNum>
</template>
