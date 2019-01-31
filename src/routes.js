import App from './App';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Home from './components/UserPages/Home.vue';

export default [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true,
    // beforeEnter: (to, from, next) => {
    //   console.log(to, from);
    // }
  }
]
