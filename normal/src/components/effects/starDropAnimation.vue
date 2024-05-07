<script setup lang="ts">
import { ref } from "vue";

const cardHeight: number = 380;
const cardWidth: number = 380;

function generateStarElementAnimationPos() {
  let position = {
    init_top: 0,
    init_left: 0,

    last_top: 0,
    last_left: 0,
  };

  let randomPosValue = Math.floor(Math.random() * (cardHeight + cardWidth));

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

let starPosition = generateStarElementAnimationPos();

const generateStarStyle = ref({
  initLeft: `${starPosition.init_left}px`,
  initTop: `${starPosition.init_top}px`,

  lastLeft: `${starPosition.last_left}px`,
  lastTop: `${starPosition.last_top}px`,
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
  animation-duration: random(5) + s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes dropStars {
  0% {
    top: v-bind("generateStarStyle.initTop");
    left: v-bind("generateStarStyle.initLeft");

    opacity: 1;
  }

  100% {
    top: v-bind("generateStarStyle.lastTop");
    left: v-bind("generateStarStyle.lastLeft");

    opacity: 0;
  }
}
</style>
