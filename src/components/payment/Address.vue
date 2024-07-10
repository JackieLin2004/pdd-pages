<script setup lang="ts">

</script>

<template>
  <div class="address-wrapper">
    <div class="address-left">
      <span class="iconfont icon-dizhi"></span>
    </div>
    <div class="address-middle">
      <span>林晓毅，13726943721，云南省 昆明市 呈贡区</span>
      <span>吴家营街道云南大学楠苑综合楼菜鸟驿站</span>
    </div>
    <div class="address-right">
      <span class="iconfont icon-right-1-copy"></span>
    </div>
  </div>
</template>

<style scoped>
.address-wrapper {
  width: 100vw;
  height: 18vw;
  background-color: white;
  margin-top: 12vw;
  display: flex;
}

.address-wrapper .address-left {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.address-wrapper .address-left span {
  font-size: 1.4rem;
  color: #495057;
}

.address-wrapper .address-middle {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.address-wrapper .address-middle span {
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.3vw 0 0.2vw 0.3vw;
}


.address-wrapper .address-right {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.address-wrapper .address-right span {
  font-size: 1.4rem;
  color: #495057;
}
</style>