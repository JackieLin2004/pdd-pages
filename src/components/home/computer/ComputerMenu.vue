<script setup lang="ts">
import {ref, onMounted} from "vue";

const ComputerMenuList = ref([
  {
    id: 1,
    name: '笔记本电脑'
  },
  {
    id: 2,
    name: '鼠标键盘'
  },
  {
    id: 3,
    name: '台式电脑'
  },
  {
    id: 4,
    name: '游戏电玩'
  },
  {
    id: 5,
    name: '显示器'
  },
  {
    id: 6,
    name: '外设配件'
  },
  {
    id: 7,
    name: '平板电脑'
  },
  {
    id: 8,
    name: '显卡'
  },
  {
    id: 9,
    name: '3C配件'
  },
  {
    id: 10,
    name: '苹果'
  },
  {
    id: 11,
    name: '电脑硬件'
  },
  {
    id: 12,
    name: '办公设备'
  },
  {
    id: 13,
    name: '学习机'
  },
  {
    id: 14,
    name: '网络设备'
  },
  {
    id: 15,
    name: '路由器'
  }
]);

const images = import.meta.glob('@/assets/images/home/computer-menu/*.jpg');
const imagePaths = ref<string[]>([]);

onMounted(async () => {
  const imageKeys = Object.keys(images).sort((a, b) => {
    // 对图片路径的键进行排序，确保按自然数字顺序加载图片，采用正则化的方式
    const aNumber = parseInt(a.match(/(\d+)/)?.[0] || '0');
    const bNumber = parseInt(b.match(/(\d+)/)?.[0] || '0');
    return aNumber - bNumber;
  });
  for (let i = 0; i < imageKeys.length; i++) {
    const loadImage = images[imageKeys[i]];
    const imageModule = await loadImage() as { default: string };
    imagePaths.value.push(imageModule.default);
  }
});
</script>

<template>
  <div class="cm-wrapper">
    <div v-for="(cmItem, index) in ComputerMenuList" :key="cmItem.id">
      <div class="cm-item">
        <img :src="imagePaths[index]" alt="">
        <span>{{ cmItem.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-wrapper {
  width: 100%;
  height: 60vw;
  background-color: white;

  box-sizing: border-box;
  padding: 1.5vw 1vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.cm-wrapper .cm-item {
  width: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cm-wrapper .cm-item img {
  width: 12vw;
  margin-bottom: 0.5vw;
}

.cm-wrapper .cm-item span {
  font-size: 0.8rem;
  font-weight: bold;
  color: #495057;
}
</style>