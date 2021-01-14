<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">Nuxt Blog</nuxt-link>
    <nav>
      <nuxt-link to="/">Post</nuxt-link>
      <nuxt-link v-if="$auth && $auth.user && $auth.loggedIn" to="/mypost"
        >MyPost</nuxt-link
      >
      <nuxt-link v-if="$auth && $auth.user && $auth.loggedIn" to="/auth/logout"
        >Logout</nuxt-link
      >
      <nuxt-link
        v-if="!$auth || !$auth.user || !$auth.loggedIn"
        to="/auth/login"
        >Login</nuxt-link
      >
      <nuxt-link
        v-if="!$auth || !$auth.user || !$auth.loggedIn"
        to="/auth/signup"
        >Signup</nuxt-link
      >
    </nav>
  </div>
</template>
<script>
// import vuex for user store value
import { mapGetters } from "vuex";
export default {
  // computed: {
  //   // get user login status
  //   ...mapGetters("login", ["isLoggedIn"])
  // },
  // methods: {
  //   logOut() {
  //     this.$auth.logout();
  //   }
  // }
};
</script>
<style scoped>
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
