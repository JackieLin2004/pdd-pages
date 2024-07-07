<script setup lang="ts">
import {ref, onMounted} from "vue";

const RecommendedProductsList = ref([
  {
    id: 1,
    brand: '品牌',
    name: '狼蛛F75客制化三模机',
    description: '品牌有线键盘畅销榜第1名',
    price: '149',
    quantity: '已拼1.2万+件'
  },
  {
    id: 2,
    brand: '品牌',
    name: '动手学深度学习',
    description: '人工智能书籍畅销榜第3名',
    price: '79.9',
    quantity: '已拼2.3万+件'
  },
  {
    id: 3,
    brand: '品牌',
    name: '休闲零食皇冠芒果干',
    description: '烘干芒果干畅销榜第2名',
    price: '29.9',
    quantity: '已拼148万+件'
  },
  {
    id: 4,
    brand: '品牌',
    name: '泸溪河乳酪蛋黄',
    description: '乳酪蛋黄美食热销榜第5名',
    price: '26.8',
    quantity: '已拼5243+件'
  },
  {
    id: 5,
    brand: '品牌',
    name: '老式手工鸡蛋卷',
    description: '蛋卷畅销榜第4名',
    price: '13.36',
    quantity: '已拼77.2万+件'
  },
  {
    id: 6,
    brand: '品牌',
    name: '2025王道考研指导',
    description: '考研书籍畅销榜第1名',
    price: '45',
    quantity: '已拼10万+件'
  }
]);

// 使用 import.meta.glob 导入图片
// 这行代码会动态导入指定目录下的所有 .jpg 图片文件，并生成一个包含这些文件路径的对象
// 其中键是相对路径，值是一个异步函数，调用该函数会返回包含图片路径的模块对象
const images = import.meta.glob('@/assets/images/home/recommended-products/*.jpg');

// 定义一个响应式数组 imagePaths，用于存储所有图片的路径
// 初始值为空数组，类型为字符串数组
const imagePaths = ref<string[]>([]);

// 在组件挂载时就解析图片路径
onMounted(async () => {
  // 获取所有图片路径的键（相对路径）
  // 返回包含所有键（图片的相对路径）的数组
  const imageKeys = Object.keys(images);

  // 遍历所有图片路径的键
  // 使用 for 循环遍历 imageKeys 数组中的每一个键。
  for (let i = 0; i < imageKeys.length; i++) {
    // 获取当前图片的加载函数
    // images[imageKeys[i]] 是一个异步函数，用于加载对应的图片模块
    const loadImage = images[imageKeys[i]];

    // 调用加载函数并等待结果
    // 使用 await 调用异步函数 loadImage()，获取包含图片路径的模块对象
    // 这里使用 TypeScript 类型断言，将结果断言为 { default: string } 类型
    // 以确保模块对象包含 default 属性，该属性的值是图片路径
    const imageModule = await loadImage() as { default: string };

    // 将图片路径添加到 imagePaths 数组中
    // imageModule.default 是实际的图片路径，将其添加到 imagePaths 响应式数组中
    imagePaths.value.push(imageModule.default);
  }
});
</script>

<template>
  <div class="recommended-products-wrapper">
    <div v-for="(product, index) in RecommendedProductsList" :key="product.id">
      <div class="recommended-product-item">
        <img :src="imagePaths[index]" alt="">
        <div class="recommended-product-details">
          <div class="recommended-brand-and-name">
            <div class="recommended-brand">{{ product.brand }}</div>
            <div class="recommended-name">{{ product.name }}</div>
          </div>
          <div class="recommended-description">
            <img src="@/assets/images/home/h6.jpg" alt="">
            <span>{{ product.description }}</span>
          </div>
          <div class="recommended-price-and-quantity">
            <span class="">&#165;</span>
            <span class="recommended-price">{{ product.price }}</span>
            <span class="recommended-quantity">{{ product.quantity }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommended-products-wrapper {
  width: 100%;

  box-sizing: border-box;
  padding: 0 2vw 16vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.recommended-products-wrapper .recommended-product-item {
  width: 47vw;
  height: 67vw;
  margin-bottom: 2vw;
  background-color: white;
  border-radius: 5px;
}

.recommended-products-wrapper .recommended-product-item img {
  width: 100%;
  border-radius: 5px;
}

.recommended-products-wrapper .recommended-product-item .recommended-product-details {
  width: 100%;
  height: 20vw;
  box-sizing: border-box;
  padding: 1vw 1.5vw;
}

.recommended-product-details .recommended-brand-and-name {
  width: 100%;
  height: 30%;

  display: flex;
}

.recommended-product-details .recommended-brand-and-name .recommended-brand {
  width: 9vw;
  height: 4.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 3px;
}

.recommended-product-details .recommended-brand-and-name .recommended-name {
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 1.5vw;
}

.recommended-product-details .recommended-description {
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
}

.recommended-product-details .recommended-description img {
  width: 4vw;
  height: 4vw;
}

.recommended-product-details .recommended-description span {
  font-size: 0.73rem;
  font-weight: bold;
  color: #c92a2a;
  margin-left: 1vw;
}

.recommended-product-details .recommended-price-and-quantity {
  width: 100%;
  height: 32%;

  display: flex;
  align-items: center;
}

.recommended-product-details .recommended-price-and-quantity span {
  font-size: 0.7rem;
  color: #c92a2a;
  font-weight: bold;
}

.recommended-product-details .recommended-price-and-quantity .recommended-price {
  font-size: 1rem;
  margin-left: 0.5vw;
}

.recommended-product-details .recommended-price-and-quantity .recommended-quantity {
  font-size: 0.8rem;
  color: #868e96;
  font-weight: 600;
  margin-left: 2vw;
}
</style>