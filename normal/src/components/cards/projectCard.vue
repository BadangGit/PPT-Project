<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import { projectCardContentsType } from "@/assets/data/types/projectCard";

import ProgressBar from "../effects/progressBar.vue";

const props = defineProps({
  activeProjectCardList: {
    type: Object as PropType<projectCardContentsType>,
    required: true,
  },
});

let isHover = ref(false);

onMounted(() => {
  if (props.activeProjectCardList.title == "Preparing") {
    let cardEle = document.getElementById(
      `cardGrid${props.activeProjectCardList.num}`
    ) as HTMLElement;
    cardEle.className += " disabled";
  }
});
</script>

<template>
  <div class="cardPlace">
    <div
      class="e-card playing"
      :id="`cardGrid${props.activeProjectCardList.num}`"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
    >
      <div class="image"></div>

      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>

      <div class="infotop">
        <img
          :src="props.activeProjectCardList.titleIcon"
          fill="none"
          viewBox="0 0 24 24"
          class="icon"
        />
        <br />
        {{ props.activeProjectCardList.title }}
        <br />
        <div class="title">{{ $props.activeProjectCardList.subtitle }}</div>
      </div>

      <router-link
        v-if="props.activeProjectCardList.title != 'Preparing'"
        :to="{ path: props.activeProjectCardList.src }"
      >
        <div
          class="cursorGrid"
          :style="{
            cursor: 'url(' + props.activeProjectCardList.cursorIcon + '), auto',
          }"
        ></div>
      </router-link>
    </div>
    <ProgressBar
      v-if="isHover"
      class="progress"
      :progress="props.activeProjectCardList.progress"
    ></ProgressBar>
  </div>
</template>

<style scoped>
.cardPlace {
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;

  margin: 30px auto;

  justify-content: center;
}

.cursorGrid {
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 100%;
}

.progress {
  position: absolute;

  width: 20px;
  height: 300px;

  left: 330px;

  margin-left: -15px;

  animation-name: progress;
  animation-duration: 0.4s;
}

.disabled {
  pointer-events: none;
}

.e-card {
  background: transparent;
  box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
  position: relative;
  width: 220px;
  height: 300px;
  right: 0px;
  border-radius: 8px;
  overflow: hidden;
  opacity: 0.6;

  transition-duration: 0.4s;
}

.e-card:hover {
  opacity: 1;

  right: 20px;
}

.wave {
  position: absolute;
  width: 540px;
  height: 700px;
  opacity: 0.6;
  left: 0;
  top: 0;
  margin-left: -50%;
  margin-top: -70%;
  background: linear-gradient(744deg, #af40ff, #7460f3 60%, #00ddeb);
}

.icon {
  width: 2.5em;
  margin-top: -1.5em;
  padding-bottom: 1.5em;
}

.infotop {
  text-align: center;
  font-size: 20px;
  position: absolute;
  top: 5.6em;
  left: 0;
  right: 0;
  color: rgb(255, 255, 255);
  font-weight: 600;
}

.title {
  font-size: 14px;
  font-weight: 100;
  position: relative;
  top: 1em;
}

.wave:nth-child(2),
.wave:nth-child(3) {
  top: 210px;
}

.playing .wave {
  border-radius: 40%;
  animation: wave 3000ms infinite linear;
}

.wave {
  border-radius: 40%;
  animation: wave 55s infinite linear;
}

.playing .wave:nth-child(2) {
  animation-duration: 4000ms;
}

.wave:nth-child(2) {
  animation-duration: 50s;
}

.playing .wave:nth-child(3) {
  animation-duration: 5000ms;
}

.wave:nth-child(3) {
  animation-duration: 45s;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes progress {
  0% {
    margin-left: -20px;
  }

  100% {
    margin-left: -15px;
  }
}
</style>
