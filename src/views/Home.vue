<template>
  <div id="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
    <sidebar />
    <autocomplete />

    <template v-for="item in jsonDataList">
      <categories :item="item" :key="item"></categories>
    </template>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Autocomplete from '../components/autocomplete.vue'
import Categories from '../components/categories.vue'

export default {
  name: 'Home',
  data() {
    return {
      jsonDataList: [],
    }
  },
  mounted() {
   this.$store.dispatch('getDocuments');
    },

  methods: {
    getDataItem: function() {
      fetch('data.json')
        .then((response) => response.json())
        .then((data) => (this.jsonDataList = data.Elements))
    },
  },
  beforeMount() {
    this.getDataItem()
  },
  components: {
    Sidebar,
    Autocomplete,
    Categories,
  },
}
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
    font-family: 'Montserrat', sans-serif;
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
