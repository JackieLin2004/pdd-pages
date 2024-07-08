<script setup lang="ts">
import VideoHead from "@/components/video/VideoHead.vue";
import VideoContent from "@/components/video/VideoContent.vue";
</script>

<template>
  <div class="video-wrapper">
    <VideoHead/>
    <VideoContent/>
  </div>
</template>

<style scoped>
.video-wrapper {
  width: 100vw;
  height: 90vh;
  background-color: black;
}
</style>