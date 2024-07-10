<script lnag="ts" setup>
import { ref } from "vue";
import { getNumberToPx } from "@/assets/function/modType";

const props = defineProps({
  progress: {
    type: Number,
    required: true,
  },
});

let progressRatio = 300 - 3 * props.progress;
progressRatio = getNumberToPx(progressRatio);

const PROGRESS_INFO = ref({
  progress: progressRatio,
});
</script>

<template>
  <div class="progressGrid" v-if="props.progress">
    <div class="progressBar"></div>
  </div>
</template>

<style scoped>
.progressGrid {
  overflow: hidden;

  background-color: var(--old-main-background-color);

  box-shadow: var(--old-main-background-color) 0px 0px 0px 2px,
    rgb(31, 193, 27) 0px 0px 0px 4px;
}

.progressBar {
  height: 300px;
  margin-top: 300px;

  background-image: linear-gradient(#8ce63c, #32c3c8);

  animation-name: progressGauge;
  animation-duration: 2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes progressGauge {
  0% {
    margin-top: 300px;

    opacity: 0;
  }

  100% {
    margin-top: v-bind("PROGRESS_INFO.progress");

    opacity: 1;
  }
}
</style>
