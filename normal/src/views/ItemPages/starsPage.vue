<script setup lang="ts">
import StarCard from "@/components/cards/starCard.vue";
</script>

<template>
  <div class="starPageGrid">
    <div class="cards">
      <StarCard></StarCard>
    </div>
  </div>
</template>

<style>
.starPageGrid {
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(to top, #ce9dc1 0%, #7696c9 100%);
}
</style>
