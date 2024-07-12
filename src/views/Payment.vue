<script setup lang="ts">
import PaymentHead from "@/components/payment/PaymentHead.vue";
import PaymentFooter from "@/components/payment/PaymentFooter.vue";
import Address from "@/components/payment/Address.vue";
import PaymentContent from "@/components/payment/PaymentContent.vue";
import Suggestion from "@/components/payment/payment-content/Suggestion.vue";
</script>

<template>
  <div class="payment-wrapper">
    <PaymentHead/>
    <Address/>
    <div class="separate"></div>
    <PaymentContent/>
  </div>
  <Suggestion/>
  <PaymentFooter/>
</template>

<style scoped>
.payment-wrapper {
  width: 100%;
  background-color: white;
}

.payment-wrapper .separate {
  width: 100%;
  height: 3vw;
  background-color: #dee2e6;
}
</style>