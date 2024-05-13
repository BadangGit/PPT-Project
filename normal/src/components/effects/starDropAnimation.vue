<script setup lang="ts">
import { ref } from "vue";

const cardHeight: number = 380;
const cardWidth: number = 380;

const exceptCornerPosValue: number = 60;

const posToDurationRatio: number = 60;

let randomPos: number = Math.floor(
  Math.random() * (cardHeight + cardWidth - exceptCornerPosValue * 2) +
    exceptCornerPosValue
);

let randomDelay: number = Math.floor(Math.random() * 1);

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

function generateStarAnimationPos(randomPos: number) {
  let upperSideLength = cardWidth;

  let position = {
    init_top: 0,
    init_left: 0,
    last_top: 0,
    last_left: 0,
  };

  if (randomPos < upperSideLength) {
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

let starAnimation = {
  pos: generateStarAnimationPos(randomPos),
  duration: changePosToAnimationDuration(randomPos),
};

const generateStarAnimation = ref({
  initLeft: `${starAnimation.pos.init_left}px`,
  initTop: `${starAnimation.pos.init_top}px`,

  lastLeft: `${starAnimation.pos.last_left}px`,
  lastTop: `${starAnimation.pos.last_top}px`,

  duration: `${starAnimation.duration}s`,
  delay: `${randomDelay}s`,
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

  opacity: 0;

  animation-name: dropStars;
  animation-duration: var(--star-animation-duration);
  animation-delay: v-bind("generateStarAnimation.delay");
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
