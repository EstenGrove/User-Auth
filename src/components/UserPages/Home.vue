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
    <p class="user-status">{{userStatus}}</p>
    <main class="container">
      <div class="stats">
        <h4 class="user"></h4>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  name: "Home",
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
  background: #f4f4f4;
  font-family: "Raleway";
}
.droplink {
  padding: 0.1rem;
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
</style>
 