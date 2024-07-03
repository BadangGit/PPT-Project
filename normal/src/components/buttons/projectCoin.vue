<script lang="ts" setup>
import { PropType } from "vue";
import { projectCardContentsType } from "@/assets/data/types/projectCard";

const props = defineProps({
  projectItem: {
    type: Object as PropType<projectCardContentsType>,
    required: true,
  },
});

let last_deg = props.projectItem.num * 60 + "deg";
let addCoinDegToSeeStraight = 360 - props.projectItem.num * 60 + "deg";
</script>

<template>
  <div class="rotateBar">
    <div class="coin">
      <div class="coin-head"></div>
      <div class="coin-tail"></div>
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

  border-radius: calc(var(--coin-size) / 2);

  background-color: red;

  margin-top: 100%;

  transform: rotate(v-bind("addCoinDegToSeeStraight"));

  animation-name: coinAnimation;
  animation-duration: var(--rotate-animation-duration);
  animation-fill-mode: forwards;
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
