<template>
  <div id="lapp">
    <div class="example">
      <vue-suggest class="asdad" pattern="\w+"
        :list="getList"
        :max-suggestions="10"
        :min-length="3"
        :debounce="200"
        :filter-by-query="true"
        :nullable-select="true"
          :controls="{
          selectionUp: [38, 33],
          selectionDown: [40, 34],
          select: [13, 36],
          showList: [40],
          hideList: [27, 35]
        }"
        :mode="mode"
        ref="suggestComponent"
        placeholder="Sök..."
        value-attribute= "Label"
        display-attribute= "Label"
        @select="onSuggestSelect">
      
        <!-- <test-input placeholder="Search information..." /> -->
        <template slot="misc-item-above" slot-scope="{ suggestions, query }">
          <div class="misc-item">
            <span>Du sökte på '{{ query }}'.</span>
          </div>
          <template v-if="suggestions.length > 0">
            <div class="misc-item">
              <span>{{ suggestions.length }} dokument hittades...</span>
            </div>
            <hr>
          </template>
          <div class="misc-item" v-else-if="!loading">
            <span>Inget resultat</span>
          </div>
        </template>
        <div slot="suggestion-item" slot-scope="scope" @click.stop="goto(scope.suggestion.URL)">
          <div class="text">
            <span v-html="boldenSuggestion(scope)"> {{ scope.suggestion.Label }} </span>
          </div><br/> 
           <div class="info"> 
            <span v-if="scope.suggestion.Globalgoals"> {{ scope.suggestion.Globalgoals }} </span> <br/>
           <span v-if="scope.suggestion.Established"> Skapat {{ scope.suggestion.Established }} </span>
            </div>      
        </div> 
      </vue-suggest>
   
    </div>
  </div>
</template>

<script>
  import VueSuggest from 'vue-simple-suggest/lib'
  import axios from 'axios' 

  //import TestInput from './TestInput'

  export default {
    components: {
      VueSuggest,
      //TestInput
    },
    name: 'app',
    data () {
      return {
        selected: null,
        loading: false,
      }
    },
    methods: {
      
      boldenSuggestion(scope) {
        if (!scope) return scope;

        const { suggestion, query } = scope;

        let result = this.$refs.suggestComponent.displayProperty(suggestion.Label);
        

        if (!query) return result;
        const texts = query.split(/[\s-_/\\|.]/gm).filter(t => !!t) || [''];
        return result.replace(new RegExp('(.*?)(' + texts.join('|') + ')(.*?)','gi'), '$1<b>$2</b>$3');
      },
      
      goto (url) {
        window.open(url, '_blank').focus()
      },
      onSuggestSelect (suggest) {
        this.selected = suggest
      },
      getList () {
          
        return new Promise((resolve) => {

           axios
      .get('/data.json')
      .then(response => (this.Elements = response.data.Elements)).then(json => {

             let result = []
   
             var jsonn = Object.entries(json);
             
              jsonn.forEach((part, j) => {                                
         
                part.forEach((el) => {
                  if (!result[j]) {
                    result.push({
                      id: j+1
                    })                
                  }     
                  result[j] = el            
                })
              })
              resolve(result)
            })
          })
        },
      }
    }  
</script>

<style scoped>
.asdad{
  margin: 20px;
}
  #lapp {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  #lapp .log-container .title {
    position: sticky;
  }

  #lapp .example {
    width: 506px;
  }


  #lapp pre.selected {
    margin: 8px 0;
    height: 295px;
    overflow-x: scroll;
    overflow-y: scroll;
    border: 1px solid #cde;
    border-radius: 4px;
  }

  #lapp .v-model-event {
    background-color: white;
    border: 1px solid #cde;
    border-radius: 4px;
  }

  #lapp .v-model-event.selected {
    color: red;
  }

  #app .v-model-event:hover {
    border: 1px solid grey;
    background-color: #28d5af!important;
    color: white;
  }

  #lapp .vue-simple-suggest .suggest-item .text {
    display: inline-block;
    line-height: 1;
    vertical-align: text-bottom;
    overflow: hidden;
    max-width: 72%;
    text-overflow: ellipsis;
  }

  #lapp .vue-simple-suggest .suggest-item .text span {
    white-space: nowrap;
  }

  .vue-simple-suggest-enter-active.suggestions,
  .vue-simple-suggest-leave-active.suggestions {
    transition: opacity .2s;
  }

  .vue-simple-suggest-enter.suggestions,
  .vue-simple-suggest-leave-to.suggestions {
    opacity: 0 !important;
  }
  
.vue-simple-suggest.designed .suggestions {
    width: 900px;
  }

 #app .vue-simple-suggest .suggest-item {
    position: relative;
    display: block;
    float: left;
    margin: 6px;
    width: 270px;
    height: 300px;
    border: solid 1px grey;
  }

 #app .vue-simple-suggest .suggest-item:hover {
    background-color: red!important;
  }

  #app .vue-simple-suggest .suggest-item.selected {
    background-color: green!important;
  }

   #app .vue-simple-suggest .info {
    position: absolute;
    bottom:0;
  }

</style>
