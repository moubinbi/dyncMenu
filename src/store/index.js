import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //定义缓存对象
    nav:[]
  },
  getters: {
    //获取缓存中的对象
    navData:state=>state.nav
  },
  mutations: {
    //处理数据到缓存
    SETNAV(state,data){
      state.nav = data;
    }
  },
  actions: {
    //传入数据到缓存
    ADDNAV({commit},data){
      commit('SETNAV',data)
    }
  },
  modules: {
  }
})
