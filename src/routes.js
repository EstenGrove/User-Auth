import Vue from 'vue';
import App from './App';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Home from './components/UserPages/Home.vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'Login',
  component: Login
}, {
  path: '/signup',
  name: 'Signup',
  component: Signup,

}, {
  path: '/home',
  name: 'Home',
  component: Home,
  props: true,
  meta: {
    requiresAuth: true
  }
}]

export default routes
