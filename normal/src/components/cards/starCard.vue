<script setup lang="ts">
import starDropAnimation from "@/components/effects/starDropAnimation.vue";

const props = defineProps({
  randomColor: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="starCard">
    <starDropAnimation></starDropAnimation>
    <div
      class="starCardContent"
      :style="{
        backgroundImage: `linear-gradient(${props.randomColor})`,
      }"
    ></div>
  </div>
</template>

<style lang="scss">
.starCard {
  --card-border-radius: 20px;
}

.starCard {
  height: 400px;
  width: 380px;
  border-radius: var(--card-border-radius);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;

  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: box-shadow 0.2s;
}

.starCard:hover {
  background: linear-gradient(#000000, #272e56);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.starCard:hover .starCardContent {
  height: 280px;
  width: 260px;
  border-radius: var(--card-border-radius);
}

.starCardContent {
  height: 240px;
  width: 240px;
  border-radius: 120px;

  transition: all 0.2s;
}
</style>
