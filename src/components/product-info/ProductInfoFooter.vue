<script setup lang="ts">

</script>

<template>
  <div class="productInfo-footer-wrapper">
    <div class="footer-left">
      <div class="footer-item">
        <div class="item-icon">
          <span style="font-size: 1.4rem;" class=" iconfont icon-dianpu"></span>
        </div>
        <span class="text">店铺</span>
      </div>
      <div class="footer-item">
        <div class="item-icon">
          <span style="font-size: 1.5rem; font-weight: 500" class="iconfont icon-shoucang"></span>
        </div>
        <span class="text">收藏</span>
      </div>
      <div class="footer-item">
        <div class="item-icon">
          <span style="font-size: 1.65rem" class="iconfont icon-xiaoxi"></span>
        </div>
        <span class="text">客服</span>
      </div>
    </div>
    <div class="footer-middle">
      <span>&#165;299</span>
      <span>单独购买</span>
    </div>
    <div class="footer-right">
      <span>&#165;149</span>
      <span>发起拼单</span>
    </div>
  </div>
</template>

<style scoped>
.productInfo-footer-wrapper {
  width: 100%;
  height: 16vw;
  border-top: solid 1px #dddddd;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: white;
}

.productInfo-footer-wrapper .footer-left {
  width: 34%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.productInfo-footer-wrapper .footer-left .footer-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.productInfo-footer-wrapper .footer-left .footer-item .item-icon {
  width: 6.5vw;
  height: 6.5vw;
  display: flex;
  justify-content: center;
  align-items: center
}

.productInfo-footer-wrapper .footer-left .footer-item .text {
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 1vw;
  color: #495057;
}

.productInfo-footer-wrapper .footer-left .footer-item .iconfont {
  color: #495057;
}

.productInfo-footer-wrapper .footer-middle, .footer-right {
  width: 33%;
  height: 100%;
  background-color: #ffa8a8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
}

.productInfo-footer-wrapper .footer-right {
  background-color: #c92a2a;
}
</style>