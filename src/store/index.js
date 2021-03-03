import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

export default Vuex.createStore({
  state,
  getters,
  mutations,
  actions,
});
