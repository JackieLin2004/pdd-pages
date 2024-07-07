<script setup lang="ts">
import PinCircle from "@/components/home/recommend/PinCircle.vue";
import BenefitMenu from "@/components/home/recommend/BenefitMenu.vue";
import Subsidy from "@/components/home/recommend/Subsidy.vue";
</script>

<template>
  <div class="recommend-wrapper">
    <PinCircle/>
    <div class="separate"></div>
    <BenefitMenu/>
    <div class="separate"></div>
    <Subsidy/>
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