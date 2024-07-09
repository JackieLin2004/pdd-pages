<script setup lang="ts">
import CouponHead from "@/components/coupon/CouponHead.vue";
import PriceReductionList from "@/components/coupon/PriceReductionList.vue";
import SubsidyList from "@/components/coupon/SubsidyList.vue";
import BestSellingList from "@/components/coupon/BestSellingList.vue";
</script>

<template>
  <div class="coupon-wrapper">
    <CouponHead/>
    <div class="separate"></div>
    <PriceReductionList/>
    <div class="separate"></div>
    <SubsidyList/>
    <div class="separate"></div>
    <BestSellingList/>
    <div class="separate"></div>
  </div>
</template>

<style scoped>
.coupon-wrapper {
  width: 100vw;
  background-color: #a5d8ff;
  box-sizing: border-box;
  padding: 2.5vw 3vw 16vw;
}

.coupon-wrapper .separate {
  width: 100%;
  height: 3vw;
}
</style>