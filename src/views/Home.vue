<template>
  <div id="home">
    <sidebar />
    <autocomplete />

<<<<<<< Updated upstream

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

=======
    <categories v-for="(Thematic, index) in makes" :key="index"></categories>
 Tematsiktområden

<div v-for="(Thematic, index) in makes" :key="index">
  <router-link :to="{name: 'Search', params: {Thematic: Thematic }}">
  <button><p>{{ Thematic }}</p></button>
  </router-link>  

</div>
  </div>
>>>>>>> Stashed changes
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";
//import Categories from "../components/categories.vue";

export default {

  name: "Home",

  components: {
    Sidebar,
    Autocomplete,
    //Categories,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    },
     makes() {
        const makes = new Set();
        this.$store.state.Elements.forEach(item => makes.add(item.Thematic));
        return Array.from(makes); 
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

