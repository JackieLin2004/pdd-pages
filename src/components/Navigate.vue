<script setup lang="ts">
import {RouterLink, useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <div :class="['navigate', { 'video-page': route.name === 'video' }]">
    <RouterLink :to="{name:'home'}" active-class="active">
      <div class="menu">
        <div class="icon-font">
          <span class="iconfont icon-shouye"></span>
        </div>
        <span>首页</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'video'}" active-class="active1">
      <div class="menu">
        <div class="icon-font">
          <span class="iconfont icon-shipin"></span>
        </div>
        <span>多多视频</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'coupon'}" active-class="active">
      <div class="menu">
        <div class="icon-font">
          <strong>
            <span style="font-size: 1.5rem;margin-right: 0.5vw">&#165</span>
          </strong>
          <strong>
            <span class="iconfont icon-icon-test" style="font-size: 2.25rem;margin-left: 0.5vw"></span>
          </strong>
        </div>
        <span>暑假优惠券</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'chat'}" active-class="active">
      <div class="menu">
        <div class="icon-font">
          <span class="iconfont icon-bg-chat"></span>
        </div>
        <span>聊天</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'person'}" active-class="active">
      <div class="menu">
        <div class="icon-font">
          <span class="iconfont icon-gerenzhongxin" style="font-size: 2.25rem"></span>
        </div>
        <span>个人中心</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.navigate {
  width: 100%;
  height: 16vw;
  border-top: solid 1px #dddddd;
  z-index: 999;

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;
}

.navigate a {
  text-decoration: none;

  color: #495057;
  user-select: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 0.9rem;
}

.navigate a.active {
  color: #c92a2a;
}

.navigate a.active1 {
  color: #dee2e6;
}

.navigate .menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigate .menu .icon-font {
  width: 8vw;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigate .menu .icon-font .iconfont {
  font-size: 1.8rem;
}

.video-page {
  height: 16.1vw;
  background-color: #1c1d1f;
}
</style>