<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  simulCategory: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    {{ props.simulCategory.cardNum + 1 + ". " + props.simulCategory.name }}
  </div>
</template>
