import Vue from 'vue'
import Router from 'vue-router'
import app2Home from './app2/home.vue'
import app2Home2 from './app2/home2.vue'


console.log('router.js');
Vue.use(Router)
const router = {
  routes: [{
    path: '/app2/home',
    name: '主页',
    component: app2Home,
  },{
    path: '/app2/home2',
    name: '主页2',
    component: app2Home2,
  }, ]
};
window.routerArr2 = router.routes;
export default new Router(router)
