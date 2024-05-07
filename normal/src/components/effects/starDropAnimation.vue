<script setup lang="ts">
import { ref } from "vue";

const cardHeight: number = 380;
const cardWidth: number = 380;
const maxAnimationDuration: number = 5;

function generateStarElementAnimationPos() {
  let randomPosValue = Math.floor(Math.random() * (cardHeight + cardWidth));
  let randomDurationValue = Math.floor(Math.random() * maxAnimationDuration);

  let position = {
    init_top: 0,
    init_left: 0,

    last_top: 0,
    last_left: 0,

    duration: randomDurationValue,
  };

  if (randomPosValue < cardWidth) {
    position.init_left = randomPosValue;
    position.init_top = 0;

    position.last_left = 0;
    position.last_top = randomPosValue;
  } else {
    position.init_left = cardWidth;
    position.init_top = randomPosValue - cardWidth;

    position.last_left = randomPosValue - cardWidth;
    position.last_top = cardHeight;
  }

  return position;
}

let starAnimation = generateStarElementAnimationPos();

const generateStarAnimation = ref({
  initLeft: `${starAnimation.init_left}px`,
  initTop: `${starAnimation.init_top}px`,

  lastLeft: `${starAnimation.last_left}px`,
  lastTop: `${starAnimation.last_top}px`,

  duration: `${starAnimation.duration}s`,
});
</script>

<template>
  <div class="starDropGrid">
    <div class="stars"></div>
  </div>
</template>

<style lang="scss">
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

  animation-name: dropStars;
  animation-duration: var(--star-animation-duration);
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes dropStars {
  0% {
    top: v-bind("generateStarAnimation.initTop");
    left: v-bind("generateStarAnimation.initLeft");

    opacity: 1;
  }

  100% {
    top: v-bind("generateStarAnimation.lastTop");
    left: v-bind("generateStarAnimation.lastLeft");

    opacity: 0;
  }
}
</style>
