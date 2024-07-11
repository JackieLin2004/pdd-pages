<script setup lang="ts">
import LoginHead from "@/components/login/LoginHead.vue";
import LoginContent from "@/components/login/LoginContent.vue";
import LoginFooter from "@/components/login/LoginFooter.vue";
</script>

<template>
  <div class="login-wrapper">
    <LoginHead/>
    <LoginContent/>
    <LoginFooter/>
  </div>
</template>

<style scoped>
.login-wrapper {
  width: 100vw;
  background-color: white;
}
</style>