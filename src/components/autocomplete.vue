<template>
    <div id="app">
    <ejs-autocomplete :dataSource='dataItem' :fields='dataFields'
      placeholder="Select a name" popupWidth="250px" 
      popupHeight="400px" :highlight="true"> 
      </ejs-autocomplete>
  </div>
</template>


<script>
//import axios from 'axios' 
import Vue from 'vue'
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
export default Vue.extend({
  name: 'app',
    data: function () {
    return {  
        dataItem: [ 
{
    authority: 'Miljönämnden',
    owner: 'Alex',
    type: 'Strategi',
    number: '1'
}, 
{
    authority: 'Samhällsbyggnad',
    owner: 'Katja',
    type: 'Handlingsplan',
    number: '2'
}],
        dataFields: { value: 'owner' }
      };
    }
});

</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>