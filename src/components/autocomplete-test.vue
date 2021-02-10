<template>
  <div id="app">
    <div class="example">
      <vue-suggest
        class="asdad"
        pattern="\w+"
        :list="getList"
        :max-suggestions="20"
        :min-length="3"
        :debounce="200"
        :filter-by-query="true"
        :nullable-select="true"
        :mode="mode"
        ref="suggestComponent"
        placeholder="Sök..."
        @select="onSuggestSelect"
      >
        <!-- <Output /> -->
        <template slot="misc-item-above" slot-scope="{ suggestions, query }">
          <div class="misc-item">
            <span>Du har sökt på '{{ query }}'.</span>
          </div>
          <template v-if="suggestions.length > 0">
            <div class="misc-item">
              <span>{{ suggestions.length }} dokument hittades...</span>
            </div>
            <hr />
          </template>
          <div class="misc-item" v-else-if="!loading">
            <span>Inget resultat</span>
          </div>
        </template>
        <div
          slot="suggestion-item"
          slot-scope="scope"
          @click.stop="goto(scope.suggestion.URL)"
        >
          <div class="text">
            <span v-html="boldenSuggestion(scope)">
              {{ scope.suggestion.Label }}
            </span>
          </div>
          <br />
          <div class="info">
            <img v-bind:src="scope.suggestion.Image" width="180" height="180" />
            <span v-if="scope.suggestion.Globalgoals">
              {{ scope.suggestion.Globalgoals }}
            </span>
            <br />
            <span v-if="scope.suggestion.Established">
              Skapat {{ scope.suggestion.Established }}
            </span>
          </div>
        </div>
      </vue-suggest>
    </div>
  </div>
</template>

<script>
import VueSuggest from "vue-simple-suggest/lib";
import axios from "axios";

export default {
  components: {
    VueSuggest,
  },
  name: "app",
  data() {
    return {
      selected: null,
      loading: false,
    };
  },
  methods: {
    boldenSuggestion(scope) {
      if (!scope) return scope;

      const { suggestion, query } = scope;

      let result = this.$refs.suggestComponent.displayProperty(
        suggestion.Label
      );

      if (!query) return result;
     
     /*Show bold text*/
      const texts = query.split(/[\s-_/\\|.]/gm).filter((t) => !!t) || [""];
      return result.replace(
        new RegExp("(.*?)(" + texts.join("|") + ")(.*?)", "gi"),
        "$1<b>$2</b>$3"
      );
    },

    goto(url) {
      window.open(url, "_blank").focus();
    },
    onSuggestSelect(suggest) {
      this.selected = suggest;
    },
    getList() {
      return new Promise((resolve) => {
        axios
          .get("/data.json")
          .then((response) => (this.Elements = response.data.Elements))
          .then((json) => {
            let result = [];

            var jsonList = Object.entries(json);

            jsonList.forEach((part, j) => {
              part.forEach((el) => {
                if (!result[j]) {
                  result.push({
                    id: j + 1,
                  });
                }
                result[j] = el;
              });
            });
            resolve(result);
          });
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 800px;
  height: 792px;
  display: flex;

  .example {
    width: 506px;
    padding: 0 16px;
  }
  .vue-simple-suggest {
    .suggestions {
      width: 900px;
    }
    .suggest-item {
      position: relative;
      display: block;
      float: left;
      margin: 6px;
      width: 270px;
      height: 300px;
      background-color: #fff !important;
      border: solid 1px grey;

      &:hover {
        background-color: lightgrey !important;
      }
      .text {
        display: inline-block;
        line-height: 1;
        vertical-align: text-bottom;
        overflow: hidden;
        max-width: 72%;
        text-overflow: ellipsis;
        color: black;

        span {
          white-space: nowrap;
        }
      }
      .info {
        color: black;
        position: absolute;
        bottom: 0;
      }
    }
  }
}

</style>
