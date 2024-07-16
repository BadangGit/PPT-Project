<script lang="ts" setup>
import { PropType, ref } from "vue";
import { projectContentType } from "@/assets/data/types/projectCard";

const props = defineProps({
  projectItem: {
    type: Object as PropType<projectContentType>,
    required: true,
  },
});

const ROTATE_TIME_DISTANCE = 0.15;
const MAX_DELAY = ROTATE_TIME_DISTANCE * 6;
const MIN_DURATION = 0.5;

let rotate = {
  delay: MAX_DELAY - props.projectItem.num * ROTATE_TIME_DISTANCE + "s",
  duration: props.projectItem.num * ROTATE_TIME_DISTANCE + MIN_DURATION + "s",
  last_deg: props.projectItem.num * 60 + "deg",
  addCoinDegToSeeStraight: 360 - props.projectItem.num * 60 + "deg",
};

let coinStyle = ref({
  mainColor: props.projectItem.coinColor,
  shadowColor: props.projectItem.coinShadowColor,
});
</script>

<template>
  <div class="rotateBar">
    <div class="coin">
      <div class="coinHead">
        <img class="titleImage" :src="props.projectItem.titleIcon" />
        <div class="shinedCoin">
          <div class="shine"></div>
          <div class="shine"></div>
          <div class="shine"></div>
        </div>
      </div>
      <div class="coinTail"></div>
    </div>
  </div>
</template>

<style scoped>
.rotateBar {
  --rotate-animation-duration: v-bind("rotate.duration");
  --rotate-animation-delay: v-bind("rotate.delay");
  --rotate-last-deg: v-bind("rotate.last_deg");
  --rotate-straight-deg: v-bind("rotate.addCoinDegToSeeStraight");

  --shine-opacity: 0.7;

  --coin-main-color: v-bind("coinStyle.mainColor");
  --coin-shadow-color: v-bind("coinStyle.shadowColor");
}

.rotateBar {
  width: var(--coin-size);
  height: 850px;

  position: absolute;

  justify-self: center;
  align-self: center;

  animation-name: rotate;

  pointer-events: none;

  transition: all;
  transition-duration: 0.5s;
}

.rotateBar,
.coin {
  animation-timing-function: ease-out;
  animation-duration: var(--rotate-animation-duration);
  animation-fill-mode: forwards;
  animation-delay: var(--rotate-animation-delay);
  opacity: 0;
}

.coin {
  width: var(--coin-size);
  height: var(--coin-size);

  border-radius: 50%;

  margin-top: 100%;

  position: relative;

  transform: rotate(var(--rotate-straight-deg));

  animation-name: coinAnimation;

  pointer-events: all;
}

.coin:hover {
  .coinHead {
    top: 7px;
    left: 7px;
  }

  .shinedCoin {
    top: 150px;
    left: 150px;
  }
}

.coinHead,
.coinTail {
  width: var(--coin-size);
  height: var(--coin-size);

  border-radius: calc(var(--coin-size) / 2);

  position: absolute;
}

.coinHead {
  background-color: var(--coin-main-color);

  display: grid;

  top: 0px;
  left: 0px;

  overflow: hidden;

  transition: all 0.2s;
}

.titleImage {
  width: 40px;
  height: 40px;

  justify-self: center;
  align-self: center;
}

.coinTail {
  background-color: var(--coin-shadow-color);

  z-index: -1;
}

.shinedCoin {
  position: absolute;

  overflow: hidden;

  width: 100%;
  height: 100%;

  top: -150px;
  left: -150px;

  transform: rotate(-45deg);
  transition: all 0.5s ease-out;
}

.shinedCoin {
  :nth-child(1) {
    height: 35px;
  }

  :nth-child(2) {
    height: 60px;

    margin-top: 35px;
  }

  :nth-child(3) {
    height: 20px;

    margin-top: 60px;
  }
}

.shine {
  width: 220px;

  opacity: var(--shine-opacity);

  background-color: white;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }

  100% {
    transform: rotate(var(--rotate-last-deg));
    opacity: 1;
  }
}

@keyframes coinAnimation {
  0% {
    margin-top: 150%;
    opacity: 0;
  }
  1% {
    opacity: 1;
  }

  100% {
    margin-top: 0%;
    opacity: 1;
  }
}
</style>
