<script setup lang="ts">
import {usePriceStore} from '@/store/priceStore';
import {ref} from "vue";
import {useRouter} from "vue-router";

const priceStore = usePriceStore();

const dialogVisible = ref(false);
const router = useRouter();


const handlePayment = () => {
  dialogVisible.value = true;
  setTimeout(() => {
    dialogVisible.value = false;
    router.push('/home');
  }, 3000);
};

const handleClose = () => {
  dialogVisible.value = false;
  router.push('/home');
};
</script>

<template>
  <div class="payment-footer-wrapper">
    <span @click="handlePayment">立即支付&nbsp;&#165;{{ priceStore.finalPrice }}</span>

    <el-dialog
        v-model="dialogVisible"
        title="支付结果"
        width="300"
        :before-close="handleClose"
    >
      <span style="color: red">支付成功！</span>
      <span style="color: red">即将回到首页~</span>
    </el-dialog>
  </div>
</template>

<style scoped>
.payment-footer-wrapper {
  width: 100vw;
  height: 16vw;
  border-top: solid 1px #dddddd;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c92a2a;
}

.payment-footer-wrapper span {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
}
</style>