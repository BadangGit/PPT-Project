<script setup lang="ts">
import starDropAnimation from "@/components/effects/starDropAnimation.vue";
import { ref, PropType } from "vue";
import { getLinearGradient } from "@/assets/function/getCssCode";
import { gradientColor } from "@/assets/data/types/starCard";
import { useClipboard } from "@vueuse/core";

const props = defineProps({
  randomColor: {
    type: Array as PropType<gradientColor>,
    required: true,
  },
});

const source = ref(getLinearGradient(props.randomColor));
const { copy, copied } = useClipboard({ source });

const isCardMouseOver = ref(false);

const cardStyleInfo = {
  width: 380,
  height: 380,
};

let items = 8;

let cardStyle = {
  width: cardStyleInfo.width + "px",
  height: cardStyleInfo.height + "px",
};

function cardMouseOver() {
  isCardMouseOver.value = true;
}

function cardMouseOut() {
  isCardMouseOver.value = false;
}
</script>

<template>
  <div
    class="starCard"
    @mouseover="cardMouseOver()"
    @mouseout="cardMouseOut()"
    @click="copy(source)"
    :style="{
      cursor: 'pointer',
    }"
  >
    <template v-for="item in items" :key="item">
      <starDropAnimation
        v-if="isCardMouseOver"
        :style="{ zIndex: '2' }"
        :cardStyleInfo="cardStyleInfo"
      ></starDropAnimation>
    </template>

    <div
      class="starCardContent"
      :style="{
        backgroundImage: `linear-gradient(${props.randomColor})`,
        zIndex: '3',
      }"
    ></div>

    <img
      class="clip-board"
      src="http://localhost:8080/icons/buttons/copy.png"
      v-if="isCardMouseOver && !copied"
    />

    <img
      class="clip-board"
      src="http://localhost:8080/icons/buttons/check.png"
      v-if="isCardMouseOver && copied"
    />
  </div>
</template>

<style lang="scss">
.starCard {
  --card-height: v-bind("cardStyle.height");
  --card-width: v-bind("cardStyle.width");
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

.clip-board {
  position: absolute;

  z-index: 5;

  margin: auto;

  width: 40px;
  height: 40px;

  opacity: 0.6;

  pointer-events: none;
}
</style>
