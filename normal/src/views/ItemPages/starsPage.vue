<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  for (let i = 1; i < 100; i++) {
    let starSize: number = Math.floor(Math.random() * 10);
    let starPos: number = Math.floor(Math.random() * 1000);

    let starEle = document.getElementById(`star${i}`) as HTMLElement;
    starEle.style.width = `${starSize}`;
    starEle.style.height = `${starSize}`;
    starEle.style.marginTop = `${starPos}`;
    starEle.style.marginLeft = `${starPos}`;
  }
});
</script>

<template>
  <div class="starPageGrid">
    <div class="mainStarsPage">
      <div
        class="backgroundStar"
        v-for="starNum in 100"
        :key="starNum"
        :id="`star${starNum}`"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.starPageGrid {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.mainStarsPage {
  display: flex;
  position: fixed;

  width: 2400px;
  height: 2400px;

  margin-top: 50%;

  border-radius: 50%;

  background: radial-gradient(circle, rgb(25, 15, 54) 0%, rgb(5, 3, 10) 100%);

  animation-name: rotating;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

.backgroundStar {
  position: absolute;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: white;
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
