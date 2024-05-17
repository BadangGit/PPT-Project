<script setup lang="ts">
import { ref } from "vue";
import {
  generateStarAnimationPos,
  changePosToAnimationDuration,
} from "@/assets/function/generateStarPos";

const props = defineProps<{
  cardStyleInfo: {
    width: number;
    height: number;
  };
}>();

const exceptCornerPosValue: number = 60;

const rerender = ref(1);

function getStarRandomAnimation() {
  let randomPos = 0;

  for (let i = 0; i < rerender.value; i++) {
    randomPos = Math.floor(
      Math.random() *
        (props.cardStyleInfo.height +
          props.cardStyleInfo.width -
          exceptCornerPosValue * 2) +
        exceptCornerPosValue
    );
  }

  let randomDelay: number = Math.random() * 3;

  let starAnimation = {
    pos: generateStarAnimationPos(randomPos),
    duration: changePosToAnimationDuration(randomPos),
  };

  let generateStarAnimation = ref({
    initLeft: `${starAnimation.pos.init_left}px`,
    initTop: `${starAnimation.pos.init_top}px`,

    lastLeft: `${starAnimation.pos.last_left}px`,
    lastTop: `${starAnimation.pos.last_top}px`,

    duration: `${starAnimation.duration}s`,
    delay: `${randomDelay}s`,
  });

  return generateStarAnimation;
}

let generateStarAnimation = getStarRandomAnimation();

let resetStarAnimation = setInterval(() => {
  generateStarAnimation = getStarRandomAnimation();
  rerender.value += 1;
}, 5000);

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
  --star-border: 2px;
  --star-diameter: 4px;
  --star-animation-duration: v-bind("generateStarAnimation.duration");
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
  animation-delay: v-bind("generateStarAnimation.delay");
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.starsAfterImage {
  width: 0px;
  height: 0px;
  border-bottom: 16px solid white;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;

  transform: rotate(45deg);

  position: absolute;

  opacity: 0.6;

  left: 7px;
  bottom: 1px;
}

@keyframes dropStars {
  0% {
    top: v-bind("generateStarAnimation.initTop");
    left: v-bind("generateStarAnimation.initLeft");

    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    top: v-bind("generateStarAnimation.lastTop");
    left: v-bind("generateStarAnimation.lastLeft");

    opacity: 0;
  }
}
</style>
