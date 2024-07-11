<script setup lang="ts">
import {usePriceStore} from '@/store/priceStore';

const priceStore = usePriceStore();
</script>

<template>
  <div class="payment-footer-wrapper">
    <span>立即支付&nbsp;&#165;{{ priceStore.finalPrice }}</span>
  </div>
</template>

<style scoped>
.payment-footer-wrapper {
  width: 100vw;
  height: 16vw;
  border-top: solid 1px #dddddd;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: #c92a2a;
}

.payment-footer-wrapper span {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
}
</style>