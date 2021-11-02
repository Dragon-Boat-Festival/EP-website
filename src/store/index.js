import {createStore} from 'vuex'

export default createStore({
    state: {
        isData: false,
    },
    mutations: {
        changeIsData(state) {
            state.isData = true
        },
    },
    actions: {},
    modules: {},
})
