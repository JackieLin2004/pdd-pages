<script setup lang="ts">

</script>

<template>
  <div class="product-evaluate-wrapper">
    <div class="product-evaluate-top">
      <div class="product-evaluate-top-left">
        <span>商品评价（1961）</span>
      </div>
      <div class="product-evaluate-top-right">
        <span style="color: #495057">退货包运费</span>
        <span class="iconfont icon-right-1-copy"></span>
      </div>
    </div>
    <div class="product-evaluate-down">
      <div class="comment-item">
        <div class="comment-item-top">
          <img src="@/assets/images/product-info/avatar/a1.jpg" alt=""/>
          <span>青柠X</span>
        </div>
        <div class="comment-item-down">
          <span>买给对象的 不错 我都想自己留着用了哈哈哈</span>
        </div>
      </div>
      <div class="comment-item">
        <div class="comment-item-top">
          <img src="@/assets/images/product-info/avatar/a2.jpg" alt=""/>
          <span>阿飞~</span>
        </div>
        <div class="comment-item-down">
          <span>声音很好听，灯光效果非常不错，手感很好！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-evaluate-wrapper {
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 0 2vw;
}

.product-evaluate-wrapper .product-evaluate-top {
  width: 100%;
  height: 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #ced4da;
}

.iconfont {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1vw;
  color: #adb5bd;
}

.product-evaluate-wrapper .product-evaluate-top span {
  font-weight: bold;
}

.product-evaluate-down {
  width: 100%;
  height: 35vw;
}

.product-evaluate-down .comment-item {
  width: 100%;
  height: 50%;
  border-bottom: solid 1px #ced4da;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.comment-item-top {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
}

.comment-item-top img {
  width: 7vw;
  height: auto;
  border-radius: 50%;
}

.comment-item-top span {
  margin-left: 2vw;
  font-weight: bold;
}

.comment-item-down {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
}

.comment-item-down span {
  margin-left: 2vw;
  font-weight: bold;
  color: #495057;
}
</style>