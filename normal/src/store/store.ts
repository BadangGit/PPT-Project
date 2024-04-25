import { createStore } from "vuex";

const store = createStore({
  state: {
    activePageNum: 1,
    IsDarkMode: false,

    background_color: ["#f1c5e6", "#becde7"],
  },
  mutations: {
    SHIFT_PAGE(state, value) {
      state.activePageNum = value;
    },

    SHIFT_DARK_MODE(state, isTrue) {
      state.IsDarkMode = isTrue;
    },

    SHIFT_BACKGROUND_COLOR(state, color) {
      state.background_color[0] = color[0];
      state.background_color[1] = color[1];
    },
  },
  actions: {
    shiftPage({ commit }, value) {
      commit("SHIFT_PAGE", value);
    },

    shiftDarkMode({ commit }, isTrue) {
      commit("SHIFT_DARK_MODE", isTrue);
    },

    shiftBackgroundColor({ commit }, color) {
      commit("SHIFT_BACKGROUND_COLOR", color);
    },
  },
});

export default store;
