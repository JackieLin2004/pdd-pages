<script setup lang="ts">
import {usePriceStore} from '@/store/priceStore';
import {useNameStore} from "@/store/categoryStore";
import {useQuantityStore} from '@/store/quantityStore';
import {computed} from "vue";

const priceStore = usePriceStore();
const nameStore = useNameStore();
const selectedPrice = computed(() => priceStore.selectedPrice);
const selectedName = computed(() => nameStore.selectedName);

const quantityStore = useQuantityStore();
const quantity = computed(() => quantityStore.quantity);

const increment = () => {
  quantityStore.increment();
};

const decrement = () => {
  quantityStore.decrement();
};
</script>

<template>
  <div class="purchase-wrapper">
    <div class="purchase-box">
      <div class="purchase-box-top">
        <img src="@/assets/images/payment/pay3.jpg" alt=""/>
        <span>狼蛛&nbsp;&nbsp;|&nbsp;&nbsp;品牌官方授权，100%正品</span>
      </div>
      <div class="purchase-box-down">
        <div class="purchase-box-down-left">
          <img src="@/assets/images/payment/pay4.jpg" alt=""/>
        </div>
        <div class="purchase-box-down-right">
          <div class="price-show">
            <span v-if="quantityStore.quantity === 1">全网低价</span>
            <span v-else>{{ quantity }}件券后价格</span>
            &nbsp;
            <span style="font-size: 1.3rem">&#165;{{ priceStore.finalPrice }}</span>
          </div>
          <div class="price-discount">
            <div class="discount">2件9.9折</div>
          </div>
          <div class="category-choose">
            <span>已选：</span>
            <span>{{ selectedName }}</span>
          </div>
          <div class="product-quantity">
            <span style="font-size: 1.5rem;" class="iconfont icon-jianhao-" @click="decrement"></span>
            <span style="font-size: 1.3rem; margin-bottom: 0.5vw; color: black">{{ quantity }}</span>
            <span style="font-size: 1.5rem;" class="iconfont icon-jiahao2fill" @click="increment"></span>
            <span style="color: red;" class="iconfont icon-huo"></span>
            <span style="font-size: 0.9rem; font-weight: bold; color: red">已拼1.2万+件</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.purchase-wrapper {
  width: 100vw;
  height: 60vw;
  background-color: white;
  box-sizing: border-box;
  padding: 2vw 2vw;
}

.purchase-wrapper .purchase-box {
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}

.purchase-box .purchase-box-top {
  width: 95%;
  height: 18%;
  display: flex;
  align-items: center;
}

.purchase-box .purchase-box-top img {
  width: 7vw;
  margin-left: 1vw;
  border-radius: 5px;
}

.purchase-box .purchase-box-top span {
  color: #fff9db;
  margin-left: 2vw;
  font-weight: bold;
  font-size: 1.1rem;
}

.purchase-box .purchase-box-down {
  width: 95%;
  height: 75%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.purchase-box-down-left {
  width: 40%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.purchase-box-down-left img {
  width: 32vw;
  height: auto;
  border-radius: 5px;
}

.purchase-box-down-right {
  width: 57%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 2vw;
}

.purchase-box-down-right .price-show {
  width: 100%;
  height: 20%;
}

.purchase-box-down-right .price-show span {
  color: #c92a2a;
  font-weight: bold;
  font-size: 1.1rem;
}

.purchase-box-down-right .price-discount {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
}

.purchase-box-down-right .price-discount .discount {
  width: 18vw;
  height: 6vw;
  margin: 0 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #c92a2a;
  border-radius: 5px;
  color: #c92a2a;
  font-weight: bold;
}

.purchase-box-down-right .category-choose {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
}

.purchase-box-down-right .category-choose span {
  font-size: 0.9rem;
  font-weight: bold;
}

.purchase-box-down-right .product-quantity {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purchase-box-down-right .product-quantity span {
  font-size: 1.1rem;
  color: #495057;
}

.purchase-box-down-right .product-quantity .iconfont {
  margin: 0 1vw;
}
</style>