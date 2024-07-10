<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
}
</script>

<template>
  <div class="pi-head-slide-wrapper">
    <div class="pi-head-slide-left" @click="goBack">
      <span class="iconfont icon-xiangzuo_o"></span>
    </div>
    <div class="pi-head-slide-middle">
      <img src="@/assets/images/product-info/pi7.png" alt="">
      <span>已拼1.2万+件&nbsp;|&nbsp;即将售罄</span>
    </div>
    <div class="pi-head-slide-right">
      <span class="iconfont icon-shangchuan"></span>
    </div>
  </div>
</template>

<style scoped>
.pi-head-slide-wrapper {
  width: 100%;
  height: 15vw;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #c92a2a;
  border-bottom: solid 1px #ced4da;
}

.pi-head-slide-wrapper .pi-head-slide-left {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-head-slide-wrapper .pi-head-slide-left span {
  font-size: 1.5rem;
  color: white;
}

.pi-head-slide-wrapper .pi-head-slide-middle {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-head-slide-wrapper .pi-head-slide-middle img {
  width: 8vw;
  height: auto;
  border-radius: 3px;
}

.pi-head-slide-wrapper .pi-head-slide-middle span {
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  margin: 0 1vw;
}

.pi-head-slide-wrapper .pi-head-slide-right {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-head-slide-wrapper .pi-head-slide-right img {
  width: 8vw;
  height: auto;
}

.pi-head-slide-wrapper .pi-head-slide-right span {
  font-size: 1.5rem;
  color: white;
}
</style>