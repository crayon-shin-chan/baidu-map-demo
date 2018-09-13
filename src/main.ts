import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from "./component/app.vue"
import Vue from "vue"

Vue.use(ElementUI);

/**入口ts文件，构造Vue实例 */
new Vue({
    el: '#app',
    render: createElement => createElement(App)
 })