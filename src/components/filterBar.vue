<template>
    <div>
        <div class="filterBar" v-for="item in filterData" :key="item">
            <div>
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
    props: ["Elements"],

    data() {
        return {
            filterData: "Elements"
        }
    },


    methods: {
    },

    computed: {
        
    },

    mounted() {
        const filterData = new Set()
        this.Elements.forEach((item) => filterData.add(item))
        this.filterData = filterData    
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