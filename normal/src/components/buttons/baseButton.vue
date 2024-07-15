<script setup lang="ts"></script>

<template>
  <div class="buttonGrid">
    <img src="http://localhost:8080/icons/buttons/arrowButton.png" />
  </div>
</template>

<style scoped>
.buttonGrid {
  width: 100%;
  height: 100%;

  border-radius: 15%;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: rgb(84, 158, 255);
}

.buttonGrid img {
  width: 35px;
  height: 35px;
  margin-left: 2px;
  margin-top: 2px;

  filter: invert();
}

.buttonGrid:hover img {
  animation-name: arrowMove;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes arrowMove {
  0% {
    margin-left: 2px;
  }

  25% {
    margin-left: 10px;
  }

  50% {
    margin-left: 2px;
  }

  75% {
    margin-left: -2px;
  }

  100% {
    margin-left: 2px;
  }
}
</style>
