<template>
  <div class="categories">
     <h2>Sök på kategori</h2>
   <div v-for="(Thematic, index) in ThematicList" :key="index">
  <router-link :to="{name: 'Search', params: {Thematic: Thematic }}">
  <h3>{{ Thematic }}</h3>
  </router-link>  
</div>
</div>
</template>

<script>
export default {
  props: ["item"],

  computed: {
    Elements() {
      return this.$store.state.Elements;
    },
     ThematicList () {
        const ThematicList = new Set();
        this.$store.state.Elements.forEach(item => ThematicList.add(item.Thematic));
        return Array.from(ThematicList); 
    }, 
  },
  mounted() {
    this.$store.dispatch("getDocuments");
  },
};

</script>

<style lang="scss" scoped>
.row {
  width: 50%;
  float: right;
}
.column {
  display: flex;
  justify-content: center;
  width: 300px;
}
/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 20px;
  width: 10vw;
  height: 10vh;
  text-align: center;
  background-color: #f1f1f1;
  justify-content: center;
}
</style>
