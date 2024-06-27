<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

interface CoinProps {
  title: string;
  subtitle: string;
  titleIcon: string;
  cursorIcon: string;
  index: number;
}

const props = defineProps<CoinProps>();
const hover = ref(false);
const positionTransform = ref("translate(0, 0)");

onMounted(() => {
  const angle = (props.index * 360) / 8 - 90;
  const radius = 150;
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);
  positionTransform.value = `translate(${x}px, ${y}px)`;
});
</script>

<template>
  <div
    class="coin"
    :style="{
      cursor: `url(${props.cursorIcon}), auto`,
      transform: positionTransform,
    }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div :class="['coin-inner', { 'coin-hover': hover }]">
      <img :src="props.titleIcon" alt="Coin Image" />
      <div class="coin-text">
        <h3>{{ props.title }}</h3>
        <p>{{ props.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coin {
  width: 100px;
  height: 100px;
  position: absolute;
  transition: transform 1s ease;
}

.coin-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.coin-hover {
  transform: translateZ(10px);
}

.coin-text {
  text-align: center;
  margin-top: 10px;
}

.coin-text h3,
.coin-text p {
  margin: 0;
}
</style>
