<script setup lang="ts">
import ProductInfoHead from "@/components/product-info/ProductInfoHead.vue";
import ProductShow from "@/components/product-info/ProductShow.vue";
</script>

<template>
  <div class="product-info-wrapper">
    <ProductInfoHead/>
    <ProductShow/>
  </div>
</template>

<style scoped>
.product-info-wrapper {
  width: 100vw;
  background-color: #dee2e6;
}

.product-info-wrapper.separate {
  width: 100%;
  height: 3vw;
}
</style>