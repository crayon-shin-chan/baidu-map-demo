import './element-variables.scss'
import ElementUI from 'element-ui';
import App from "./component/app.vue"
import Vue from "vue"

Vue.use(ElementUI);

import router from './router'

/**入口ts文件，构造Vue实例 */
new Vue({
    el: '#app',
    router,
    render: createElement => createElement(App)
 })