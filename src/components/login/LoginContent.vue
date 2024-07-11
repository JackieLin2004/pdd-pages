<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {ElMessage} from 'element-plus';

const isChecked = ref(false);
const router = useRouter();
const TurnToHome = () => {
  if (isChecked.value) {
    router.push('/home');
  } else {
    ElMessage({
      message: '请勾选相关协议政策',
      type: 'error'
    });
  }
};
</script>

<template>
  <div class="login-content-wrapper">
    <img src="@/assets/images/login/l1.jpg" alt=""/>
    <div class="check-box">
      <el-checkbox v-model="isChecked" size="large"/>
      <span>我已阅读并同意服务协议与隐私政策</span>
    </div>
    <div class="login-button">
      <el-button plain size="large" class="login-button-style" @click="TurnToHome">
        <span class="iconfont icon-weixin"></span>
        <span>微信登录</span>
      </el-button>
    </div>
    <span style="margin: 2vw 0; color: #495057; font-weight: bold">已在手机QQ/浏览器中购买过？</span>
    <span style="margin: 2vw 0; color: #228be6; font-weight: bold">请使用其它方式登录</span>
  </div>
</template>

<style scoped>
.login-content-wrapper {
  width: 100vw;
  margin-top: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-content-wrapper img {
  width: 45vw;
  height: auto;
  margin-top: 10vw;
}

.login-content-wrapper .check-box {
  margin: 2vw 0;
}

.login-content-wrapper .check-box span {
  margin-left: 2vw;
  font-size: 1rem;
  font-weight: bold;
  color: #495057;
}

.login-content-wrapper .login-button {
  width: 100vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vw 0;
}

.login-content-wrapper .login-button .login-button-style {
  width: 90%;
  height: 100%;
  background-color: #37b24d;
}

.login-content-wrapper .login-button .login-button-style .iconfont {
  font-size: 2rem;
  color: white;
}

.login-content-wrapper .login-button .login-button-style span {
  color: white;
  font-size: 1.05rem;
  font-weight: bold;
  margin-left: 2vw;
}
</style>