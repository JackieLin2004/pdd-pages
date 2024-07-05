<script setup lang="ts">
import {ref} from "vue";
const test = ()=>{
  proDuctList.value.forEach((item)=>{
    item.name = '1';
  })
}
const proDuctList = ref([
  {
    id: 1,
    name: '',
    price: ''
  },
  {
    id: 1,
    name: '',
    price: ''
  },
])
</script>

<template>
  <div >这里是首页</div>
  <test :product="item"></test>
</template>

<style scoped>

</style>