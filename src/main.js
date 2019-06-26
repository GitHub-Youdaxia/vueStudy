import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import router from './router'
// import router2 from './router2'
import MyPlugin from '@/plugin'//自定义加的,比较乱
import mixin from '@/mixin'//全局注入代码
import store from './store'//引入store vuex状态树
// import store2 from './store/index2'//引入store vuex状态树
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import directive from '@/directive'//全局注入代码

import axios from 'axios'
// import betterScroll from 'better-scroll'
//可以在控制台使用Vue变量,测试代码之类的,比如注册 一个全局组件 anchored-heading ,然后其他组件 模板中有                 <component :level="singleSelected*1" :is="component1">标题</component>
//修改 这个组件的component1="anchored-heading" 就能改变页面的内容
window.Vue = Vue;    

Vue.use(MyPlugin)
Vue.use(mixin)
Vue.use(ElementUI)
Vue.use(directive)
Vue.prototype.$axios=axios
// Vue.use(betterScroll)

// console.log('main.js');
Vue.config.productionTip = true
new Vue({
  router,
  store,
  // store2,
  axios,
  render: h => h(App)
}).$mount('#app')



// new Vue({
//   router:router2,
//   axios:axios,
//   render: h => h(App2)
// }).$mount('#app2')




