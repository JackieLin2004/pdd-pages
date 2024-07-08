<script setup lang="ts">
import ComputerMenu from "@/components/home/computer/ComputerMenu.vue";
import Advertisement from "@/components/home/computer/Advertisement.vue";
import ComputerProducts from "@/components/home/computer/ComputerProducts.vue";
</script>

<template>
  <div class="computer-wrapper">
    <ComputerMenu/>
    <div class="separate"></div>
    <Advertisement/>
    <div class="separate"></div>
    <ComputerProducts/>
  </div>
</template>

<style scoped>
.computer-wrapper {
  margin-top: 30vw;
}

.computer-wrapper .separate {
  width: 100%;
  height: 3vw;
}
</style>