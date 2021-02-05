<template>
  <div id="app">
    <sidebar />
      <autocomplete />
 <autocomplete-test />
     <categories />
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import Categories from './components/categories.vue'
import Autocomplete from './components/autocomplete.vue'
import AutocompleteTest from './components/autocomplete-test.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Sidebar,
    Categories,
    Autocomplete,
     AutocompleteTest
  }
}
</script>
