<template>
  <div id="app">

    <sidebar />
    <categories />

  </div>
</template>

<script>

import Sidebar from './components/sidebar.vue'
import Categories from './components/categories.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Categories
  }
}
</script>

<style lang="scss">
@import "./src/_variables.scss";
#app {
  $color: #232323;
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  margin-top: 60px;
}
</style>
