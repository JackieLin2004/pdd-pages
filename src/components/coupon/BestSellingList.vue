<script setup lang="ts">
import {ref} from "vue";
import {getImages} from "@/utils/getImagesUtil";

const BestSellingList = ref([
  {
    id: 1,
    name: '达利园巧克力派',
    price: '4.49',
    quantity: '已拼200万+包'
  },
  {
    id: 2,
    name: '原味老式空心卷',
    price: '10.08',
    quantity: '已拼4斤'
  },
  {
    id: 3,
    name: '超级厚切芒果片',
    price: '3.6',
    quantity: '已拼6.1万+袋'
  },
  {
    id: 4,
    name: '重庆泡椒凤爪',
    price: '5.56',
    quantity: '已拼7.8万+包'
  },
  {
    id: 5,
    name: '双蛋黄大月饼',
    price: '7.29',
    quantity: '已拼154.2万+斤'
  },
  {
    id: 6,
    name: '正宗牦牛肉干',
    price: '2.09',
    quantity: '已拼23.5万+件'
  }
])

const images = import.meta.glob('@/assets/images/coupon/best-selling-list/*.jpg') as Record<string, () => Promise<{
  default: string
}>>;

const {imagePaths} = getImages(images);
</script>

<template>
  <div class="bsl-wrapper">
    <div class="bsl-top">
      <div class="bsl-top-left">实时热卖</div>
      <div class="bsl-top-right">全站抢购，好物直降</div>
    </div>
    <div class="bsl-down">
      <div v-for="(product, index) in BestSellingList" :key="product.id">
        <div class="best-selling-item">
          <img :src="imagePaths[index]" alt="">
          <span class="best-selling-item-name">{{ product.name }}</span>
          <div class="best-selling-quantity">
            <span class="iconfont icon-dianzan"></span>
            <span>{{ product.quantity }}</span>
          </div>
          <div class="best-selling-container">
            <div class="best-selling">
              <span class="bs-left">&nbsp;&#165;{{ product.price }}</span>
              <span class="bs-right">
                <span class="iconfont icon-qiang"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bsl-wrapper {
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 2vw 2vw;
}

.bsl-wrapper .bsl-top {
  width: 100%;
  height: 15%;
  display: flex;
}

.bsl-wrapper .bsl-top .bsl-top-left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 2vw;
  color: #f76707;
}

.bsl-wrapper .bsl-top .bsl-top-right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868e96;
}

.bsl-wrapper .bsl-down {
  width: 100%;
  height: 85%;
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.bsl-wrapper .bsl-down .best-selling-item {
  width: 28vw;
  height: auto;
  border-radius: 5px;
  box-shadow: 3px 2px 2px 1px #868e96;
  margin-top: 1.5vw;
}

.bsl-wrapper .bsl-down .best-selling-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.best-selling-item-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.best-selling-quantity {
  width: 100%;
  height: 5vw;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  color: #c92a2a;
}

.best-selling-quantity span {
  margin-left: 1vw;
}

.best-selling-container {
  width: 100%;
  height: 14vw;
  box-sizing: border-box;
  padding: 1vw 1vw;
}

.best-selling {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.best-selling .bs-left {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #ffc9c9;
  color: #c92a2a;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
}

.best-selling .bs-right {
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c92a2a;
  color: white;
  border-radius: 5px;
  font-weight: 550;
}

.best-selling .bs-right .iconfont {
  font-size: 1.8rem;
}
</style>