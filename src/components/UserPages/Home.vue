<template>
  <section class="wrapper">
    <nav class="user-nav">
      <svg class="icon user-icon" @click="showDropDown">
        <use xlink:href="/src/assets/sprite.svg#icon-user"></use>
      </svg>
    </nav>
    <div class="dropDown">
      <p class="droplink">EstenGrove</p>
      <p class="droplink green">Status:logged-in</p>
      <p class="droplink">
        <router-link to="/">
          <a>Logout</a>
        </router-link>
      </p>
    </div>
    <main class="container">
      <div class="stats">
        <p class="user-status">{{userStatus}}</p>
        <h2 class="stats-title">User Information</h2>
        <h4 class="user">Username: {{username}}</h4>
        <h4 class="password">Password: {{password}}</h4>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  name: "Home",
  props: ["username", "password"],
  data() {
    return {
      userStatus: "Logged in"
    };
  },
  methods: {
    showDropDown() {
      const userIcon = document.querySelector(".user-icon");
      const dropDown = document.querySelector(".dropDown");
      dropDown.classList.toggle("show");
    }
  },
  created() {
    this.$store.state.loggedIn = true;
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
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrapper {
  position: relative;
  max-width: 100vw;
  height: 100vh;
}
.user-status {
  text-align: center;
  font-family: "Raleway";
  margin-right: 1rem;
  color: #3eaf7c;
}

.user-nav {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.dropDown {
  display: none;
  position: absolute;
  top: 1.1rem;
  right: 1rem;
  width: 8rem;
  height: 5rem;
  background: #fff;
  font-family: "Raleway";
}
.droplink {
  padding: 0.1rem;
  font-size: 0.8rem;
}
.navLink {
  font-family: "Raleway";
  font-weight: 600;
  margin-right: 1rem;
}
svg {
  position: relative;
  margin-right: 1rem;
}
.icon {
  width: 1rem;
  height: 1rem;
  fill: #222;
  stroke: #222;
}
.icon:hover {
  cursor: pointer;
}
.show {
  display: block;
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.75);
}
.green {
  color: #3eaf7c;
}
.container {
  max-width: 100vw;
  height: 40rem;
  padding: 1rem 3rem;
}
.stats {
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-family: "Raleway";
  border: 1px solid #eaecef;
  border-radius: 0.3rem;
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.75);
}
.stats-title {
  margin-bottom: 2rem;
}
.user,
.password {
  font-weight: 300;
}
</style>
 