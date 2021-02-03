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
    Categories,
  }
}
</script>

<style lang="scss">
@import "_variables.scss";

body{
  padding: 0;
  margin: 0;
  background-color:gainsboro;
}
</style>
