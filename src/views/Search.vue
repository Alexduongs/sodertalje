<template>
  <div>
    <sidebar />
    <autocomplete />
    <div v-for="item in itemInfo" :key="item.Label" :item="item">
      <div v-if="item.Thematic === Thematic">
        <div class="section">
          <h5 class="titel">{{ item.Label }}</h5>
          <p class="description">{{ item.Description }}</p>
          <div class="img-container">
            <img v-bind:src="item.CoverImg" width="200" height="260" />
          </div>
          <button class="pdfbtn" @click="goto(item.URL)">PDF</button>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";
//import Categories from '../components/categories.vue'

export default {
  props: ["Label", "Type", "Thematic"],
  components: {
    Sidebar,
    Autocomplete,
    //Categories,
  },
  computed: {
    itemInfo: function() {
      return this.$store.state.Elements.filter(
        (i) => i.Thematic === i.Thematic
      );
    },
  },
  methods: {
    goto(url) {
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/_variables.scss";

body {
  margin: 0;
  padding: 0;
}
.section {
  display: block;
}
.titel {
  width: 200px;
  height: 200px;
}
.description {
  padding: 20px;
  text-align: left;
  font-size: 1px;
  font-weight: bold;
}

.pdfbtn {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  width: 20%;
}
</style>
