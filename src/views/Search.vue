<template>
  <div>
    <sidebar />
    <autocomplete />
    <div class="hej" v-for="item in itemInfo" :key="item.Label" :item="item">
      <div v-if="item.Thematic === Thematic">
        <div class="section">
          <div class="img-container">
            <img v-bind:src="item.CoverImg" width="100" height="130" />
          </div>
          <div
            class="title"
            :style="[
              item.Status == 'Gällande'
                ? {background: '#87BDC9'}
                : item.Status == 'Remiss'
                ? {background: '#E9A15F'}
                : item.Status == 'Under framtagande'
                ? {background: '#5F8C9A'}
                : {background: '#C45941'},
            ]"
          >
            <span class="labelTitle">
              {{ item.Label }}
            </span>
            <div class="type">
              <span>{{ item.Documenttype }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'
import Autocomplete from '../components/autocomplete.vue'
//import Categories from '../components/categories.vue'

export default {
  props: ['Label', 'Type', 'Thematic'],
  components: {
    Sidebar,
    Autocomplete,
    //Categories,
  },
  computed: {
    itemInfo: function() {
      return this.$store.state.Elements.filter((i) => i.Thematic === i.Thematic)
    },
  },
  methods: {
    goto(url) {
      window.open(url, '_blank').focus()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './src/_variables.scss';

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
.labelTitle{
  padding: 10px;

}
</style>
