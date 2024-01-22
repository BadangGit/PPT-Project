<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const nowPageDarkMode: Boolean = store.state.IsDarkMode;
</script>

<template>
  <div class="buttonGrid">
    <div class="darkMode" v-if="nowPageDarkMode">
      <div class="moon">
        <div class="moonShadow"></div>
      </div>
    </div>
    <div class="lightMode" v-else>
      <div class="sun"></div>
    </div>
  </div>
</template>

<style>
.buttonGrid {
  width: 80px;
  height: 40px;

  display: flex;
  justify-content: center;
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

.moonShadow {
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
