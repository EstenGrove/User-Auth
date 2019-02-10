import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
//Import the VueRouter Lib
import VueRouter from 'vue-router';
//Import the Routes from routes.js
import Routes from './routes';



Vue.use(VueRouter);
Vue.use(Vuex);


//Instantiate new instance, set the options
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
