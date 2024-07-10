<script setup lang="ts">
import Discount from "@/components/payment/payment-content/Discount.vue";
import Category from "@/components/payment/payment-content/Category.vue";
</script>

<template>
  <div class="payment-content-wrapper">
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