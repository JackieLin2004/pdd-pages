<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

import ProductInfoHead from "@/components/product-info/ProductInfoHead.vue";
import ProductInfoFooter from "@/components/product-info/ProductInfoFooter.vue";
import ProductShow from "@/components/product-info/ProductShow.vue";
import ProductIntro from "@/components/product-info/ProductIntro.vue";
import PinOrders from "@/components/product-info/PinOrders.vue";
import ProductEvaluate from "@/components/product-info/ProductEvaluate.vue";
import OtherShow from "@/components/product-info/OtherShow.vue";
import ProductInfoHeadSlide from "@/components/product-info/ProductInfoHeadSlide.vue";

const showProductInfoHead = ref(true);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const threshold = window.innerWidth * 1.2;
  showProductInfoHead.value = scrollTop <= threshold;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="product-info-wrapper">
    <div class="fade">
      <ProductInfoHead v-show="showProductInfoHead"/>
      <ProductInfoHeadSlide v-show="!showProductInfoHead"/>
    </div>
    <ProductShow/>
    <ProductIntro/>
    <PinOrders/>
    <div class="separate"></div>
    <ProductEvaluate/>
    <div class="separate"></div>
    <OtherShow/>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>