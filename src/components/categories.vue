<template>
  <div class="wrapper">
    <div class="categories" v-for="(Thematic, index) in ThematicList" :key="index">
      <router-link class="link" :to="{name: 'Search', params: {Thematic: Thematic}}">
        <p class="each">{{ Thematic }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    Elements() {
      return this.$store.state.Elements
    },
    ThematicList() {
      const ThematicList = new Set()
      this.$store.state.Elements.forEach((item) => ThematicList.add(item.Thematic))
      return Array.from(ThematicList)
    },
  },
  mounted() {
    this.$store.dispatch('getDocuments')
  },
}
</script>

<style lang="scss" scoped>
@import './src/_variables.scss';

.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  margin-left: 20%;
}
.categories {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 120px;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 10%;
  margin: 20px;
}
.each {
  font-size: 11px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.link {
  text-decoration: none;
  text-align: center;
  word-wrap: break-word;
  text-transform: capitalize; 
}
</style>
