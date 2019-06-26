import Vue from 'vue'
import Router from 'vue-router'
import LifeCircle from './common/LifeCircle.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Form from './views/Form.vue'
import Transitions from './views/Transitions.vue'
import componentStudy from './views/componentStudy.vue'
import Directives from './views/Directives.vue'
import Combination from './views/Combination.vue'
import elementUI from './elementUI/Index.vue'
import betterScroll from './betterScroll/betterScroll.vue'
import tygm from './tygm/tygm.vue'

console.log('router.js');
Vue.use(Router)
const router={
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home,
    },
    {
      path: '/form',
      name: '表单学习',
      component: Form,
    },
    {
      path: '/componentstudy',
      name: '组件学习',
      component: componentStudy,
    },
    {
      path: '/Transitions',
      name: '过度&动画',
      component: Transitions,
    },
    {
      path: '/Combination',
      name: '可复用性 & 组合',
      component: Combination,
    },
    {
      path: '/lifecircle',
      name: '生命周期',
      component: LifeCircle,
    },
    {
      path: '/about',
      name: '其它',
      component: About,
    },
    {
      path: '/elementUI',
      name: 'elementUI',
      component: elementUI,
    },
    {
      path: '/betterScroll',
      name: 'betterScroll',
      component: betterScroll,
    },
    {
      path: '/tygm',
      name: 'tygm',
      component: tygm,
    },
    {
      path: '/Directives',
      name: '测试demo',
      component: Directives,
    }
  ]
};
window.routerArr=router.routes;
export default new Router(router)
