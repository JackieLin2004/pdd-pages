<script setup lang="ts">
import {getImages} from "@/utils/getImagesUtil";

const images = import.meta.glob('@/assets/images/product-info/product-show/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="product-show-wrapper">
    <!-- 轮播图 -->
    <div class="block text-center">
      <el-carousel height="100vw">
        <el-carousel-item v-for="(path, index) in imagePaths" :key="index">
          <img class="carousel" :src="path" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 价格展示 -->
    <div class="price-show">
      <div class="price-show-left">
        <div class="price-show-left-top">
          <span class="iconfont icon-lightning-full"></span>
          <span>全网低价</span>
          <span style="font-size: 1.5rem">&#165;149</span>
          <span>90天低价</span>
        </div>
        <div class="price-show-left-down">
          <span>已拼1.2万+件&nbsp;|&nbsp;即将售罄</span>
        </div>
      </div>
      <div class="price-show-right">
        <span style="font-size: 1.4rem; font-weight: bold; color: #c92a2a;">全网低价</span>
        <span style="color: #fa5252;">比价更便宜</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-show-wrapper {
  width: 100%;
  margin-top: 15vw;
}

.product-show-wrapper .carousel {
  width: 100%;
  height: auto;
}

.product-show-wrapper .price-show {
  width: 100%;
  height: 20vw;
  display: flex;
}

.product-show-wrapper .price-show .price-show-left {
  width: 70%;
  height: 100%;
  background-color: #c92a2a;
}

.product-show-wrapper .price-show .price-show-right {
  width: 30%;
  height: 100%;
  background-color: #ffec99;
}

.price-show-left-top {
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
}

.price-show-left-top span {
  margin-left: 1.5vw;
  color: white;
  font-size: 1.05rem;
  font-weight: bold;
}

.price-show-left-down {
  width: 100%;
  height: 45%;
  display: flex;
}

.price-show-left-down span {
  color: #e9ecef;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1.5vw;
}

.price-show-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>