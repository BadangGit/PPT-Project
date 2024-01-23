<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

type darkModeType = {
  mode: string;
  item: string;
};

let darkMode = store.state.IsDarkMode;
let darkModeClassName: darkModeType = { mode: "", item: "" };

if (darkMode) {
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
}

.moon .moonShadow {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #303136;
}

.lightMode {
  display: flex;
  justify-content: start;
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
}
</style>
