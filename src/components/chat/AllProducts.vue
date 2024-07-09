<script setup lang="ts">
import RecommendedProducts from "@/components/home/recommend/RecommendedProducts.vue";
</script>

<template>
  <div class="all-products-wrapper">
    <div class="ap-head">
      <img src="@/assets/images/chat/c1.jpg" alt="">
      <span>全部商品</span>
    </div>

    <!--组件复用，复用推荐商品的列表-->
    <div class="all-products">
      <RecommendedProducts/>
    </div>

  </div>
</template>

<style scoped>
.all-products-wrapper {
  width: 100%;
  background-color: white;
}

.all-products-wrapper .ap-head {
  width: 100%;
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.all-products-wrapper .ap-head img {
  width: 6.5vw;
}

.all-products-wrapper .ap-head span {
  color: #c92a2a;
  font-weight: bold;
  font-size: 1.05rem;
  margin-left: 2vw;
  margin-bottom: 0.5vw;
}

.all-products-wrapper .all-products {
  width: 100%;
  background-color: #dee2e6;
}
</style>