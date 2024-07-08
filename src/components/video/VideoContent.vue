<script setup lang="ts">

</script>

<template>
  <div class="video-content-wrapper">
    <div class="background-image">
      <img src="@/assets/images/video/v1.jpg" alt="">
    </div>
    <div class="video-content">
      <div class="video-content-top">
        <div class="video-content-top-top">
          <img src="@/assets/images/video/v2.png" alt=""/>
        </div>
        <div class="video-content-top-down">
          <div class="video-content-top-down-left">
            <div class="video-content-top-down-top"></div>
            <div class="video-content-top-down-middle">
              <img src="@/assets/images/video/v3.png" alt="">
            </div>
            <div class="video-content-top-down-down">
              <span>@亿哥追剧</span>
              <span>#影视解说 金刚大战哥斯拉电影...</span>
            </div>
          </div>
          <div class="video-content-top-down-right">
            <div class="video-content-top-down-right-top"></div>
            <div class="video-content-top-down-right-down">
              <img src="@/assets/images/video/v4.jpg" alt="">
              <div><span>+&thinsp;关注</span></div>
              <span class="iconfont icon-dianzan"></span>
              <span class="video-data">2.2万</span>
              <span class="iconfont icon-pinglun"></span>
              <span class="video-data">65</span>
              <span class="iconfont icon-zhuanfa"></span>
              <span class="video-data">分享</span>
            </div>
          </div>
        </div>
      </div>
      <div class="video-content-down">
        <div class="video-content-down-left">
          <span class="iconfont icon-sousuo"></span>
          <span>大家都在搜：计算机组成原理</span>
        </div>
        <div class="video-content-down-right">
          <span class="iconfont icon-right-1-copy"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-content-wrapper {
  position: relative;
  width: 100%;
  height: 85vh;
  background-color: black;
  margin-top: 8vh;
}

.video-content-wrapper .background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-content-wrapper .background-image img {
  width: 100%;
  margin-bottom: 10vh;
}

.video-content-wrapper .video-content {
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100%;
  color: white;
}

.video-content-wrapper .video-content .video-content-top {
  width: 100%;
  height: 95%;
}

.video-content-wrapper .video-content .video-content-down {
  width: 100%;
  height: 5%;
  background-color: #161618;
  display: flex;
}

.video-content-wrapper .video-content .video-content-down .video-content-down-left {
  width: 92%;
  height: 100%;
  display: flex;
  align-items: center;
}

.video-content-wrapper .video-content .video-content-down .video-content-down-left span {
  color: white;
  font-weight: bold;
  margin-left: 2vw;
  margin-bottom: 0.5vw;
}

.video-content-wrapper .video-content .video-content-down .video-content-down-right {
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-content-wrapper .video-content .video-content-down .video-content-down-right span {
  color: #adb5bd;
  font-weight: bold;
  margin-bottom: 0.5vw;
}

.video-content-top-top {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-content-top-top img {
  width: 50vw;
  margin-left: 45vw;
}

.video-content-top-down {
  width: 100%;
  height: 80%;
  display: flex;
}

.video-content-top-down-left {
  width: 80%;
  height: 100%;
}

.video-content-top-down-left .video-content-top-down-top {
  width: 100%;
  height: 55%;
}

.video-content-top-down-left .video-content-top-down-middle {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-content-top-down-left .video-content-top-down-middle img {
  width: 25vw;
  margin: 2vw 0 0 15vw;
}

.video-content-top-down-left .video-content-top-down-down {
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  margin: 30vw 0 2vw 2vw;
}

.video-content-top-down-left .video-content-top-down-down span {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1vw 0;
}

.video-content-top-down-left .video-content-top-down-down span:last-child {
  font-size: 1.1rem;
}

.video-content-top-down-right {
  width: 20%;
  height: 100%;
}

.video-content-top-down-right .video-content-top-down-right-top {
  width: 100%;
  height: 40%;
}

.video-content-top-down-right .video-content-top-down-right-down {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.video-content-top-down-right .video-content-top-down-right-down img {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
}

.video-content-top-down-right .video-content-top-down-right-down div {
  width: 14vw;
  height: 6vw;
  background-color: red;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: -3vw;
  margin-bottom: 5vw;
}

.video-content-top-down-right .video-content-top-down-right-down .video-data {
  margin-bottom: 4vw;
  font-size: 1rem;
  font-weight: 500;
}


.video-content-top-down-right .video-content-top-down-right-down .iconfont {
  font-size: 2rem;
  color: white;
  margin-bottom: 1.2vw;
}
</style>