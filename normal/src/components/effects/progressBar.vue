<script lnag="ts" setup>
const props = defineProps({
  progress: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="progressGrid">
    {{ props.progress == 100 ? "Complete!" : props.progress + "%" }}
  </div>
</template>

<style>
.progressGrid {
  position: absolute;

  margin: auto;
}
</style>
