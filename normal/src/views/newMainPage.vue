<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import projectCoin from "@/components/cards/projectCoin.vue";

const store = useStore();
const coins = computed(() => store.getters.getCoins);
</script>

<template>
  <div class="main-page">
    <div class="coins-container">
      <projectCoin
        v-for="(coin, index) in coins"
        :key="index"
        :title="coin.title"
        :subtitle="coin.subtitle"
        :titleIcon="coin.titleIcon"
        :cursorIcon="coin.cursorIcon"
        :index="index"
      />
    </div>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
  position: relative;
}

.coins-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  position: relative;
}
</style>
