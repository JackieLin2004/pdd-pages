// 引入createRouter
import {createRouter, createWebHashHistory} from 'vue-router'

// 引入路由组件
import Home from "@/views/Home.vue";
import Video from "@/views/Video.vue";
import Coupon from "@/views/Coupon.vue";
import Chat from "@/views/Chat.vue";
import Person from "@/views/Person.vue";
import Recommend from "@/views/Recommend.vue";
import Computer from "@/views/Computer.vue";
import ProductInfo from "@/views/ProductInfo.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";

// 创建路由器
const router = createRouter({
    // 路由器工作模式
    history: createWebHashHistory(),
    // 路由规则
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            redirect: '/home/recommend',
            children: [
                {
                    name: 'recommend',
                    path: 'recommend',
                    component: Recommend
                },
                {
                    name: 'computer',
                    path: 'computer',
                    component: Computer
                }
            ]
        },
        {
            name: 'video',
            path: '/video',
            component: Video
        },
        {
            name: 'coupon',
            path: '/coupon',
            component: Coupon
        },
        {
            name: 'chat',
            path: '/chat',
            component: Chat
        },
        {
            name: 'person',
            path: '/person',
            component: Person
        },
        {
            name: 'productInfo',
            path: '/productInfo',
            component: ProductInfo
        },
        {
            name: 'payment',
            path: '/payment',
            component: Payment
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})

// 把路由暴露出去
export default router