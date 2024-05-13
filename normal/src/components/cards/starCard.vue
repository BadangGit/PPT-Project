<script setup lang="ts">
import starDropAnimation from "@/components/effects/starDropAnimation.vue";
import { ref } from "vue";

const props = defineProps({
  randomColor: {
    type: Array,
    required: true,
  },
});

const isCardMouseOver = ref(false);

const cardInfo = {
  width: 380,
  height: 380,
};

let items = 5;

function cardMouseOver() {
  isCardMouseOver.value = true;
}

function cardMouseOut() {
  isCardMouseOver.value = false;
}
</script>

<template>
  <div class="starCard" @mouseover="cardMouseOver()" @mouseout="cardMouseOut()">
    <template v-for="item in items" :key="item">
      <starDropAnimation
        v-if="isCardMouseOver"
        :style="{ zIndex: '3' }"
        :cardInfo="cardInfo"
      ></starDropAnimation>
    </template>

    <div
      class="starCardContent"
      :style="{
        backgroundImage: `linear-gradient(${props.randomColor})`,
        zIndex: '4',
      }"
    ></div>
  </div>
</template>

<style lang="scss">
.starCard {
  --card-height: v-bind("cardInfo.height");
  --card-width: v-bind("cardInfo.width");
  --card-border-radius: 20px;
}

.starCard {
  height: var(--card-height);
  width: var(--card-width);
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
  height: 260px;
  width: 260px;
  border-radius: var(--card-border-radius);
}

.starCardContent {
  height: 240px;
  width: 240px;
  border-radius: 120px;

  transition: all 0.2s;

  pointer-events: none;
}
</style>
