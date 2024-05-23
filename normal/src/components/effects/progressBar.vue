<script lnag="ts" setup>
const props = defineProps({
  progress: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="progressGrid" v-if="props.progress">
    <div class="progressBar">{{ props.progress }}</div>
  </div>
</template>

<style scoped></style>
