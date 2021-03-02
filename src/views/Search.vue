<template>
  <div>
    <sidebar />
    <autocomplete />
    <doclist :doclist="doclist" />
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Autocomplete from "../components/autocomplete.vue";
import Doclist from "../components/doclist.vue";

export default {
  data() {
    return {
      doclist: [],
    };
  },
  components: {
    Sidebar,
    Autocomplete,
    Doclist,
  },
  computed: {
    Elements() {
      return this.$store.state.Elements;
    },
  },
  mounted() {
    this.$store.dispatch("getDocuments");
     this.filteredList();
  },
  
  methods: {
    goto(url) {
      window.open(url, "_blank").focus();
    },
    filteredList() {
      this.doclist = this.$store.state.Elements.filter(
        (i) => i.Thematic === i.Thematic
      );
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
  position: relative;
  display: table;
  float: left;
  margin: 10px;
  width: 200px;
  height: 190px;
  background-color: #faf9f9 !important;
  border: solid 1px lightgrey;
  padding: 10px 0 0 0;
  border-radius: 0px 0px 10px 10px;
  margin-top: 30px;
  margin-left: 3%;

  &:hover {
    background-color: #fff !important;
  }
}
.type {
  position: absolute;
  width: 50%;
  height: 25px;
  background: #bebdb9;
  color: #fff;
  font-family: $fontType;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
  border-radius: 0px 0px 10px 0px;
  top: 0;
}
.type span {
  display: inline-block;
  color: #fff;
  font-family: $fontType;
  font-size: 10px;
  font-weight: bold;
  margin: 5px auto;
}
.title {
  height: 50px;
  color: #fff;
  font-family: $fontType;
  font-size: 12px;
  font-weight: bold;
  align-self: center;
  vertical-align: middle;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.img-container {
  text-align: center;
  margin: 30px;
}
img {
  display: inline-block;
  border: solid 1px lightgrey;
  margin-top: 20px;
  margin-bottom: -20px;
}
.hej {
  width: 100%;
  margin-left: 15%;
}
.labelTitle {
  padding: 10px;
}
</style>
