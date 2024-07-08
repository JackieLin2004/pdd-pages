<script setup lang="ts">

</script>

<template>
  <div class="coupon-head-wrapper">
    <div class="coupon-search">
      <div class="coupon-search-left">
        <span class="iconfont icon-sousuo"></span>
        <span>狼蛛f87pro</span>
      </div>
      <div class="coupon-search-right">
        <el-button type="danger" class="search-button">搜索</el-button>
      </div>
    </div>
    <span class="iconfont icon-sandian"></span>
  </div>
</template>

<style scoped>
.coupon-head-wrapper {
  width: 100%;
  height: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coupon-head-wrapper .coupon-search {
  width: 95%;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  margin-left: 9vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.coupon-head-wrapper .coupon-search .coupon-search-left {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coupon-head-wrapper .coupon-search .coupon-search-left .iconfont {
  font-size: 1.2rem;
  margin-left: 5vw;
}

.coupon-head-wrapper .coupon-search .coupon-search-left span {
  color: #343a40;
  font-size: 1rem;
  font-weight: 550;
  margin-left: 1vw;
}

.coupon-head-wrapper .coupon-search .coupon-search-right {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coupon-head-wrapper .coupon-search .search-button {
  background-color: #d53030;
  color: white;
}

.coupon-head-wrapper span {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-left: 2vw;
}
</style>