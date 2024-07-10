<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const OrdersPeople = ref([
  {
    id: 1,
    name: '青柠X',
    time: '06:30:27.3'
  },
  {
    id: 2,
    name: '阿飞~',
    time: '07:23:47.2'
  },
  {
    id: 3,
    name: '坂本...',
    time: '12:54:25.1'
  },
  {
    id: 4,
    name: '四正',
    time: '21:34:28.7'
  },
  {
    id: 5,
    name: 'yxy123~',
    time: '23:08:43.9'
  },
  {
    id: 6,
    name: '191*...',
    time: '21:52:42.5'
  }
]);

const images = import.meta.glob('@/assets/images/product-info/avatar/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="pin-orders-wrapper">
    <div class="pin-summarize">
      <div class="pin-summarize-left">
        <span>73人在拼，</span>
        <span style="color: #c92a2a;">参与可立即拼成</span>
      </div>
      <span class="iconfont icon-right-1-copy"></span>
    </div>
    <el-scrollbar height="24vw">
      <div v-for="(item, index) in OrdersPeople" :key="item.id" class="scrollbar-item">
        <div class="item-avatar">
          <img :src="imagePaths[index]" alt=""/>
        </div>
        <div class="item-name">
          <span>{{ item.name }}</span>
        </div>
        <div class="item-time">
          <div class="item-time-top">拼单即将结束</div>
          <div class="item-time-down">{{ item.time }}</div>
        </div>
        <div class="item-button">
          <el-button type="danger" size="small" class="item-button-style">直接拼成</el-button>
        </div>
      </div>
    </el-scrollbar>
    <div class="pin-details">
      <div class="best-selling">
        <div class="best-selling-left">
          <img style="width: 5vw; height: auto" src="@/assets/images/product-info/pi2.jpg" alt="">
          <span>畅销榜&nbsp;|&nbsp;品牌有线键盘畅销榜第1名</span>
        </div>
        <span class="iconfont icon-right-1-copy"></span>
      </div>
      <div class="deliver-goods">
        <div class="deliver-goods-left">
          <img style="width: 5vw; height: auto" src="@/assets/images/product-info/pi5.jpg" alt="">
          <span style="margin-left: 2vw; color: #37b24d;">预计12小时内发货&nbsp;</span>
          <span style="color: #495057;">|&nbsp;承诺48小时内发货，超时必赔</span>
        </div>
        <span class="iconfont icon-right-1-copy"></span>
      </div>
      <div class="return-goods">
        <div class="return-goods-left">
          <span>退货包运费</span>
          <span class="iconfont icon-yuandian"></span>
          <span>七天无理由退货</span>
          <span class="iconfont icon-yuandian"></span>
          <span>假一赔十</span>
        </div>
        <span class="iconfont icon-right-1-copy"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pin-orders-wrapper {
  width: 100%;
  background-color: white;
}

.pin-orders-wrapper .pin-summarize {
  width: 100%;
  height: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pin-summarize-left {
  margin: 0 2vw;
  font-weight: bold;
}

.iconfont {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1vw;
  color: #adb5bd;
}

.scrollbar-item {
  width: 100%;
  height: 12vw;
  background-color: white;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 1vw 2vw;
}

.scrollbar-item .item-avatar {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scrollbar-item .item-avatar img {
  width: 10vw;
  height: auto;
  border-radius: 50%;
}

.scrollbar-item .item-name {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
}

.scrollbar-item .item-name span {
  margin-left: 2vw;
  font-weight: bold;
}

.scrollbar-item .item-time {
  width: 28%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.scrollbar-item .item-time .item-time-top {
  font-weight: bold;
  color: #c92a2a;
}

.scrollbar-item .item-time .item-time-down {
  font-weight: 530;
  color: #343a40;
}

.scrollbar-item .item-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scrollbar-item .item-button .item-button-style {
  color: white !important;
  background-color: red !important;
  height: 7vw;
  font-weight: bold;
}

.pin-details {
  width: 100%;
  box-sizing: border-box;
  padding: 0 2vw;
  margin-top: 1vw;
}

.best-selling {
  width: 100%;
  height: 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #ced4da;
}

.best-selling .best-selling-left {
  display: flex;
  align-items: center;
}

.best-selling .best-selling-left span {
  margin-left: 2vw;
  font-weight: bold;
  color: #c92a2a;
}

.deliver-goods {
  width: 100%;
  height: 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #ced4da;
}

.deliver-goods .deliver-goods-left {
  display: flex;
  align-items: center;
}

.deliver-goods .deliver-goods-left span {
  font-size: 0.8rem;
  font-weight: bold;
}

.return-goods {
  width: 100%;
  height: 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #ced4da;
}

.return-goods .return-goods-left {
  display: flex;
  align-items: center;
}

.return-goods .return-goods-left span {
  font-weight: bold;
  color: #495057;
}

.return-goods .return-goods-left .icon-yuandian {
  color: #868e96;
  font-size: 2rem;
}
</style>