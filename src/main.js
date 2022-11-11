import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './store' 

Vue.use(ElementUI) 
//vue.use 是使用组件

Vue.config.productionTip = false




new Vue({
  router, //在渲染之前进行挂载使用 初始化的时候加载的放在new Vue中路由和缓存都是初始化就需要的
  store,
  render: h => h(App),
}).$mount('#app')
