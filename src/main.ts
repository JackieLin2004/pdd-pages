import {createApp} from 'vue'
import App from './App.vue'

// 引入路由器
import router from "@/router";

// 引入pinia
import {createPinia} from 'pinia';

import '@/assets/main.css'
import '@/assets/iconfont/iconfont.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建一个应用
const app = createApp(App)

// 创建pinia
const pinia = createPinia()

// 使用路由器
app.use(router)

// 使用pinia
app.use(pinia)

// 使用Element-Plus
app.use(ElementPlus)

// 挂载整个应用到app容器
app.mount('#app')
