<script setup lang="ts">
import PinCircle from "@/components/home/recommend/PinCircle.vue";
import BenefitMenu from "@/components/home/recommend/BenefitMenu.vue";
</script>

<template>
  <div class="recommend-wrapper">
    <PinCircle/>
    <div class="separate"></div>
    <BenefitMenu/>
  </div>
</template>

<style scoped>
.recommend-wrapper {
  margin-top: 30vw;
}

.recommend-wrapper .separate {
  width: 100%;
  height: 3vw;
}
</style>