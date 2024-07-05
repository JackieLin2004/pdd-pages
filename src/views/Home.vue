<script setup lang="ts">
import {RouterView} from "vue-router";
import HomeHead from "@/components/home/HomeHead.vue";
</script>

<template>
  <div class="home-rapper">
    <HomeHead/>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.home-rapper {
  width: 100vw;
  height: 100vh;
  background-color: #dee2e6;
}
</style>