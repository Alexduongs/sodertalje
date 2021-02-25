<template>
  <div>

    <sidebar />
    <autocomplete />
  </div>
</template>


<script>
import Sidebar from '../components/sidebar.vue'
import Autocomplete from '../components/autocomplete.vue'
//import { mapState, mapActions } from "vuex";

export default {
  props: ["Label","Type","Thematic"],
  computed: {
    Element() {
      return this.$store.state.Element;
    }
  },
   mounted() {
    this.$store.dispatch("getDocument");
  },
  /*methods: {
    ...mapActions("item", ["getDocuments"]),
  },*/
   components: {
    Sidebar,
    Autocomplete,
  },

};

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
