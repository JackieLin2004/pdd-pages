<script setup lang="ts">

</script>

<template>
  <div class="person-head-wrapper">
    <div class="person-head-left">
      <span>个人中心</span>
    </div>
    <div class="person-head-right">
      <span>资质规则</span>
    </div>
  </div>
</template>

<style scoped>
.person-head-wrapper {
  width: 100%;
  height: 15vw;
  display: flex;
  background-color: white;
  border-bottom: solid 1px #ced4da;
  position: fixed;
  left: 0;
  top: 0;
}

.person-head-wrapper .person-head-left {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.person-head-wrapper .person-head-left span {
  margin-left: 25vw;
}

.person-head-wrapper .person-head-right {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #868e96;
}
</style>