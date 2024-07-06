<script setup lang="ts">

</script>

<template>
  <div class="pxq-wrapper">
    <div class="pxq-left">
      <img src="@/assets/images/home/h1.png" alt="">
      <strong><span>拼小圈</span></strong>
    </div>
    <div class="pxq-right">
      <img src="@/assets/images/home/h2.png" alt="">
      <span>新动态和提醒</span>
      <div class="message">27</div>
      <span class="iconfont icon-right-1-copy"></span>
    </div>
  </div>
</template>

<style scoped>
.pxq-wrapper {
  background-color: white;
  width: 100%;
  height: 13vw;

  box-sizing: border-box;
  padding: 2vw 3vw;

  display: flex;
}

.pxq-wrapper .pxq-left {
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
}

.pxq-wrapper .pxq-left img {
  width: 12vw;
  margin-right: 1vw;
}

.pxq-wrapper .pxq-left span {
  font-size: 1.05rem;
  font-weight: 700;
}

.pxq-wrapper .pxq-right {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1vw;
}

.pxq-wrapper .pxq-right img {
  width: 25vw;
  margin-right: 1vw;
}

.pxq-wrapper .pxq-right span {
  font-size: 0.85rem;
  font-weight: 700;
  color: #868e96;
}

.pxq-wrapper .pxq-right .message {
  width: 7vw;
  height: 6vw;
  background-color: red;
  color: white;
  border-radius: 45%;
  margin-left: 1vw;
  margin-right: 1vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>