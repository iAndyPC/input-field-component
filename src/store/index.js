import {createStore} from "vuex";

export default createStore({
  actions: {

  },
  mutations: {
    changeInputLength(state, num) {
      state.inputLength = num;
    },
    changeLimitReached(state, boolean) {
      state.limitReached = boolean;
    },
  },
  state: {
    inputLength: 0,
    limitReached: false,
  }
})
