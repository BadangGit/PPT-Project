<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  simulationCategory: String,
});
</script>

<template>
  <div>{{ props.simulationCategory }}</div>
</template>
