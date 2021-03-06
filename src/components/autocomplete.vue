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
        @select="onSuggestSelect"
      >
        <!-- <input /> -->
        <div class="search__container">
          <input
            class="search__input"
            type="text"
            onfocus="this.value=''"
            placeholder="Sök på styrdokument, nyckelord, datum..."
          />
        </div>
        <!-- <output /> -->
        <template slot="misc-item-above" slot-scope="{suggestions, query}">
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
        <div slot="suggestion-item" slot-scope="scope" @click.stop="goto(scope.suggestion.URL)">
          <div class="img-container">
            <img v-bind:src="scope.suggestion.CoverImg" width="100" height="130" />
          </div>
          <div class="type">
            <span>{{ scope.suggestion.Documenttype }} </span>
          </div>
          <img class="quickview" src="/images/quickview.png" />
          <div
            class="title"
            :style="[
              scope.suggestion.Status == 'Gällande'
                ? {background: '#87BDC9'}
                : scope.suggestion.Status == 'Remiss'
                ? {background: '#E9A15F'}
                : scope.suggestion.Status == 'Under framtagande'
                ? {background: '#5F8C9A'}
                : {background: '#C45941'},
            ]"
          >
            <span v-html="boldenSuggestion(scope)">
              {{ scope.suggestion.Label }}
            </span>
          </div>
        </div>
      </vue-suggest>
    </div>
  </div>
</template>

<script>
import VueSuggest from 'vue-simple-suggest/lib'
import axios from 'axios'

export default {
  components: {
    VueSuggest,
  },
  name: 'app',
  data() {
    return {
      selected: null,
      loading: false,
    }
  },
  methods: {
    boldenSuggestion(scope) {
      if (!scope) return scope

      const {suggestion, query} = scope

      let result = this.$refs.suggestComponent.displayProperty(suggestion.Label)

      if (!query) return result

      /*Show bold text*/
      const texts = query.split(/[\s-_/\\|.]/gm).filter((t) => !!t) || ['']
      return result.replace(
        new RegExp('(.*?)(' + texts.join('|') + ')(.*?)', 'gi'),
        '$1<b>$2</b>$3'
      )
    },
    goto(url) {
      window.open(url, '_blank').focus()
    },
    onSuggestSelect(suggest) {
      this.selected = suggest
    },
    getList() {
      return new Promise((resolve) => {
        axios
          .get('/data.json')
          .then((response) => (this.Elements = response.data.Elements))
          .then((json) => {
            let result = []

            var jsonList = Object.entries(json)

            jsonList.forEach((part, j) => {
              part.forEach((el) => {
                if (!result[j]) {
                  result.push({
                    id: j + 1,
                  })
                }
                result[j] = el
              })
            })

            resolve(result)
          })
      })
    },
  },
}
</script>

<style lang="scss">
@import './src/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $fontType;
  color: #2c3e50;
  width: 100vh;
  height: 30vh;
  display: flex;
  margin: 0 auto;

  .example {
    width: 100vw;
  }
  .vue-simple-suggest {
    width: $responsivewidth;
    margin-left: 17%;

    .suggestions {
      width: $responsivewidth;
    }
    .suggest-item {
      position: relative;
      display: table;
      float: left;
      margin: 10px;
      width: 210px;
      height: 220px;
      background-color: #faf9f9 !important;
      border: solid 1px lightgrey;
      padding: 10px 0 0 0;
      border-radius: 0px 0px 10px 10px;
      margin-top: 30px;

      &:hover {
        background-color: #fff !important;
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
      .quickview {
        position: absolute;
        display: flex;
        width: 20px;
        height: 20px;
        top: -10px;
        right: 10px;
        border: none;
      }

      .title {
        display: table-cell;
        width: 210px;
        height: 50px;
        color: #fff;
        padding-left: 15px;
        font-family: $fontType;
        font-size: 14px;
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
    }
  }

  body {
    margin: 0 auto;
    font-family: $fontType;
  }

  .search {
    &__container {
      padding-top: 10vh;
      width: $responsivewidth;
    }

    &__input {
      padding: 12px 24px;
      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;
      color: $darkgrey;
      background-color: transparent;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 29px 29px;
      background-position: 95% center;
      border-radius: 15px;
      border: 1px solid $darkgrey;
      transition: all 250ms ease-in-out;
      border-color: #e6eff6;

      &::placeholder {
        color: color($darkgrey a(0.8));
        letter-spacing: 1px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #e6eff6;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }
}
</style>
