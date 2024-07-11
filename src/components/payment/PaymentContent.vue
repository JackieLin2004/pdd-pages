<script setup lang="ts">
import Purchase from "@/components/payment/payment-content/Purchase.vue";
import Discount from "@/components/payment/payment-content/Discount.vue";
import Category from "@/components/payment/payment-content/Category.vue";
</script>

<template>
  <div class="payment-content-wrapper">
    <Purchase/>
    <Discount/>
    <Category/>
  </div>
</template>

<style scoped>
.payment-content-wrapper {
  width: 100vw;
  background-color: white;
}

</style>