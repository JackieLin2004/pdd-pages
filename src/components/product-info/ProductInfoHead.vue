<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
}
</script>

<template>
  <div class="pi-head-wrapper">
    <div class="pi-head-left" @click="goBack">
      <span class="iconfont icon-xiangzuo_o"></span>
    </div>
    <div class="pi-head-middle">
      <img src="@/assets/images/product-info/pi2.jpg" alt="">
      <span>品牌有线键盘畅销榜</span>
      <span>第1名</span>
    </div>
    <div class="pi-head-right">
      <img src="@/assets/images/product-info/pi1.jpg" alt="">
      <span class="iconfont icon-shangchuan"></span>
    </div>
  </div>
</template>

<style scoped>
.pi-head-wrapper {
  width: 100%;
  height: 15vw;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: white;
  border-bottom: solid 1px #ced4da;
}

.pi-head-wrapper .pi-head-left {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-head-wrapper .pi-head-left span {
  font-size: 1.5rem;
  color: #495057;
}

.pi-head-wrapper .pi-head-middle {
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-head-wrapper .pi-head-middle img {
  width: 5vw;
  height: auto;
}

.pi-head-wrapper .pi-head-middle span {
  font-size: 0.9rem;
  font-weight: bold;
  color: #495057;
  margin: 0 1vw;
}

.pi-head-wrapper .pi-head-right {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.pi-head-wrapper .pi-head-right img {
  width: 8vw;
  height: auto;
}

.pi-head-wrapper .pi-head-right span {
  font-size: 1.5rem;
  color: #495057;
}
</style>