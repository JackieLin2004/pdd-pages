<script setup lang="ts">

</script>

<template>
  <div class="ad-wrapper">
    <div class="ad-left">
      <div class="ad-left-left">
        <div class="ad-left-left-top">
          <img src="@/assets/images/home/h7.jpg" alt="">
          <span>排行榜</span>
        </div>
        <div class="ad-left-left-down">
          <span>每日更新</span>
        </div>
      </div>
      <div class="ad-left-right">
        <img src="@/assets/images/home/advertisement/ad1.jpg" alt="">
        <img src="@/assets/images/home/advertisement/ad2.jpg" alt="">
      </div>
    </div>
    <div class="ad-right">
      <div class="ad-right-left">
        <div class="ad-right-left-top">
          <span>小编推荐</span>
        </div>
        <div class="ad-right-left-down">
          <span>精选好货</span>
        </div>
      </div>
      <div class="ad-right-right">
        <img src="@/assets/images/home/advertisement/ad3.jpg" alt="">
        <img src="@/assets/images/home/advertisement/ad4.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.ad-wrapper {
  width: 100%;
  height: 20vw;
  background-color: white;

  box-sizing: border-box;
  padding: 2vw 2.5vw;

  display: flex;
}

.ad-wrapper .ad-left {
  width: 50%;
  height: 100%;
  border-right: solid 1px #adb5bd;
  display: flex;
}

.ad-wrapper .ad-left .ad-left-left {
  width: 40%;
  height: 100%;
}

.ad-wrapper .ad-left .ad-left-left .ad-left-left-top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ad-wrapper .ad-left .ad-left-left .ad-left-left-top img {
  width: 5vw;
  height: 5vw;
}

.ad-wrapper .ad-left .ad-left-left .ad-left-left-top span {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1vw;
}

.ad-wrapper .ad-left .ad-left-left .ad-left-left-down {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ad-wrapper .ad-left .ad-left-left .ad-left-left-down span {
  font-size: 0.9rem;
  font-weight: bold;
  color: #868e96;
}

.ad-wrapper .ad-left .ad-left-right {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ad-wrapper .ad-left .ad-left-right img {
  width: 12vw;
  height: 12vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}

.ad-wrapper .ad-right {
  width: 50%;
  height: 100%;
  border-left: solid 1px #adb5bd;
  display: flex;
}

.ad-wrapper .ad-right .ad-right-left {
  width: 40%;
  height: 100%;
  margin-left: 2vw;
}

.ad-wrapper .ad-right .ad-right-left .ad-right-left-top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ad-wrapper .ad-right .ad-right-left .ad-right-left-top span {
  font-size: 1rem;
  font-weight: bold;
}

.ad-wrapper .ad-right .ad-right-left .ad-right-left-down {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ad-wrapper .ad-right .ad-right-left .ad-right-left-down span {
  font-size: 0.9rem;
  font-weight: bold;
  color: #868e96;
}

.ad-wrapper .ad-right .ad-right-right {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ad-wrapper .ad-right .ad-right-right img {
  width: 12vw;
  height: 12vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}
</style>