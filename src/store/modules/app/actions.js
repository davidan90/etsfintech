import { SHOW_ASIDE, HIDE_ASIDE } from "./mutation-types";

export default {
  showAside({ commit }) {
    commit(SHOW_ASIDE);
  },
  hideAside({ commit }) {
    commit(HIDE_ASIDE);
  }
};
