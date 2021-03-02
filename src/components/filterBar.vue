<template>
    <div>
        <div class="filterBar" v-for="item in filterCategory" :key="item">
            <h1>Filter</h1>
            <div>
                <div class="filter-category">
                    <h3> {{item.KFTargetArea}} </h3>
                    <span class="toggle">+</span>
                    <input type="checkbox" name="" id="">
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["filterData"],

    data: {
      ThematicList: new Set()
  },
  

    methods: {

    },

    computed: {

    },

    mounted() {
      this.filterCategory = this.filterData.forEach((item) => filterCategory.add(item.Label))
      return Array.from(this.filterCategory)
    }
}
</script>

<style lang="scss">
    .filterBar {
        border: solid 1px #000;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 50%;
        padding: 20px;
        text-align: left;
        width: 400px;     
    }

    .filter-category {
        margin-bottom: 20px;
        position: relative;
    }

    .toggle {
        position: absolute;
        top: 5px;
        right: 5px;
    }

</style>