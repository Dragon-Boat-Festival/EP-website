import { createStore } from 'vuex'

export default createStore({
  state: {
    isData: false,
    srcollNum: 0,
    // 搜索框是否打开
    isDrawer: false,
  },
  mutations: {
    changeIsData(state) {
      state.isData = true
    },
    changeScroll(state, value) {
      state.srcollNum = value
    },
    openDrawer(state) {
      state.isDrawer = !state.isDrawer
    },
    changeDrawer(state, value) {
      state.isDrawer = value
    },
  },
  actions: {},
  modules: {},
})
