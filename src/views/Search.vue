<template>
  <div>
    <div class="search" v-if = "Element">
      <h1>{{ Label }}{{ Thematic }}</h1>
      {{ Year }}  
      
    </div>
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
