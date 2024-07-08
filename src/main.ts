import {createApp} from 'vue'
import App from './App.vue'

// 引入路由器
import router from "@/router";

import '@/assets/main.css'
import '@/assets/iconfont/iconfont.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建一个应用
const app = createApp(App)

// 使用路由器
app.use(router)

// 使用Element-Plus
app.use(ElementPlus)

// 挂载整个应用到app容器
app.mount('#app')
