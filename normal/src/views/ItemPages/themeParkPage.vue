<script setup lang="ts">
import floatingCloud from "@/components/effects/floatingCloud.vue";
</script>

<template>
  <div class="parkGrid">
    <div class="sky">
      <floatingCloud></floatingCloud>
    </div>
    <div class="ground"></div>
  </div>
</template>

<style scoped>
.parkGrid {
  --sky-gradient-color: linear-gradient(#87ceeb, white);
  --cloud-gradient-color: linear-gradient(white, #bfe0ec);
}

.parkGrid {
  width: 100%;
  height: 100%;

  display: flex;
}

.sky {
  width: 100%;
  height: 100%;

  background: var(--sky-gradient-color);
}

.ground {
  width: 100%;
  height: 100px;

  background-color: #b3907a;
  position: absolute;
  bottom: 0px;
}
</style>
