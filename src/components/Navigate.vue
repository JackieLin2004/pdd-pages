<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="navigate">
    <RouterLink :to="{name:'home'}" active-class="active">首页</RouterLink>
    <RouterLink :to="{name:'video'}" active-class="active">多多视频</RouterLink>
    <RouterLink :to="{name:'coupon'}" active-class="active">暑假优惠券</RouterLink>
    <RouterLink :to="{name:'chat'}" active-class="active">聊天</RouterLink>
    <RouterLink :to="{name:'person'}" active-class="active">个人中心</RouterLink>
  </div>
</template>

<style scoped>
.navigate {
  display: flex;
  justify-content: space-around;
}
</style>