<template>
<body>
  <div class="row">
    <div class="card" id="hej">
            <button @click='getDataItem'>Get Data</button>
      <div v-for="dataItem in jsonDataList" :key='dataItem'>
          <div class="card">{{ dataItem.Type }}</div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      jsonDataList: [],

    };
  },
  methods: {
    getDataItem() {
      fetch("data.json")
        .then(response => response.json())
        .then(data => (this.jsonDataList = data.Elements));
    }
  }
};
</script>



<style lang="scss" scoped>
@import "./src/_variables.scss";


* {
  box-sizing: border-box;

}

body{
  display: flex;
  justify-content: flex-end;
}

.column {
  width: 100%;
  display: flex;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>

