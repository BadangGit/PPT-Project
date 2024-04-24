<script setup lang="ts"></script>

<template>
  <div class="starCard">this is star card</div>
</template>

<style>
.starCard {
  height: 360px;
  width: 320px;

  margin: auto;
  margin-top: 80px;

  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: box-shadow;
  transition-duration: 0.2s;
}

.starCard:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
