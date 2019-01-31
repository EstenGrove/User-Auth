<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import Routes from "./routes.js";
import Login from "./components/Login";
export default {
  name: "app",
  components: {
    Login,
    Routes
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
</style>
