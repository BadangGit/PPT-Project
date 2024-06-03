<script setup lang="ts">
import GlassShape from "@/components/effects/glassShape.vue";

let items = 1;
let glass = 1;
</script>

<template>
  <div class="stainGrid">
    <div v-for="item in items" :key="item" class="stained">
      <GlassShape v-for="item in glass" :key="item"></GlassShape>
    </div>
  </div>
</template>

<style scoped>
.stainGrid {
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(5, 20%);
}
</style>
