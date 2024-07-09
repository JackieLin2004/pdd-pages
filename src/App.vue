<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import Navigate from "@/components/Navigate.vue";
import {RouterView} from "vue-router";

// 获取当前路由
const route = useRoute();

// 通过计算属性实现一个响应式引用来存储是否显示Navigate组件的条件
const showNavigate = computed(() => {
  const validRoutes = ['recommend', 'computer', 'video', 'coupon', 'chat', 'person'];
  return validRoutes.includes(route.name as string);
});
</script>

<template>
  <RouterView></RouterView>
  <!-- 使用v-if根据showNavigate的值来决定是否渲染Navigate组件 -->
  <!-- 此处并不需要频繁操作，所以使用v-if -->
  <navigate v-if="showNavigate"/>
</template>

<style scoped>

</style>