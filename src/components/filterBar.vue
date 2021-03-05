<template>
    <div>
        <h1>banan </h1>
        <div class="filterBar" >
            <div>
                <div class="filter-category">
                    <h3> Tematiskt område </h3>
                    <span class="toggle">+</span>
                    <div v-for="item in getThematic" :key="item">
                        <div>
                            <p>{{ item }}</p>
                            <input type="checkbox" name="" id="">
                        </div>
                    </div>
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
            filterData: [],
            thematicLabel: []
        }
    },


    methods: {
    },

    computed: {
       getThematic() {
            const thematicLabel = new Set()
            this.filterData.forEach((item) => thematicLabel.add(item.Thematic))
            console.log(thematicLabel, 'thematicLabel')
            return thematicLabel
        },

        banan() {
            return 'hello'
        }
    },

    mounted() {
        const filterData = new Set()
        this.Elements.forEach((item) => filterData.add(item))
        console.log(this.Elements)
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