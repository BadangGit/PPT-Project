<script lang="ts">
import { defineComponent } from "vue";

import itemCard from "./components/cards/itemCard.vue";

export default defineComponent({
  components: { itemCard },
});
</script>

<template>
  <nav class="mainNav">
    <router-link to="/">physics-normal</router-link>
  </nav>

  <itemCard></itemCard>
  <router-view></router-view>
</template>

<style>
.mainNav {
  width: 100%;
  height: 77.5px;

  background-color: antiquewhite;
}
</style>
