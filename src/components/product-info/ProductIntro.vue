<script setup lang="ts">

</script>

<template>
  <div class="product-intro-wrapper">
    <div class="product-intro-discount">
      <div class="discount">2件9.9折</div>
      <span class="iconfont icon-right-1-copy"></span>
    </div>
    <div class="guarantee">
      <span>退货包运费&nbsp;|&nbsp;不满意包退货运费，退换无忧</span>
    </div>
    <div class="brand-and-name">
      <img src="@/assets/images/product-info/pi3.jpg" alt=""/>
      <span>狼蛛F87客制化机械键盘三模RGB侧刻</span>
    </div>
    <div class="product-intro-tag">
      <div class="tag-item">好评超98%同款</div>
      <div class="tag-item">24小时内100+人拼单</div>
      <div class="tag-item">同款热销</div>
    </div>
    <img style="width: 100%; height: auto;" src="@/assets/images/product-info/pi4.png" alt=""/>
  </div>
</template>

<style scoped>
.product-intro-wrapper {
  width: 100%;
  height: auto;
  background-color: white;
  box-sizing: border-box;
  padding: 2vw 2vw;
}

.product-intro-wrapper .product-intro-discount {
  width: 100%;
  height: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-intro-discount .discount {
  width: 18vw;
  height: 6vw;
  margin: 0 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #c92a2a;
  border-radius: 5px;
}

.product-intro-discount span {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1vw;
  color: #adb5bd;
}

.guarantee {
  height: 6vw;
  border-radius: 5px;

  background-color: #c3fae8;
  display: flex;
  align-items: center;
}

.guarantee span {
  color: #0ea274;
  font-weight: bold;
  margin-left: 2vw;
}

.brand-and-name {
  width: 100%;
  height: 6vw;
  margin: 1vw 1vw;
  display: flex;
  align-items: center;
}

.brand-and-name img {
  width: 10vw;
  height: auto;
}

.brand-and-name span {
  font-weight: bold;
  font-size: 1rem;
  margin-left: 2vw;
}

.product-intro-tag {
  width: 100%;
  height: 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product-intro-tag .tag-item {
  width: auto;
  height: 6vw;
  margin: 0 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d9480f;
  border-radius: 3px;
  color: #d9480f;
}
</style>