
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    comps: [],
    sidemenus:[],
    sideactive:'',
  },
  mutations: {
  	setx(state,comps){
      state.comps = comps;
    },
  	setmenu(state,menus){
      state.sidemenus = menus;
    },
  	setmenuactive(state,menu){
      state.sideactive = menu;
    }         
  }
})

export default store;

