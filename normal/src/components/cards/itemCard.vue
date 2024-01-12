<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  simulCategory: {
    type: Object,
  },
});
</script>

<template>
  <div>{{ props.simulCategory.name }}</div>
</template>
