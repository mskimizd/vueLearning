import Vue from 'vue'
// import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import "./style.less";

import router from '~/router/index';

// import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// import VueClipboard from 'vue-clipboard2'

import VCharts from 'v-charts'

// Vue.use(Vuex)

import store from "~/store/index.js";

Vue.use(ElementUI)
// Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.use(VueClipboard)

Vue.use(VCharts)


// no json
Vue.http.options.emulateJSON = true;
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

router.beforeEach((to, from, next) => {
    if(to.matched.length==0){ // 路由表中没有对应的路由
        next("/main");
    }else{
        next()
    }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
