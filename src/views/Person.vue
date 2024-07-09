<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import PersonHead from "@/components/person/PersonHead.vue";
import PersonInfo from "@/components/person/PersonInfo.vue";
import MyOrders from "@/components/person/MyOrders.vue";
import Wallet from "@/components/person/Wallet.vue";
import Service from "@/components/person/Service.vue";
import OtherService from "@/components/person/OtherService.vue";
import ComputerProducts from "@/components/home/computer/ComputerProducts.vue";

// 定义当前组件状态，初始值为 true，表示显示 PersonInfo
const showPersonInfo = ref(true);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // 计算 15vw 对应的像素值
  const threshold = window.innerWidth * 0.15;

  // 根据滚动位置更新 showPersonInfo 的值
  showPersonInfo.value = scrollTop <= threshold;
};

// 在组件挂载时添加滚动事件监听器
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 在组件卸载时移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="person-wrapper">
    <!-- 根据 showPersonInfo 的值条件渲染组件 -->
    <div class="fade">
      <PersonInfo v-show="showPersonInfo"/>
      <PersonHead v-show="!showPersonInfo"/>
    </div>
    <div class="separate"></div>
    <MyOrders/>
    <div class="separate"></div>
    <Wallet/>
    <div class="separate"></div>
    <Service/>
    <div class="separate"></div>
    <OtherService/>
    <div class="separate"></div>
    <!--组件复用，复用电脑商品的列表-->
    <div class="person-products">
      <ComputerProducts/>
    </div>
  </div>
</template>

<style scoped>
.person-wrapper {
  width: 100%;
  background-color: #dee2e6;
}

.person-wrapper .separate {
  width: 100%;
  height: 3vw;
}

/* 当元素开始进入或离开时，这些样式应用于元素，以实现平滑的过渡效果 */
.fade-enter-active, .fade-leave-active {
  /* 设置过渡效果为改变透明度，持续时间为0.5秒 */
  /* 这意味着当元素开始进入或离开时，其透明度将在0.5秒内从0变化到1（进入）或从1变化到0（离开） */
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  /* 将元素的透明度设置为0，意味着它完全透明，不可见 */
  /* 这在元素进入前和离开后都是必需的，以创建淡入和淡出的视觉效果 */
  opacity: 0;
}

/* 确保所有使用fade类的组件具有一致的位置和大小 */
.fade {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.person-products {
  width: 100%;
  background-color: #dee2e6;
}
</style>
