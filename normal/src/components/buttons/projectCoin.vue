<script lang="ts" setup>
import { PropType, ref } from "vue";
import { projectCardContentsType } from "@/assets/data/types/projectCard";

const props = defineProps({
  projectItem: {
    type: Object as PropType<projectCardContentsType>,
    required: true,
  },
});

let last_deg = props.projectItem.num * 60 + "deg";
let rotate_delay = 0.95 - (props.projectItem.num * 0.15 + 0.2) + "s";

let addCoinDegToSeeStraight = 360 - props.projectItem.num * 60 + "deg";

let coinColor = ref(props.projectItem.coinColor);
let coinShadowColor = ref(props.projectItem.coinShadowColor);
</script>

<template>
  <div class="rotateBar">
    <div class="coin">
      <div class="coinHead">
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
  --rotate-animation-duration: 1s;
  --shine-opacity: 0.8;
}

.rotateBar {
  width: var(--coin-size);
  height: 700px;

  position: absolute;

  justify-self: center;
  align-self: center;

  animation-name: rotate;

  pointer-events: none;

  transition: all;
  transition-duration: 0.5s;
}

.rotateBar:has(.coin:hover) {
  margin-left: 7px;
  margin-bottom: 7px;
}

.rotateBar,
.coin {
  animation-timing-function: ease-out;
  animation-duration: var(--rotate-animation-duration);
  animation-fill-mode: forwards;
  animation-delay: v-bind("rotate_delay");
  opacity: 0;
}

.coin {
  width: var(--coin-size);
  height: var(--coin-size);

  margin-top: 100%;

  position: relative;

  transform: rotate(v-bind("addCoinDegToSeeStraight"));

  animation-name: coinAnimation;

  pointer-events: auto;
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
  background-color: v-bind("coinColor");

  top: 0px;
  left: 0px;

  overflow: hidden;

  transition: all 0.2s;
}

.coinTail {
  background-color: v-bind("coinShadowColor");

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
    transform: rotate(v-bind("last_deg"));
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
