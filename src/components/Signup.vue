<template>
  <section class="wrapper">
    <form action="#" class="signup">
      <h4 class="formTitle">Signup</h4>
      <label for class="usernameLabel">Username</label>
      <input type="text" name="username" id="username" v-model="username" required>
      <label for class="passwordLabel">Password</label>
      <input type="text" name="password" id="password" v-model="password" required>
      <button class="signupBtn" type="submit">Signup</button>
      <p class="switch">Or Login
        <router-link to="/">
          <a href="#" class="switchForm">here</a>
        </router-link>
      </p>
    </form>
  </section>
</template>

<script>
import routes from "../routes.js";
export default {
  name: "Signup",
  data() {
    return {
      username: null,
      password: null,
      is_admin: null,
      is_authenitcated: false
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
.wrapper {
  background: white;
  margin: 3rem auto;
  max-width: 35rem;
  height: 30rem;
  padding: 3rem 5rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  box-shadow: 2px 4px 13px 0px rgba(0, 0, 0, 0.75);
}
.signup {
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
.usernameLabel,
.passwordLabel {
  width: 100%;
  font-size: 1.5rem;
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
.signupBtn {
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  background: #5cbcea;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.signupBtn:hover {
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


