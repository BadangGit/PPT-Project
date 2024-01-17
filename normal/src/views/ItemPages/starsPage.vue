<script setup lang="ts"></script>

<template>
  <div class="mainStarsPage">
    <div class="backgroundStar"></div>
    <div class="ground">
      <div class="groundSemicircle"></div>
      <div class="groundSquare"></div>
    </div>
  </div>
</template>

<style lang="scss">
.mainStarsPage {
  display: flex;

  background: rgb(31, 33, 41);
  background: radial-gradient(
    circle,
    rgba(31, 33, 41, 1) 0%,
    rgba(22, 22, 24, 1) 100%
  );
  height: 911px;

  display: flex;
}

.ground {
  position: absolute;
  bottom: 0px;

  width: 100%;
  height: 200px;
}

.groundSemicircle {
  width: 100%;
  height: 200px;
  border-radius: 50% 50% 0 0;

  background-color: black;
}
</style>
