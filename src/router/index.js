import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/AboutView.vue'
// import commMenu from '@/util/commMenu'
import { getNavData } from '@/util/http' //导入接口地址
import store from '@/store'

const routes = [
  //这里的指向是首次进入的页面 设置主体 头部 底部 菜单 则是在app.vue中设置
  {
    path: '/',
    name: 'home',
    component: HomeView
  }

]

//根据公共数据循环路由数据
// commMenu.forEach(v=>{
//   routes.push({
//     path: v.path,
//     name: v.name,
//     meta: {title: v.title},
//     component: ()=> import(`@/components/${v.component}`)
//     //这个component值可以灵活变动
//   })
// })




Vue.use(VueRouter)

const router = new VueRouter({
  routes, //路由配置信息已传递参数的信息传递进来 这里其实是键值对的形式 routes:routes 只不过名字一样就只写一个
  linkActiveClass: 'selected', //路由的匹配信息 匹配到了加樣式
  mode: 'history'
})






//路由拦截
router.beforeEach(async (to, from, next) => {
  if (store && store.state.nav.length == 0) {
    let res = await getNavData(); //异步同步化
    let data = res.data.data;//后端返回的数据
    //缓存数据
    store.dispatch('ADDNAV', data);
    console.log(data)
    let menuList = fnAddDynamicMenuRoutes(data)
    console.log(menuList)
    //返回的数据转为路由数据
    // let routerD = f(data);
    
    // console.log(routerD)
    for(let i=0; i<menuList.length; i++){
      router.addRoute(menuList[i])
     }
    // router.addRoutes(menuList); //动态路由的添加
    next({ path: to.path })
  } else {
    next()
  }

})


// 用于处理动态菜单数据，将其转为 route 形式
export function fnAddDynamicMenuRoutes (menuList = [], routes = []) {
  // 用于保存普通路由数据
  let temp = []
  // 用于保存存在子路由的路由数据
  let route = []
  // 遍历数据
  for (let i = 0; i < menuList.length; i++) {
    // 存在子路由，则递归遍历，并返回数据作为 children 保存
    if (menuList[i].children && menuList[i].children.length > 0) {
      // 获取路由的基本格式
      route = getRoute(menuList[i])
      // 递归处理子路由数据，并返回，将其作为路由的 children 保存
      route.children = fnAddDynamicMenuRoutes(menuList[i].children)
      // 保存存在子路由的路由
      routes.push(route)
    } else {
      // 保存普通路由
      temp.push(getRoute(menuList[i]))
    }
  }
  // 返回路由结果
  return routes.concat(temp)
}




function getRoute (item) {
  // 路由基本格式
  let route = {
    // 路由的路径
    path: item.path,
    // 路由名
    name: item.name,
    //重定向
    redirect: item.redirect,
    // 路由所在组件
    // component: (resolve) => require([`@/layout/Index`], resolve),
    component: require('@/views/' + item.components + '.vue').default,
    meta: {
      title: item.title,
      icon: item.icon
    },
    // 路由的子路由
    children: []
  }
  // 返回 route
  return route
}





//根据公共数据循环路由数据
// function f(data) {

//   data.forEach(v => {
//     if (v.children.length==0){
//       routes.push({
//         path: v.path,
//         name: v.name,
//         redirect: v.redirect,
//         meta: { title: v.title },
//         children:[],
//         component: () => import(`@/components/uuu/${v.component}`)
//         //这个component值可以灵活变动
//       })
//     }else{

//     }
//   })
//   return routes;
// }





export default router
