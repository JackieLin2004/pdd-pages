<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const OtherServiceList = ref([
  {
    id: 1,
    name: '火车票'
  },
  {
    id: 2,
    name: '多多牧场'
  },
  {
    id: 3,
    name: '新客立减'
  },
  {
    id: 4,
    name: '官方客服'
  },
  {
    id: 5,
    name: '设置'
  }
])

const images = import.meta.glob('@/assets/images/person/other-service/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="service-wrapper">
    <div v-for="(item, index) in OtherServiceList" :key="item.id">
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