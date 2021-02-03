<template>
  <div id="app">
    <sidebar />
      <autocomplete />
    <categories />
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import Categories from './components/categories.vue'
import Autocomplete from './components/autocomplete.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Sidebar,
    Categories,
    Autocomplete
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
