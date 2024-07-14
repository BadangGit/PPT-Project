import { createStore } from "vuex";

const store = createStore({
  state: {
    activePageNum: 1,
    IsDarkMode: false,

    selectedItemNum: 0,
  },
  mutations: {
    SHIFT_PAGE(state, value) {
      state.activePageNum = value;
    },

    SHIFT_DARK_MODE(state, isTrue) {
      state.IsDarkMode = isTrue;
    },

    SELECT_ITEM(state, value) {
      state.selectedItemNum = value;
    },
  },
  actions: {
    shiftPage({ commit }, value) {
      commit("SHIFT_PAGE", value);
    },

    shiftDarkMode({ commit }, isTrue) {
      commit("SHIFT_DARK_MODE", isTrue);
    },

    selectItem({ commit }, value) {
      commit("SELECT_ITEM", value);
    },
  },
});

export default store;
