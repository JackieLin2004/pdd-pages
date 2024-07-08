<script setup lang="ts">
import {RouterView} from "vue-router";
import HomeHead from "@/components/home/HomeHead.vue";
</script>

<template>
  <div class="home-wrapper">
    <HomeHead/>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.home-wrapper {
  width: 100vw;
  background-color: #dee2e6;
}
</style>