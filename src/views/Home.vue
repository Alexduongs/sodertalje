<template>
  <div id="home">
    <sidebar />
    <autocomplete />
    <categories />
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
};
</script>
<style lang="scss"></style>
