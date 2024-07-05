<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router'
import {ref, onMounted} from "vue";

const kindList = ref([
  {id: 1, title: '推荐'},
  {id: 2, title: '电脑'},
  {id: 3, title: '食品'},
  {id: 4, title: '百货'},
  {id: 5, title: '手机'},
  {id: 6, title: '医药'},
  {id: 7, title: '运动'}
])

const selectedTitle = ref<string>('推荐')

const router = useRouter()
const route = useRoute()
const changePage = (title: string) => {
  if (title === '推荐') {
    router.push({name: 'recommend'})
  } else {
    router.push({name: 'computer'})
  }
  selectedTitle.value = title
}

onMounted(() => {
  // 设置默认选中项
  if (route.path === '/home' || route.path === '/home/recommend') {
    selectedTitle.value = '推荐'
  } else if (route.path === '/home/computer') {
    selectedTitle.value = '电脑'
  }
})
</script>

<template>
  <div class="head-wrapper">
    <!--搜索部分-->
    <div class="search">
      <div class="search-box">
        <div class="search-box-left"></div>
        <div class="search-box-middle">
          <span class="iconfont icon-sousuo"></span>
          <span class="text">机器学习西瓜书</span>
        </div>
        <div class="search-box-right">
          <span class="iconfont icon-zhaoxiangji"></span>
        </div>
      </div>
    </div>
    <!--二级导航栏-->
    <div class="navigate">
      <div class="navigate-list">
        <div v-for="item in kindList" :key="item.id">
          <div
              class="list"
              :class="{ selected: selectedTitle === item.title }"
              @click="() => changePage(item.title)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head-wrapper {
  width: 100%;
  height: 30vw;
  background-color: white;
  border-bottom: solid 1px #dddddd;

  position: fixed;
  left: 0;
  top: 0;
}

.head-wrapper .search {
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head-wrapper .search .search-box {
  width: 95%;
  height: 60%;
  background-color: #dee2e6;
  border-radius: 10px;
  display: flex;
}

.head-wrapper .search .search-box .search-box-left {
  width: 30%;
}

.head-wrapper .search .search-box .search-box-middle {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head-wrapper .search .search-box .search-box-right {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head-wrapper .search .search-box .iconfont {
  font-size: 1.2rem;
  color: #868e96;
}

.head-wrapper .search .search-box .icon-zhaoxiangji {
  font-size: 1.8rem;
  margin-left: 12vw;
}

.head-wrapper .search .search-box .text {
  color: #868e96;
  font-weight: 600;
  margin-left: 1vw;
}

.head-wrapper .navigate {
  height: 10vw;
}

.head-wrapper .navigate .navigate-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.head-wrapper .navigate .navigate-list .list {
  height: 9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.05rem;
  color: #70737c;
  cursor: pointer;
}

.head-wrapper .navigate .navigate-list .list.selected {
  color: #c92a2a;
  border-bottom: solid 3px #c92a2a;
}
</style>