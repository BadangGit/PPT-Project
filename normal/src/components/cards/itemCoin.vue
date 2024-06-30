<script setup lang="ts">
import { PropType } from "vue";
import { projectCardContentsType } from "@/assets/data/types/projectCard";

const props = defineProps({
  projectItem: {
    type: Object as PropType<projectCardContentsType>,
    required: true,
  },
});

console.log(props);
</script>

<template>
  <div class="coin head">
    <div class="coin tail"></div>
  </div>
</template>

<style scoped>
.coin {
  width: 100%;
  height: 100%;

  border-radius: 50%;
}

.head {
  background-color: rgb(19, 80, 80);
}

.tail {
  position: absolute;

  background-color: rgb(51, 235, 235);

  left: 6px;
  top: 6px;
}
</style>
