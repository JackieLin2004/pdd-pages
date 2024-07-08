<script setup lang="ts">
import CouponHead from "@/components/coupon/CouponHead.vue";
</script>

<template>
  <div class="coupon-wrapper">
    <CouponHead/>
    <div class="separate"></div>
  </div>
</template>

<style scoped>
.coupon-wrapper {
  width: 100vw;
  background-color: #a5d8ff;
  box-sizing: border-box;
  padding: 2.5vw 2.5vw;
}

.coupon-wrapper .separate {
  width: 100%;
  height: 3vw;
}
</style>