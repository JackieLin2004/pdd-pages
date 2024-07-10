<script setup lang="ts">
import ProductInfoHead from "@/components/product-info/ProductInfoHead.vue";
import ProductInfoFooter from "@/components/product-info/ProductInfoFooter.vue";
import ProductShow from "@/components/product-info/ProductShow.vue";
import ProductIntro from "@/components/product-info/ProductIntro.vue";
import PinOrders from "@/components/product-info/PinOrders.vue";
</script>

<template>
  <div class="product-info-wrapper">
    <ProductInfoHead/>
    <ProductShow/>
    <ProductIntro/>
    <PinOrders/>
    <div class="separate"></div>
  </div>
  <ProductInfoFooter/>
</template>

<style scoped>
.product-info-wrapper {
  width: 100vw;
  background-color: #dee2e6;
  box-sizing: border-box;
  padding-bottom: 16vw;
}

.product-info-wrapper .separate {
  width: 100%;
  height: 3vw;
}
</style>