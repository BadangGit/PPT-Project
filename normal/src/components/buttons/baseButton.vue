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

  border-radius: 35%;

  display: flex;

  justify-content: center;
  align-items: center;
}

.buttonGrid img {
  width: 35px;
  height: 35px;
  margin-left: 2px;
  margin-top: 2px;
}
</style>
