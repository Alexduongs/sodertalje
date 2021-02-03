import Vue from 'vue'
import App from './App.vue'
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);


new Vue({
  render: h => h(App),
}).$mount('#app')

