<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
</script>

<script lang="ts">
type Categories = {
  name: string;
  cardNum: number;
};

const simulCategories: Array<Categories> = [
  { name: "Throwing a Ball Up", cardNum: 1 },
  { name: "Spinning a Yo-Yo", cardNum: 2 },
  { name: "Swinging Pendulum", cardNum: 3 },
  { name: "Pushing a Car", cardNum: 4 },
  { name: "Blowing Bubbles", cardNum: 5 },
  { name: "Feeling Hot or Cold", cardNum: 6 },
  { name: "Looking in a Mirror", cardNum: 7 },
  { name: "Turning on a Light Bulb", cardNum: 8 },
  { name: "Playing with Magnets", cardNum: 9 },
  { name: "Listening to Music", cardNum: 10 },
  { name: "Running on a Treadmill", cardNum: 11 },
  { name: "Bouncing a Ball", cardNum: 12 },
  { name: "Glow-in-the-Dark Stars", cardNum: 13 },
  { name: "Seeing a Rainbow", cardNum: 14 },
  { name: "Using a Flashlight", cardNum: 15 },
  { name: "Using a Microwave", cardNum: 16 },
  { name: "Playing with Playdough", cardNum: 17 },
  { name: "Seeing the Moon", cardNum: 18 },
];
</script>

<template>
  <div>asdf</div>

  <ItemCard
    v-for="simulCategory in simulCategories"
    :key="simulCategory.name"
    :simul-category="simulCategory"
  ></ItemCard>
</template>
