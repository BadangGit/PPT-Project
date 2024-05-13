<script setup lang="ts">
import { ref } from "vue";

const cardHeight: number = 380;
const cardWidth: number = 380;

const exceptCornerPosValue: number = 60;

const posToDurationRatio: number = 60;

function changePosToAnimationDuration(pos: number) {
  let duration = 0;
  if (pos <= cardWidth) {
    duration = pos / posToDurationRatio;
  } else {
    pos = 2 * cardWidth - pos;

    duration = pos / posToDurationRatio;
  }

  return duration;
}

function generateStarElementAnimationStyle() {
  let randomPos = Math.floor(
    Math.random() * (cardHeight + cardWidth - exceptCornerPosValue * 2) +
      exceptCornerPosValue
  );

  let duration = changePosToAnimationDuration(randomPos);

  let position = {
    init_top: 0,
    init_left: 0,

    last_top: 0,
    last_left: 0,

    duration: duration,
  };

  if (randomPos < cardWidth) {
    position.init_left = randomPos;
    position.init_top = 0;

    position.last_left = 0;
    position.last_top = randomPos;
  } else {
    position.init_left = cardWidth;
    position.init_top = randomPos - cardWidth;

    position.last_left = randomPos - cardWidth;
    position.last_top = cardHeight;
  }

  return position;
}

let starAnimation = generateStarElementAnimationStyle();

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

  animation-name: dropStars;
  animation-duration: var(--star-animation-duration);
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
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
