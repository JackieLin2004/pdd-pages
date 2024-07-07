<script setup lang="ts">

</script>

<template>
  <div class="bm-wrapper">
    <div class="bm-menu">
      <div class="bm-menu-item">
        <img src="@/assets/images/home/recommend-menu/m1.jpg" alt="">
        <span>限时秒杀</span>
      </div>
      <div class="bm-menu-item">
        <img src="@/assets/images/home/recommend-menu/m2.jpg" alt="">
        <span>充值中心</span>
      </div>
      <div class="bm-menu-item">
        <img src="@/assets/images/home/recommend-menu/m3.jpg" alt="">
        <span>现金大转盘</span>
      </div>
      <div class="bm-menu-item">
        <img src="@/assets/images/home/recommend-menu/m4.jpg" alt="">
        <span>多多果园</span>
      </div>
      <div class="bm-menu-item">
        <img src="@/assets/images/home/recommend-menu/m5.jpg" alt="">
        <span>其他</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bm-wrapper {
  width: 100%;
  height: 22vw;
  background-color: white;

  box-sizing: border-box;
  padding: 1vw 1vw;
}

.bm-wrapper .bm-menu {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bm-wrapper .bm-menu .bm-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bm-wrapper .bm-menu .bm-menu-item img {
  width: 10vw;
  margin-bottom: 1vw;
}

.bm-wrapper .bm-menu .bm-menu-item span {
  color: #495057;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>