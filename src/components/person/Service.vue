<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const ServiceList = ref([
  {
    id: 1,
    name: '优惠券'
  },
  {
    id: 2,
    name: '商品收藏'
  },
  {
    id: 3,
    name: '店铺关注'
  },
  {
    id: 4,
    name: '历史浏览'
  },
  {
    id: 5,
    name: '退款售后'
  }
])

const images = import.meta.glob('@/assets/images/person/service/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="service-wrapper">
    <div v-for="(item, index) in ServiceList" :key="item.id">
      <div class="service-item">
        <img :src="imagePaths[index]" alt="">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-wrapper {
  width: 100%;
  height: 25vw;
  background-color: white;
  box-sizing: border-box;
  padding: 1vw 3vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.service-wrapper .service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-wrapper .service-item img {
  width: 12vw;
  height: auto;
}

.service-wrapper .service-item span {
  font-size: 0.8rem;
  font-weight: bold;
  color: #495057;
  margin-top: 2vw;
}
</style>