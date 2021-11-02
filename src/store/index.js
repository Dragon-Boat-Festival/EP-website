import {createStore} from 'vuex'

export default createStore({
  state: {
    isData: false,
    srcollNum: 0,
  },
  mutations: {
    changeIsData(state) {
       state.isData = true
    },
    changeScroll(state, value) {
      state.srcollNum = value
    },
  },
  actions: {},
  modules: {},
})
