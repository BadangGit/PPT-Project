<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  simulCategory: {
    type: Object,
  },
});
</script>

<template>
  <div>
    {{ props.simulCategory.cardNum + 1 + "." + props.simulCategory.name }}
  </div>
</template>
