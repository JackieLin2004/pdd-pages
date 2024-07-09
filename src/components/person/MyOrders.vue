<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const MyOrdersList = ref([
  {
    id: 1,
    name: '待付款'
  },
  {
    id: 2,
    name: '待分享'
  },
  {
    id: 3,
    name: '待发货'
  },
  {
    id: 4,
    name: '待收获'
  },
  {
    id: 5,
    name: '评价'
  }
])

const images = import.meta.glob('@/assets/images/person/my-orders/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="my-order-wrapper">
    <div class="my-order-top">
      <span>我的订单</span>
      <div class="order-top-right">
        <span style="font-size: 1rem; color: #868e96">查看全部&nbsp;</span>
        <span style="font-size: 1rem; color: #868e96" class="iconfont icon-right-1-copy"></span>
      </div>
    </div>
    <div class="my-order-down">
      <div v-for="(item, index) in MyOrdersList" :key="item.id">
        <div class="orders-item">
          <img :src="imagePaths[index]" alt="">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-order-wrapper {
  width: 100%;
  height: 35vw;
  background-color: white;
  margin-top: 15vw;

  box-sizing: border-box;
  padding: 1vw 3vw;
}

.my-order-wrapper .my-order-top {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.my-order-wrapper .my-order-top span:first-child {
  font-size: 1.2rem;
  font-weight: bold;
}

.order-top-right {
  display: flex;
  align-items: center;
}

.my-order-wrapper .my-order-down {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.my-order-wrapper .my-order-down .orders-item {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.my-order-wrapper .my-order-down .orders-item img {
  width: 12vw;
  height: auto;
}

.my-order-wrapper .my-order-down .orders-item span {
  font-size: 0.8rem;
  font-weight: bold;
  color: #495057;
  margin-top: 2vw;
}
</style>