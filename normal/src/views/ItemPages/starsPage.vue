<script setup lang="ts">
import StarCard from "@/components/cards/starCard.vue";

const items = 12;
</script>

<template>
  <div class="background">
    <div class="starPageGrid">
      <div class="starCardGrid">
        <StarCard v-for="item in items" :key="item"> </StarCard>
      </div>
    </div>
  </div>
</template>

<style>
.background {
  background-color: var(--main-background-color);
}

.starPageGrid {
  width: 1400px;
  height: auto;
  margin: auto;

  background-image: repeating-linear-gradient(
    #f1c5e6 0%,
    #83a4da 50%,
    #f1c5e6 100%
  );
}

.starCardGrid {
  width: 1200px;
  height: 100%;

  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
