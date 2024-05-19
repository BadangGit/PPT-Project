<script setup lang="ts">
import { ref } from "vue";
import {
  modPosToDuration,
  modStarAnimationPos,
} from "@/assets/function/generateStarAnimation";
import { numberToPx, numberToTime } from "@/assets/function/modType";

const props = defineProps<{
  cardStyleInfo: {
    width: number;
    height: number;
  };
}>();

const exceptCornerPosValue: number = 60;
const rerender = ref(1);

let randomPos = Math.floor(
  Math.random() *
    (props.cardStyleInfo.height +
      props.cardStyleInfo.width -
      exceptCornerPosValue * 2) +
    exceptCornerPosValue
);

function generateStarAnimationTime(pos: number) {
  let randomDelay: number = Math.random();
  let animationDuration: number = modPosToDuration(pos);
  let repeatTime: number = (animationDuration + randomDelay) * 1000 + 1000;

  let delay: string = numberToTime(randomDelay);
  let duration: string = numberToTime(animationDuration);

  return { delay, duration, repeatTime };
}

function generateStarAnimationPos() {
  let pos = modStarAnimationPos(randomPos);

  let starAnimationPos = {
    initLeft: numberToPx(pos.value.initLeft),
    initTop: numberToPx(pos.value.initTop),

    lastLeft: numberToPx(pos.value.lastLeft),
    lastTop: numberToPx(pos.value.lastTop),
  };

  return starAnimationPos;
}

let animationPos = generateStarAnimationPos();
let animationTime = generateStarAnimationTime(randomPos);

let resetStarAnimation = setInterval(() => {
  randomPos = Math.floor(
    Math.random() *
      (props.cardStyleInfo.height +
        props.cardStyleInfo.width -
        exceptCornerPosValue * 2) +
      exceptCornerPosValue
  );

  animationPos = generateStarAnimationPos();
  animationTime = generateStarAnimationTime(randomPos);

  rerender.value += 1;
}, animationTime.repeatTime);

resetStarAnimation;
</script>

<template>
  <div class="starDropGrid" :key="rerender">
    <div class="stars">
      <div class="starsAfterImage"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.starDropGrid {
  --star-border: 1px;
  --star-diameter: 2px;
  --star-animation-duration: v-bind("animationTime.duration");
}

.starDropGrid {
  height: var(--card-height);
  width: var(--card-width);
  border-radius: var(--card-border-radius);

  position: absolute;
  display: flex;

  pointer-events: none;
}

.stars {
  height: var(--star-diameter);
  width: var(--star-diameter);
  border-radius: var(--star-border);

  background-color: white;

  position: absolute;

  opacity: 0;

  animation-name: dropStars;
  animation-duration: var(--star-animation-duration);
  animation-delay: v-bind("animationTime.delay");
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.starsAfterImage {
  width: 0px;
  height: 0px;
  border-bottom: 16px solid white;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  transform: rotate(45deg);

  position: absolute;

  opacity: 0.6;

  left: 7px;
  bottom: 0.2px;
}

@keyframes dropStars {
  0% {
    top: v-bind("animationPos.initTop");
    left: v-bind("animationPos.initLeft");

    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    top: v-bind("animationPos.lastTop");
    left: v-bind("animationPos.lastLeft");

    opacity: 0;
  }
}
</style>
