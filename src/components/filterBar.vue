<template>
    <div>
        <h1></h1>
        <div class="filterBar" >
            <div>
                <div class="filter-category">
                    <h3> Tematiskt område </h3>
                   
                    <button class="toggle" v-on:click="isActive = !isActive">+</button>
                     <div class="filter" v-if="isActive">
                    <div v-for="Thematic in filterThematic" :key="Thematic">
                        <div>
                            <p>{{ Thematic}}</p>
                            <input type="checkbox" name="" id="">
                        </div>
                    </div>
                    </div>
                </div>
                   <div class="filter-category">
                    <h3> Dokumenttyp </h3>
                      <span class="toggle" v-on:click="this.isActive = !this.isActive">+</span>
                       <div class="filter" v-if="this.isActive">
                    <div v-for="(Documenttype) in filterDocumenttype" :key="Documenttype">
                         <div class="filter">
                            <p>{{ Documenttype }}</p>
                            <input type="checkbox" name="" id="">
                        </div>
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
    isActive: false
     }
  },

    methods: {

      },

    computed: {
  
    filterThematic() {     
      const filterThematic = new Set() 
      this.$store.state.Elements.forEach((item) =>  filterThematic.add(item.Thematic))
      return Array.from(filterThematic)
    },
     filterDocumenttype() {     
      const filterDocumenttype = new Set() 
      this.$store.state.Elements.forEach((item) =>  filterDocumenttype.add(item.Documenttype))
      return Array.from(filterDocumenttype)
    },
           
        banan() {      
            return 'hello'
        }
    },
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