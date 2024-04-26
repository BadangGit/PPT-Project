<script setup lang="ts">
const props = defineProps({
  randomColor: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="starCard">
    <div
      class="starCardContent"
      :style="{
        backgroundImage: `linear-gradient(${props.randomColor})`,
      }"
    ></div>
  </div>
</template>

<style>
.starCard {
  height: 400px;
  width: 380px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;

  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: box-shadow 0.2s;
}

.starCard:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.starCardContent {
  height: 240px;
  width: 240px;
  border-radius: 120px;

  transition: all 0.2s;
}

.starCardContent:hover {
  height: 320px;
  width: 300px;
  border-radius: 20px;
}
</style>
