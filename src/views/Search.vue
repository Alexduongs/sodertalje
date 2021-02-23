<template>
  <div>
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
    this.$store.dispatch('getDocuments')
  },
  beforeMount() {
    this.getDataItem()
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
