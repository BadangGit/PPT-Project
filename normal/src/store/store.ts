import { createStore } from "vuex";

const store = createStore({
  state: {
    activePageNum: 1,
    IsDarkMode: false,
  },
  mutations: {
    SHIFT_PAGE(state, value) {
      state.activePageNum = value;
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
