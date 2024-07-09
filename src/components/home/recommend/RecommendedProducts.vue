<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

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

const images = import.meta.glob('@/assets/images/home/recommended-products/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
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