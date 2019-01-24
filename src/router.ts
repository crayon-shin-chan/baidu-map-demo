import VueRouter from 'vue-router'
import Vue from 'vue'

const MyPosition = () => import(/* webpackChunkName: "MyPosition" */ './component/position/my.position.vue')
const Region = ()=> import(/* webpackChunkName: "Region" */ './component/region/region.vue')
const Fence = ()=> import(/* webpackChunkName: "Fence" */ './component/fence/fence.vue')
const FenceList = ()=> import(/* webpackChunkName: "FenceList" */ './component/fence/fence.list.vue')
const FenceCreate = ()=> import(/* webpackChunkName: "FenceCreate" */ './component/fence/fence.create.vue')

Vue.use(VueRouter);

const router:VueRouter = new VueRouter(
    {
        routes:[
            {
                path:"/",
                component: MyPosition
            },
            {
                path:"/myposition",
                component: MyPosition
            },
            {
                path:"/region",
                component: Region
            },
            {
                path:"/fence",
                component: Fence,
                children:[
                    {
                        path:"",
                        component: FenceList
                    },
                    {
                        /** 子路由不能使用/，/代表绝对路径 */
                        path:"create",
                        component: FenceCreate
                    }
                ]
            }
        ]
    }
)

export default router;