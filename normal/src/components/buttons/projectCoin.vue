<script lang="ts" setup>
import { PropType } from "vue";
import { projectCardContentsType } from "@/assets/data/types/projectCard";

const props = defineProps({
  projectItem: {
    type: Object as PropType<projectCardContentsType>,
    required: true,
  },
});

let init_deg = props.projectItem.num * 60 + "deg";
</script>

<template>
  <div class="rotateBar">
    <div class="coin">
      <div class="coin-head">asdf</div>
      <div class="coin-tail"></div>
    </div>
  </div>
</template>

<style scoped>
.rotateBar {
  --rotate-time: 2s;
}

.rotateBar {
  width: var(--coin-size);
  height: 600px;

  position: absolute;

  justify-self: center;
  align-self: center;

  transform: rotate(v-bind("init_deg"));
  background-color: brown;
}
</style>
