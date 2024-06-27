import { createStore } from "vuex";
import {
  projectCardContentsType,
  projectCardList,
} from "@/assets/data/projectCardData";

interface State {
  activePageNum: number;
  IsDarkMode: boolean;
  coins: projectCardContentsType[];
}

const store = createStore<State>({
  state: {
    activePageNum: 1,
    IsDarkMode: false,

    coins: projectCardList,
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
  getters: {
    getCoins: (state) => state.coins,
  },
});

export default store;
