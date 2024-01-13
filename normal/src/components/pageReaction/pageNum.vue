<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  nowPageNum: {
    type: Number,
  },
});
</script>

<template>
  <div>now Page Number {{ props.nowPageNum }}</div>
</template>
