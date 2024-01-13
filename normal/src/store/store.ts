import { createStore } from "vuex";

const store = createStore({
  state: {
    nowPageNum: 1,
  },
  mutations: {
    SHIFT_PAGE(state, value) {
      state.nowPageNum = value;
    },
  },
  actions: {
    shiftPage({ commit }, value) {
      commit("SHIFT_PAGE", value);
    },
  },
});

export default store;
