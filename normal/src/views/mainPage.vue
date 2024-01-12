<script lang="ts" setup>
import ItemCard from "@/components/cards/itemCard.vue";
</script>

<script lang="ts">
type categorys = {
  name: string;
};

let simulCategorys: Array<categorys> = [
  { name: "Crash" },
  { name: "Acceleration" },
];
</script>

<template>
  <div>asdf</div>

  <ItemCard
    v-for="simulCategory in simulCategorys"
    :key="simulCategory.name"
    :simul-category="simulCategory"
  ></ItemCard>
</template>
