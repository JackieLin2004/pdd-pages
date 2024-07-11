<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter();
const TurnToLogin = () => {
  router.push({name: 'login'});
}
</script>

<template>
  <div class="person-info-wrapper">
    <div class="person-info-left" @click="TurnToLogin">
      <img src="@/assets/images/person/p1.jpg" alt="">
    </div>
    <div class="person-info-middle">
      <div class="person-info-middle-top">
        <span class="name">轩哲翰墨</span>
        <span class="iconfont icon-weixin"></span>
        <span class="iconfont icon-right-1-copy"></span>
      </div>
      <div class="person-info-middle-down">
        <span class="iconfont icon-dizhi"></span>
        <span>我的收获地址</span>
        <span class="iconfont icon-right-1-copy"></span>
      </div>
    </div>
    <div class="person-info-right">
      <el-button round class="p-button">
        <span class="iconfont icon-weixinzhifu"></span>
        <span>免单返现金</span>
        <span class="iconfont icon-right-1-copy"></span>
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.person-info-wrapper {
  width: 100%;
  height: 15vw;
  display: flex;
  background-color: white;
  border-bottom: solid 1px #ced4da;
}

.person-info-wrapper .person-info-left {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.person-info-wrapper .person-info-left img {
  width: 13vw;
  height: auto;
  border-radius: 50%;
}

.person-info-wrapper .person-info-middle {
  width: 45%;
  height: 100%;
}

.person-info-middle-top {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  margin-top: 0.6vw;
}

.person-info-middle-top span {
  margin-left: 2vw;
}

.person-info-middle-top .name {
  font-size: 1.1rem;
  font-weight: bold;
}

.person-info-middle-top .iconfont {
  font-size: 1.8rem;
  color: #37b24d;
}

.person-info-middle-top .iconfont:last-child {
  font-size: 1.1rem;
  color: #adb5bd;
  margin-left: 1vw;
  font-weight: bold;
}

.person-info-middle-down {
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
}

.person-info-middle-down span {
  color: #adb5bd;
  margin-left: 2vw;
  margin-bottom: 1.2vw;
  font-weight: bold;
}

.person-info-middle-down span:last-child {
  margin-left: 1vw;
}

.person-info-wrapper .person-info-right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.p-button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #868e96;
}

.p-button:hover,
.p-button:focus,
.p-button:active {
  background-color: initial !important;
  border-color: #868e96;
  color: #868e96;
}

.p-button span {
  font-size: 1rem;
  font-weight: bold;
}

.p-button .icon-weixinzhifu {
  color: #37b24d;
  margin-right: 1vw;
}

.p-button .icon-right-1-copy {
  color: #868e96;
}
</style>