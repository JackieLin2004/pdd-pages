<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const PriceReductionList = ref([
  {
    id: 1,
    name: '老式空心蛋卷酥',
    price: '12.9',
    reduction: '7'
  },
  {
    id: 2,
    name: '厚切芒果干',
    price: '3.6',
    reduction: '20'
  },
  {
    id: 3,
    name: '老式原味鸡蛋蛋卷',
    price: '6.9',
    reduction: '5'
  }
])

const images = import.meta.glob('@/assets/images/coupon/price-reduction-list/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="prl-wrapper">
    <div class="prl-top">
      <div class="prl-top-left">降价榜</div>
      <div class="prl-top-right">大促直降，立即省钱</div>
    </div>
    <div class="prl-down">
      <div v-for="(product, index) in PriceReductionList" :key="product.id">
        <div class="price-reduction-item">
          <img :src="imagePaths[index]" alt="">
          <span class="price-reduction-item-name">{{ product.name }}</span>
          <div class="price-and-reduction-container">
            <div class="price-and-reduction">
              <span class="pr-left">&nbsp;&#165;{{ product.price }}</span>
              <span class="pr-right">直降<br>{{ product.reduction }}元</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prl-wrapper {
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 2vw 2vw;
  margin-top: 15vw;
}

.prl-wrapper .prl-top {
  width: 100%;
  height: 15%;
  display: flex;
}

.prl-wrapper .prl-top .prl-top-left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 2vw;
  color: #f76707;
}

.prl-wrapper .prl-top .prl-top-right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868e96;
}

.prl-wrapper .prl-down {
  width: 100%;
  height: 85%;
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.prl-wrapper .prl-down .price-reduction-item {
  width: 28vw;
  height: auto;
  border-radius: 5px;
  box-shadow: 3px 2px 2px 1px #868e96;
}

.prl-wrapper .prl-down .price-reduction-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.price-reduction-item-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.price-and-reduction-container {
  width: 100%;
  height: 15vw;
  box-sizing: border-box;
  padding: 1vw 1vw;
}

.price-and-reduction {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.price-and-reduction .pr-left {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #c92a2a;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 5px;
}

.price-and-reduction .pr-right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe066;
  color: #c92a2a;
  border-radius: 5px;
  font-weight: 550;
}
</style>