<script setup lang="ts">

</script>

<template>
  <div class="discount-wrapper">
    <div class="discount-left">优惠</div>
    <div class="discount-right">
      <span>满两件享9.9折</span>
      <span class="iconfont icon-right-1-copy"></span>
    </div>
  </div>
</template>

<style scoped>
.discount-wrapper {
  width: 100vw;
  height: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2vw 2vw;
}

.discount-wrapper .discount-left {
  font-weight: bold;
  font-size: 1.05rem;
}

.discount-wrapper .discount-right span {
  font-weight: bold;
  color: #495057;
  margin-right: 1vw;
}
</style>