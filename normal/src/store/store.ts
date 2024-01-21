import { createStore } from "vuex";

const store = createStore({
  state: {
    nowPageNum: 1,
    IsDarkMode: false,
  },
  mutations: {
    SHIFT_PAGE(state, value) {
      state.nowPageNum = value;
    },

    SHIFT_DARK_MODE(state, isTrue) {
      state.IsDarkMode = isTrue;
    },
  },
  actions: {
    shiftPage({ commit }, value) {
      commit("SHIFT_PAGE", value);
    },

    shiftDarkMode({ commit }, isTrue) {
      commit("SHIFT_DARK_MODE", isTrue);
    },
  },
});

export default store;
