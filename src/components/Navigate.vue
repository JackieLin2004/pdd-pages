<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="navigate">
    <RouterLink :to="{name:'home'}" active-class="active">
      <div class="menu">
        <span class="iconfont icon-shouye"></span>
        <span>首页</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'video'}" active-class="active">
      <div class="menu">
        <span class="iconfont icon-shipin"></span>
        <span>多多视频</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'coupon'}" active-class="active">
      <div class="menu">
        <span class="iconfont icon-icon-test"></span>
        <span>暑假优惠券</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'chat'}" active-class="active">
      <div class="menu">
        <span class="iconfont icon-bg-chat"></span>
        <span>聊天</span>
      </div>
    </RouterLink>
    <RouterLink :to="{name:'person'}" active-class="active">
      <div class="menu">
        <span class="iconfont icon-gerenzhongxin"></span>
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
  font-size: 1rem;
}

.navigate a.active {
  color: #c92a2a;
}

.navigate .menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigate .menu .iconfont {
  font-size: 1.8rem;
}
</style>