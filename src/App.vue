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
