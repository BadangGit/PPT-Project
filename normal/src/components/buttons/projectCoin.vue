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
let addCoinDegToSeeStraight = 360 - props.projectItem.num * 60 + "deg";

let coinColor = ref(props.projectItem.coinColor);
let coinShadowColor = ref(props.projectItem.coinShadowColor);
</script>

<template>
  <div class="rotateBar">
    <div class="coin">
      <div class="coinHead"></div>
      <div class="coinTail"></div>
    </div>
  </div>
</template>

<style scoped>
.rotateBar {
  --rotate-animation-duration: 1.5s;
}

.rotateBar {
  width: var(--coin-size);
  height: 600px;

  position: absolute;

  justify-self: center;
  align-self: center;

  animation-name: rotate;
  animation-timing-function: ease-out;
  animation-duration: var(--rotate-animation-duration);
  animation-fill-mode: forwards;
}

.coin {
  width: var(--coin-size);
  height: var(--coin-size);

  margin-top: 100%;

  position: relative;

  transform: rotate(v-bind("addCoinDegToSeeStraight"));

  animation-name: coinAnimation;
  animation-duration: var(--rotate-animation-duration);
  animation-fill-mode: forwards;
}

.coin :nth-child(-n + 2) {
  width: var(--coin-size);
  height: var(--coin-size);

  border-radius: calc(var(--coin-size) / 2);

  position: absolute;
}

.coinHead {
  background-color: v-bind("coinColor");

  top: 7px;
  left: 7px;
}

.coinTail {
  background-color: v-bind("coinShadowColor");

  z-index: -1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(v-bind("last_deg"));
  }
}

@keyframes coinAnimation {
  0% {
    margin-top: 100%;
  }

  100% {
    margin-top: 0%;
  }
}
</style>
