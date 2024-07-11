<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
}
</script>

<template>
  <div class="payment-head-wrapper">
    <div class="payment-head-left">
      <span class="iconfont icon-xiangzuo_o" @click="goBack"></span>
    </div>
    <div class="payment-head-middle">
      <img src="@/assets/images/payment/pay1.jpg" alt=""/>
      <span>品牌有线键盘畅销榜&nbsp;第1名</span>
    </div>
    <div class="payment-head-right">
      <span class="iconfont icon-jiaocha" @click="goBack"></span>
    </div>
  </div>
</template>

<style scoped>
.payment-head-wrapper {
  width: 100vw;
  height: 12vw;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
}

.payment-head-wrapper .payment-head-left {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.payment-head-wrapper .payment-head-left span {
  font-size: 1.5rem;
  color: #495057;
}

.payment-head-wrapper .payment-head-middle {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.payment-head-wrapper .payment-head-middle img {
  width: 6vw;
  height: auto;
}

.payment-head-wrapper .payment-head-middle span {
  font-weight: bold;
  margin-left: 2vw;
  color: #c92a2a;
}

.payment-head-wrapper .payment-head-right {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.payment-head-wrapper .payment-head-right span {
  font-size: 1rem;
  color: #495057;
}
</style>