<script setup lang="ts">
import {getImages} from "@/utils/getImagesUtil";

const images = import.meta.glob('@/assets/images/product-info/other-show/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="other-show-wrapper">
    <img src="@/assets/images/product-info/pi6.jpg" alt=""/>
    <div v-for="(path, index) in imagePaths" :key="index">
      <img class="no-gap" :src="path" alt="">
    </div>
  </div>
</template>

<style scoped>
.other-show-wrapper {
  width: 100%;
}

.other-show-wrapper img {
  width: 100%;
  height: auto;
}

/* 取消两张图片之间的缝隙 */
.other-show-wrapper .no-gap {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
}
</style>