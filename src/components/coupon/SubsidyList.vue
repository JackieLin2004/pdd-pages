<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const SubsidyList = ref([
  {
    id: 1,
    name: '食品补贴',
    price: '26.8',
    subsidy: '22.1'
  },
  {
    id: 2,
    name: '数码补贴',
    price: '26.7',
    subsidy: '17.2'
  },
  {
    id: 3,
    name: '囤货补贴',
    price: '29.7',
    subsidy: '9.2'
  },
  {
    id: 4,
    name: '家电补贴',
    price: '16.79',
    subsidy: '6.2'
  },
  {
    id: 5,
    name: '运动补贴',
    price: '29.9',
    subsidy: '70.2'
  },
  {
    id: 6,
    name: '服饰补贴',
    price: '39.9',
    subsidy: '20'
  },
])

const images = import.meta.glob('@/assets/images/coupon/subsidy-list/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="sl-wrapper">
    <div class="sl-top">
      <div class="sl-top-left">百亿补贴</div>
      <div class="sl-top-right">大牌正品，加倍补贴</div>
    </div>
    <div class="sl-down">
      <div v-for="(product, index) in SubsidyList" :key="product.id">
        <div class="subsidy-item">
          <img :src="imagePaths[index]" alt="">
          <span class="subsidy-item-name">{{ product.name }}</span>
          <span class="subsidy-item-subsidy">补贴{{ product.subsidy }}元</span>
          <div class="subsidy-container">
            <div class="subsidy">
              <span class="s-left">百亿<br>补贴</span>
              <span class="s-right">&#165;{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sl-wrapper {
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 2vw 2vw;
}

.sl-wrapper .sl-top {
  width: 100%;
  height: 15%;
  display: flex;
}

.sl-wrapper .sl-top .sl-top-left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 2vw;
  color: #f76707;
}

.sl-wrapper .sl-top .sl-top-right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868e96;
}

.sl-wrapper .sl-down {
  width: 100%;
  height: 85%;
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.sl-wrapper .sl-down .subsidy-item {
  width: 28vw;
  height: auto;
  border-radius: 5px;
  box-shadow: 3px 2px 2px 1px #868e96;
  margin-top: 1.5vw;
}

.sl-wrapper .sl-down .subsidy-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.subsidy-item-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.subsidy-item-subsidy {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #c92a2a;
}

.subsidy-container {
  width: 100%;
  height: 14vw;
  box-sizing: border-box;
  padding: 1vw 1vw;
}

.subsidy {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subsidy .s-left {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c92a2a;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
}

.subsidy .s-right {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc9c9;
  color: #c92a2a;
  border-radius: 5px;
  font-weight: 550;
}
</style>