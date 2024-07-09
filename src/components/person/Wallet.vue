<script setup lang="ts">

</script>

<template>
  <div class="wallet-wrapper">
    <div class="wallet-left">多多钱包</div>
    <div class="wallet-right">
      <span>余额&#165;5.19，购物可直接使用</span>
      <span class="iconfont icon-right-1-copy"></span>
    </div>
  </div>
</template>

<style scoped>
.wallet-wrapper {
  width: 100%;
  height: 12vw;
  box-sizing: border-box;
  padding: 1vw 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}

.wallet-wrapper .wallet-left {
  font-size: 1.2rem;
  font-weight: bold;
}

.wallet-wrapper .wallet-right {
  display: flex;
  align-items: center;
}

.wallet-wrapper .wallet-right span {
  font-size: 1rem;
  font-weight: bold;
  color: #c92a2a;
}

.wallet-wrapper .wallet-right .iconfont {
  color: #868e96;
  margin-top: 0.3vw;
  margin-left: 1vw;
}
</style>