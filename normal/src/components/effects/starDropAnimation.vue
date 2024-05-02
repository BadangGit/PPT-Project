<script setup lang="ts">
const cardHeight: number = 400;

function generateStarElementInitPos() {
  let initPos = Math.floor(Math.random() * cardHeight);

  return initPos;
}

const generateStarStyle = {
  initPos: `${generateStarElementInitPos()}px`,
};
</script>

<template>
  <div class="starDropGrid">
    <div class="stars"></div>
  </div>
</template>

<style lang="scss">
.starDropGrid {
  --star-diameter: 4px;
  --star-border: 2px;
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

  position: relative;

  background-color: white;

  animation-name: dropStars;
  animation-duration: random(5) + s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes dropStars {
  0% {
    top: 0px;
    left: v-bind("generateStarStyle.initPos");
  }

  100% {
    top: v-bind("generateStarStyle.initPos");
    left: 0px;

    opacity: 0;
  }
}
</style>
