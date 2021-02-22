<template>
  <div @click="goToSearch()" class="categories" >
    <router-link :to="{ name: 'Search', params: {Label:item.Label}}">
        <h2>   {{ item.Label}} </h2>
      </router-link>
    
  </div>
</template>

<script>
export default {
  name: "categories",
   props: {
   item: Object,
  },
  methods: {
    goToSearch: function () {
      this.$router.push('/search');
    }
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
