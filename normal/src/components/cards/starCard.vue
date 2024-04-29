<script setup lang="ts">
const props = defineProps({
  randomColor: {
    type: Array,
    required: true,
  },
  starCardID: {
    type: Number,
    required: true,
  },
});

function starFallingAnimation() {
  removeFallingStarEle();
  const fallingStar = document.querySelector(`.fallingStar${props.starCardID}`);

  let drops = "<div>testDiv</div>";

  fallingStar?.insertAdjacentHTML("afterbegin", drops);
}

function removeFallingStarEle() {
  const fallingStar = document.querySelector(`.fallingStar${props.starCardID}`);
  while (fallingStar?.firstChild) {
    fallingStar.removeChild(fallingStar.firstChild);
  }
}
</script>

<template>
  <div class="starCard" @mouseover="starFallingAnimation">
    <div
      class="starCardContent"
      :style="{
        backgroundImage: `linear-gradient(${props.randomColor})`,
      }"
    >
      <div></div>
    </div>
    <div class="fallingStarEffectGrid">
      <div :class="'fallingStar' + props.starCardID"></div>
    </div>
  </div>
</template>

<style lang="scss">
.test {
  color: white;
}

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
  border-radius: 20px;
}

.starCardContent {
  height: 240px;
  width: 240px;
  border-radius: 120px;

  transition: all 0.2s;
}

.fallingStarEffectGrid {
  height: 400px;
  width: 380px;
  border-radius: 20px;

  position: absolute;
}
</style>
