<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const ComputerProductsList = ref([
  {
    id: 1,
    brand: '品牌',
    name: 'LEOBOG灰木轴V4',
    description: '假一赔十',
    price: '8.6',
    quantity: '已拼1.1万+件'
  },
  {
    id: 2,
    brand: '品牌',
    name: '电脑屏幕清洁',
    description: '退货包运费',
    price: '7.5',
    quantity: '已拼4.2万+件'
  },
  {
    id: 3,
    brand: '品牌',
    name: '华为120W超级快充',
    description: '退货包运费',
    price: '15.9',
    quantity: '已拼1.8万+件'
  },
  {
    id: 4,
    brand: '品牌',
    name: '笔记本电脑手提包',
    description: '假一赔十',
    price: '14.8',
    quantity: '已拼7.6万+件'
  },
  {
    id: 5,
    brand: '品牌',
    name: 'USB3.0拓展坞笔记本',
    description: '退货包运费',
    price: '10.95',
    quantity: '已拼1.1万+件'
  },
  {
    id: 6,
    brand: '品牌',
    name: '笔记本电脑支架散热',
    description: '假一赔十',
    price: '13.22',
    quantity: '已拼12.5万+件'
  }
]);

const images = import.meta.glob('@/assets/images/home/computer-products/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="computer-products-wrapper">
    <div v-for="(product, index) in ComputerProductsList" :key="product.id">
      <div class="computer-product-item">
        <img :src="imagePaths[index]" alt="">
        <div class="computer-product-details">
          <div class="computer-brand-and-name">
            <div class="computer-brand">{{ product.brand }}</div>
            <div class="computer-name">{{ product.name }}</div>
          </div>
          <div class="computer-description">
            <img src="@/assets/images/home/h8.jpg" alt="">
            <span>先用后付</span>
            <span>{{ product.description }}</span>
          </div>
          <div class="computer-price-and-quantity">
            <span class="">&#165;</span>
            <span class="computer-price">{{ product.price }}</span>
            <span class="computer-quantity">{{ product.quantity }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.computer-products-wrapper {
  width: 100%;

  box-sizing: border-box;
  padding: 0 2vw 16vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.computer-products-wrapper .computer-product-item {
  width: 47vw;
  height: 67vw;
  margin-bottom: 2vw;
  background-color: white;
  border-radius: 5px;
}

.computer-products-wrapper .computer-product-item img {
  width: 100%;
  border-radius: 5px;
}

.computer-products-wrapper .computer-product-item .computer-product-details {
  width: 100%;
  height: 20vw;
  box-sizing: border-box;
  padding: 1vw 1.5vw;
}

.computer-product-details .computer-brand-and-name {
  width: 100%;
  height: 30%;

  display: flex;
}

.computer-product-details .computer-brand-and-name .computer-brand {
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

.computer-product-details .computer-brand-and-name .computer-name {
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 1.5vw;
}

.computer-product-details .computer-description {
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
}

.computer-product-details .computer-description img {
  width: 4vw;
  height: 4vw;
  margin-bottom: 0.5vw;
}

.computer-product-details .computer-description span {
  font-size: 0.73rem;
  font-weight: bold;
  color: #37b24d;
  margin-left: 1vw;
}

.computer-product-details .computer-description span:last-child {
  color: #868e96;
  margin-left: 2vw;
}

.computer-product-details .computer-price-and-quantity {
  width: 100%;
  height: 32%;

  display: flex;
  align-items: center;
}

.computer-product-details .computer-price-and-quantity span {
  font-size: 0.7rem;
  color: #c92a2a;
  font-weight: bold;
}

.computer-product-details .computer-price-and-quantity .computer-price {
  font-size: 1rem;
  margin-left: 0.5vw;
}

.computer-product-details .computer-price-and-quantity .computer-quantity {
  font-size: 0.8rem;
  color: #868e96;
  font-weight: 600;
  margin-left: 2vw;
}
</style>