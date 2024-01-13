<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
</script>

<script lang="ts">
type Categories = {
  name: string;
  src?: string;
};

const simulCategories: Array<Categories> = [
  { name: "Throwing a Ball Up" },
  { name: "Spinning a Yo-Yo" },
  { name: "Swinging Pendulum" },
  { name: "Pushing a Car" },
  { name: "Blowing Bubbles" },
  { name: "Feeling Hot or Cold" },
  { name: "Looking in a Mirror" },
  { name: "Turning on a Light Bulb" },
  { name: "Playing with Magnets" },
  { name: "Listening to Music" },
  { name: "Running on a Treadmill" },
  { name: "Bouncing a Ball" },
  { name: "Glow-in-the-Dark Stars" },
  { name: "Seeing a Rainbow" },
  { name: "Using a Flashlight" },
  { name: "Using a Microwave" },
  { name: "Playing with Playdough" },
  { name: "Seeing the Moon" },
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
