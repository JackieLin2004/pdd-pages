<script setup lang="ts">

</script>

<template>
  <div class="shopping-wrapper">
    <div class="shopping-wrapper-left">
      <img src="@/assets/images/home/h5.jpg" alt="">
      <span class="shopping-wrapper-left-text1">多多买菜</span>
      <span class="shopping-wrapper-left-text2">次日自提</span>
    </div>
    <div class="shopping-wrapper-right">
      <div class="shopping-item">
        <img src="@/assets/images/home/shopping/g1.jpg" alt="">
        <span>&#165;6.64</span>
      </div>
      <div class="shopping-item">
        <img src="@/assets/images/home/shopping/g2.jpg" alt="">
        <span>&#165;7.99</span>
      </div>
      <div class="shopping-item">
        <img src="@/assets/images/home/shopping/g3.jpg" alt="">
        <span>&#165;9.99</span>
      </div>
      <div class="shopping-item">
        <img src="@/assets/images/home/shopping/g4.jpg" alt="">
        <span>&#165;16.99</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopping-wrapper {
  width: 100%;
  height: 30vw;
  background-color: white;

  box-sizing: border-box;
  padding: 2vw 1vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.shopping-wrapper .shopping-wrapper-left {
  width: 23%;
  height: 100%;
  border-right: solid 1px #adb5bd;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.shopping-wrapper .shopping-wrapper-left img {
  width: 12vw;
  height: 12vw;
}

.shopping-wrapper .shopping-wrapper-left .shopping-wrapper-left-text1 {
  font-size: 1.05rem;
  margin-top: 1vw;
  margin-bottom: 1vw;
  font-weight: bold;
}

.shopping-wrapper .shopping-wrapper-left .shopping-wrapper-left-text2 {
  font-size: 0.8rem;
  color: #495057;
}

.shopping-wrapper .shopping-wrapper-right {
  width: 77%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.shopping-wrapper .shopping-wrapper-right .shopping-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.shopping-wrapper .shopping-wrapper-right .shopping-item img {
  width: 16vw;
  height: 16vw;
  margin-bottom: 2.5vw;
}

.shopping-wrapper .shopping-wrapper-right .shopping-item span {
  color: #c92a2a;
  font-weight: bold;
}
</style>