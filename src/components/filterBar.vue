<template>
    <div>
        <div class="filterBar" v-for="item in filterCategory" :key="item">
            <h1>Filter</h1>
            <div>
                <h1 class="banan">Banan</h1>
                <div class="filter-category">
                    <h3> {{item.Label}} </h3>
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

    

    methods: {

    },

    computed: {

    },

    mounted() {
        console.log(this.filterData, 'filterData')
        const filterCategory = new Set()
        this.filterData.forEach((item) => filterCategory.add(item))
        console.log(filterCategory, 'filterCategory banan')
        return Array.from(filterCategory)
        //return filterCategory;
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
        //margin-left: 50%;
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