<script setup lang="ts">
const props = defineProps({
  selected: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="selectedMenu">{{ props.selected }}</div>
</template>

<style scoped>
.selectedMenu {
  --animation-delay: 1.7s;
}

.selectedMenu {
  width: 250px;
  height: 250px;

  border-radius: 100px;

  background-color: white;

  position: absolute;

  justify-self: center;
  align-self: center;
}
</style>
