<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
</script>

<script lang="ts">
let simulationCardCategorys: Array<string> = ["Crash", "Acceleration"];
</script>

<template>
  <div>asdf</div>

  <ItemCard
    v-for="simulationCardCategory in simulationCardCategorys"
    :key="simulationCardCategory"
    :simulationCategory="simulationCardCategory"
  ></ItemCard>
</template>
