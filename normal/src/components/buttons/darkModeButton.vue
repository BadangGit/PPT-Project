<script setup lang="ts">
import { darkModeButtonClassType } from "@/assets/data/types/darkMode";
import { useStore } from "vuex";

const store = useStore();

let darkModeClassName: darkModeButtonClassType = { mode: "", item: "" };

if (store.state.IsDarkMode) {
  darkModeClassName.mode = "darkMode";
  darkModeClassName.item = "moon";
} else {
  darkModeClassName.mode = "lightMode";
  darkModeClassName.item = "sun";
}
</script>

<template>
  <div class="buttonGrid">
    <div :class="darkModeClassName.mode">
      <div :class="darkModeClassName.item">
        <div class="moonShadow"></div>
      </div>
    </div>
  </div>
</template>

<style>
.buttonGrid {
  width: 80px;
  height: 40px;

  display: flex;
  align-items: center;
}

.darkMode {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #303136;
}

.moon {
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-right: 6px;
  background: linear-gradient(40deg, #38cefc, #4af4fa 70%);

  animation-name: to-dark-mode;
  animation-duration: 0.4s;
  animation-timing-function: ease;
}

.moon .moonShadow {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #303136;
}

.lightMode {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 20px;

  background-color: white;
}

.sun {
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-left: 6px;
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);

  animation-name: to-light-mode;
  animation-duration: 0.4s;
}

@keyframes to-dark-mode {
  from {
    margin-right: 40px;
  }

  to {
    margin-right: 6px;
  }
}

@keyframes to-light-mode {
  from {
    margin-left: 40px;
  }

  to {
    margin-left: 6px;
  }
}
</style>
