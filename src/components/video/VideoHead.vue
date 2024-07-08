<script setup lang="ts">

</script>

<template>
  <div class="video-head-wrapper">
    <div class="video-head-left">
      <span class="iconfont icon-wode"></span>
    </div>
    <div class="video-head-middle">
      <span>直播</span>
      <span>关注</span>
      <span>短剧</span>
      <span>推荐</span>
    </div>
    <div class="video-head-right">
      <span class="iconfont icon-sousuo"></span>
      <span class="iconfont icon-zhaoxiangji"></span>
    </div>
  </div>
</template>

<style scoped>
.video-head-wrapper {
  width: 100%;
  height: 8vh;
  background-color: black;

  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

.video-head-wrapper .video-head-left {
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.video-head-wrapper .video-head-left .icon-wode {
  color: white;
  font-size: 1.5rem;
}

.video-head-wrapper .video-head-middle {
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.video-head-wrapper .video-head-middle span {
  color: #868e96;
  font-weight: bold;
  font-size: 1.05rem;

  height: 8vw;
  margin-top: 2vw;
}

.video-head-wrapper .video-head-middle span:last-child {
  color: white;
  border-bottom: solid 2px white;
}

.video-head-wrapper .video-head-right {
  width: 25%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.video-head-wrapper .video-head-right .iconfont {
  color: white;
  font-size: 1.5rem;
  margin: 0 2vw;
}
</style>