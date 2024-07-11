<script setup lang="ts">

</script>

<template>
  <div class="suggestion-wrapper">
    <span>使用</span>
    <img src="@/assets/images/payment/pay2.jpg" alt=""/>
    <span>多多支付随机立减，更换支付方式</span>
    <span class="iconfont icon-right-1-copy"></span>
  </div>
</template>

<style scoped>
.suggestion-wrapper {
  width: 100%;
  height: 10vw;
  position: fixed;
  left: 0;
  bottom: 16vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.suggestion-wrapper img {
  width: 5vw;
  height: auto;
  margin: 0 0.5vw;
}

.suggestion-wrapper span {
  font-size: 1rem;
  font-weight: bold;
  color: #495057;
}

.suggestion-wrapper .iconfont {
  margin-top: 0.5vw;
  margin-left: 0.5vw;
}
</style>