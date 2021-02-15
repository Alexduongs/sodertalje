<template>
 <div>
  <div class="search">
    <h1>Söksida</h1>
  </div> 
    <sidebar />
    <autocomplete />
    </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Sidebar,
    Autocomplete,
  },
};
</script>