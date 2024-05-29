<script setup lang="ts">
import GlassShape from "@/components/effects/glassShape.vue";

let items = 150;
</script>

<template>
  <div class="stainedGrid">
    <GlassShape v-for="item in items" :key="item"></GlassShape>
  </div>
</template>

<style>
.stainedGrid {
  width: 100vw;
  height: 100vh;

  overflow: hidden;
}
</style>
