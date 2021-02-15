import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
//import { component } from 'vue/types/umd';


//Vue.use(AutoCompletePlugin);
//Vue.component('vue-simple-suggest', VueSimpleSuggest);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

