<script setup lang="ts">

</script>

<template>
  <div class="subsidy-wrapper">
    <div class="subsidy-wrapper-left">
      <img src="@/assets/images/home/h3.jpg" alt="">
      <span>百亿补贴</span>
      <div class="low-price">
        <img src="@/assets/images/home/h4.jpg" alt="">
        <span>全网低价</span>
      </div>
    </div>
    <div class="subsidy-wrapper-right">
      <div class="subsidy-item">
        <img src="@/assets/images/home/subsidy/s1.jpg" alt="">
        <span>&#165;299</span>
      </div>
      <div class="subsidy-item">
        <img src="@/assets/images/home/subsidy/s2.jpg" alt="">
        <span>&#165;999</span>
      </div>
      <div class="subsidy-item">
        <img src="@/assets/images/home/subsidy/s3.jpg" alt="">
        <span>&#165;26.7</span>
      </div>
      <div class="subsidy-item">
        <img src="@/assets/images/home/subsidy/s4.jpg" alt="">
        <span>&#165;29999</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subsidy-wrapper {
  width: 100%;
  height: 30vw;
  background-color: white;

  box-sizing: border-box;
  padding: 2vw 1vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.subsidy-wrapper .subsidy-wrapper-left {
  width: 23%;
  height: 100%;
  border-right: solid 1px #adb5bd;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.subsidy-wrapper .subsidy-wrapper-left img {
  width: 12vw;
  height: 12vw;
}

.subsidy-wrapper .subsidy-wrapper-left span {
  font-size: 1.05rem;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
  font-weight: bold;
}

.subsidy-wrapper .subsidy-wrapper-left .low-price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subsidy-wrapper .subsidy-wrapper-left .low-price img {
  width: 5vw;
  height: 5vw;
}

.subsidy-wrapper .subsidy-wrapper-left .low-price span {
  font-size: 0.9rem;
  color: #e67700;
  margin-left: 0.5vw;
}

.subsidy-wrapper .subsidy-wrapper-right {
  width: 77%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.subsidy-wrapper .subsidy-wrapper-right .subsidy-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.subsidy-wrapper .subsidy-wrapper-right .subsidy-item img {
  width: 16vw;
  height: 16vw;
  margin-bottom: 2.5vw;
}

.subsidy-wrapper .subsidy-wrapper-right .subsidy-item span {
  color: #c92a2a;
  font-weight: bold;
}
</style>