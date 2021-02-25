<template>
  <div id="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
    <sidebar />
    <autocomplete />

    <categories
      v-for="item in Elements"
      :key="item.Label"
      :item="item"
    ></categories>
    
   <div v-for="item in infoOne" :key="item.Label" :item="item">
     <div v-if='item.Thematic === "DIGITALISERING"'>
     {{item.Thematic}}
     </div>
     </div>
</div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";
import Categories from "../components/categories.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    Autocomplete,
    Categories,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    },
     infoOne: function () {
    return this.$store.state.Elements.filter(i => i.Thematic === i.Thematic)
  },
  },
  mounted() {
    this.$store.dispatch("getDocuments");
  },
};
</script>
<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>

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
