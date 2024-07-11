<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {usePriceStore} from '@/store/priceStore';
import {useNameStore} from "@/store/categoryStore";

const CategoryList = ref([
  {
    id: 1,
    name: '星际迷航-三模-灵动轴',
    price: 229,
    isHot: false
  },
  {
    id: 2,
    name: '星际迷航-三模-灰木轴',
    price: 199,
    isHot: true
  },
  {
    id: 3,
    name: '乌野橘光-三模-太空金轴',
    price: 149,
    isHot: true
  },
  {
    id: 4,
    name: '落日海岸-三模-灵动轴',
    price: 229,
    isHot: false
  },
  {
    id: 5,
    name: '旷野绿洲-三模-灰木轴',
    price: 199,
    isHot: false
  }
])

const selectedButton = ref<number | null>(null);
const priceStore = usePriceStore();
const nameStore = useNameStore();

onMounted(() => {
  // 初始化时将第一个按钮设为选中
  if (CategoryList.value.length > 0) {
    selectedButton.value = CategoryList.value[0].id;
  }
});

const selectButton = (item: { id: number, price: number, name: string }) => {
  selectedButton.value = item.id;
  priceStore.setSelectedPrice(item.price);
  nameStore.setSelectedName(item.name);
};
</script>

<template>
  <div class="category-wrapper">
    <span>类别</span>
    <div v-for="(item) in CategoryList" :key="item.id">
      <div class="category-item">
        <el-button type="info"
                   class="info-button"
                   :class="{ 'selected': selectedButton === item.id }"
                   @click="selectButton(item)">
          <span v-if="item.isHot" class="iconfont icon-huo"></span>
          <span>{{ item.name }}</span>
          &nbsp;&nbsp;
          <span>&#165;{{ item.price }}</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-wrapper {
  width: 100vw;
  box-sizing: border-box;
  padding: 2vw 2vw;
  border-top: solid 1px #dddddd;
  display: flex;
  flex-direction: column;
}

.category-wrapper span {
  font-weight: bold;
  font-size: 1.05rem;
  margin-bottom: 1vw;
}

.category-item {
  margin: 1vw 0;
  display: flex;
}

.category-item .info-button {
  background-color: #dee2e6;
  border: none;
}

.info-button.selected {
  background-color: #c92a2a !important;
}

.info-button.selected span {
  color: white;
}

.category-item span {
  font-size: 1.05rem;
  font-weight: bold;
  color: black;
}

.category-item .iconfont {
  margin-right: 1vw;
  color: red;
}
</style>