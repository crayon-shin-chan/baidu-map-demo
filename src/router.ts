import VueRouter from 'vue-router'
import Vue from 'vue'

const MyPosition = () => import(/* webpackChunkName: "MyPosition" */ './component/tag/my.position.vue')
const Region = ()=> import(/* webpackChunkName: "Region" */ './component/tag/region.vue')

Vue.use(VueRouter);

const router:VueRouter = new VueRouter(
    {
        routes:[
            {
                path:"/myposition",
                component: MyPosition
            },
            {
                path:"/region",
                component: Region
            }
        ]
    }
)

export default router;