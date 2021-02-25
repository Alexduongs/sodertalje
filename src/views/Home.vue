<template>
  <div id="home">
    <sidebar />
    <autocomplete />


    <categories
      v-for="item in Elements"
      :key="item.Label"
      :item="item"
    ></categories>
    
   <div v-for="item in infoOne" :key="item.Label" :item="item">
     <div v-if='item.Thematic === "DIGITALISERING"'>
     {{item.Thematic}}
     </div>
     </div>
</div>

</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";
import Categories from "../components/categories.vue";

export default {

  name: "Home",

  components: {
    Sidebar,
    Autocomplete,
    Categories,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    },
     infoOne: function () {
    return this.$store.state.Elements.filter(i => i.Thematic === i.Thematic)
  },
  },
  mounted() {
    this.$store.dispatch("getDocuments");
  },
};
</script>
<style lang="scss">
@import './src/_variables.scss';

.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>

