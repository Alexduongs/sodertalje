<template>
  <div>
    <div class="search">
      <h1>Söksida</h1>
    </div>
    <sidebar />
    <autocomplete />
    <div class="search">
      <h2>{{ this.$route.params.Label }}</h2>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Autocomplete from '../components/autocomplete.vue'

export default {
  name: 'Search',
  props: {
    item: Object,
  },

  components: {
    Sidebar,
    Autocomplete,
  },
  computed: {
    labels() {
      return this.$store.state.labels
    },
  },
  mounted() {
    this.$store.dispatch('getJsonData')
  },
}
</script>
