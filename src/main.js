// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import storage from './storage/storage.js'
Vue.config.productionTip = false;
//挂载在vue实例的原型链上 可以全局调用
Vue.prototype.$storage=storage;
router.beforeEach((to, from, next) => {
  if(to.path === "/succeed"){
      store.state.shwoFN = false;
  }
  if(from.path === "/succeed"){
    store.state.shwoFN = true;
}
  // console.log(to, from);
next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  storage,
  components: { App },
  template: '<App/>'
});
window.onstorage = function(){//让其他页面也添加内容


  var list = JSON.parse(localStorage.goodList);
  console.log("监听中....",list);
  console.log("==========================================");
  store.state.commodNum = list;
  console.log("监听中....",store.state.commodNum);

}
