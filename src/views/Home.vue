@@ -1,41 +1,32 @@
<template>
  <div id="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
    <sidebar />
    <autocomplete />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Sidebar,
    Autocomplete,
  },
};
</script>

<style lang="scss">

#nav {
  padding: 30px;

  body {
    padding: 0;
    margin: 0;
    background-color: #fbf7f5;
    font-family: "Montserrat", sans-serif;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
