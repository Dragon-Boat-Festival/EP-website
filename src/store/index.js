import { createStore } from 'vuex'

export default createStore({
  state: {
    isData: false,
    // 首页记载滚动高度
    srcollNum: 0,
    // 新闻页面记载滚动高度
    newsViewNum: 1,
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
    changeNewsScroll(state, value) {
      state.newsViewNum = value
      console.log(state.newsViewNum)
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
