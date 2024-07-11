<script setup lang="ts">
import {usePriceStore} from '@/store/priceStore';
import {ref} from "vue";
import {useRouter} from "vue-router";

const priceStore = usePriceStore();

const dialogVisible = ref(false);
const router = useRouter();

const pay = () => {
  dialogVisible.value = true;
};

const redirectToHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="payment-footer-wrapper">
    <el-button plain @click="pay">
      <span>立即支付&nbsp;&#165;{{ priceStore.finalPrice }}</span>
    </el-button>
    <el-dialog
        title="支付成功"
        :visible.sync="dialogVisible"
        width="30%"
        @close="redirectToHome"
    >
      <span>支付成功！即将返回首页...</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
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