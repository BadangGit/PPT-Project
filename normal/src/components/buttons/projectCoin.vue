<script setup></script>

<template>
  <div class="coin"></div>
</template>

<style scoped>
.coin {
  width: 170px;
  height: 170px;

  border-radius: 50%;

  position: absolute;

  justify-self: center;

  background-color: green;

  animation-name: translateCoinY;
  animation-duration: var(--rotate-time);
}

@keyframes translateCoinY {
  0% {
    top: 40%;
  }

  100% {
    top: 0;
  }
}
</style>
