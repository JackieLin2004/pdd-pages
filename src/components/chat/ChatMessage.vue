<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const MessageList = ref([
  {
    id: 1,
    name: '优惠活动通知',
    date: '11:57',
    message: '优惠券过期提醒',
    isOfficial: true
  },
  {
    id: 2,
    name: '物流助手',
    date: '10:03',
    message: '商品代取件提醒',
    isOfficial: true
  },
  {
    id: 3,
    name: '多多支付',
    date: '昨天',
    message: '转账入账通知',
    isOfficial: true
  },
  {
    id: 4,
    name: '林硕胶带专营店',
    date: '星期六',
    message: '亲亲，一般情况48小时内发货',
    isOfficial: false
  },
  {
    id: 5,
    name: '交易通知',
    date: '星期六',
    message: '拼单成功通知',
    isOfficial: true
  },
  {
    id: 6,
    name: '艇宇数码专营店',
    date: '星期四',
    message: '亲，这款商品已有1000+人好评过，品...',
    isOfficial: false
  }
])

const images = import.meta.glob('@/assets/images/chat/message-icon/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="message-wrapper">
    <div v-for="(message, index) in MessageList" :key="message.id">
      <div class="message-item">
        <div class="message-item-left">
          <img :src="imagePaths[index]" alt="">
        </div>
        <div class="message-item-right">
          <div class="message-item-right-top">
            <div class="message-name-and-official">
              <span>{{ message.name }}</span>
              <div v-if="message.isOfficial" class="message-official">官方</div>
            </div>
            <span>{{ message.date }}</span>
          </div>
          <div class="message-item-right-down">
            <span>{{ message.message }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="message-fold">
      <div class="message-fold-left">
        <span class="iconfont
        icon-xiaoxitongzhitixinglingshenglingdang-xianxing"></span>
        <div>已折叠一周前的消息</div>
      </div>
      <div class="message-fold-right">
        <div>展开</div>
        <span class="iconfont icon-xiangxia"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-wrapper {
  width: 100%;
  margin-top: 15vw;
  background-color: white;
}

.message-wrapper .message-item {
  width: 100%;
  height: 20vw;
  display: flex;
}

.message-wrapper .message-item:hover {
  background-color: #ced4da;
}

.message-wrapper .message-item .message-item-left {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-wrapper .message-item .message-item-left img {
  width: 15vw;
}

.message-wrapper .message-item .message-item-right {
  width: 80%;
  height: 100%;
  border-bottom: solid 1px #dee2e6;
}

.message-item-right-top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5vw;
}

.message-item-right-top span {
  color: #868e96;
  font-weight: 550;
  margin: 0 1.5vw;
}

.message-name-and-official {
  display: flex;
}

.message-name-and-official span {
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
}

.message-official {
  width: 9vw;
  height: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #c92a2a;
  color: #c92a2a;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1rem;
}

.message-item-right-down {
  width: 100%;
  height: 50%;
}

.message-item-right-down span {
  margin-left: 1.5vw;
  color: #868e96;
  font-weight: bold;
  font-size: 0.95rem;
}


.message-wrapper .message-fold {
  width: 100%;
  height: 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: solid 1px #ced4da;
}

.message-wrapper .message-fold .message-fold-left {
  width: 83%;
  height: 100%;
  display: flex;
  align-items: center;
}

.message-wrapper .message-fold .message-fold-left span {
  margin: 0 1.5vw 0 3vw;
  font-size: 1.3rem;
  font-weight: 500;
  color: #868e96;
}

.message-wrapper .message-fold .message-fold-left div {
  color: black;
  font-size: 1rem;
  font-weight: bold;
}

.message-wrapper .message-fold .message-fold-right {
  width: 17%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868e96;
}

.message-wrapper .message-fold .message-fold-right div {
  font-size: 1rem;
  font-weight: bold;
}

.message-wrapper .message-fold .message-fold-right span {
  margin: 0 2vw 0 0.5vw;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>