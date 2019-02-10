<template>
  <div class="main-wrapper">
    <section class="wrapper">
      <form action="#" class="login">
        <h4 class="formTitle">Login</h4>
        <label for class="emailLabel">Email</label>
        <input type="text" name="username" id="username" v-model="email" required>
        <label for class="passwordLabel">Password</label>
        <input type="text" name="password" id="password" v-model="password" required>
        <button class="loginBtn" type="submit" @click="signIn">Login</button>
        <p class="switch">Or Signup
          <router-link to="/signup">
            <a class="switchForm">here</a>
          </router-link>
        </p>
      </form>
    </section>
  </div>
</template>

<script>
import Home from "./UserPages/Home";
import Routes from "../routes.js";
import firebaseApp from "../firebase/init.js";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      loggedIn: false,
      is_admin: null
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("You are now logged in");
            this.$router.push({ path: "/home", name: "Home", component: Home });
          },
          err => {
            alert("Oops." + err.message);
          }
        );
    }
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
.main-wrapper {
  max-width: 100vw;
  height: 100vh;
}
.main-title {
  font-family: "Abril Fatface";
  font-size: 3rem;
  text-align: center;
}
.wrapper {
  background: #fff;
  margin: 5rem auto;
  max-width: 35rem;
  height: 30rem;
  padding: 3rem 5rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  box-shadow: 2px 4px 13px 0px rgba(0, 0, 0, 0.75);
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formTitle {
  font-size: 2rem;
  font-family: "Abril Fatface";
  margin-bottom: 2rem;
}
.emailLabel,
.passwordLabel {
  width: 100%;
  font-size: 1.2rem;
  font-family: "Raleway";
  font-weight: 300;
  color: #aaa;
}
#username,
#password {
  width: 100%;
  height: 2.5rem;
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid #aaa;
  border-bottom: 2px solid #5cbcea;
  padding: 0.5rem;
  font-size: 1.2rem;
}
#username,
#password {
  margin-bottom: 2rem;
}
#username:focus,
#password:focus {
  border-bottom: 2px solid #e84855;
}
.loginBtn {
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  background: #5cbcea;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.loginBtn:hover {
  cursor: pointer;
}
.switch {
  color: #777;
  font-weight: 200;
}
@media screen and (max-width: 470px) {
  .wrapper {
    padding: 3rem 1.5rem;
  }
}
</style>
