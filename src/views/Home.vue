<template>
  <div id="home">
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
    this.$store.dispatch('getDocuments')
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
<style lang="scss">
@import './src/_variables.scss';

.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
